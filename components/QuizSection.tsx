import React, { useState, useMemo } from "react";
import { QuizQuestion, QuizGroup } from "../types";
import { CheckCircle2, XCircle, HelpCircle, FileText } from "lucide-react";

interface QuizSectionProps {
  standaloneQuestions?: QuizQuestion[];
  groupedQuestions?: QuizGroup[];
}

type QuizItem =
  | { type: "standalone"; data: QuizQuestion }
  | { type: "group"; data: QuizGroup };

// Helper to render markdown safely
const renderMarkdown = (text: string) => {
  // @ts-ignore
  const html = window.marked ? window.marked.parse(text) : text;
  return { __html: html };
};

  const shuffleArray = <T,>(array: T[]): T[] => {
    const newArray = [...array]; // Create a copy to avoid mutating original data
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

// Extracted Component for performance and cleanliness
const QuestionCard: React.FC<{
  question: QuizQuestion;
  index: number;
  selectedOptionId?: string;
  onSelect: (qId: string, oId: string) => void;
}> = ({ question, index, selectedOptionId, onSelect }) => {
  const isAnswered = !!selectedOptionId;
  const isCorrect = selectedOptionId === question.correctOptionId;

  // ✅ ADDED: Memoize the shuffled options
  // This ensures they are randomized ONCE per question, not on every re-render.
  const shuffledOptions = useMemo(() => {
    return shuffleArray(question.options);
  }, [question.id, question.options]); // Dependencies ensure we only reshuffle if data changes

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
      <div className="p-6">
        <h3 className="text-lg font-medium text-slate-900 mb-4 flex items-start">
          <span className="mr-3 text-slate-400 font-bold flex-shrink-0">
            Q{index}.
          </span>
          <span className="leading-snug">{question.question}</span>
        </h3>

        <div className="space-y-3">
          {/* ✅ CHANGED: Map over shuffledOptions instead of question.options */}
          {shuffledOptions.map((opt) => {
            let buttonStyle =
              "border-slate-200 hover:bg-slate-50 hover:border-indigo-200";
            let icon = (
              <div className="w-5 h-5 rounded-full border-2 border-slate-300 mr-3 flex-shrink-0" />
            );

            // ... (The rest of your logic remains exactly the same) ...

            if (isAnswered) {
              if (opt.id === question.correctOptionId) {
                buttonStyle =
                  "bg-green-50 border-green-500 ring-1 ring-green-500";
                icon = (
                  <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                );
              } else if (opt.id === selectedOptionId) {
                buttonStyle = "bg-red-50 border-red-500";
                icon = (
                  <XCircle className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" />
                );
              } else {
                buttonStyle = "opacity-50 border-slate-100";
              }
            } else {
              buttonStyle =
                "cursor-pointer border-slate-200 hover:border-indigo-400 active:bg-indigo-50";
            }

            return (
              <button
                key={opt.id}
                onClick={() => onSelect(question.id, opt.id)}
                disabled={isAnswered}
                className={`w-full flex items-center text-left p-3 rounded-lg border-2 transition-all duration-200 ${buttonStyle}`}
              >
                {icon}
                <span
                  className={`flex-grow font-medium ${
                    isAnswered && opt.id === question.correctOptionId
                      ? "text-green-800"
                      : "text-slate-700"
                  }`}
                >
                  {opt.text}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Explanation Section (unchanged) */}
      {isAnswered && (
        <div
          className={`px-6 py-4 bg-slate-50 border-t ${
            isCorrect ? "border-green-100" : "border-slate-100"
          } mt-auto`}
        >
          <div className="flex items-start space-x-3">
            <div className="mt-0.5">
              <HelpCircle className="w-5 h-5 text-indigo-500" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                Explanation
              </p>
              <p className="text-slate-700 text-sm leading-relaxed">
                {question.explanation}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export const QuizSection: React.FC<QuizSectionProps> = ({
  standaloneQuestions = [],
  groupedQuestions = [],
}) => {
  const [selections, setSelections] = useState<Record<string, string>>({});

  const handleSelect = (questionId: string, optionId: string) => {
    if (selections[questionId]) return;
    setSelections((prev) => ({ ...prev, [questionId]: optionId }));
  };

  // Combine and sort all items by ID
  const sortedItems = useMemo(() => {
    const items: QuizItem[] = [
      ...standaloneQuestions.map((q) => ({
        type: "standalone" as const,
        data: q,
      })),
      ...groupedQuestions.map((g) => ({ type: "group" as const, data: g })),
    ];

    return items.sort((a, b) =>
      a.data.id.localeCompare(b.data.id, undefined, {
        numeric: true,
        sensitivity: "base",
      }),
    );
  }, [standaloneQuestions, groupedQuestions]);

  let questionCounter = 0;

  return (
    <div className="space-y-12">
      {sortedItems.map((item) => {
        if (item.type === "standalone") {
          questionCounter++;
          const q = item.data;
          return (
            <div
              key={q.id}
              className="animate-in fade-in slide-in-from-bottom-4 duration-500"
            >
              <QuestionCard
                question={q}
                index={questionCounter}
                selectedOptionId={selections[q.id]}
                onSelect={handleSelect}
              />
            </div>
          );
        } else {
          const group = item.data;
          // Sort questions within the group
          const sortedGroupQuestions = [...group.questions].sort((a, b) =>
            a.id.localeCompare(b.id, undefined, {
              numeric: true,
              sensitivity: "base",
            }),
          );

          const startNum = questionCounter + 1;
          const endNum = questionCounter + sortedGroupQuestions.length;

          return (
            <div
              key={group.id}
              className="animate-in fade-in slide-in-from-bottom-4 duration-500 border-t border-slate-200 pt-8 first:border-0 first:pt-0"
            >
              <div className="flex items-center space-x-2 mb-6">
                <FileText className="w-5 h-5 text-indigo-600" />
                <h3 className="font-bold text-slate-800 uppercase tracking-wider text-sm">
                  Reading Set (Questions {startNum}-{endNum})
                </h3>
              </div>

              <div className="flex flex-col lg:flex-row gap-8 items-start">
                {/* Passage Side - Sticky */}
                <div className="lg:w-1/2 sticky top-24 self-start">
                  <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl max-h-[calc(100vh-8rem)] overflow-y-auto custom-scrollbar">
                    <div
                      className="markdown-body prose prose-slate max-w-none prose-p:text-slate-700 prose-headings:text-slate-800 [&_strong]:text-indigo-600 [&_strong]:bg-indigo-50 [&_strong]:px-1.5 [&_strong]:py-0.5 [&_strong]:rounded"
                      dangerouslySetInnerHTML={renderMarkdown(group.passage)}
                    />
                  </div>
                </div>

                {/* Questions Side */}
                <div className="lg:w-1/2 space-y-6 w-full">
                  {sortedGroupQuestions.map((q) => {
                    questionCounter++;
                    return (
                      <QuestionCard
                        key={q.id}
                        question={q}
                        index={questionCounter}
                        selectedOptionId={selections[q.id]}
                        onSelect={handleSelect}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          );
        }
      })}

      {sortedItems.length === 0 && (
        <div className="text-center py-12 text-slate-500">
          No exercises available for this lesson.
        </div>
      )}
    </div>
  );
};
