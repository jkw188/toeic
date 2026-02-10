import React, { useState } from 'react';
import { QuizQuestion } from '../types';
import { CheckCircle2, XCircle, HelpCircle, ChevronRight } from 'lucide-react';

interface QuizSectionProps {
  questions: QuizQuestion[];
}

export const QuizSection: React.FC<QuizSectionProps> = ({ questions }) => {
  // State to track selected option for each question: { [questionId]: optionId }
  const [selections, setSelections] = useState<Record<string, string>>({});

  const handleSelect = (questionId: string, optionId: string) => {
    // Prevent changing answer after selection (optional logic, kept simple here)
    if (selections[questionId]) return;
    
    setSelections(prev => ({
      ...prev,
      [questionId]: optionId
    }));
  };

  return (
    <div className="space-y-6">
      {questions.map((q, index) => {
        const selectedOption = selections[q.id];
        const isAnswered = !!selectedOption;
        const isCorrect = selectedOption === q.correctOptionId;

        return (
          <div key={q.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="p-6">
              <h3 className="text-lg font-medium text-slate-900 mb-4 flex">
                <span className="mr-3 text-slate-400 font-bold">Q{index + 1}.</span>
                {q.question}
              </h3>

              <div className="space-y-3">
                {q.options.map((opt) => {
                  let buttonStyle = "border-slate-200 hover:bg-slate-50 hover:border-indigo-200";
                  let icon = <div className="w-5 h-5 rounded-full border-2 border-slate-300 mr-3" />;
                  
                  if (isAnswered) {
                    if (opt.id === q.correctOptionId) {
                      buttonStyle = "bg-green-50 border-green-500 ring-1 ring-green-500";
                      icon = <CheckCircle2 className="w-5 h-5 text-green-600 mr-3" />;
                    } else if (opt.id === selectedOption) {
                      buttonStyle = "bg-red-50 border-red-500";
                      icon = <XCircle className="w-5 h-5 text-red-500 mr-3" />;
                    } else {
                      buttonStyle = "opacity-50 border-slate-100";
                    }
                  } else {
                    // Default interactive state
                    buttonStyle = "cursor-pointer border-slate-200 hover:border-indigo-400 active:bg-indigo-50";
                  }

                  return (
                    <button
                      key={opt.id}
                      onClick={() => handleSelect(q.id, opt.id)}
                      disabled={isAnswered}
                      className={`w-full flex items-center text-left p-3 rounded-lg border-2 transition-all duration-200 ${buttonStyle}`}
                    >
                      {icon}
                      <span className={`flex-grow font-medium ${isAnswered && opt.id === q.correctOptionId ? 'text-green-800' : 'text-slate-700'}`}>
                        {opt.text}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Explanation Section - Reveals after answering */}
            {isAnswered && (
              <div className={`px-6 py-4 bg-slate-50 border-t ${isCorrect ? 'border-green-100' : 'border-slate-100'}`}>
                <div className="flex items-start space-x-3">
                   <div className="mt-0.5">
                      <HelpCircle className="w-5 h-5 text-indigo-500" />
                   </div>
                   <div>
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Explanation</p>
                      <p className="text-slate-700 text-sm leading-relaxed">
                        {q.explanation}
                      </p>
                   </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
