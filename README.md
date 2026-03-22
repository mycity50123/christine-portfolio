# Christine Liang - 個人作品集網站

一個現代化、高質感的個人作品集網站，採用 React 19 + Tailwind CSS 4 + Notion API 構建。網站具有完整的響應式設計、動態內容管理系統，以及優雅的深色科技風格。

## 🎯 功能特性

### 核心功能

- **動態作品集管理**：通過 Notion 資料庫動態管理作品內容，無需修改代碼
- **分類過濾系統**：支援按 UI/UX & Web、Visual Graphics、Product & Packaging 等分類過濾作品
- **響應式設計**：完美適配桌面、平板、手機等多種設備
- **深色科技風格**：採用深色背景 + 金色強調色 + 青色互動元素的現代設計語言
- **優雅排版系統**：Playfair Display（標題）+ Poppins（副標題）+ Inter（正文）的精心設計

### 視覺設計

- **固定導覽列**：便捷的頁面導航與快速連結
- **Hero Section**：搶眼的開場介紹與 CTA 按鈕
- **作品卡片**：展示作品圖片、標題、時間、技術標籤
- **頁尾**：聯絡資訊與社交媒體連結

### 技術特性

- **快速開發**：Vite 提供極速的開發體驗
- **現代 CSS**：Tailwind CSS 4 內聯主題系統
- **組件化架構**：shadcn/ui 提供高質量的 UI 組件
- **無後端依賴**：純前端靜態網站，部署簡單

---

## 🛠️ 技術棧

| 技術 | 版本 | 用途 |
|------|------|------|
| React | 19 | UI 框架 |
| Vite | 7.1 | 構建工具 |
| Tailwind CSS | 4.1 | 樣式系統 |
| TypeScript | 5.6 | 類型檢查 |
| Wouter | 3.3 | 路由管理 |
| Framer Motion | 12.23 | 動畫效果 |
| Notion API | - | 內容管理 |

---

## 📁 項目結構

```
christine-portfolio/
├── client/                          # 前端應用
│   ├── public/                      # 靜態資源
│   │   ├── favicon.ico
│   │   └── robots.txt
│   ├── src/
│   │   ├── components/              # React 組件
│   │   │   ├── Navbar.tsx           # 導覽列
│   │   │   ├── HeroSection.tsx      # 開場區域
│   │   │   ├── PortfolioSection.tsx # 作品展示
│   │   │   ├── Footer.tsx           # 頁尾
│   │   │   └── ui/                  # shadcn/ui 組件
│   │   ├── pages/                   # 頁面組件
│   │   │   ├── Home.tsx             # 首頁
│   │   │   └── NotFound.tsx         # 404 頁面
│   │   ├── contexts/                # React Context
│   │   │   └── ThemeContext.tsx     # 主題上下文
│   │   ├── hooks/                   # 自訂 Hooks
│   │   ├── lib/                     # 工具函數
│   │   ├── App.tsx                  # 應用入口
│   │   ├── main.tsx                 # React 入口
│   │   └── index.css                # 全局樣式
│   └── index.html                   # HTML 模板
├── server/                          # 後端占位符（當前未使用）
├── shared/                          # 共享類型定義
├── .manus-logs/                     # 開發日誌
├── vite.config.ts                   # Vite 配置
├── tailwind.config.ts               # Tailwind 配置
├── tsconfig.json                    # TypeScript 配置
├── package.json                     # 依賴管理
├── NOTION_SETUP.md                  # Notion 設定指南
├── DEPLOYMENT_GUIDE.md              # 部署指南
└── README.md                        # 本文件
```

---

## 🚀 快速開始

### 前置要求

- Node.js 18+ 或 22+
- pnpm 10.4.1+（推薦）或 npm/yarn
- Git

### 本地開發

#### 1. 克隆倉庫

```bash
git clone https://github.com/mycity50123/christine-portfolio.git
cd christine-portfolio
```

#### 2. 安裝依賴

```bash
pnpm install
```

#### 3. 配置環境變數

在項目根目錄建立 `.env.local` 文件：

```bash
NOTION_TOKEN=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
NOTION_DATABASE_ID=32b40a999df18199942c0027504e329d
```

如果您還未設定 Notion，請參考 [NOTION_SETUP.md](./NOTION_SETUP.md)。

#### 4. 啟動開發伺服器

```bash
pnpm dev
```

開發伺服器將在 `http://localhost:3000` 啟動。

#### 5. 構建生產版本

```bash
pnpm build
pnpm preview
```

---

## 📝 設定 Notion 資料庫

### 快速設定步驟

