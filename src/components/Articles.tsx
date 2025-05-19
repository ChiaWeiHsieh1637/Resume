import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import ArticleDetail from './ArticleDetail';

interface Article {
  id: number;
  title: string;
  description: string;
  date: string;
  link: string;
  tags: string[];
  content?: string;
}

const Articles: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const articles: Article[] = [
    {
      id: 11,
      title: '從實務角度談 RESTful API 設計：常見錯誤與改進方式',
      description: '結合實務經驗，整理RESTful API設計中的常見錯誤與具體改進方式，幫助開發者建立更穩定、易維護的系統。',
      date: '2025-05-18',
      link: 'https://example.com/article11',
      tags: ['API設計', '後端開發', 'RESTful', '系統架構'],
      content: `
        <h2>在多數 Web 專案中，RESTful API 是前後端溝通的橋梁</h2>
        <p>但在我過去參與的多個大型專案中，經常遇到設計不良的 API 導致維護困難、開發效率低落，甚至系統無法擴展。本文將結合實務經驗，整理幾個常見錯誤與具體改進方式。</p>
        
        <h2>一、錯誤的資源命名方式</h2>
        
        <h3>錯誤範例：</h3>
        
        <pre><code>POST /createUser  
GET /getAllUser</code></pre>
        
        <p>這種命名把行為寫進了 URL，違反了 REST 的設計精神。</p>
        
        <h3>改進方式：</h3>
        
        <pre><code>POST /users  
GET /users</code></pre>
        
        <p>REST 是「資源導向」的設計思維，URL 代表資源，動作用 HTTP 方法描述（GET、POST、PUT、DELETE）。</p>
        
        <h2>二、混用複數與單數資源</h2>
        
        <h3>錯誤範例：</h3>
        
        <pre><code>GET /user/123  
DELETE /users/123</code></pre>
        
        <p>在大型團隊中，這種不一致會造成文件混亂，甚至出現錯誤的資料操作。</p>
        
        <h3>改進方式：</h3>
        
        <p>建議固定使用複數名詞作為資源：</p>
        
        <pre><code>GET /users/123  
DELETE /users/123</code></pre>
        
        <h2>三、錯誤的狀態碼使用</h2>
        
        <p>有些專案會直接回 <span class="keyword">200 OK</span>，即便操作失敗也不改狀態碼，只透過 JSON 內容說明錯誤，這會讓前端無法正確判斷請求狀態。</p>
        
        <h3>改進建議：</h3>
        
        <ul>
          <li><span class="keyword">200 OK</span>：操作成功</li>
          <li><span class="keyword">201 Created</span>：成功建立資源</li>
          <li><span class="keyword">400 Bad Request</span>：參數錯誤</li>
          <li><span class="keyword">401 Unauthorized</span>：未授權</li>
          <li><span class="keyword">403 Forbidden</span>：已登入但無權限</li>
          <li><span class="keyword">404 Not Found</span>：資源不存在</li>
          <li><span class="keyword">500 Internal Server Error</span>：伺服器端錯誤</li>
        </ul>
        
        <h2>四、缺乏一致性的錯誤回應格式</h2>
        
        <h3>錯誤範例：</h3>
        
        <p>有的 API 回傳 <span class="keyword">error_message</span>，有的則是 <span class="keyword">msg</span>，格式混亂會增加前端處理成本。</p>
        
        <h3>建議格式：</h3>
        
        <pre><code><span class="keyword">{
  "error": true,
  "message": "使用者不存在",
  "code": "USER_NOT_FOUND"
}</span></code></pre>
        
        <h2>五、缺乏版本控制</h2>
        
        <p>沒有版本號的 API 當需求改變時，會讓舊的用戶端出錯，進而影響整體服務穩定性。</p>
        
        <h3>建議做法：</h3>
        
        <p>在 URL 中加入版本：</p>
        
        <pre><code>GET /api/v1/users</code></pre>
        
        <p>或使用 header（進階應用）</p>
        
        <h2>六、不合理的關聯資料處理方式</h2>
        
        <h3>錯誤範例：</h3>
        
        <pre><code>GET /users/123/posts/456/comments</code></pre>
        
        <p>雖然結構看似完整，但實務中會導致複雜度暴增且難以維護。</p>
        
        <h3>改進建議：</h3>
        
        <p>保留資料的主從關係，但不過度嵌套，必要時使用查詢參數：</p>
        
        <pre><code>GET /comments?post_id=456</code></pre>
        
        <h2>七、過度依賴資料庫結構</h2>
        
        <p>有些開發者將資料庫欄位直接對應 API 格式，例如資料庫欄位是 <span class="keyword">is_deleted</span>，API 就回傳 <span class="keyword">is_deleted: 0</span>，這讓資料對外表現失去語意清晰性。</p>
        
        <h3>建議做法：</h3>
        
        <p>適度轉換，增加語意：</p>
        
        <pre><code><span class="keyword">{
  "deleted": false
}</span></code></pre>
        
        <h2>結語：寫給人類看的 API，才是好 API</h2>
        
        <p>寫 API，不只是給程式用的，更是給團隊、未來自己維護的。思考 API 的可讀性、語意清晰性、前後一致性，遠比快速開發更重要。這些看似瑣碎的細節，才是讓一個專案走得久、跑得穩的基礎。</p>
        
        <p>如果你對 RESTful API 設計或系統規劃有進一步的討論想法，或想與我合作 Side Project、進行後端設計改善，歡迎與我聯絡。</p>
        <p>完整履歷請見：<a href="https://weigo-resume.deno.dev" class="text-accent hover:underline">https://weigo-resume.deno.dev</a></p>
      `
    },
    {
      id: 10,
      title: '用 GPT 幫我寫 API，但我還是要自己查文件？實測 AI 寫後端的極限',
      description: 'AI 會寫程式這件事已經不是新聞。對於一個習慣開發 Side Project 的工程師來說，寫個 API、串個資料庫、處理使用者登入這類工作，早就可以交給 GPT 幫忙草擬初稿。',
      date: '2025-05-17',
      link: 'https://example.com/article10',
      tags: ['AI', '後端開發', 'API', 'Side Project'],
      content: `
        <h2>AI 會寫程式這件事已經不是新聞</h2>
        <p>對於一個習慣開發 Side Project 的工程師來說，寫個 API、串個資料庫、處理使用者登入這類工作，早就可以交給 GPT 幫忙草擬初稿。</p>
        
        <p>但我這次不是單純玩玩而已，而是想實際模擬一個小型產品的後端邏輯，全程用 GPT 搭配 Node.js、Express、MongoDB 來完成，順便檢驗「它到底能幫我做到哪裡？」以及「我還需不需要自己查文件？」</p>
        
        <p>答案是：你還是得查。</p>
        
        <h2>實測任務：寫一個簡單的 API</h2>
        <p>我給 GPT 的 prompt 不算太難：</p>
        
        <blockquote>
          <p>建立一個註冊 API，使用 email 和 password。</p>
          <p>用 bcrypt 加密密碼。</p>
          <p>寫一個登入 API，使用 JWT。</p>
          <p>用 MongoDB 存放使用者資料。</p>
        </blockquote>
        
        <p>GPT 幾乎是秒回範本，從 app.js 設定、routes/auth.js 到 models/User.js，整包送上來。</p>
        
        <p>老實說，第一眼看到的時候有點感動，連 middleware 和錯誤處理都有示意。但我馬上發現幾個問題：</p>
        
        <h3>問題一：JWT 秘鑰根本沒放進 .env</h3>
        <p>GPT 生成的程式碼寫了 <span class="keyword">jwt.sign(payload, process.env.JWT_SECRET)</span>，但根本沒提到 .env 要怎麼寫、也沒裝 dotenv 套件。</p>
        
        <p>這個對老手來說不是什麼大事，但對初學者來說會卡關。</p>
        
        <h3>問題二：沒有驗證 email 格式，也沒有防止重複註冊</h3>
        <p>你以為 GPT 會自己幫你防呆嗎？沒有。email 欄位也沒做唯一索引設定，註冊十次同一個 email 也完全沒事。</p>
        
        <h3>問題三：錯誤處理太樂觀</h3>
        <p>GPT 給的 try-catch 都非常寬鬆，幾乎是「有錯就回 500」，完全沒有細緻處理，例如密碼錯誤、使用者不存在、資料庫連線錯誤等等。</p>
        
        <pre><code><span class="comment">// GPT 生成的錯誤處理示例</span>
<span class="keyword">try</span> {
  <span class="comment">// 一大堆邏輯</span>
} <span class="keyword">catch</span> (error) {
  <span class="function">console</span>.<span class="function">error</span>(error);
  <span class="keyword">return</span> res.<span class="function">status</span>(500).<span class="function">json</span>({ 
    message: <span class="string">'Server error'</span> 
  });
}</code></pre>
        
        <h3>問題四：MongoDB schema 過度簡化</h3>
        <p>只存 email 和 hashed password，沒加時間戳記、也沒有驗證欄位格式或長度。這雖然不能說錯，但距離 production-ready 的設計還差很遠。</p>
        
        <pre><code><span class="comment">// GPT 生成的 User Schema</span>
<span class="keyword">const</span> userSchema = <span class="keyword">new</span> <span class="function">mongoose.Schema</span>({
  email: {
    type: <span class="type">String</span>,
    required: <span class="keyword">true</span>
  },
  password: {
    type: <span class="type">String</span>,
    required: <span class="keyword">true</span>
  }
});</code></pre>
        
        <h3>問題五：你還是得自己查文件</h3>
        <p>我後來還是打開了 MongoDB 官網、JWT 的官方文件、看了一些 Express middleware 的寫法。因為 GPT 不會幫你思考「這樣設計合不合理」，它只會給你「常見寫法的平均值」。</p>
        
        <h2>那 GPT 到底有沒有幫上忙？</h2>
        <p>有的，它幫我節省了非常多的 boilerplate 時間。尤其在我想要快速建立 API 架構的時候，GPT 可以迅速把結構搭起來。比我自己一行一行慢慢寫快上三倍以上。</p>
        
        <p>但最關鍵的「架構設計」、「資料驗證」、「安全性考量」仍然要靠自己。GPT 會寫程式，不代表它會寫「對的程式」。</p>
        
        <h2>結論：AI 可以寫程式，但不能取代工程師</h2>
        <p>我們不是被 GPT 淘汰，而是被不懂得思考又全信 AI 的自己淘汰。</p>
        
        <p>你還是需要懂：</p>
        
        <ul>
          <li>怎麼設計資料結構</li>
          <li>什麼邏輯該寫在哪</li>
          <li>錯誤該怎麼處理才安全</li>
          <li>哪些地方會有資安風險</li>
        </ul>
        
        <p>否則你寫出來的 API，看起來可以用，其實全是地雷。</p>
        
        <h2>如果你也想讓 AI 寫得更聰明，可以這樣做：</h2>
        <ul>
          <li>先自己手動設計邏輯，再丟給 GPT 協助實作。</li>
          <li>把規範和錯誤處理流程明確寫進 prompt。</li>
          <li>測試後，把錯誤訊息貼回去請 GPT 幫你修正，但自己也要思考修得對不對。</li>
          <li>把 prompt 和回答當作「討論」，而不是「命令」。</li>
        </ul>
        
        <p>最後，如果你有 AI 協作開發、Side Project 整合或是考試輔導需求，也歡迎與我聯絡。</p>
        <p>我習慣把 GPT 當作技術夥伴，用它強化產出速度，但也知道什麼時候要自己出手。</p>
        
        <p>完整履歷與作品集請見：<br>
        <a href="https://weigo-resume.deno.dev/" class="text-accent hover:underline">https://weigo-resume.deno.dev/</a></p>
      `
    },
    {
      id: 6,
      title: 'AI 幫我 debug：從 prompt 到結果，我是怎麼訓練它找到關鍵問題的',
      description: '分享如何有效使用AI作為debug助手，從提供正確上下文到思維鏈提示法，讓AI成為您的實戰夥伴。',
      date: '2025-05-10',
      link: 'https://example.com/article6',
      tags: ['AI', 'Debug', '開發技巧'],
      content: `
        <h2>我們這一代工程師很幸運</h2>
        <p>Debug 不再是深夜一個人對著 terminal 吶喊的事了。有了 AI 工具後，理論上可以少踩雷、多睡覺——但你真的用得對嗎？</p>
        
        <p>我不是說 ChatGPT、DeepSeek、Grok 或其他模型有多神。我是說，我們得學會「怎麼用它們幫你 debug」，才能讓這群語言模型變成你的實戰夥伴，而不是會講幹話的 intern。</p>
        
        <p>這篇文章就是要分享，我平常是怎麼把 AI 變成我的 debug 助手的。</p>
        
        <h2>一、Debug 用 AI，重點不是問「錯在哪」，而是提供「上下文」</h2>
        <p>AI debug 的第一步：你不能只貼錯誤訊息，然後問它怎麼解決。</p>
        
        <p>這樣只會讓你拿到 Stack Overflow 抄來的標準回答（而且通常沒用）。</p>
        
        <p>我會這樣做：</p>
        
        <ul>
          <li>貼錯誤訊息，但只貼最有意義的部分</li>
          <li>附上錯誤發生的上下文程式碼（最多20行）</li>
          <li>說明「我目前的預期是什麼，實際發生了什麼」</li>
        </ul>
        
        <p>例如不是說：</p>
        
        <pre><code><span class="keyword">SyntaxError</span>: Unexpected token ')'</code></pre>
        
        <p>而是說：</p>
        
        <pre><code>我正在用一個遞迴函式過濾巢狀物件，但在跑 map 時出現 <span class="keyword">SyntaxError</span>，我懷疑是我在 return 的結構出錯了，以下是該段程式碼：
...
</code></pre>
        
        <p>你給 AI 的 prompt 有多清楚，它給你的幫助就有多精準。</p>
        
        <h2>二、我用「AI 思維鏈提示法」提高命中率</h2>
        <p>有時候我會遇到比較複雜的邏輯 bug，AI 回答一次根本看不懂，我就會開啟我自創的：</p>
        
        <p><span class="keyword">思維鏈提示法</span>（Chain of Thought Prompting for Debug）</p>
        
        <p>簡單說，我會逼 AI 用「一步步推理」的方式解釋 bug 發生的邏輯，不要直接給我結論。</p>
        
        <p>舉個例子：</p>
        
        <pre><code>這段程式碼報錯：xxx。請你不要直接給我答案，而是一步步分析它會依序執行什麼，在哪裡可能出錯。</code></pre>
        
        <p>這種方式比單純「幫我找 bug」要有效很多，因為：</p>
        
        <ul>
          <li>它會自我檢查推理流程</li>
          <li>你可以中途打斷、補充更多資訊</li>
          <li>很容易看出它是不是搞錯方向</li>
        </ul>
        
        <p>我甚至會把 DeepSeek 或 Gemini 的這種思維鏈，copy 貼給其他模型當參考，這在我之前的另一篇有分享過（可以搞出一種 pseudo-cooperation 模式）。</p>
        
        <h2>三、模型選擇策略：誰來 debug，哪個模型最會查邏輯？</h2>
        <p>每個模型的邏輯推理力不一樣，我自己測下來，debug 時會這樣選：</p>
        
        <ul>
          <li><span class="keyword">DeepSeek V3 R1</span>：最會拆解邏輯和變數追蹤，適合複雜流程的錯誤分析</li>
          <li><span class="keyword">Claude 3.5</span>：很會抓程式碼風格與設計失誤（尤其錯在架構設計而非語法）</li>
          <li><span class="keyword">GPT-4 Turbo</span>：萬用型，對 prompt 相當穩定，也能處理偏框架面的問題</li>
          <li><span class="keyword">Grok</span>：我會讓它試試，但偏向「觀察角度」用途</li>
        </ul>
        
        <p>我常做的事是：「不同模型問一次，看誰講得通」，這其實跟請教不同資深工程師 debug 一樣，角度不同會補彼此盲點。</p>
        
        <h3>實例：用 AI 查找一個循環引用錯誤</h3>
        <pre><code><span class="comment">// 錯誤訊息</span>
<span class="keyword">ReferenceError</span>: Cannot access 'ProcessManager' before initialization

<span class="comment">// 思維鏈分析示例</span>
<span class="type">模型</span>: 讓我們一步步追蹤代碼執行流程...
1. 首先導入依賴
2. <span class="keyword">FileManager</span> 被引入，但 FileManager.js 內部引用了 ProcessManager
3. ProcessManager.js 內部又引用了 FileManager
4. 形成循環引用，導致初始化順序問題

<span class="comment">// 解決方案</span>
<span class="function">重構代碼</span>，將共享功能抽離到第三個模組，打破循環依賴</code></pre>
        
        <h2>四、如果 AI 給錯方向，該怎麼辦？</h2>
        <p>這邊有個關鍵心法：</p>
        
        <p>AI 給錯答案不是浪費時間，而是你 prompt 的回饋機會。</p>
        
        <p>我通常不會直接否定，而是用這些句子回饋讓它修正思路：</p>
        
        <ul>
          <li>「你剛剛的推理好像跳過了某段函式，我貼給你看」</li>
          <li>「你的假設前提是錯的，實際輸入是 xxx」</li>
          <li>「請再重看這段執行流程，從上往下一步步推理一次」</li>
        </ul>
        
        <p>這些做法其實就像在「引導 junior 工程師想清楚錯在哪」，AI 模型會跟你一起進化 prompt 使用能力。</p>
        
        <h2>結語：會 debug 的 AI，本質上是你 prompt 出來的</h2>
        <p>AI debug 不是魔法，也不是智慧光環，它更像是一面鏡子：你給它的資訊夠清楚、夠條理，它就能幫你還原錯誤背後的邏輯。</p>
        
        <p>所以下次你遇到 bug，不妨試著這樣問問你的 AI 夥伴：</p>
        
        <ul>
          <li>說說錯誤的上下文</li>
          <li>給它一點推理空間</li>
          <li>多一點反饋，少一點責備</li>
        </ul>
        
        <p>它也許不會馬上修好 bug，但它會讓你變成一個「更會想清楚的工程師」。</p>
        
        <p>如果你有自己用 AI debug 的特殊套路，也歡迎留言交流。<br>
        下一篇我想寫「如何用 AI 加速寫測試」，或者「AI 幫我看 legacy code 的奇技淫巧」，如果你想先看哪一篇，也可以跟我說。</p>
      `
    },
    {
      id: 5,
      title: '當 Side Project 不只是玩玩而已：如何把小工具變成能自用、可上線的產品',
      description: '分享如何將個人開發的小工具轉變為實用的線上產品，並探討從開發到部署的全過程。',
      date: '2024-05-01',
      link: 'https://weigo-json-coverter.deno.dev',
      tags: ['Side Project', '產品開發', '部署'],
      content: `
        <h2>初衷只是「寫給自己用」</h2>
        <p>一開始這個工具只是我在開發 API 或測試資料時常用的格式轉換需求。複製資料後要整理格式、刪掉某些欄位、統一欄位名稱……這些事天天在做，手動做一次就煩一次。</p>
        
        <p>我沒想太多，直接用 JavaScript 寫了個頁面搭配 textarea 操作，簡單搞定，完全自用。但某天我突然想到：</p>
        
        <p>「其實把它部署上去，也沒多難，乾脆讓未來的自己打開網址就能用了。」</p>
        
        <p>這句話開啟了從 side project 到可用產品的轉變過程。</p>
        
        <h2>我怎麼把它「產品化」？</h2>
        
        <h3>1. 把代碼寫得比「湊合能跑」再乾淨一點</h3>
        <p>很多 side project 是這樣：「能動就好、console.log 到死」。但如果想要讓它變成「真的能用」，至少要做到幾件事：</p>
        
        <ul>
          <li>把邏輯抽成 functions（未來可測）</li>
          <li>將資料處理與 UI 分離</li>
          <li>切乾淨一點的 error handling，讓錯誤不會直接炸出 raw JSON</li>
        </ul>
        
        <p>不是追求完美，而是做到「我願意以它作為作品丟出來」，這是心態上的轉換。</p>
        
        <h3>2. 選一個免費又快的部署方式</h3>
        <p>部署小工具其實有很多方式，我個人推薦 Cloudflare Workers 搭配 Deno Deploy 或 Vercel（取決於你用的技術棧）。我自己是用 Deno Deploy：</p>
        
        <ul>
          <li>部署免伺服器設定</li>
          <li>支援原生 TypeScript / JS</li>
          <li>整個專案一個 GitHub repo 搞定，部署只要 push</li>
        </ul>
        
        <p>簡單講：「寫完馬上上」，適合像我這樣只是想讓工具趕快能用的人。</p>
        
        <h3>3. 設計要極簡，UI 不要自我感覺良好</h3>
        <p>這類工具基本上就是一件事：「讓人快速完成任務」。</p>
        <p>所以我界面幾乎沒有設計，只有輸入框、選項與結果輸出。沒有浮動按鈕、沒有動畫特效，因為重點是 快用完，快關掉。</p>
        <p>就像 Google 翻譯一樣，開起來就是要「馬上開始做事」。</p>
        
        <pre><code><span class="comment">// 極簡UI設計範例</span>
<span class="keyword">function</span> <span class="function">JsonFormatter</span>() {
  <span class="keyword">return</span> (
    <span class="keyword">&lt;div</span> className=<span class="string">"formatter"</span><span class="keyword">&gt;</span>
      <span class="keyword">&lt;textarea</span>
        value={input}
        onChange={handleChange}
        placeholder=<span class="string">"貼上您的JSON..."</span>
      <span class="keyword">/&gt;</span>
      
      <span class="keyword">&lt;div</span> className=<span class="string">"options"</span><span class="keyword">&gt;</span>
        <span class="keyword">&lt;button</span> onClick={formatJson}<span class="keyword">&gt;</span>格式化<span class="keyword">&lt;/button&gt;</span>
        <span class="keyword">&lt;button</span> onClick={minifyJson}<span class="keyword">&gt;</span>最小化<span class="keyword">&lt;/button&gt;</span>
      <span class="keyword">&lt;/div&gt;</span>
      
      <span class="keyword">&lt;textarea</span>
        value={output}
        readOnly
      <span class="keyword">/&gt;</span>
    <span class="keyword">&lt;/div&gt;</span>
  );
}</code></pre>
        
        <h3>4. 有機會就放上去，哪怕只有 3 個人用</h3>
        <p>很多人會想：「這種工具會有人用嗎？」</p>
        <p>老實說，我也不知道。但如果你連放上去都不做，那永遠不會知道。事實上，我把這個工具放上去後，某天在 log 裡看到來自美國、印度的 IP，瞬間就很爽——</p>
        
        <p>「原來世界上真的有人用我寫的東西！」</p>
        
        <h2>一點點產品思維的火苗</h2>
        <p>這次經驗也讓我開始思考另一件事：<br>
        即使是這麼小的 side project，也可以練習「產品思維」。</p>
        
        <ul>
          <li>怎麼讓使用者第一次就會用？</li>
          <li>怎樣處理錯誤才不會嚇到人？</li>
          <li>我要不要收集 email？（我後來還真的加了）</li>
        </ul>
        
        <p>這不只是一個工具，而是一個微型產品的雛形。從技術面出發，慢慢往「使用者體驗」、「需求驗證」去延伸，這其實就是產品開發的縮影。</p>
        
        <h2>結語：不是所有 side project 都要變產品，但值得試一次</h2>
        <p>你不用逼自己每個小工具都要變成 SaaS，但至少試一次，體驗看看「寫給自己用」與「寫給其他人用」之間的差距。</p>
        <p>有時候那只是多加一個 .deploy.ts 的距離，但你能學到的卻是產品思維、工具整合、使用者觀點，以及——<br>
        一點點成就感。</p>
      `
    },
    {
      id: 4,
      title: '善用「思維鏈 AI」強化開發流程：一種混合調度的實戰策略',
      description: '探討如何透過混合不同 AI 模型的優勢，打造更高效的開發流程與架構設計。',
      date: '2025-04-15',
      link: 'https://example.com/article4',
      tags: ['AI', '開發流程', '系統設計'],
      content: `
        <h2>近年來 AI 工具在開發流程中扮演的角色越來越重要</h2>
        <p>從產出樣板程式碼到協助系統設計，幾乎已成為技術人日常的一部分。但我想談的不是「AI 可以做什麼」，而是「怎麼讓不同 AI 各自發揮最大價值」，尤其是在大型專案開發時。</p>
        
        <h2>問題來了：不是每個 AI 都懂你要什麼</h2>
        <p>我在處理一個邏輯複雜、模組交錯的大型系統時，曾經單靠某一種語言模型進行規劃與編寫，但效果並不理想。不是回答太表面，就是拆解流程不夠細緻，導致開發中出現斷層與回修，效率非常差。</p>
        
        <p>後來我觀察到，像 <span class="keyword">DeepSeek</span> 或 <span class="keyword">Google</span> 的模型（例如 Gemini 系列）在處理「<span class="keyword">思維鏈</span>」（Chain-of-Thought）任務時表現特別好，這讓我開始轉換策略。</p>
        
        <h2>策略：先用思維鏈模型拆邏輯，再交由其他模型實作</h2>
        <p>我的做法是這樣的：</p>
        
        <h3>1. 用思維鏈強的模型（如 DeepSeek）做邏輯規劃</h3>
        <ul>
          <li>提問方式明確，例如：「<span class="string">請幫我設計一個多模組資料處理架構，資料從 A 模組流向 B，再由 B 觸發條件進入 C。請列出流程與異常情境。</span>」</li>
          <li>模型會清楚拆解流程、補出我沒想周到的邊緣情境，這在系統設計階段特別關鍵。</li>
        </ul>
        
        <h3>2. 把這些結構性結果餵給另一個模型（如 ChatGPT）執行細部生成</h3>
        <ul>
          <li>這些模型可能沒有完整的邏輯拆解能力，但在語法生成、錯誤容忍、語意潤飾等細節處理上效率極高。</li>
        </ul>
        
        <p>這種「<span class="keyword">模型分工</span>」的概念，就像你不會用資料庫來畫圖，也不會叫前端框架處理訊號擷取一樣，工具之間的優劣勢應該互補。</p>
        
        <h2>這樣的做法，讓我在專案上獲得哪些實際成效？</h2>
        <ul>
          <li>避免架構思考卡住或遺漏情境（這種錯誤通常成本很高）</li>
          <li>提升生成程式碼的正確率與一致性，特別是在模組間資料串接這種容易出 bug 的場景</li>
          <li>加速開發週期，從一開始就能較有信心地動手做，而不是邊做邊改</li>
        </ul>
        
        <h2>我的體悟：AI 只是工具，重要的是使用方法</h2>
        <p>我越來越相信，善用 AI 的關鍵不是看哪個模型「最強」，而是懂得把「對的問題」丟給「擅長回答的對象」。AI 是你的副程式設計師，不是神；但你是一個架構師，要懂得怎麼指派工作給不同的幫手。</p>
        
        <pre><code><span class="comment">// 思維鏈模型處理邏輯設計</span>
<span class="keyword">function</span> <span class="function">designArchitecture</span>() {
  <span class="keyword">const</span> logicalFlow = <span class="function">chainOfThoughtModel</span>.query({
    prompt: <span class="string">"設計一個資料處理架構，從輸入到輸出..."</span>,
    detail: <span class="string">"需要考慮異常處理、邊緣情況..."</span>
  });
  
  <span class="keyword">return</span> logicalFlow;
}

<span class="comment">// 實作模型處理具體代碼生成</span>
<span class="keyword">function</span> <span class="function">implementDesign</span>(logicalFlow) {
  <span class="keyword">const</span> codeImplementation = <span class="function">implementationModel</span>.generate({
    architecture: logicalFlow,
    language: <span class="string">"TypeScript"</span>,
    patterns: [<span class="string">"Observer"</span>, <span class="string">"Factory"</span>]
  });
  
  <span class="keyword">return</span> codeImplementation;
}</code></pre>
        
        <p>在這個多模型共存的時代，AI 工具之間的混合調度將會成為開發者的重要技能之一。如果你也在與 AI 一起開發，不妨試試這種「邏輯設計由思維鏈模型領軍、實作細節交給執行效率高的模型」的搭配方式，也許會找到不同以往的開發節奏。</p>
      `
    },
    {
      id: 1,
      title: '如何有效提升前端開發效率',
      description: '本文探討了前端開發中的常見問題及解決方案，助您提高工作效率。',
      date: '2023-05-15',
      link: 'https://example.com/article1',
      tags: ['前端', 'React', '效率'],
      content: `
        <p>在現代前端開發中，提高效率至關重要。本文將分享一些實用技巧，幫助開發者更有效地工作。</p>
        
        <h2>善用開發工具</h2>
        <p>現代編輯器如 <span class="keyword">VS Code</span> 提供了豐富的擴充功能，例如：</p>
        <ul>
          <li><span class="function">ESLint</span> 和 <span class="function">Prettier</span> 用於<span class="keyword">代碼格式化</span>和品質檢查</li>
          <li><span class="function">GitLens</span> 更好地追蹤<span class="keyword">代碼變更</span></li>
          <li><span class="function">Auto Import</span> 自動引入模組</li>
        </ul>
        
        <h2>組件化開發</h2>
        <p>將界面拆分為<span class="keyword">可重用的組件</span>可以顯著提高開發效率：</p>
        <ul>
          <li>降低代碼重複</li>
          <li>使維護變得更容易</li>
          <li>提高團隊協作效率</li>
        </ul>
        
        <h2>自動化測試</h2>
        <p>實施<span class="keyword">自動化測試</span>可以減少錯誤並提高代碼質量：</p>
        <ul>
          <li><span class="type">單元測試</span>確保各組件正常工作</li>
          <li><span class="type">整合測試</span>檢查組件之間的交互</li>
          <li><span class="type">端到端測試</span>模擬用戶行為</li>
        </ul>
        
        <h3>Jest 測試示例</h3>
        <pre><code>// 導入測試組件
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from './Counter';

// 測試套件
describe('Counter Component', () => {
  test('初始值應為零', () => {
    render(<Counter />);
    const counterValue = screen.getByText(/count: 0/i);
    expect(counterValue).toBeInTheDocument();
  });

  test('點擊增加按鈕後值應增加', async () => {
    render(<Counter />);
    const incrementButton = screen.getByRole('button', { name: /increment/i });
    await userEvent.click(incrementButton);
    const counterValue = screen.getByText(/count: 1/i);
    expect(counterValue).toBeInTheDocument();
  });
});</code></pre>
        
        <p>透過這些方法，您可以顯著提高前端開發效率，創建更穩定、可維護的應用程序。</p>
      `
    },
    {
      id: 2,
      title: 'TypeScript 進階技巧分享',
      description: '深入了解 TypeScript 的高級功能與應用技巧，讓代碼更加健壯。',
      date: '2023-08-22',
      link: 'https://example.com/article2',
      tags: ['TypeScript', '前端'],
      content: `
        <p>TypeScript 已成為現代前端開發的重要工具，它的<span class="keyword">靜態類型檢查</span>可以幫助我們寫出更健壯的代碼。</p>
        
        <h2>泛型的高級用法</h2>
        <p><span class="type">泛型</span>是 TypeScript 中最強大的特性之一：</p>
        <pre><code><span class="keyword">function</span> <span class="function">identity</span>&lt;<span class="type">T</span>&gt;(arg: <span class="type">T</span>): <span class="type">T</span> {
  <span class="keyword">return</span> arg;
}

<span class="keyword">const</span> value = <span class="function">identity</span>&lt;<span class="type">string</span>&gt;(<span class="string">'Hello TypeScript'</span>);</code></pre>
        
        <h2>條件類型</h2>
        <p>條件類型允許我們基於一個條件來選擇類型：</p>
        <pre><code><span class="keyword">type</span> <span class="type">NonNullable</span>&lt;<span class="type">T</span>&gt; = <span class="type">T</span> <span class="keyword">extends</span> <span class="type">null</span> | <span class="type">undefined</span> ? <span class="type">never</span> : <span class="type">T</span>;
<span class="keyword">const</span> result: <span class="type">NonNullable</span>&lt;<span class="type">string</span> | <span class="type">null</span>&gt; = <span class="string">'Hello'</span>;</code></pre>
        
        <h2>映射類型</h2>
        <p>映射類型可以基於舊類型創建新類型：</p>
        <pre><code><span class="keyword">type</span> <span class="type">Readonly</span>&lt;<span class="type">T</span>&gt; = {
  <span class="keyword">readonly</span> [<span class="type">P</span> <span class="keyword">in</span> <span class="keyword">keyof</span> <span class="type">T</span>]: <span class="type">T</span>[<span class="type">P</span>];
};</code></pre>
        
        <h3>實際應用示例</h3>
        <pre><code><span class="keyword">interface</span> <span class="type">User</span> {
  id: <span class="type">number</span>;
  name: <span class="type">string</span>;
  email: <span class="type">string</span>;
}

<span class="comment">// 創建一個只讀版本的 User 類型</span>
<span class="keyword">type</span> <span class="type">ReadonlyUser</span> = <span class="type">Readonly</span>&lt;<span class="type">User</span>&gt;;

<span class="comment">// 創建一個所有字段都是可選的 User 類型</span>
<span class="keyword">type</span> <span class="type">PartialUser</span> = <span class="type">Partial</span>&lt;<span class="type">User</span>&gt;;

<span class="comment">// 從 User 類型中提取指定字段</span>
<span class="keyword">type</span> <span class="type">UserCredentials</span> = <span class="type">Pick</span>&lt;<span class="type">User</span>, <span class="string">'email'</span> | <span class="string">'id'</span>&gt;;</code></pre>
        
        <p>通過掌握這些高級類型功能，我們可以更有效地使用 TypeScript 提高代碼品質。</p>
      `
    },
    {
      id: 3,
      title: '響應式設計的最佳實踐',
      description: '分享響應式網站設計的關鍵原則和技術實現方法。',
      date: '2023-11-03',
      link: 'https://example.com/article3',
      tags: ['CSS', '響應式設計', '前端'],
      content: `
        <p>響應式設計讓網站可以在不同設備上提供最佳的瀏覽體驗，本文將介紹一些關鍵原則和技術。</p>
        
        <h2>流體網格</h2>
        <p>使用<span class="keyword">相對單位</span>而非固定像素值：</p>
        <pre><code><span class="function">.container</span> {
  width: <span class="keyword">100%</span>;
  max-width: <span class="keyword">1200px</span>;
  margin: <span class="keyword">0 auto</span>;
}</code></pre>
        
        <h2>媒體查詢的有效使用</h2>
        <p>針對不同的螢幕尺寸使用<span class="keyword">媒體查詢</span>：</p>
        <pre><code><span class="keyword">@media</span> (max-width: <span class="keyword">768px</span>) {
  <span class="function">.sidebar</span> {
    display: <span class="keyword">none</span>;
  }
  <span class="function">.main-content</span> {
    width: <span class="keyword">100%</span>;
  }
}</code></pre>
        
        <h2>靈活的圖片</h2>
        <p>確保圖片可以調整大小：</p>
        <pre><code><span class="function">img</span> {
  max-width: <span class="keyword">100%</span>;
  height: <span class="keyword">auto</span>;
}</code></pre>
        
        <h2>移動優先設計</h2>
        <p>從<span class="keyword">移動設備</span>開始設計，然後再擴展到更大的屏幕：</p>
        <pre><code><span class="comment">/* 基本樣式 (移動設備) */</span>
<span class="function">.element</span> { <span class="comment">/* ... */</span> }

<span class="comment">/* 中等屏幕 */</span>
<span class="keyword">@media</span> (min-width: <span class="keyword">768px</span>) {
  <span class="function">.element</span> { <span class="comment">/* ... */</span> }
}

<span class="comment">/* 大屏幕 */</span>
<span class="keyword">@media</span> (min-width: <span class="keyword">1024px</span>) {
  <span class="function">.element</span> { <span class="comment">/* ... */</span> }
}</code></pre>

        <h3>使用 Flexbox 和 Grid 佈局</h3>
        <pre><code><span class="comment">/* Flexbox 佈局示例 */</span>
<span class="function">.container</span> {
  display: <span class="keyword">flex</span>;
  flex-wrap: <span class="keyword">wrap</span>;
  gap: <span class="keyword">20px</span>;
}

<span class="function">.item</span> {
  flex: <span class="keyword">1 1 300px</span>;
}

<span class="comment">/* Grid 佈局示例 */</span>
<span class="function">.grid-container</span> {
  display: <span class="keyword">grid</span>;
  grid-template-columns: <span class="keyword">repeat(auto-fill, minmax(250px, 1fr))</span>;
  gap: <span class="keyword">20px</span>;
}</code></pre>
        
        <p>通過這些技術，您可以創建在各種設備上都能完美運行的網站。</p>
      `
    },
    {
      id: 7,
      title: '從一頁式產品頁測市場：我用 Cloudflare Workers + Next.js 做 MVP 的流程與心得',
      description: '分享如何用極低成本快速驗證產品方向，從技術選型到實際部署的完整經驗。',
      date: '2025-05-14',
      link: 'https://example.com/article7',
      tags: ['Side Project', 'Next.js', 'Cloudflare', 'MVP'],
      content: `
        <h2>過去幾週，我實驗了一個點子</h2>
        <p>做一個一頁式網站，用來測試某個小眾領域是否有市場需求。這不是單純寫頁面而已，而是想用極低成本，快速驗證產品方向可不可行。</p>
        
        <p>最終我選擇了用 Cloudflare Workers 搭配 Next.js 來完成整個 MVP，從開發到上線只花了幾個晚上。這篇文章會分享我整個流程、技術選型思考，以及一些實際碰到的坑與心得。</p>
        
        <h2>為什麼用一頁式網站？</h2>
        <p>有個殘酷的現實是：你做出來的產品，可能根本沒人要用。</p>
        
        <p>所以我不是從「做一整套系統」開始，而是選擇這樣的流程：</p>
        
        <ul>
          <li>只開發一個簡單 landing page（介紹、亮點、CTA）</li>
          <li>聚焦一件事：蒐集 email，看有沒有人願意「感興趣」</li>
          <li>若有反應，才考慮擴展功能（或直接轉方向）</li>
        </ul>
        
        <p>我把這當作一種「微型試水溫」：像廣撒漁網，不花太多錢、但得到真實市場反應。</p>
        
        <h2>技術選型：Cloudflare Workers + Next.js</h2>
        <p>為什麼選這兩個？</p>
        
        <h3>Next.js</h3>
        <ul>
          <li>寫慣了 React，Next 就是最快速的選擇</li>
          <li>靜態頁面與 Server Function 並存，寫起來舒服</li>
          <li>也支援未來擴充到 SSR、API Routes</li>
        </ul>
        
        <h3>Cloudflare Workers</h3>
        <ul>
          <li>幾乎免費，不用自己架伺服器</li>
          <li>Global edge 佈署，自動 CDN 加速</li>
          <li>支援 wrangler CLI，一行指令上線</li>
        </ul>
        
        <p>這個組合就是我目前測 MVP 最推的 tech stack：熟悉、快、幾乎零成本。</p>
        
        <h2>實作流程概覽</h2>
        <ol>
          <li>設計頁面內容（用 Notion 寫草稿）</li>
          <li>用 Next.js 切版與開發</li>
          <li>串接表單收集 email（我用簡單的 POST + KV）</li>
          <li>部署到 Cloudflare Workers</li>
          <li>用 Google Domains 綁定網域</li>
          <li>上廣告 or 丟社群，觀察 email 收集狀況</li>
        </ol>
        
        <h2>部署小訣竅</h2>
        <p>這裡是一些部署時的實用技巧，避免你踩雷：</p>
        
        <h3>1. next export 並不適合 Workers</h3>
        <p>雖然 Next 有 next export 可以產生純靜態頁，但會失去動態 API 的彈性。建議用 @cloudflare/next-on-pages，可以完整部署 Next 專案（支援 App Router）。</p>
        
        <h3>2. 使用 KV 儲存 email，不用額外後端</h3>
        <p>Cloudflare Workers 提供 KV，操作簡單、價格低又免維運。你可以把 email 存成：</p>
        
        <pre><code><span class="keyword">await</span> env.EMAILS.put(<span class="string">\`user:\${email}\`</span>, <span class="function">JSON.stringify</span>(meta))</code></pre>
        
        <h3>3. HTTPS 與網域很簡單就搞定</h3>
        <p>Google Domains 綁 Cloudflare DNS 大概 5 分鐘搞定，而且會自動配好 SSL。讓整個專案可以看起來「像樣的產品」。</p>
        
        <h2>收穫與反思</h2>
        <h3>優點：</h3>
        <ul>
          <li>全部成本接近 0 元（Cloudflare 免費，Next.js 開源）</li>
          <li>幾晚就能上線，馬上測市場反應</li>
          <li>實際蒐集到一些有效 email，證實了這個小主題有需求</li>
        </ul>
        
        <h3>缺點與挑戰：</h3>
        <ul>
          <li>Workers 在複雜 routing 或 middleware 上有限制（但對一頁式產品影響不大）</li>
          <li>若未來擴充登入、資料庫，就要思考更完整的架構（但至少已經獲得初步驗證）</li>
        </ul>
        
        <h2>結語：Side Project 不只是玩玩，而是用來驗證未來</h2>
        <p>我自己是工程師出身，也做過不少 side project。以前很多專案都卡在「寫爽了就停了」，但這次我試著用商業思維切入，把 side project 當作實驗一個能變現的方向。</p>
        
        <p>如果你也有一個產品 idea，與其一直想，不如試著用這樣的方式：</p>
        
        <ul>
          <li>簡單 landing page</li>
          <li>零成本快速上線</li>
          <li>用 email 或點擊率測市場反應</li>
        </ul>
        
        <p>搞不好你會發現，這次玩玩的小工具，反而成了下一份工作的切入點，甚至變現的起點。</p>
      `
    },
    {
      id: 8,
      title: '維護程式碼才是最重要的',
      description: '寫程式，人人會。寫得漂亮，也不難。真正困難的，是寫得讓自己三個月後看得懂、別人接手不想辭職。',
      date: '2025-05-16',
      link: 'https://example.com/article8',
      tags: ['程式碼品質', '維護', '開發流程'],
      content: `
        <h2>這不是笑話，而是每一個參與過大型專案工程師的共同經歷</h2>
        <p>我自己曾經參與過數十萬行以上的系統維護與重構，體會最深的不是「如何快速把功能做出來」，而是：如果你不一開始就想著怎麼維護，那你寫再快，也只是提早埋雷。</p>
        
        <h2>技術債，就是從「等一下再整理」開始的</h2>
        <p>多數專案開發初期都很樂觀，「先做出來、能跑就好」，等之後有空再整理。然後下一次就忙著改功能、忙著救 bug、忙著上線新版本，等回過頭來整理時，整段邏輯早就變成無人敢動的神秘遺跡。</p>
        
        <p>我看過一段跑了三年的資料同步腳本，誰都知道裡面有邏輯錯誤，但沒人敢改。不是不願意，而是根本不知道改了會不會影響其他業務流程——因為沒註解、沒測試、沒版本控制紀錄，唯一的說明文件是一封 2019 年的信件截圖。</p>
        
        <p>你說為什麼沒早點整理？主管說：「這功能只先跑三個月，之後再寫正式的」，結果就一直跑到今天。</p>
        
        <h2>快速上線、快速轉型、快速賺錢，然後怪新人不會接</h2>
        <p>說白一點，很多公司嘴巴說想要長期發展，其實只在意「能不能這季就賺錢」，只想著「這週可不可以快速上線」，於是程式碼越寫越糟、越積越厚。</p>
        <p>再來覺得維護太貴，就裁資深、請新人；結果新人接不動，又說「現在的年輕人怎麼這麼沒責任感」。</p>
        
        <p>當開發被看作消耗品、工程師變成堆功能機器，寫出能維護的程式反而變成一種奢侈品。那到頭來，也別怪人才流動快，大家紛紛轉職、不想背鍋，甚至寧願去麥當勞炸薯條，至少 SOP 清楚、工時透明、出錯不會扯全站掛掉。</p>
        
        <h2>什麼才是「能維護的程式碼」？</h2>
        <p>我不是要宣傳什麼理想化的工程信仰，只是說：你總得寫一份，讓自己半年後看得懂的程式碼吧？</p>
        
        <p>這是我對維護性程式碼的幾個標準：</p>
        
        <ul>
          <li>模組化，拆分職責，降低依賴</li>
          <li>寫清楚函式名稱與變數命名，盡量自我解釋</li>
          <li>該寫註解就寫，不要迷信「好程式不需要註解」</li>
          <li>log 該有就有，出問題時能追得回去</li>
          <li>留基本的測試，哪怕只是 sanity check</li>
        </ul>
        
        <p>你不一定要每個功能都寫得完美，但最少，別讓接手的人恨你。</p>
        
        <h2>最後：寫程式，寫的是團隊的未來</h2>
        <p>別忘了，程式碼不是寫給自己看的，是寫給團隊、寫給未來、寫給系統維運的人看的。</p>
        
        <p>一個系統是否成功，從來不是看它能不能上線，而是它能不能維持下去。你不會因為系統「寫得快」而成功，但你很可能會因為「改不起來」而崩潰。</p>
        
        <p>所以下次再有人說：「先做出來再說啦，回頭再整理」，請記得提醒他：如果你真的打算經營這個產品，就不要讓它變成只能用一次的原型。</p>
      `
    },
    {
      id: 9,
      title: '使用 AI Coding 的達克效應：當「資訊人員要被淘汰了」說法反覆上演',
      description: '在 AI 開始進入軟體開發流程的今天，「資訊人員要被淘汰了」這句話彷彿又捲土重來。有人把這句話當成玩笑，有人當作警訊，也有人真的深信不疑。',
      date: '2025-05-16',
      link: 'https://example.com/article9',
      tags: ['AI', '開發流程', '職涯發展'],
      content: `
        <p>在 AI 開始進入軟體開發流程的今天，「資訊人員要被淘汰了」這句話彷彿又捲土重來。有人把這句話當成玩笑，有人當作警訊，也有人真的深信不疑。但若你觀察 AI coding 在不同開發者之間的應用方式，會發現這背後其實是個典型的達克效應現象——<strong>能力不足時，信心反而越強</strong>。</p>
        
        <p>這篇文章不探討技術細節，而是站在一個開發者長期使用 AI 的視角，拆解出三個常見階段，看看那句「資訊人員會被取代」的口號，是怎麼在每一階段反覆被喊出，卻又代表著截然不同的含義。</p>
        
        <h2>階段一：初學者的幻象快感</h2>
        <p>對於剛學程式沒多久，或者剛接觸 AI coding 工具的初學者來說，AI 就像一把魔法杖。只要輸入幾行註解，整段功能就能快速產出，前端頁面、資料庫操作、API 呼叫樣樣都有。</p>
        
        <p>於是他們產生了這樣的認知：</p>
        
        <blockquote>
          <p>「我可以寫出很多程式，資訊人員應該要被淘汰了吧？」</p>
        </blockquote>
        
        <p>這其實是<strong>對「會動」與「做對」的混淆</strong>。AI 能產出可執行的代碼，卻未必是安全、可維護、可擴展的好設計。對初學者而言，AI 把「輸出結果」的門檻拉低了，卻也模糊了什麼才是軟體開發的本質。</p>
        
        <h2>階段二：中階者的流程進化</h2>
        <p>當開發者經歷過多人協作的專案、踩過技術債的坑、被 deadline 燒過幾次之後，開始意識到開發效率不是「寫得快」而已，還要「寫得一致」「寫得安全」「寫得可交接」。</p>
        
        <p>這時候，AI 開始從「輔助寫程式」轉為「優化流程與團隊管理」的角色。例如：</p>
        
        <ul>
          <li>使用 Cursor 的 rules 功能，統一 code style</li>
          <li>建立 prompt 規範，自動產出 PR template、文件草稿</li>
          <li>整合 linting、AI review 機制，降低低階錯誤</li>
          <li>用提示工程來幫助菜鳥提升 output 品質</li>
        </ul>
        
        <p>此時出現了第二次「資訊人員會被淘汰」的說法，但語境變了：</p>
        
        <blockquote>
          <p>「我可以用 AI 工具讓一小團隊保持品質穩定、開發快速，傳統開發流程可能會被淘汰。」</p>
        </blockquote>
        
        <p>這是建立在流程管理和工具理解之上的效率提昇，不再只是產出速度，而是整體開發文化的升級。</p>
        
        <h2>階段三：進階者的技術杠桿</h2>
        <p>當開發者對架構設計、系統模組化與團隊協作有更深刻的掌握，就會發現：AI 的價值不是寫程式，而是放大已有能力。</p>
        
        <p>他們建立自己的提示模板、自動化流程、低人力部署方案，透過 AI coding 成為少人高產的關鍵。此時，開發團隊甚至可以縮編，只靠幾位熟練工程師與良好設計的 AI flow，完成原本需要 3 倍人力的成果。</p>
        
        <p>這時他們再度說出那句話：</p>
        
        <blockquote>
          <p>「一小個菁英團隊確實可以做到 99% 高效率，某些資訊人員的工作模式，是該被淘汰了。」</p>
        </blockquote>
        
        <p>但這裡說的不是「人會被 AI 替代」，而是<strong>「不進步的人，會被新的技術工作模式取代」</strong>。</p>
        
        <h2>寫在最後：AI 讓專業的分界線更清晰</h2>
        <p>AI 不會取代開發者，但它正在重新定義「什麼是有價值的開發者」。那些願意學習、整合、優化流程的工程師，會變得更不可取代；而不斷仰賴直覺、重複低效率操作的人，則會被拉開距離。</p>
        
        <p>當 AI 讓新手更快產出結果，中階與進階者的價值就不在於寫得多快，而在於設計得多穩、流程建得多好、維護成本壓得多低。</p>
        
        <p>這不是 AI 對人的對抗，而是新的開發時代對專業的重新定義。</p>
      `
    }
  ];

  // 獲取所有標籤
  const allTags = Array.from(new Set(articles.flatMap(article => article.tags)));

  // 根據選定的標籤過濾文章，並按日期排序
  const filteredArticles = (selectedTag 
    ? articles.filter(article => article.tags.includes(selectedTag))
    : articles
  ).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const handleCloseArticle = () => {
    setSelectedArticle(null);
    // 恢復頁面滾動
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="blog" className="pb-8">
      <h2 className="text-accent text-2xl font-bold mb-4">文章分享</h2>
      <p className="text-text-secondary mb-8">
        以下是我撰寫的一些技術文章，分享我的知識和經驗。
      </p>

      {/* 標籤過濾器 */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setSelectedTag(null)}
          className={`px-3 py-1 text-sm rounded-full transition-colors ${
            selectedTag === null
              ? 'bg-accent text-background-primary'
              : 'bg-background-secondary text-text-secondary hover:bg-background-highlight'
          }`}
        >
          全部
        </button>
        {allTags.map(tag => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-3 py-1 text-sm rounded-full transition-colors ${
              selectedTag === tag
                ? 'bg-accent text-background-primary'
                : 'bg-background-secondary text-text-secondary hover:bg-background-highlight'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* 文章列表 */}
      <div className="space-y-6">
        {filteredArticles.map(article => (
          <div
            key={article.id}
            className="block p-5 rounded-lg bg-background-secondary hover:bg-background-highlight transition-colors"
          >
            <div 
              className="cursor-pointer"
              onClick={() => {
                setSelectedArticle(article);
                document.body.style.overflow = 'hidden';
              }}
            >
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  {article.title}
                </h3>
                <span className="text-sm text-text-tertiary">{article.date}</span>
              </div>
              <p className="text-text-secondary mb-4">{article.description}</p>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex flex-wrap gap-2">
                {article.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs rounded-full bg-background-primary text-text-tertiary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <button
                onClick={() => {
                  setSelectedArticle(article);
                  document.body.style.overflow = 'hidden';
                }}
                className="px-3 py-1 text-sm rounded-md bg-accent text-background-primary hover:bg-opacity-90 hover:scale-105 hover:shadow-md transition-all duration-200 flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
                查看詳情
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* 文章詳情彈窗 */}
      <AnimatePresence>
        {selectedArticle && (
          <ArticleDetail
            title={selectedArticle.title}
            content={selectedArticle.content || ''}
            date={selectedArticle.date}
            tags={selectedArticle.tags}
            onClose={handleCloseArticle}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Articles; 