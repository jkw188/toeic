import React, { useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import { Lecture, Module } from '../types';
import { ChevronRight, Check, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Quiz } from './Quiz';

interface LectureViewProps {
  lecture: Lecture;
  module: Module;
  onComplete: (lectureId: string) => void;
  nextLecture?: { id: string; title: string };
  isCompleted: boolean;
}

export const LectureView: React.FC<LectureViewProps> = ({ 
  lecture, 
  module, 
  onComplete, 
  nextLecture, 
  isCompleted 
}) => {
  const contentRef = useRef<HTMLDivElement>(null);

  // Scroll to top when lecture changes
  useEffect(() => {
    if (contentRef.current) {
      window.scrollTo(0, 0);
    }
  }, [lecture.id]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 md:px-8" ref={contentRef}>
      {/* Breadcrumb */}
      <nav className="flex items-center text-sm text-slate-500 mb-6 space-x-2">
        <span>Roadmap</span>
        <ChevronRight className="w-4 h-4" />
        <span>{module.title}</span>
        <ChevronRight className="w-4 h-4" />
        <span className="text-brand-600 font-medium truncate">{lecture.title}</span>
      </nav>

      {/* Header */}
      <header className="mb-10 border-b border-slate-100 pb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">{lecture.title}</h1>
            <div className="flex items-center text-slate-500 text-sm space-x-4">
              <span className="flex items-center">
                <Clock className="w-4 h-4 mr-1.5" />
                {lecture.duration} read
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 font-medium text-xs border border-slate-200">
                Reading
              </span>
            </div>
          </div>
          
          <button
            onClick={() => onComplete(lecture.id)}
            className={`flex items-center justify-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all transform active:scale-95 ${
              isCompleted 
                ? 'bg-green-100 text-green-700 border border-green-200 hover:bg-green-200'
                : 'bg-brand-600 text-white hover:bg-brand-700 shadow-md hover:shadow-lg'
            }`}
          >
            {isCompleted ? (
              <>
                <Check className="w-5 h-5" />
                <span>Completed</span>
              </>
            ) : (
              <span>Mark as Complete</span>
            )}
          </button>
        </div>
      </header>

      {/* Markdown Content */}
      <article className="prose prose-lg prose-slate max-w-none 
        prose-headings:font-bold prose-headings:text-slate-800 
        prose-h1:text-3xl prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-6
        prose-p:text-slate-600 prose-p:leading-relaxed
        prose-a:text-brand-600 prose-a:no-underline hover:prose-a:underline
        prose-blockquote:border-l-4 prose-blockquote:border-brand-300 prose-blockquote:bg-brand-50 prose-blockquote:px-6 prose-blockquote:py-4 prose-blockquote:rounded-r-lg prose-blockquote:not-italic
        prose-code:text-brand-700 prose-code:bg-brand-50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
        prose-li:marker:text-brand-400
        prose-img:rounded-xl prose-img:shadow-lg
        bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100"
      >
        <ReactMarkdown>{lecture.content}</ReactMarkdown>
      </article>

      {/* Interactive Quiz Section */}
      {lecture.questions && lecture.questions.length > 0 && (
        <Quiz questions={lecture.questions} />
      )}

      {/* Footer / Next Step */}
      <div className="mt-12 flex items-center justify-end">
        {nextLecture && (
          <Link
            to={`/lecture/${nextLecture.id}`}
            className="group flex items-center space-x-3 text-right hover:bg-white p-4 rounded-xl transition-all border border-transparent hover:border-slate-200 hover:shadow-md"
          >
            <div>
              <div className="text-xs text-slate-400 uppercase tracking-wide font-semibold mb-1">Next Lecture</div>
              <div className="text-lg font-bold text-slate-800 group-hover:text-brand-600">{nextLecture.title}</div>
            </div>
            <div className="bg-brand-50 p-3 rounded-full group-hover:bg-brand-600 transition-colors">
              <ChevronRight className="w-5 h-5 text-brand-600 group-hover:text-white" />
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};