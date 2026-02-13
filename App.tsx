import React, { useState } from 'react';
import { LecturePage } from './components/LecturePage';
import { CourseMenu } from './components/CourseMenu';
import { LECTURES } from './lectures';
import { Lecture } from './types';
import { AITutorModal } from './components/AITutorModal';
import { BookOpen, MessageCircle } from 'lucide-react';

const App: React.FC = () => {
  const [isTutorOpen, setIsTutorOpen] = useState(false);
  const [activeLecture, setActiveLecture] = useState<Lecture | null>(null);

  const handleSelectLecture = (lecture: Lecture) => {
    setActiveLecture(lecture);
    window.scrollTo(0, 0);
  };

  const handleBackToMenu = () => {
    setActiveLecture(null);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Global Navigation */}
      <nav className="bg-slate-900 text-white shadow-lg sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div 
              className="flex items-center space-x-3 cursor-pointer" 
              onClick={handleBackToMenu}
            >
              <div className="bg-blue-600 p-2 rounded-lg">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight">JIKANG TOEIC</span>
            </div>
            
            {/* Show tutor button only if inside a lecture
            {activeLecture && (
              <div className="flex items-center space-x-4">
                 <button 
                  onClick={() => setIsTutorOpen(true)}
                  className="hidden md:flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-md transition-colors text-sm font-medium"
                 >
                   <MessageCircle className="w-4 h-4" />
                   <span>Ask AI Tutor</span>
                 </button>
              </div>
            )} */}
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-grow bg-slate-50">
        {activeLecture ? (
          <LecturePage 
            lecture={activeLecture} 
            onBack={handleBackToMenu} 
          />
        ) : (
          <CourseMenu 
            lectures={LECTURES} 
            onSelectLecture={handleSelectLecture} 
          />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-auto py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} TOEIC Master LMS. All rights reserved.</p>
        </div>
      </footer>

      {/* Floating AI Action Button for Mobile (Only when lecture is active) */}
      {activeLecture && (
        <button 
          onClick={() => setIsTutorOpen(true)}
          className="md:hidden fixed bottom-6 right-6 bg-indigo-600 text-white p-4 rounded-full shadow-xl hover:bg-indigo-700 transition-transform hover:scale-105 z-50"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {/* AI Tutor Modal */}
      {isTutorOpen && activeLecture && (
        <AITutorModal onClose={() => setIsTutorOpen(false)} context={activeLecture.readingContent} />
      )}
    </div>
  );
};

export default App;
