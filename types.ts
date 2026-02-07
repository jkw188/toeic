export interface Question {
  id: string;
  questionText: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export interface Lecture {
  id: string;
  title: string;
  duration: string; // e.g. "15 min"
  content: string; // Markdown content
  questions?: Question[]; // Interactive questions
  isCompleted?: boolean;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  lectures: Lecture[];
}

export interface CourseData {
  title: string;
  description: string;
  modules: Module[];
}