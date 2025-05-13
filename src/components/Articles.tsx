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
      id: 4,
      title: '善用「思維鏈 AI」強化開發流程：一種混合調度的實戰策略',
      description: '探討如何透過混合不同 AI 模型的優勢，打造更高效的開發流程與架構設計。',
      date: '2024-04-15',
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
    }
  ];

  // 獲取所有標籤
  const allTags = Array.from(new Set(articles.flatMap(article => article.tags)));

  // 根據選定的標籤過濾文章
  const filteredArticles = selectedTag 
    ? articles.filter(article => article.tags.includes(selectedTag))
    : articles;

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