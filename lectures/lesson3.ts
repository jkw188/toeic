import { Lecture } from '../types';
import { lesson1 } from './lesson1';

export const lesson3: Lecture = {
  ...lesson1,
  id: "lec-003",
  title: "Incomplete Sentences: Prepositions",
  part: "Part 5",
  tags: ["Grammar", "Prepositions", "Time & Place"],
  readingContent: `
### Grammar Focus: Prepositions of Time (In, On, At)

*   **AT** is used for precise times (at 3 o'clock, at noon).
*   **ON** is used for days and dates (on Monday, on July 4th).
*   **IN** is used for months, years, centuries, and long periods (in 2024, in May, in the summer).

**Example:**
The meeting is **at** 2:00 PM **on** Friday.
    `,
  vietnameseMeaningPassage: `
### Trọng tâm Ngữ pháp: Giới từ chỉ Thời gian (In, On, At)

*   **AT** được dùng cho các mốc thời gian chính xác (lúc 3 giờ, vào buổi trưa).
*   **ON** được dùng cho các ngày và ngày tháng cụ thể (vào thứ Hai, vào ngày 4 tháng 7).
*   **IN** được dùng cho các tháng, năm, thế kỷ và các khoảng thời gian dài (vào năm 2024, vào tháng 5, vào mùa hè).

**Ví dụ:**
Cuộc họp diễn ra **lúc** 2:00 chiều **vào** thứ Sáu.
  `
};
