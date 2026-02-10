import React, { useState } from 'react';
import { Lecture } from '../types';
import { BookOpen, BrainCircuit, ListChecks, GraduationCap, Menu, ArrowLeft, Languages } from 'lucide-react';
import { VocabularySection } from './VocabularySection';
import { QuizSection } from './QuizSection';

interface LecturePageProps {
  lecture: Lecture;
  onBack: () => void;
}

type TabId = 'reading' | 'analysis' | 'vocabulary' | 'exercises';

export const LecturePage: React.FC<LecturePageProps> = ({ lecture, onBack }) => {
  const [activeTab, setActiveTab] = useState<TabId>('reading');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showTranslation, setShowTranslation] = useState(false);

  // Use 'marked' from global scope (loaded via CDN)
  const renderMarkdown = (text: string) => {
    // @ts-ignore
    const html = window.marked ? window.marked.parse(text) : text;
    return { __html: html };
  };

  const navItems = [
    { id: 'reading', label: 'Reading Passage', icon: BookOpen },
    { id: 'analysis', label: 'Key Analysis', icon: BrainCircuit },
    { id: 'vocabulary', label: 'Vocabulary List', icon: ListChecks },
    { id: 'exercises', label: 'Practice Quiz', icon: GraduationCap },
  ];

  const handleTabChange = (id: string) => {
    setActiveTab(id as TabId);
    setIsSidebarOpen(false); // Close mobile sidebar on selection
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      {/* Page Header - Always Visible */}
      <header className="mb-8 border-b border-slate-200 pb-6">
        {/* Back Button */}
        <div className="mb-4">
            <button 
                onClick={onBack}
                className="flex items-center text-slate-500 hover:text-indigo-600 transition-colors text-sm font-medium"
            >
                <ArrowLeft className="w-4 h-4 mr-1" />
                Back to Course
            </button>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-indigo-600 font-semibold tracking-wide uppercase text-sm">
              <span className="bg-indigo-50 px-2 py-1 rounded border border-indigo-100">{lecture.part}</span>
              {lecture.tags.map(tag => (
                <span key={tag} className="text-slate-400 text-xs px-2 hidden sm:inline">• {tag}</span>
              ))}
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
              {lecture.title}
            </h1>
          </div>
          
          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="md:hidden flex items-center justify-center px-4 py-2 border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-50"
          >
            <Menu className="w-5 h-5 mr-2" />
            <span>Lecture Menu</span>
          </button>
        </div>
      </header>

      <div className="flex flex-col md:flex-row gap-8 relative">
        
        {/* Sidebar Navigation */}
        <aside 
          className={`
            fixed md:static inset-y-0 left-0 z-30 w-64 bg-white md:bg-transparent shadow-2xl md:shadow-none transform transition-transform duration-300 ease-in-out
            ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
            md:block md:w-64 flex-shrink-0
          `}
        >
          <div className="h-full p-4 md:p-0 bg-white md:bg-transparent rounded-xl md:sticky md:top-24">
            <div className="flex justify-between items-center md:hidden mb-6 pb-4 border-b border-slate-100">
              <span className="font-bold text-lg text-slate-900">Contents</span>
              <button onClick={() => setIsSidebarOpen(false)} className="text-slate-400 p-2">✕</button>
            </div>

            <nav className="space-y-2">
              {navItems.map((item) => {
                const isActive = activeTab === item.id;
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleTabChange(item.id)}
                    className={`
                      w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200
                      ${isActive 
                        ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200' 
                        : 'text-slate-600 hover:bg-slate-100 hover:text-indigo-600 bg-white border border-slate-200 md:border-transparent md:bg-transparent'
                      }
                    `}
                  >
                    <Icon className={`w-5 h-5 ${isActive ? 'text-indigo-200' : 'text-slate-400'}`} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>
            
            {/* Progress/Stats placeholder */}
            <div className="mt-8 p-4 bg-indigo-50 rounded-xl border border-indigo-100 hidden md:block">
              <h4 className="text-xs font-bold text-indigo-800 uppercase tracking-wider mb-2">Lecture Progress</h4>
              <div className="w-full bg-white rounded-full h-2.5 mb-2">
                <div className="bg-indigo-500 h-2.5 rounded-full w-[25%]"></div>
              </div>
              <p className="text-xs text-indigo-600">Part 1 of 4 completed</p>
            </div>
          </div>
        </aside>

        {/* Overlay for mobile sidebar */}
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/20 z-20 md:hidden backdrop-blur-sm"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Main Content Area */}
        <main className="flex-1 min-w-0">
          
          {activeTab === 'reading' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <section className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <BookOpen className="w-5 h-5 text-indigo-500" />
                      <h2 className="font-bold text-slate-800">Reading Passage</h2>
                    </div>
                    {/* Translation Toggle Button */}
                    <button 
                      onClick={() => setShowTranslation(!showTranslation)}
                      className={`
                        flex items-center space-x-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200
                        ${showTranslation 
                          ? 'bg-indigo-100 text-indigo-700 border border-indigo-200' 
                          : 'bg-white text-slate-600 border border-slate-300 hover:bg-slate-50'
                        }
                      `}
                    >
                      <Languages className="w-4 h-4" />
                      <span className="hidden sm:inline">{showTranslation ? 'Hide Translation' : 'Translate'}</span>
                      <span className="sm:hidden">{showTranslation ? 'Hide' : 'VN'}</span>
                    </button>
                </div>
                <div className="p-6 sm:p-8">
                    <div className={`grid gap-8 ${showTranslation ? 'md:grid-cols-2' : 'grid-cols-1'}`}>
                        {/* Original Text */}
                        <div className="flex flex-col">
                           {showTranslation && <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 border-b border-slate-100 pb-2">Original English</h3>}
                           <div 
                                className="markdown-body prose prose-slate max-w-none prose-p:text-slate-600 prose-headings:text-slate-800"
                                dangerouslySetInnerHTML={renderMarkdown(lecture.readingContent)}
                           />
                        </div>

                        {/* Translated Text */}
                        {showTranslation && (
                            <div className="flex flex-col pt-8 md:pt-0 border-t md:border-t-0 md:border-l border-slate-200 md:pl-8 animate-in fade-in slide-in-from-right-4 duration-300">
                                <h3 className="text-xs font-bold text-indigo-400 uppercase tracking-wider mb-4 border-b border-indigo-50 pb-2">Vietnamese Translation</h3>
                                <div 
                                    className="markdown-body prose prose-slate max-w-none prose-p:text-slate-600 prose-headings:text-slate-800"
                                    dangerouslySetInnerHTML={renderMarkdown(lecture.vietnameseMeaningPassage || "*Translation not available.*")}
                                />
                            </div>
                        )}
                    </div>
                </div>
              </section>
            </div>
          )}

          {activeTab === 'analysis' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
               <section className="bg-indigo-900 text-indigo-50 rounded-2xl p-6 sm:p-8 shadow-md">
                <div className="flex items-center space-x-3 mb-8 pb-4 border-b border-indigo-800">
                    <BrainCircuit className="w-6 h-6 text-indigo-300" />
                    <h2 className="text-xl font-bold text-white">Key Takeaways & Analysis</h2>
                </div>
                <ul className="grid gap-6">
                    {lecture.keyTakeaways.map((point, index) => (
                        <li key={index} className="flex gap-4">
                            <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-indigo-600 rounded-full font-bold text-white shadow-lg border border-indigo-400">
                                {index + 1}
                            </span>
                            <div className="bg-indigo-800/50 p-4 rounded-xl border border-indigo-700/50 flex-grow">
                              <span className="text-indigo-100 leading-relaxed font-medium">{point}</span>
                            </div>
                        </li>
                    ))}
                </ul>
              </section>
            </div>
          )}

          {activeTab === 'vocabulary' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex items-center justify-between mb-6">
                 <div className="flex items-center space-x-2">
                    <ListChecks className="w-6 h-6 text-teal-600" />
                    <h2 className="text-2xl font-bold text-slate-900">Essential Vocabulary</h2>
                 </div>
              </div>
              <VocabularySection words={lecture.vocabulary} />
            </div>
          )}

          {activeTab === 'exercises' && (
             <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex items-center space-x-2 mb-6">
                    <GraduationCap className="w-6 h-6 text-orange-600" />
                    <h2 className="text-2xl font-bold text-slate-900">Practice Exercises</h2>
                </div>
                <QuizSection questions={lecture.exercises} />
             </div>
          )}

        </main>
      </div>
    </div>
  );
};
