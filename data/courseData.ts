import { CourseData } from '../types';

export const COURSE_DATA: CourseData = {
  title: "TOEIC Intensive Preparation",
  description: "Master the TOEIC exam with our comprehensive roadmap covering Grammar, Vocabulary, and Reading Comprehension.",
  modules: [
    {
      id: "grammar-basics",
      title: "Part 5: Essential Grammar",
      description: "Focus on incomplete sentences and key grammatical structures.",
      lectures: [
        {
          id: "lecture-1-word-forms",
          title: "Lesson 1. Word Forms & Parts of Speech",
          duration: "10 min",
          content: `
# Word Forms & Parts of Speech

In TOEIC Part 5, identifying the correct part of speech is crucial. You will often see a sentence with a missing word and four options that are variations of the same root word.

## Key Concepts

1.  **Nouns**: Identify subjects and objects. Look for suffixes like *-tion, -ment, -ness, -ity*.
2.  **Verbs**: Identify the action. Look for tense markers.
3.  **Adjectives**: Modify nouns. Suffixes: *-ive, -al, -ous, -able*.
4.  **Adverbs**: Modify verbs or adjectives. Suffixes: *-ly*.

---

### Example Question

> The new marketing strategy was _______ successful in increasing sales.
>
> (A) high
> (B) highly
> (C) height
> (D) heighten

**Analysis:**
The blank modifies the adjective *successful*. Therefore, we need an **adverb**.
*   (B) *highly* is the correct adverb.

## Strategy Tip
Always look at the words immediately before and after the blank. If you see an article (a, an, the) followed by a blank and then a noun, the blank is likely an **adjective**.
          `
        },
        {
          id: "lecture-2-verb-tenses",
          title: "Lesson 2. Verb Tenses & Agreement",
          duration: "15 min",
          content: `
# Verb Tenses & Subject-Verb Agreement

A significant portion of Part 5 questions tests your ability to match the subject with the correct verb form and tense.

## Subject-Verb Agreement Rules

*   **Singular subjects** take singular verbs (e.g., *The manager writes*).
*   **Plural subjects** take plural verbs (e.g., *The managers write*).
*   **Collective nouns** (team, committee) usually take singular verbs in American English.

### Common Pitfalls

Be careful with prepositional phrases that separate the subject and the verb.

> *Incorrect:* The box of chocolates **are** on the table.
>
> *Correct:* The **box** (of chocolates) **is** on the table.

## Time Markers

Look for time expressions to determine the tense:
*   *Currently, now* → Present Continuous
*   *Recently, lately, since* → Present Perfect
*   *Ago, last year, yesterday* → Simple Past
*   *By the time, before* → Past Perfect or Future Perfect

## Practice
1. The CEO, along with his assistants, _____ (is/are) attending the conference.
   *   Answer: **is** (The subject is *CEO*).
          `
        }
      ]
    },
    {
      id: "reading-comp",
      title: "Part 7: Reading Comprehension",
      description: "Strategies for single and double passages.",
      lectures: [
        {
          id: "lecture-3-skimming",
          title: "Lesson 3. Skimming & Scanning Techniques",
          duration: "12 min",
          content: `
# Skimming & Scanning

To finish Part 7 on time, you cannot read every single word in depth. You must master skimming and scanning.

## Skimming
**Goal:** Get the main idea or "gist" of the text.
*   Read the title and headers.
*   Read the first sentence of each paragraph (topic sentences).
*   Read the final sentence (conclusion).

## Scanning
**Goal:** Find specific details (names, dates, prices).
*   Do not read sentences; let your eyes move quickly over the text looking for the keyword from the question.

### Workflow
1.  **Read the Questions First:** Identify keywords (e.g., "What time...", "Who is Mr. Smith...").
2.  **Scan the Text:** Locate those keywords.
3.  **Read Context:** Read the sentence containing the keyword carefully to answer.
          `
        },
        {
          id: "lecture-4-email-chains",
          title: "Lesson 4. Handling Double Passages (Emails)",
          duration: "20 min",
          content: `
# Double Passages: Email Chains

Double passages often involve an email exchange or an advertisement followed by an email inquiry.

## The "Link" Question
There is almost always one question that requires information from **both** documents to answer.

### Example Scenario
*   **Document 1 (Advertisement):** "Conference starts at 9:00 AM. Lunch is served at 12:30 PM."
*   **Document 2 (Email):** "I will arrive just in time for lunch."
*   **Question:** What time will the writer arrive?
*   **Answer:** 12:30 PM (You need Document 1 for the time and Document 2 for the context).

## Strategy
1.  Determine the relationship between the documents (e.g., Request → Response).
2.  Check dates and times carefully; they are frequent targets for questions.
          `
        }
      ]
    },
    {
      id: "integrated-practice",
      title: "Integrated Practice: Business Scenarios",
      description: "Real-world bilingual scenarios combining Reading Comprehension and Vocabulary analysis.",
      lectures: [
        {
          id: "lecture-5-executive-memo",
          title: "Lesson 5. Executive Memorandum",
          duration: "25 min",
          content: `
# 1. The Scenario: Executive Memorandum

**To:** Board of Directors (Ban giám đốc)
**From:** Alexander Thorne, CEO
**Date:** February 7, 2026
**Subject:** Q1 Strategic Review: Supply Chain & Market Realignment

### Paragraph 1: Economic Overview
As we review the **financial statement** from the **beginning** of the fiscal year, it is clear that the global **economy** remains **volatile**. While some analysts were **optimistic** about a quick **rebound**, we are currently facing a period of **stagnation**. The **downturn** in the **industrial** sector has caused a **secondary effect** on consumer confidence. **Without a doubt**, avoiding a full **recession** requires us to take **satisfactory** and immediate **measures**.

> **Đoạn 1: Tổng quan kinh tế**
> Khi chúng ta xem xét **báo cáo tài chính** từ **thời điểm bắt đầu** năm tài chính, rõ ràng là **nền kinh tế** toàn cầu vẫn còn **biến động**. Trong khi một số nhà phân tích đã **lạc quan** về một sự **hồi phục** nhanh chóng, chúng ta hiện đang đối mặt với một giai đoạn **đình trệ**. Sự **suy thoái** trong lĩnh vực **công nghiệp** đã gây ra **tác dụng phụ** lên niềm tin của người tiêu dùng. **Không còn nghi ngờ gì nữa**, việc tránh một cuộc **suy thoái** toàn diện đòi hỏi chúng ta phải thực hiện các **biện pháp** **thỏa đáng** và ngay lập tức.

### Paragraph 2: Supply Chain Issues
Our **primary** concern is the **interruption** in our supply line. Our main **supplier** has **temporarily** ceased operations due to a labor dispute. Consequently, we are running **short** on raw materials, and our **inventory** of finished goods is critically low. We have been **unable** to **provide** **distributors** with their full **orders**, leading to a significant **shortage** of our products in **retail** stores.

> **Đoạn 2: Vấn đề chuỗi cung ứng**
> Mối quan tâm **hàng đầu** của chúng ta là sự **gián đoạn** trong dây chuyền cung ứng. **Nhà cung cấp** chính của chúng ta đã **tạm thời** ngừng hoạt động do tranh chấp lao động. Hậu quả là, chúng ta đang trở nên **thiếu** nguyên liệu thô, và **hàng tồn kho** thành phẩm đang ở mức thấp nghiêm trọng. Chúng ta đã **không thể** **cung cấp** cho các **nhà phân phối** đầy đủ các **đơn đặt hàng** của họ, dẫn đến sự **thiếu hụt** đáng kể sản phẩm của chúng ta tại các cửa hàng **bán lẻ**.

### Paragraph 3: Dealer Relations
Specifically, two major **dealers** have **refused** to accept partial shipments, and one has even threatened to **reject** future contracts if we cannot **assure** delivery dates. If this continues, we risk losing our **clientele** to competitors who currently **dominate** the local **market**. We cannot afford to be **unreliable**; items are currently marked as "Out of **Stock**," which is **unsatisfactory**.

> **Đoạn 3: Quan hệ với đại lý**
> Cụ thể, hai **người buôn bán (đại lý)** lớn đã **từ chối** nhận các lô hàng không đầy đủ, và một bên thậm chí đã đe dọa **bác bỏ** các hợp đồng tương lai nếu chúng ta không thể **đảm bảo** ngày giao hàng. Nếu điều này tiếp tục, chúng ta có nguy cơ mất **nhóm khách hàng** vào tay các đối thủ cạnh tranh hiện đang **thống trị** **thị trường** địa phương. Chúng ta không thể để mình trở nên **thiếu tin cậy**; các mặt hàng hiện đang bị đánh dấu là "Hết **hàng**," điều này là **không thỏa đáng**.

### Paragraph 4: Strategic Acquisition
To **break** this **vicious cycle**, we must **speed up** our plans to **diversify**. We are currently looking to **acquire** a smaller, **family-run** logistics **firm** that owns a **warehouse** network **nationwide**. This **acquisition** will allow us to **stock** goods in **bulk** and **distribute** them more efficiently. Furthermore, we are **seeking** a new **provider** for raw materials. We have requested a **quote** from a **multinational** **enterprise** in a **neighboring** country.

> **Đoạn 4: Chiến lược mua lại**
> Để **phá vỡ** **vòng luẩn quẩn** này, chúng ta phải **tăng tốc** các kế hoạch **đa dạng hóa**. Chúng ta hiện đang tìm cách **mua lại** một **hãng (công ty)** logistics nhỏ hơn do **gia đình quản lý**, sở hữu mạng lưới **nhà kho** trên **toàn quốc**. Sự **mua lại** này sẽ cho phép chúng ta **tích trữ** hàng hóa với **số lượng lớn** và **phân phối** chúng hiệu quả hơn. Hơn nữa, chúng ta đang **tìm kiếm** một **nhà cung cấp** nguyên liệu thô mới. Chúng ta đã yêu cầu **báo giá** từ một **doanh nghiệp** **đa quốc gia** ở một quốc gia **lân cận**.

### Paragraph 5: Financial Adjustments
Although their initial **estimate** was high, we managed to **bargain** for a **discount** for **bulk** purchases. We expect to **finalize** this **deal** and receive written **confirmation** **shortly**. To offset the high **cost**, we must review our pricing. Currently, our profit margins are **subject to** huge **fluctuations** in the **exchange rate**. We will offer a **discount** for early **payment** of **invoices** to improve cash flow. We must be **selective** with our **expenditures**; spending on unnecessary **commercials** will be cut.

> **Đoạn 5: Điều chỉnh tài chính**
> Mặc dù **ước tính** ban đầu của họ khá cao, chúng ta đã xoay xở **mặc cả** được một khoản **chiết khấu (giảm giá)** cho việc mua **số lượng lớn**. Chúng ta hy vọng sẽ **hoàn tất** **thỏa thuận** này và nhận được **xác nhận** bằng văn bản **sớm**. Để bù đắp **chi phí** cao, chúng ta phải xem xét lại việc định giá. Hiện tại, biên lợi nhuận của chúng ta đang **lệ thuộc vào** những **biến động** lớn về **tỷ giá hối đoái**. Chúng ta sẽ cung cấp **giảm giá** cho việc **thanh toán** sớm các **hóa đơn** để cải thiện dòng tiền. Chúng ta phải **có chọn lọc** với các khoản **chi tiêu**; chi phí cho các **quảng cáo** không cần thiết sẽ bị cắt giảm.

---

# 2. Reading Analysis: Key Takeaways

1.  **Usage of "Subject to":**
    *   *Context:* "Profit margins are **subject to** huge fluctuations."
    *   *Analysis:* This is a classic phrase in TOEIC Part 7 (Contracts/Terms). It means "dependent on" or "likely to be affected by".
    *   *Other example:* "The schedule is **subject to** change" (Lịch trình có thể thay đổi).

2.  **Distinguishing "Refuse" and "Reject":**
    *   *Refuse:* Usually used for actions. (Refuse to accept shipment).
    *   *Reject:* Usually used for nouns/objects. (Reject a contract/proposal).

3.  **Economic Vocabulary (800+ level):**
    *   **Volatile** (Biến động), **Stagnation** (Đình trệ), **Sluggish** (Chậm chạp).
    *   *Tip:* If the prompt says the economy is bad, look for words like *downturn, recession, sluggish*. If unstable, look for *volatile, fluctuation*.

4.  **Word Families:**
    *   **Short** (adj) → **Shortage** (n).
    *   **Acquire** (v) → **Acquisition** (n).
    *   **Confirm** (v) → **Confirmation** (n).
          `,
          questions: [
            {
              id: "q1",
              questionText: "What is the primary reason for the company's current inventory shortage?",
              options: [
                "The company is facing a financial recession.",
                "The main supplier has temporarily stopped operations.",
                "The exchange rate has fluctuated too much.",
                "The retailers refused to sell the products."
              ],
              correctAnswerIndex: 1,
              explanation: "See Paragraph 2: \"Our main supplier has temporarily ceased operations due to a labor dispute.\""
            },
            {
              id: "q2",
              questionText: "What strategic move is the company planning to improve distribution?",
              options: [
                "Building a new factory in a neighboring country.",
                "Hiring more dealers to sell in the local market.",
                "Acquiring a family-run logistics firm.",
                "Increasing the budget for television commercials."
              ],
              correctAnswerIndex: 2,
              explanation: "See Paragraph 4: \"We are currently looking to acquire a smaller, family-run logistics firm that owns a warehouse network nationwide.\""
            },
            {
              id: "q3",
              questionText: "How does the company plan to manage cash flow better?",
              options: [
                "By increasing the price of all products.",
                "By delaying payments to their new provider.",
                "By offering discounts for early invoice payments.",
                "By requesting a government grant."
              ],
              correctAnswerIndex: 2,
              explanation: "See Paragraph 5: \"We will offer a discount for early payment of invoices to improve cash flow.\""
            },
            {
              id: "q4",
              questionText: "Due to the unexpected delay, we are currently running _______ on office supplies.",
              options: [
                "short",
                "shorten",
                "shortage",
                "shortly"
              ],
              correctAnswerIndex: 0,
              explanation: "Phrase \"run short\" means to become depleted or have an insufficient supply."
            },
            {
              id: "q5",
              questionText: "All prices listed in the catalog are _______ to change without prior notice.",
              options: [
                "subject",
                "object",
                "reject",
                "project"
              ],
              correctAnswerIndex: 0,
              explanation: "Phrase \"be subject to\" means dependent on or likely to be affected by something."
            },
            {
              id: "q6",
              questionText: "We are waiting for written _______ from the bank before proceeding with the acquisition.",
              options: [
                "confirm",
                "confirmed",
                "confirmation",
                "confirms"
              ],
              correctAnswerIndex: 2,
              explanation: "A noun is needed after the adjective \"written\". \"Confirmation\" is the noun form."
            },
            {
              id: "q7",
              questionText: "The housing market has been _______ for several months, with very few sales being recorded.",
              options: [
                "sluggish",
                "volatile",
                "optimistic",
                "satisfactory"
              ],
              correctAnswerIndex: 0,
              explanation: "\"Sluggish\" means slow-moving or stagnant, which fits the context of \"very few sales\"."
            },
            {
              id: "q8",
              questionText: "The manager decided to _______ the proposal because it exceeded the budget.",
              options: [
                "refuse",
                "reject",
                "refusal",
                "rejection"
              ],
              correctAnswerIndex: 1,
              explanation: "A verb is needed to complete the infinitive \"to _______\". \"Reject\" is used for objects/nouns (like a proposal), while \"refuse\" is typically used with actions (refuse to do something)."
            }
          ]
        }
      ]
    }
  ]
};