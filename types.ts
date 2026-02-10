export interface VocabularyWord {
  id?: string;
  word: string;
  ipa: string; // e.g., /əˈdʒendə/
  type: string; // e.g., "n", "v", "adj"
  meaning: string;
  example: string;
}

export interface QuizOption {
  id: string;
  text: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: QuizOption[];
  correctOptionId: string;
  explanation: string;
}

export interface QuizGroup {
  id: string;
  passage: string; // Text with placeholders like [1], [2], etc.
  questions: QuizQuestion[];
}

export interface Lecture {
  id: string;
  title: string;
  part: string; // e.g., "Part 7 - Reading Comprehension"
  tags: string[];
  readingContent: string; // Markdown string
  vietnameseMeaningPassage: string; // Markdown string for translation
  keyTakeaways: string[]; // List of key points
  vocabulary: VocabularyWord[];
  exercises: QuizQuestion[]; // Standalone questions (Part 5 style)
  exerciseGroups?: QuizGroup[]; // Passage-based questions (Part 6 style)
}

export interface ChatMessage {
  role: "user" | "model";
  text: string;
}
