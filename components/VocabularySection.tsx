import React from 'react';
import { VocabularyWord } from '../types';
import { Volume2 } from 'lucide-react';

interface VocabularySectionProps {
  words: VocabularyWord[];
}

export const VocabularySection: React.FC<VocabularySectionProps> = ({ words }) => {
  const playSound = async (word: string) => {
    // console.log('Hi');
  if (!word) return;

  try {
    // Gọi API để lấy thông tin từ vựng
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
    );
    const data = await response.json();

    // Tìm file audio trong danh sách phonetics
    const audioSource = data[0]?.phonetics.find(
      (p: any) => p.audio !== "",
    )?.audio;

    if (audioSource) {
      const audio = new Audio(audioSource);
      await audio.play();
    } else {
      console.warn("Không tìm thấy file âm thanh cho từ này.");
    }
  } catch (error) {
    console.error("Lỗi khi tải âm thanh:", error);
  }
};
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider w-16 text-center">#</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider w-1/4">Word / IPA</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider w-1/12">Type</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider w-1/3">Meaning</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Example</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {words.map((item, index) => (
              <tr className="hover:bg-slate-50/50 transition-colors">
                <td className="px-6 py-4 text-slate-400 font-mono text-sm text-center">
                  {index + 1}
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-col">
                    <span className="font-bold text-indigo-900 text-lg flex items-center">
                      {item.word}
                      <button 
                        className="ml-2 text-slate-300 hover:text-indigo-500 transition-colors" 
                        title="Play Pronunciation"
                        onClick={()=>playSound(item.word)}
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </span>
                    <span className="text-slate-500 text-sm font-mono mt-1">{item.ipa}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800 italic border border-slate-200">
                    {item.type}
                  </span>
                </td>
                <td className="px-6 py-4 text-slate-700 font-medium">
                  {item.meaning}
                </td>
                <td className="px-6 py-4 text-slate-600 text-sm italic">
                  {item.example}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};