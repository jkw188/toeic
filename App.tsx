import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { LectureView } from './components/LectureView';
import { Dashboard } from './components/Dashboard';
import { COURSE_DATA } from './data/courseData';
import { Menu, X } from 'lucide-react';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Layout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [completedLectures, setCompletedLectures] = useState<Set<string>>(new Set());

  // Helper to handle completion
  const handleCompleteLecture = (lectureId: string) => {
    setCompletedLectures(prev => {
      const next = new Set(prev);
      next.add(lectureId);
      return next;
    });
  };

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans text-slate-900">
      <Sidebar 
        data={COURSE_DATA} 
        completedLectures={completedLectures} 
        isOpen={isSidebarOpen}
        onCloseMobile={() => setIsSidebarOpen(false)}
      />
      
      <div className="flex-1 flex flex-col min-w-0">
        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between p-4 bg-white border-b border-slate-200 sticky top-0 z-10">
          <span className="font-bold text-lg text-slate-800">TOEIC Master</span>
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg"
          >
            {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <main className="flex-1">
          <Routes>
            <Route 
              path="/" 
              element={<Dashboard data={COURSE_DATA} completedLectures={completedLectures} />} 
            />
            {COURSE_DATA.modules.map(module => 
              module.lectures.map((lecture, index) => {
                // Find next lecture logic
                let nextLecture = undefined;
                if (index < module.lectures.length - 1) {
                  nextLecture = module.lectures[index + 1];
                } else {
                  // Check next module
                  const currentModIndex = COURSE_DATA.modules.findIndex(m => m.id === module.id);
                  if (currentModIndex < COURSE_DATA.modules.length - 1) {
                    nextLecture = COURSE_DATA.modules[currentModIndex + 1].lectures[0];
                  }
                }

                return (
                  <Route
                    key={lecture.id}
                    path={`/lecture/${lecture.id}`}
                    element={
                      <LectureView 
                        lecture={lecture} 
                        module={module}
                        isCompleted={completedLectures.has(lecture.id)}
                        onComplete={handleCompleteLecture}
                        nextLecture={nextLecture}
                      />
                    }
                  />
                );
              })
            )}
          </Routes>
        </main>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Layout />
    </HashRouter>
  );
};

export default App;