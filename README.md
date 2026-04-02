# USTC-InSAR Research Group Website

中国科学技术大学 InSAR 研究团队官方网站，由徐小华教授领导。

A professional, modern website for the USTC-InSAR research group led by Professor Xiaohua Xu at the University of Science and Technology of China.

## 网站地址 / Live Demo

- **GitHub Pages**: https://xiaohua-eric-xu.github.io/
- **USTC Server**: http://insar.ustc.edu.cn (待配置)

## Technologies Used

- **Frontend**: React 18.3, TypeScript 5.8, Vite 6.3
- **Styling**: Tailwind CSS 3.4
- **Routing**: React Router DOM 7.3
- **Animations**: Framer Motion 12.38
- **Icons**: Lucide React 0.511
- **State Management**: Zustand 5.0
- **Utilities**: clsx, tailwind-merge

## Directory Structure

```
USTC_InSAR/
├── index.html
├── src/
│   ├── components/
│   │   └── common/
│   │       ├── Header.tsx
│   │       └── Footer.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Team.tsx
│   │   ├── Research.tsx
│   │   ├── Teaching.tsx
│   │   ├── News.tsx
│   │   └── Links.tsx
│   ├── data/
│   │   ├── team-members.json
│   │   ├── publications.json
│   │   ├── news.json
│   │   ├── courses.json
│   │   └── gallery.json
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
│   └── images/
│       └── research/
│           ├── NISAR.jpg
│           ├── sentinel-1.png
│           └── ustcblue.jpg
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## Installation & Setup

### Prerequisites
- Node.js (v20 or higher)
- npm or pnpm

### Installation Commands
```bash
# Clone the repository
git clone https://github.com/Xiaohua-Eric-Xu/xiaohua-eric-xu.github.io.git
cd xiaohua-eric-xu.github.io

# Install dependencies
npm install
```

### Development Server Setup
```bash
# Start the development server
npm run dev
```

The application will open at http://localhost:5173/ (or the next available port).

### Build Commands
```bash
# Build for production
npm run build

# Preview the production build
npm run preview
```

---

## 部署指南 / Deployment Instructions

### 方式一：GitHub Pages 部署（推荐）

GitHub Pages 是最简单的免费托管方式，适合学术个人主页。

#### 步骤 1：创建 GitHub 仓库

1. 登录 GitHub 账号：https://github.com/Xiaohua-Eric-Xu
2. 创建新仓库，仓库名必须为 `xiaohua-eric-xu.github.io`（用户主页方式）
3. 仓库设置为 Public

#### 步骤 2：配置项目

对于**用户主页**（网站地址：`https://xiaohua-eric-xu.github.io/`）：

确保 `vite.config.ts` 中 `base` 设置为 `'/'`：
```typescript
export default defineConfig({
  base: '/',
  // ...其他配置
})
```

对于**项目页面**（网站地址：`https://xiaohua-eric-xu.github.io/ustc-insar/`）：

修改 `vite.config.ts`：
```typescript
export default defineConfig({
  base: '/ustc-insar/',
  // ...其他配置
})
```

#### 步骤 3：推送代码到 GitHub

```bash
# 初始化 Git 仓库（如果还没有）
git init

# 添加所有文件
git add .

# 提交更改
git commit -m "Initial commit: USTC-InSAR website"

# 添加远程仓库
git remote add origin https://github.com/Xiaohua-Eric-Xu/xiaohua-eric-xu.github.io.git

# 推送到 GitHub
git branch -M main
git push -u origin main
```

#### 步骤 4：启用 GitHub Pages

1. 进入仓库页面：https://github.com/Xiaohua-Eric-Xu/xiaohua-eric-xu.github.io
2. 点击 **Settings**（设置）
3. 左侧菜单找到 **Pages**
4. 在 **Source** 部分：
   - Branch: 选择 `main`
   - Folder: 选择 `/ (root)`
5. 点击 **Save**
6. 等待几分钟，网站将自动部署

#### 步骤 5：访问网站

部署完成后，访问：**https://xiaohua-eric-xu.github.io/**

#### 自动部署（使用 GitHub Actions）

创建 `.github/workflows/deploy.yml` 文件实现自动部署：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

      - name: Deploy to GitHub Pages
        uses: actions/deploy-pages@v4
