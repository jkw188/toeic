import React, { useState } from 'react';
import { CheckCircle, XCircle, HelpCircle, PenTool } from 'lucide-react';
import { Question } from '../types';

interface QuizProps {
  questions: Question[];
}

const QuestionItem: React.FC<{ question: Question; index: number }> = ({ question, index }) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const isAnswered = selectedOption !== null;
  const isCorrect = selectedOption === question.correctAnswerIndex;

  const getOptionStyle = (optIndex: number) => {
    const baseStyle = "w-full text-left p-4 rounded-xl border-2 transition-all flex justify-between items-center mb-3 relative overflow-hidden group ";
    
    if (!isAnswered) {
      return baseStyle + "bg-white border-slate-100 hover:border-brand-200 hover:bg-slate-50";
    }

    if (optIndex === question.correctAnswerIndex) {
      return baseStyle + "bg-green-50 border-green-500 text-green-900";
    }

    if (optIndex === selectedOption) {
      return baseStyle + "bg-red-50 border-red-500 text-red-900";
    }

    return baseStyle + "bg-slate-50 border-transparent text-slate-400 opacity-50";
  };

  return (
    <div className="mb-8 bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200">
      <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-6 flex items-start gap-3">
        <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-lg bg-brand-100 text-brand-700 text-sm font-bold mt-0.5">
          {index + 1}
        </span>
        <span className="leading-relaxed">{question.questionText}</span>
      </h3>

      <div className="space-y-2">
        {question.options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => !isAnswered && setSelectedOption(idx)}
            disabled={isAnswered}
            className={getOptionStyle(idx)}
          >
            <span className="font-medium text-base z-10 relative flex-1">
              <span className="inline-block w-8 font-bold opacity-60">{String.fromCharCode(65 + idx)}.</span>
              {option}
            </span>
            {isAnswered && idx === question.correctAnswerIndex && (
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 ml-2" />
            )}
            {isAnswered && idx === selectedOption && idx !== question.correctAnswerIndex && (
              <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 ml-2" />
            )}
          </button>
        ))}
      </div>

      {isAnswered && (
        <div className={`mt-6 p-5 rounded-xl border ${isCorrect ? 'bg-green-50 border-green-200' : 'bg-brand-50 border-brand-200'} animate-in fade-in slide-in-from-top-2 duration-300`}>
          <div className="flex items-start gap-3">
            <div className={`mt-1 p-1 rounded-full ${isCorrect ? 'bg-green-200' : 'bg-brand-200'}`}>
               {isCorrect ? <CheckCircle className="w-4 h-4 text-green-700" /> : <HelpCircle className="w-4 h-4 text-brand-700" />}
            </div>
            <div>
              <p className={`font-bold text-sm mb-2 ${isCorrect ? 'text-green-800' : 'text-brand-800'}`}>
                {isCorrect ? 'Correct Answer!' : 'Explanation'}
              </p>
              <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                {question.explanation}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export const Quiz: React.FC<QuizProps> = ({ questions }) => {
  if (!questions || questions.length === 0) return null;

  return (
    <div className="mt-16 pt-12 border-t border-slate-200">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 bg-brand-600 rounded-lg shadow-sm">
           <PenTool className="w-6 h-6 text-white" />
        </div>
        <div>
           <h2 className="text-2xl font-bold text-slate-900">Practice Quiz</h2>
           <p className="text-slate-500">Test your understanding of the lesson</p>
        </div>
      </div>
      <div className="max-w-3xl">
        {questions.map((q, idx) => (
          <QuestionItem key={q.id} question={q} index={idx} />
        ))}
      </div>
    </div>
  );
};