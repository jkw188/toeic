import React from 'react';
import { CourseData } from '../types';
import { Link } from 'react-router-dom';
import { BookOpen, CheckCircle, Clock, Play, BarChart3 } from 'lucide-react';

interface DashboardProps {
  data: CourseData;
  completedLectures: Set<string>;
}

export const Dashboard: React.FC<DashboardProps> = ({ data, completedLectures }) => {
  // Calculate total progress
  const totalLectures = data.modules.reduce((acc, mod) => acc + mod.lectures.length, 0);
  const completedCount = completedLectures.size;
  const progressPercentage = totalLectures === 0 ? 0 : Math.round((completedCount / totalLectures) * 100);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 md:px-8">
      {/* Welcome Section */}
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-slate-900 mb-3">{data.title}</h1>
        <p className="text-lg text-slate-600 max-w-2xl">{data.description}</p>
        
        {/* Overall Progress */}
        <div className="mt-8 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center gap-6">
          <div className="flex-1">
            <div className="flex justify-between items-end mb-2">
              <span className="font-semibold text-slate-700 flex items-center">
                <BarChart3 className="w-5 h-5 mr-2 text-brand-500" />
                Course Progress
              </span>
              <span className="text-2xl font-bold text-brand-600">{progressPercentage}%</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-3">
              <div 
                className="bg-brand-500 h-3 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <div className="mt-2 text-sm text-slate-500">
              {completedCount} of {totalLectures} lectures completed
            </div>
          </div>
          
          <div className="flex-shrink-0">
             {/* Continue Button Logic - Find first incomplete lecture */}
             {(() => {
                let firstIncomplete = null;
                for(const mod of data.modules) {
                    const found = mod.lectures.find(l => !completedLectures.has(l.id));
                    if(found) {
                        firstIncomplete = found;
                        break;
                    }
                }
                
                if (firstIncomplete) {
                    return (
                        <Link 
                            to={`/lecture/${firstIncomplete.id}`}
                            className="inline-flex items-center justify-center px-6 py-3 bg-brand-600 text-white font-medium rounded-xl hover:bg-brand-700 transition-colors shadow-sm hover:shadow-md w-full md:w-auto"
                        >
                            <Play className="w-4 h-4 mr-2 fill-current" />
                            Continue Learning
                        </Link>
                    );
                } else {
                    return (
                        <div className="inline-flex items-center justify-center px-6 py-3 bg-green-100 text-green-700 font-medium rounded-xl border border-green-200">
                           <CheckCircle className="w-5 h-5 mr-2" />
                           Course Completed!
                        </div>
                    );
                }
             })()}
          </div>
        </div>
      </div>

      {/* Modules Grid */}
      <h2 className="text-xl font-bold text-slate-800 mb-6">Learning Path</h2>
      <div className="grid grid-cols-1 gap-8">
        {data.modules.map((module, idx) => (
          <div key={module.id} className="relative pl-8 md:pl-0">
             {/* Connector Line (Desktop) */}
            {idx !== data.modules.length - 1 && (
                <div className="hidden md:block absolute left-[27px] top-14 bottom-[-32px] w-0.5 bg-slate-200 -z-10" />
            )}
            
            <div className="flex flex-col md:flex-row gap-6 group">
                {/* Number Badge */}
                <div className="hidden md:flex flex-shrink-0 w-14 h-14 bg-white border-2 border-slate-100 rounded-2xl items-center justify-center shadow-sm text-lg font-bold text-slate-400 group-hover:border-brand-200 group-hover:text-brand-500 transition-colors">
                    {idx + 1}
                </div>

                {/* Card */}
                <div className="flex-1 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                    <div className="p-6 border-b border-slate-50 bg-slate-50/50">
                        <div className="flex items-center justify-between mb-2">
                             <h3 className="text-lg font-bold text-slate-900">{module.title}</h3>
                             <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 bg-white px-2 py-1 rounded border border-slate-100">
                                 {module.lectures.length} Lectures
                             </span>
                        </div>
                        <p className="text-slate-600 text-sm">{module.description}</p>
                    </div>
                    
                    <div className="divide-y divide-slate-100">
                        {module.lectures.map(lecture => {
                            const isCompleted = completedLectures.has(lecture.id);
                            return (
                                <Link 
                                    key={lecture.id}
                                    to={`/lecture/${lecture.id}`}
                                    className="flex items-center justify-between p-4 hover:bg-slate-50 transition-colors group/lecture"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`p-2 rounded-full ${isCompleted ? 'bg-green-100' : 'bg-slate-100 group-hover/lecture:bg-brand-100 transition-colors'}`}>
                                            {isCompleted ? (
                                                <CheckCircle className="w-4 h-4 text-green-600" />
                                            ) : (
                                                <BookOpen className="w-4 h-4 text-slate-400 group-hover/lecture:text-brand-500" />
                                            )}
                                        </div>
                                        <div className="flex flex-col">
                                            <span className={`font-medium text-sm ${isCompleted ? 'text-slate-500 line-through decoration-slate-300' : 'text-slate-700'}`}>
                                                {lecture.title}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex items-center text-xs text-slate-400">
                                        <Clock className="w-3 h-3 mr-1" />
                                        {lecture.duration}
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};