```

---

### 方式二：USTC 服务器部署

将网站部署到中国科学技术大学服务器。

#### 步骤 1：构建项目

```bash
# 在本地构建项目
npm run build
```

构建完成后会生成 `dist/` 文件夹。

#### 步骤 2：连接服务器

```bash
# SSH 连接到 USTC 服务器
ssh username@insar.ustc.edu.cn

# 或通过 USTC VPN 连接
```

#### 步骤 3：上传文件

方式 A：使用 SCP
```bash
# 在本地执行，上传 dist 文件夹内容到服务器
scp -r dist/* username@insar.ustc.edu.cn:/var/www/html/insar/
```

方式 B：使用 SFTP（推荐）
```bash
# 使用 FileZilla 或其他 SFTP 客户端
# 服务器地址：insar.ustc.edu.cn
# 上传 dist/ 文件夹内所有文件到 /var/www/html/insar/
```

#### 步骤 4：配置服务器权限

```bash
# SSH 登录服务器后执行
sudo chmod 755 -R /var/www/html/insar
sudo chown -R www-data:www-data /var/www/html/insar
```

#### 步骤 5：配置 Nginx（如果需要）

```nginx
# /etc/nginx/sites-available/insar.ustc.edu.cn
server {
    listen 80;
    server_name insar.ustc.edu.cn;
    root /var/www/html/insar;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

```bash
# 启用配置
sudo ln -s /etc/nginx/sites-available/insar.ustc.edu.cn /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

#### 访问地址

部署完成后访问：**http://insar.ustc.edu.cn**

---

### 方式三：Netlify 部署

Netlify 提供免费的静态网站托管，支持自动部署。

#### 方式 A：拖拽部署（最简单）

1. 构建项目：`npm run build`
2. 访问 https://app.netlify.com/
3. 将 `dist/` 文件夹直接拖拽到页面中
4. 等待部署完成，获得免费域名

#### 方式 B：连接 GitHub 自动部署

1. 访问 https://app.netlify.com/
2. 点击 **Add new site** > **Import an existing project**
3. 选择 **GitHub**，授权 Netlify 访问你的仓库
4. 选择 `xiaohua-eric-xu.github.io` 仓库
5. 配置构建设置：
   - Build command: `npm run build`
   - Publish directory: `dist`
6. 点击 **Deploy site**
7. 等待部署完成

#### 自定义域名

1. 在 Netlify 项目设置中点击 **Domain settings**
2. 点击 **Add custom domain**
3. 输入你的域名（如 `insar.ustc.edu.cn`）
4. 按照提示配置 DNS 记录

---

### 方式四：Vercel 部署

Vercel 是另一个优秀的免费托管平台，部署速度极快。

#### 步骤 1：安装 Vercel CLI（可选）

```bash
npm install -g vercel
```

#### 步骤 2：部署

方式 A：使用 CLI
```bash
# 在项目根目录执行
vercel

# 首次使用需要登录，按提示操作即可
# 部署完成后会获得一个 .vercel.app 域名
```

方式 B：使用网页界面
1. 访问 https://vercel.com/
2. 使用 GitHub 账号登录
3. 点击 **Add New** > **Project**
4. 选择 GitHub 仓库 `xiaohua-eric-xu.github.io`
5. Vercel 会自动检测 Vite 项目，使用默认配置即可
6. 点击 **Deploy**
7. 等待部署完成

#### 自定义域名

1. 在 Vercel 项目设置中点击 **Domains**
2. 添加自定义域名
3. 配置 DNS 记录

---

### 方式五：Cloudflare Pages 部署

Cloudflare Pages 提供全球 CDN 加速，访问速度快。

#### 步骤 1：登录 Cloudflare

1. 访问 https://pages.cloudflare.com/
2. 使用 GitHub 账号登录

#### 步骤 2：创建项目

1. 点击 **Create a project**
2. 选择 **Connect to Git**
3. 授权并选择 GitHub 仓库
4. 配置构建设置：
   - Framework preset: Vite
   - Build command: `npm run build`
   - Build output directory: `dist`
5. 点击 **Save and Deploy**

#### 访问地址

部署完成后获得 `项目名.pages.dev` 域名。

---

## 部署平台对比

| 平台 | 免费额度 | 自定义域名 | CDN 加速 | 自动部署 | 推荐指数 |
|------|---------|-----------|---------|---------|---------|
| GitHub Pages | ✅ 无限 | ✅ | ✅ | ✅ | ⭐⭐⭐⭐⭐ |
| Netlify | ✅ 100GB/月 | ✅ | ✅ | ✅ | ⭐⭐⭐⭐⭐ |
| Vercel | ✅ 100GB/月 | ✅ | ✅ | ✅ | ⭐⭐⭐⭐⭐ |
| Cloudflare Pages | ✅ 无限 | ✅ | ✅ 全球 | ✅ | ⭐⭐⭐⭐ |
| USTC Server | 学校提供 | ✅ | ❌ | ❌ | ⭐⭐⭐ |

---

## Content Update Guide

### How to Update Team Members
1. Open `src/data/team-members.json`
2. Add a new member object:
```json
{
  "id": 6,
  "name": "张三",
  "nameEn": "San Zhang",
  "position": "PhD Student",
  "positionCn": "博士研究生",
  "category": "phd",
  "email": "zhangsan@mail.ustc.edu.cn",
  "research": "InSAR time series analysis",
  "photo": "/images/team/zhangsan.jpg",
  "homepage": "",
  "joinYear": 2024
}
```
3. Upload the photo to `public/images/team/` folder
4. Refresh the website

### How to Add Publications
1. Open `src/data/publications.json`
2. Add a new publication:
```json
{
  "id": 6,
  "authors": "Xu, X., Sandwell, D. T., et al.",
  "title": "Paper Title Here",
  "journal": "Journal Name",
  "year": 2024,
  "doi": "10.1029/2024GLXXXXXX",
  "pdf": "",
  "type": "journal",
  "citations": 15
}
```
3. Update Google Scholar data periodically

### How to Add News
1. Open `src/data/news.json`
2. Add a news item:
```json
{
  "id": 5,
  "date": "2024-04-02",
  "title": "New paper published in GRL",
  "category": "Publication",
  "content": "Brief description...",
  "image": ""
}
```

### How to Update Gallery
1. Upload images to `public/images/gallery/[year]/` folder
2. Update `src/data/gallery.json`:
```json
{
  "id": 2,
  "year": 2024,
  "category": "Group Photos",
  "title": "Summer 2024 Group Photo",
  "date": "2024-06-15",
  "images": [
    "/images/gallery/2024/group-2.jpg"
  ],
  "description": "Description here"
}
```

### How to Modify Colors/Theme
1. The theme is currently using USTC Red (#C41E3A) and USTC Blue (#003366)
2. To change colors, update the relevant Tailwind classes in the component files
3. For a more systematic approach, you can extend the Tailwind theme in `tailwind.config.js`

## Customization Guide

### How to Change Logo
- The logo is currently a text-based logo in `src/components/common/Header.tsx`
- To replace with an image logo:
  1. Add your logo image to `public/images/logo/`
  2. Update the Header component to use an `<img>` tag instead of the text logo

### How to Modify Navigation Menu
- Edit the `navLinks` array in `src/components/common/Header.tsx`

### How to Add New Pages
1. Create a new page component in `src/pages/`
2. Add a new route in `src/App.tsx`
3. Add a link to the navigation menu in `Header.tsx`

### How to Update Contact Information
- Edit the contact details in `src/components/common/Footer.tsx`

### How to Change Social Media Links
- Update the social media icons and links in `src/components/common/Footer.tsx`

## Troubleshooting

### Common Issues and Solutions
- **Images not loading**: Make sure images are placed in the `public/` directory and paths are correct
- **Styles not applying**: Check Tailwind CSS configuration and ensure all files are included in the content array
- **JavaScript errors**: Use browser dev tools to check console logs for details
- **Build errors**: Run `npm run check` to identify TypeScript errors
- **GitHub Pages 404**: Check that `base` in `vite.config.ts` matches your repository name
- **路由刷新 404**: 对于 SPA 应用，需要配置服务器重定向所有请求到 `index.html`

## Maintenance Schedule

- **Update publications**: Monthly
- **Update team members**: As needed
- **Update news**: Weekly
- **Backup data**: Monthly
- **Security updates**: Quarterly

## Contact & Support

For questions or support, please contact the development team or Professor Xiaohua Xu at xiaohuaxu@ustc.edu.cn.

## License

MIT License - feel free to use this project for academic and research purposes.

Copyright © 2024 USTC-InSAR Research Group
