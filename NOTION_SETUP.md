# Notion API 串接指南

本文檔說明如何建立 Notion 資料庫並與 Christine Liang 作品集網站進行串接。

## 第一步：建立 Notion Integration

### 1.1 前往 Notion Developers

訪問 [https://www.notion.so/my-integrations](https://www.notion.so/my-integrations)

### 1.2 建立新的 Integration

1. 點擊「+ New integration」按鈕
2. 填寫 Integration 名稱：`Christine Portfolio API`
3. 選擇 Associated workspace：選擇您的 Notion Workspace
4. 點擊「Submit」

### 1.3 複製 API Token

1. 在 Integration 頁面中找到「Internal Integration Token」
2. 點擊「Show」並複製 Token
3. **保存此 Token**，稍後將用於環境變數設定

## 第二步：建立 Notion 資料庫

### 2.1 在 Notion 中建立資料庫

1. 在您的 Notion Workspace 中建立新頁面
2. 輸入「Portfolio」作為頁面名稱
3. 選擇「Database」 → 「Table」
4. 建立以下欄位：

| 欄位名稱 | 欄位類型 | 說明 |
|---------|---------|------|
| Title | Title | 作品名稱（必填） |
| Category | Select | 分類：UI/UX & Web、Visual Graphics、Product & Packaging |
| Date | Date | 創作時間 |
| TechStack | Multi-select | 使用技術（如 Figma、Tailwind CSS 等） |
| CoverImage | Files & media | 封面圖片 |
| Description | Text | 作品描述 |
| ProjectLink | URL | 專案連結（可選） |

### 2.2 新增資料庫記錄

在資料庫中新增您的作品記錄，例如：

| Title | Category | Date | TechStack | Description |
|-------|----------|------|-----------|-------------|
| 遊戲集成網站 | UI/UX & Web | 2026-01-15 | JavaScript, Tailwind CSS, RWD | 全球領先的遊戲串接 API 專家平台 |
| 企業貸款網站 | UI/UX & Web | 2026-01-10 | Figma, AI, React | 專業貸款平台 |

## 第三步：連接 Integration 到資料庫

### 3.1 共享資料庫

1. 打開您建立的「Portfolio」資料庫
2. 點擊右上角的「Share」按鈕
3. 在「Invite」欄位中搜尋您建立的 Integration 名稱（`Christine Portfolio API`）
4. 選擇 Integration 並點擊「Invite」
5. 確認 Integration 已被新增到共享成員列表

## 第四步：取得資料庫 ID

### 4.1 複製資料庫 ID

1. 打開「Portfolio」資料庫
2. 在瀏覽器 URL 中找到資料庫 ID
   - URL 格式：`https://www.notion.so/workspace/[DATABASE_ID]?v=[VIEW_ID]`
   - 複製 `[DATABASE_ID]` 部分（32 個字符）

### 4.2 範例

```
URL: https://www.notion.so/christine-portfolio/a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6?v=xyz
DATABASE_ID: a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6
```

## 第五步：設定環境變數

### 5.1 建立 .env.local 文件

在專案根目錄建立 `.env.local` 文件：

```bash
NOTION_TOKEN=secret_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
NOTION_DATABASE_ID=a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6
```

### 5.2 環境變數說明

- `NOTION_TOKEN`：您從 Integration 複製的 API Token
- `NOTION_DATABASE_ID`：您的 Portfolio 資料庫 ID

## 第六步：實現 API 路由（可選 - 需升級到 web-db-user）

如果您需要後端 API 路由來串接 Notion，請升級專案到 `web-db-user` 功能。

### 6.1 升級專案

```bash
# 使用 webdev_add_feature 升級到 web-db-user
# 這將解鎖後端 API 路由功能
```

### 6.2 建立 API 路由

升級後，在 `server/` 目錄中建立 API 路由：

```typescript
// server/api/portfolio.ts
import { Router } from 'express';
import { Client } from '@notionhq/client';

const router = Router();
const notion = new Client({ auth: process.env.NOTION_TOKEN });

router.get('/api/portfolio', async (req, res) => {
  try {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID!,
    });
    
    const portfolio = response.results.map((page: any) => ({
      id: page.id,
      title: page.properties.Title.title[0]?.plain_text,
      category: page.properties.Category.select?.name,
      date: page.properties.Date.date?.start,
      techStack: page.properties.TechStack.multi_select.map((tag: any) => tag.name),
      description: page.properties.Description.rich_text[0]?.plain_text,
      image: page.properties.CoverImage.files[0]?.file?.url,
    }));
    
    res.json(portfolio);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch portfolio' });
  }
});

export default router;
```

## 常見問題

### Q: 我收到「401 Unauthorized」錯誤

**A:** 請檢查：
1. `NOTION_TOKEN` 是否正確複製
2. Integration 是否已被共享到資料庫
3. `.env.local` 文件是否在專案根目錄

### Q: 資料庫 ID 在哪裡找到？

**A:** 
1. 打開資料庫頁面
2. 查看瀏覽器 URL
3. 在 `/` 之後、`?` 之前的 32 個字符就是資料庫 ID

### Q: 我可以使用多個資料庫嗎？

**A:** 可以。建立多個環境變數（如 `NOTION_DATABASE_ID_2`）並在代碼中引用即可。

## 下一步

完成 Notion 設定後，您可以：

1. **前端動態載入**：在 React 組件中使用 fetch 調用 API 取得作品數據
2. **實時更新**：每次在 Notion 中新增或編輯作品時，網站會自動更新
3. **部署到 Vercel**：將環境變數添加到 Vercel 專案設定中

## 參考資源

- [Notion API 官方文檔](https://developers.notion.com/)
- [Notion SDK for JavaScript](https://github.com/makenotion/notion-sdk-js)
- [Notion Database Query API](https://developers.notion.com/reference/post-database-query)
