import { Lecture } from '../types';
import { lesson1 } from './lesson1';

export const lesson2: Lecture = {
  ...lesson1,
  id: "lec-002",
  title: "Office Announcements & Memos",
  tags: ["Memo", "Policy Change", "Office Rules"],
  part: "Part 7",
  readingContent: `
### MEMORANDUM

**To:** All Staff  
**From:** Facilities Management  
**Date:** November 2  
**Subject:** Elevator Maintenance

Please be advised that the main elevators in the West Wing will be undergoing routine maintenance on **Saturday, November 5**, from 8:00 AM to 5:00 PM. 

During this time, please use the service elevator located near the loading dock or the stairwells. We apologize for any inconvenience this may cause and appreciate your cooperation in maintaining our building's safety standards.

Thank you.
    `,
  vietnameseMeaningPassage: `
### THÔNG BÁO NỘI BỘ

**Gửi:** Toàn thể nhân viên  
**Từ:** Ban Quản lý Cơ sở vật chất  
**Ngày:** 2 tháng 11  
**Chủ đề:** Bảo trì Thang máy

Xin lưu ý rằng các thang máy chính ở Cánh Tây sẽ được bảo trì định kỳ vào **Thứ Bảy, ngày 5 tháng 11**, từ 8:00 sáng đến 5:00 chiều.

Trong thời gian này, vui lòng sử dụng thang máy dịch vụ nằm gần khu vực bốc dỡ hàng hoặc cầu thang bộ. Chúng tôi xin lỗi vì bất kỳ sự bất tiện nào có thể gây ra và trân trọng sự hợp tác của các bạn trong việc duy trì các tiêu chuẩn an toàn của tòa nhà.

Xin cảm ơn.
  `
};
