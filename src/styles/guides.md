# 顏色系統使用指南

## 替換參照表
將以下硬編碼的顏色值替換為對應的主題變數：

| 硬編碼顏色 | 主題變數 |
|------------|----------|
| #0a192f    | bg-background-primary |
| #112240    | bg-background-secondary |
| #ccd6f6    | text-text-primary |
| #8892b0    | text-text-secondary |
| #64ffda    | text-accent, border-accent, etc. |

## 範例用法

```jsx
// 舊寫法（硬編碼）
<div className="bg-[#0a192f] text-[#ccd6f6]">
  <h1 className="text-[#ccd6f6]">標題</h1>
  <p className="text-[#8892b0]">內容</p>
  <span className="text-[#64ffda]">強調</span>
</div>

// 新寫法（使用主題變數）
<div className="bg-background-primary text-text-primary">
  <h1 className="text-text-primary">標題</h1>
  <p className="text-text-secondary">內容</p>
  <span className="text-accent">強調</span>
</div>
```

## 優點

1. **一致性**：確保整個應用程式使用相同的顏色
2. **易於維護**：需要變更主題時，只需修改一個地方
3. **語義化**：更清晰地表達顏色的意圖和用途
4. **開發體驗**：無需記住或複製色碼

## 附加功能

您也可以在 JavaScript/TypeScript 中直接使用這些顏色：

```typescript
import { colors } from '../styles/theme';

// 例如在動態樣式或 styled-components 中使用
const dynamicStyle = {
  backgroundColor: colors.background.primary,
  color: colors.text.primary
};
``` 