import React from 'react';
import { Lecture } from '../types';
import { BookOpen, Clock, ChevronRight, Tag } from 'lucide-react';

interface CourseMenuProps {
  lectures: Lecture[];
  onSelectLecture: (lecture: Lecture) => void;
}

export const CourseMenu: React.FC<CourseMenuProps> = ({ lectures, onSelectLecture }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl mb-4">
          TOEIC Preparation Course
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Select a lecture below to start your practice. Master each part of the TOEIC exam with our interactive lessons.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {lectures.map((lecture) => (
          <div 
            key={lecture.id}
            className="group bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full cursor-pointer"
            onClick={() => onSelectLecture(lecture)}
          >
            {/* Card Header */}
            <div className="bg-slate-50 p-6 border-b border-slate-100 group-hover:bg-indigo-50/50 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-indigo-100 text-indigo-800 border border-indigo-200">
                  {lecture.part}
                </span>
                <Clock className="w-4 h-4 text-slate-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors line-clamp-2">
                {lecture.title}
              </h3>
            </div>

            {/* Card Body */}
            <div className="p-6 flex-grow flex flex-col justify-between">
              <div className="space-y-4 mb-6">
                <div className="flex flex-wrap gap-2">
                  {lecture.tags.map(tag => (
                    <span key={tag} className="inline-flex items-center text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded">
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-slate-600 line-clamp-3">
                   Master the essential skills for {lecture.part} with reading practice, vocabulary drills, and quizzes.
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                 <div className="flex items-center space-x-1 text-slate-400 text-sm">
                    <BookOpen className="w-4 h-4" />
                    <span>Lesson</span>
                 </div>
                 <button className="flex items-center text-sm font-bold text-indigo-600 hover:text-indigo-700 transition-colors">
                    Start Learning <ChevronRight className="w-4 h-4 ml-1" />
                 </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
