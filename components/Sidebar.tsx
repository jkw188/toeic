import React, { useState } from 'react';
import { CourseData, Module, Lecture } from '../types';
import { ChevronDown, ChevronRight, BookOpen, CheckCircle, Circle, PlayCircle, GraduationCap } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface SidebarProps {
  data: CourseData;
  completedLectures: Set<string>;
  isOpen: boolean;
  onCloseMobile: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ data, completedLectures, isOpen, onCloseMobile }) => {
  const [expandedModules, setExpandedModules] = useState<Set<string>>(new Set(data.modules.map(m => m.id)));
  const location = useLocation();

  const toggleModule = (moduleId: string) => {
    const next = new Set(expandedModules);
    if (next.has(moduleId)) {
      next.delete(moduleId);
    } else {
      next.add(moduleId);
    }
    setExpandedModules(next);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
          onClick={onCloseMobile}
        />
      )}
      
      <aside 
        className={`fixed inset-y-0 left-0 z-30 w-72 bg-white border-r border-slate-200 transform transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:h-screen overflow-y-auto ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6 border-b border-slate-100 flex items-center space-x-3">
          <div className="bg-brand-600 p-2 rounded-lg">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
          <span className="font-bold text-lg text-slate-800 tracking-tight">TOEIC Master</span>
        </div>

        <div className="p-4">
          <Link 
            to="/" 
            className={`flex items-center space-x-3 px-3 py-2 rounded-lg mb-6 transition-colors ${
              isActive('/') ? 'bg-brand-50 text-brand-700 font-medium' : 'text-slate-600 hover:bg-slate-50'
            }`}
            onClick={onCloseMobile}
          >
            <BookOpen className="w-5 h-5" />
            <span>Course Roadmap</span>
          </Link>

          <div className="space-y-1">
            <h3 className="px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Modules</h3>
            
            {data.modules.map((module) => (
              <div key={module.id} className="mb-2">
                <button
                  onClick={() => toggleModule(module.id)}
                  className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-slate-700 hover:text-brand-600 transition-colors group"
                >
                  <span className="flex items-center space-x-2">
                     <span>{module.title}</span>
                  </span>
                  {expandedModules.has(module.id) ? (
                    <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-brand-500" />
                  ) : (
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-brand-500" />
                  )}
                </button>

                {expandedModules.has(module.id) && (
                  <div className="mt-1 ml-2 space-y-1 border-l-2 border-slate-100 pl-2">
                    {module.lectures.map((lecture) => {
                      const isCompleted = completedLectures.has(lecture.id);
                      const lecturePath = `/lecture/${lecture.id}`;
                      const active = isActive(lecturePath);

                      return (
                        <Link
                          key={lecture.id}
                          to={lecturePath}
                          onClick={onCloseMobile}
                          className={`flex items-start space-x-3 px-3 py-2.5 rounded-md text-sm transition-all ${
                            active 
                              ? 'bg-brand-50 text-brand-700 font-medium' 
                              : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800'
                          }`}
                        >
                          <div className="mt-0.5 flex-shrink-0">
                            {isCompleted ? (
                               <CheckCircle className="w-4 h-4 text-green-500" />
                            ) : active ? (
                               <PlayCircle className="w-4 h-4 text-brand-500" />
                            ) : (
                               <Circle className="w-4 h-4 text-slate-300" />
                            )}
                          </div>
                          <div className="flex-1 leading-snug">
                            {lecture.title}
                            <div className="text-xs text-slate-400 font-normal mt-0.5">{lecture.duration}</div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
};