1. **建立 Notion Integration**：訪問 [Notion Developers](https://www.notion.so/my-integrations) 建立新 Integration
2. **建立資料庫**：在 Notion 中建立 Portfolio 資料庫，包含以下欄位：
   - Title（標題）
   - Category（分類）
   - Date（日期）
   - TechStack（技術標籤）
   - CoverImage（封面圖片）
   - Description（描述）
3. **共享資料庫**：將 Integration 添加到資料庫的共享成員
4. **複製 ID**：複製 Integration Token 和資料庫 ID
5. **配置環境變數**：將 Token 和 ID 添加到 `.env.local`

詳細步驟請參考 [NOTION_SETUP.md](./NOTION_SETUP.md)。

---

## 🌐 部署到 Vercel

### 一鍵部署

1. 推送代碼到 GitHub
2. 訪問 [Vercel](https://vercel.com)
3. 點擊「Add New Project」並選擇您的倉庫
4. 配置環境變數
5. 點擊「Deploy」

### 詳細部署指南

請參考 [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) 了解完整的部署步驟，包括：

- 推送到 GitHub
- 部署到 Vercel
- 配置環境變數
- 自訂域名設定
- 常見問題解決

---

## 🎨 設計系統

### 色彩系統

| 用途 | 顏色 | 十六進制 |
|------|------|---------|
| 主色（金色） | Gold | `#D4AF37` |
| 強調色（青色） | Cyan | `#00D9FF` |
| 背景色 | Deep Navy | `#0F1419` |
| 文字色 | Light Gray | `#E8E8E8` |
| 邊框色 | Border Gray | `#2A2F3F` |

### 排版系統

- **標題**：Playfair Display, 700-800 weight
- **副標題**：Poppins, 500-700 weight
- **正文**：Inter, 400-600 weight
- **代碼**：Roboto Mono, 400-500 weight

### 間距系統

採用 4px 基礎網格系統，支援 Tailwind CSS 預設間距。

---

## 📱 響應式設計

網站採用移動優先的設計方法，完美適配以下設備：

| 設備 | 寬度 | 特性 |
|------|------|------|
| 手機 | < 640px | 單列佈局、漢堡選單 |
| 平板 | 640px - 1024px | 雙列佈局、簡化導航 |
| 桌面 | > 1024px | 三列佈局、完整功能 |

---

## 🔧 開發指南

### 添加新作品

1. 在 Notion 資料庫中新增記錄
2. 填寫所有必要欄位
3. 網站會自動更新（可能需要重新整理頁面）

### 修改設計

1. 編輯 `client/src/index.css` 修改全局樣式
2. 編輯各組件文件修改局部樣式
3. 使用 Tailwind CSS 工具類進行快速調整

### 添加新頁面

1. 在 `client/src/pages/` 中建立新頁面組件
2. 在 `client/src/App.tsx` 中添加路由
3. 在 Navbar 中添加導航連結

---

## 🐛 常見問題

### Q: 網站無法顯示作品內容

**A:** 請檢查以下項目：
- Notion Integration Token 是否正確
- 資料庫 ID 是否正確
- Integration 是否已被共享到資料庫
- 環境變數是否已正確配置

### Q: 部署到 Vercel 後樣式不正確

**A:** 這通常是 Tailwind CSS 配置問題。請確認：
- `tailwind.config.ts` 配置正確
- `client/src/index.css` 已正確導入
- 重新部署以應用最新配置

### Q: 如何自訂域名？

**A:** 請參考 [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) 中的「自訂域名設定」部分。

---

## 📚 學習資源

- [React 官方文檔](https://react.dev/)
- [Tailwind CSS 官方文檔](https://tailwindcss.com/)
- [Vite 官方文檔](https://vitejs.dev/)
- [Notion API 官方文檔](https://developers.notion.com/)
- [shadcn/ui 組件庫](https://ui.shadcn.com/)

---

## 📄 授權

本項目採用 MIT 授權。詳見 [LICENSE](./LICENSE) 文件。

---

## 👤 作者

**Christine Liang** - UI/UX Designer & Frontend Engineer

- 📧 Email：[mycity50123@gmail.com](mailto:mycity50123@gmail.com)
- 🔗 GitHub：[https://github.com/YOUR_USERNAME](https://github.com/YOUR_USERNAME)
- 💼 LinkedIn：[https://linkedin.com/in/YOUR_PROFILE](https://linkedin.com/in/YOUR_PROFILE)

---

## 🙏 致謝

感謝以下開源項目和工具的支持：

- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Notion](https://www.notion.so/)

---

## 📞 支持

如有任何問題或建議，歡迎：

1. 提交 GitHub Issues
2. 發送郵件至 [mycity50123@gmail.com](mailto:mycity50123@gmail.com)
3. 在 LinkedIn 上聯絡我

---

**最後更新**：2026 年 3 月 20 日

**版本**：1.0.0

祝您使用愉快！🚀
