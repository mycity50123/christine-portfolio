# Christine Liang 作品集網站 - 部署指南

本文檔提供完整的部署步驟，幫助您將個人作品集網站部署到 Vercel 並連接自訂域名。

## 目錄

1. [前置準備](#前置準備)
2. [推送到 GitHub](#推送到-github)
3. [部署到 Vercel](#部署到-vercel)
4. [配置環境變數](#配置環境變數)
5. [自訂域名設定](#自訂域名設定)
6. [常見問題](#常見問題)

---

## 前置準備

在開始部署前，請確保您已準備好以下項目：

### 必要工具

- **Git**：版本控制系統，用於管理代碼
- **GitHub 帳號**：用於存放代碼倉庫
- **Vercel 帳號**：用於部署和託管網站
- **Notion 帳號**：用於管理作品集資料庫

### 必要資訊

- **NOTION_TOKEN**：Notion Integration API Token
- **NOTION_DATABASE_ID**：Notion 作品集資料庫 ID

如果您還未取得這些資訊，請先參考 [NOTION_SETUP.md](./NOTION_SETUP.md) 文件進行設定。

---

## 推送到 GitHub

### 步驟 1：初始化 Git 倉庫

如果您還未初始化 Git，請執行以下命令：

```bash
cd /path/to/christine-portfolio
git init
git add .
git commit -m "Initial commit: Christine Liang portfolio website"
```

### 步驟 2：建立 GitHub 倉庫

1. 訪問 [https://github.com/new](https://github.com/new)
2. 填寫倉庫名稱：`christine-portfolio`
3. 選擇 **Public**（公開倉庫）
4. 點擊「Create repository」

### 步驟 3：連接遠端倉庫

將本地倉庫連接到 GitHub：

```bash
git remote add origin https://github.com/https://github.com/mycity50123/christine-portfolio
git branch -M main
git push -u origin main
```

**注意**：將 `YOUR_USERNAME` 替換為您的 GitHub 用戶名。

### 步驟 4：驗證推送

訪問您的 GitHub 倉庫頁面，確認代碼已成功推送。

---

## 部署到 Vercel

### 步驟 1：連接 Vercel 帳號

1. 訪問 [https://vercel.com](https://vercel.com)
2. 點擊「Sign Up」並選擇「Continue with GitHub」
3. 授權 Vercel 訪問您的 GitHub 帳號

### 步驟 2：導入專案

1. 在 Vercel 儀表板中點擊「Add New...」
2. 選擇「Project」
3. 在「Import Git Repository」中搜尋 `christine-portfolio`
4. 點擊「Import」

### 步驟 3：配置專案設定

在「Configure Project」頁面中：

- **Project Name**：`christine-portfolio`（或您偏好的名稱）
- **Framework Preset**：選擇「Other」（因為這是 React + Vite 專案）
- **Root Directory**：保持預設（`.`）
- **Build Command**：`pnpm build`
- **Output Directory**：`dist/public`
- **Install Command**：`pnpm install`

### 步驟 4：部署

點擊「Deploy」按鈕，Vercel 將開始部署您的網站。部署通常需要 2-5 分鐘。

---

## 配置環境變數

### 步驟 1：在 Vercel 中添加環境變數

1. 進入您的 Vercel 專案頁面
2. 點擊「Settings」
3. 選擇左側菜單中的「Environment Variables」
4. 點擊「Add New」

### 步驟 2：添加 Notion 環境變數

添加以下兩個環境變數：

| 名稱 | 值 |
|------|-----|
| `NOTION_TOKEN` | 您的 Notion Integration Token |
| `NOTION_DATABASE_ID` | 您的 Portfolio 資料庫 ID |

### 步驟 3：重新部署

環境變數添加後，Vercel 會自動重新部署您的網站。您可以在「Deployments」選項卡中查看部署進度。

---

## 自訂域名設定

### 選項 A：使用 Vercel 提供的免費域名

Vercel 會自動為您的專案分配一個免費域名，格式為：

```
https://christine-portfolio.vercel.app
```

您可以在 Vercel 專案設定中查看此域名。

### 選項 B：連接自訂域名

如果您已購買自訂域名（如 `christine-portfolio.com`），請按以下步驟操作：

#### 步驟 1：在 Vercel 中添加域名

1. 進入 Vercel 專案的「Settings」
2. 選擇「Domains」
3. 點擊「Add」
4. 輸入您的自訂域名（如 `christine-portfolio.com`）
5. 點擊「Add」

#### 步驟 2：配置 DNS 記錄

Vercel 會提供 DNS 配置指示。根據您的域名提供商，執行以下操作：

**對於大多數域名提供商（如 GoDaddy、Namecheap）：**

1. 登錄您的域名提供商帳號
2. 進入 DNS 管理頁面
3. 添加 Vercel 提供的 DNS 記錄（通常是 CNAME 記錄）
4. 保存更改

**DNS 記錄範例：**

```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

#### 步驟 3：驗證域名

DNS 記錄生效通常需要 24-48 小時。您可以在 Vercel 中查看驗證狀態。

---

## 本地開發與測試

### 啟動開發伺服器

```bash
cd /path/to/christine-portfolio
pnpm install
pnpm dev
```

開發伺服器將在 `http://localhost:3000` 啟動。

### 構建生產版本

```bash
pnpm build
pnpm preview
```

### 測試環境變數

確保 `.env.local` 文件包含正確的環境變數：

```bash
NOTION_TOKEN=your_token_here
NOTION_DATABASE_ID=your_database_id_here
```

---

## 常見問題

### Q: 部署失敗，顯示「Build failed」

**A:** 請檢查以下項目：

1. 確認所有依賴已正確安裝：`pnpm install`
2. 檢查構建命令是否正確：`pnpm build`
3. 查看 Vercel 的構建日誌以了解具體錯誤
4. 確認環境變數已正確配置

### Q: 網站部署成功但無法顯示作品內容

**A:** 這通常是環境變數配置問題。請確認：

1. `NOTION_TOKEN` 和 `NOTION_DATABASE_ID` 已在 Vercel 中正確添加
2. Integration 已被共享到 Notion 資料庫
3. 資料庫中至少有一條記錄
4. 重新部署以應用環境變數更改

### Q: 自訂域名無法訪問

**A:** DNS 生效需要時間。請執行以下步驟：

1. 等待 24-48 小時讓 DNS 記錄生效
2. 使用 DNS 檢查工具驗證 DNS 記錄：[https://mxtoolbox.com/](https://mxtoolbox.com/)
3. 清除瀏覽器快取並重新訪問域名
4. 確認 Vercel 中的域名驗證狀態

### Q: 如何更新網站內容？

**A:** 有兩種方式更新內容：

1. **通過 Notion 更新**：在 Notion 資料庫中編輯或新增作品記錄，網站會自動更新
2. **通過代碼更新**：修改代碼後，推送到 GitHub，Vercel 會自動重新部署

---

## 後續優化

### 性能優化

1. **圖片優化**：使用 WebP 格式和響應式圖片
2. **代碼分割**：利用動態導入減少初始加載時間
3. **快取策略**：配置適當的快取頭以提高重複訪問速度

### SEO 優化

1. **Meta 標籤**：在 `client/index.html` 中添加適當的 Meta 標籤
2. **Sitemap**：生成 `sitemap.xml` 以幫助搜尋引擎索引
3. **Robots.txt**：配置 `robots.txt` 以控制爬蟲行為

### 安全性

1. **HTTPS**：Vercel 自動提供 HTTPS 支持
2. **環境變數**：永遠不要在代碼中硬編碼敏感信息
3. **CORS**：如果需要跨域請求，配置適當的 CORS 頭

---

## 參考資源

- [Vercel 官方文檔](https://vercel.com/docs)
- [Vite 官方文檔](https://vitejs.dev/)
- [Tailwind CSS 官方文檔](https://tailwindcss.com/)
- [Notion API 官方文檔](https://developers.notion.com/)
- [GitHub 官方文檔](https://docs.github.com/)

---

## 支持與反饋

如果您在部署過程中遇到任何問題，請：

1. 查看 Vercel 的構建日誌
2. 參考本指南的「常見問題」部分
3. 訪問 Vercel 社區論壇尋求幫助
4. 聯絡 Vercel 支持團隊

祝您部署順利！🚀
