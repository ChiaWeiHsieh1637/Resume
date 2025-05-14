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