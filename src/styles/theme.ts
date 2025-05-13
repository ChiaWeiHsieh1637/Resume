// 主題配色系統
export const colors = {
  background: {
    primary: '#0a192f',    // 主背景色（深海軍藍）
    secondary: '#112240',  // 次背景色（稍亮的深藍）
  },
  text: {
    primary: '#ccd6f6',    // 主文字色（淺灰藍）
    secondary: '#8892b0',  // 次文字色（低對比次要文字）
  },
  accent: '#64ffda',       // 強調色（螢光綠藍色）
};

// 字體設定
export const fontFamily = {
  primary: "'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  mono: "'Fira Code', 'Consolas', monospace",
};

// 斷點設定（響應式設計）
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

// 導出完整主題
const theme = {
  colors,
  fontFamily,
  breakpoints,
};

export default theme; 