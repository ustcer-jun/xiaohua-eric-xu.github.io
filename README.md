# USTC-InSAR Research Group Website

## Website Overview

A professional, modern website for the USTC-InSAR research group led by Professor Xiaohua Xu at the University of Science and Technology of China. This website showcases the research group's activities, publications, team members, and educational resources.

**Live Website**: https://xiaohua-eric-xu.github.io/

## Technology Stack

### Frontend Technologies
- **Framework**: React 18.3 with TypeScript 5.8
- **Build Tool**: Vite 6.3
- **Styling**: Tailwind CSS 3.4
- **Routing**: React Router DOM 7.3
- **Animations**: Framer Motion 12.38
- **Icons**: Lucide React 0.511
- **State Management**: Zustand 5.0
- **Utilities**: clsx, tailwind-merge

### Deployment
- **Hosting**: GitHub Pages
- **CI/CD**: GitHub Actions
- **Build Process**: Automatic deployment on push

---

## 网页元素修改指南

### 1. 修改首页元素

#### 调整课题组图片和文字介绍比例
编辑 `src/pages/Home.tsx` 文件：

```tsx
// 查找这一行（当前设置为1/3文字，2/3图片）
<div className="flex flex-col md:flex-row gap-8">
  <div className="md:w-1/3">
    {/* 文字介绍 */}
  </div>
  
  <div className="md:w-2/3">
    {/* 课题组图片 */}
  </div>
</div>
```

调整比例：
- `md:w-1/3` + `md:w-2/3` = 1:2 比例（当前）
- `md:w-1/2` + `md:w-1/2` = 1:1 比例
- `md:w-2/5` + `md:w-3/5` = 2:3 比例

#### 修改首页标题和内容
所有首页文本内容都在国际化文件中：
- `src/i18n/locales/zh.json` - 中文内容
- `src/i18n/locales/en.json` - 英文内容

### 2. 修改研究团队页面元素

#### 调整图片大小和布局
编辑 `src/pages/Team.tsx` 文件：

```tsx
// 图片容器尺寸（当前为48x48）
<div className="w-48 h-48">
  <img 
    src={getImageUrl(member.photo)} 
    alt={member.name}
    className="w-full h-full object-cover"
  />
</div>
```

修改尺寸选项：
- `w-40 h-40` = 40x40 px
- `w-48 h-48` = 48x48 px（当前）
- `w-56 h-56` = 56x56 px
- `w-64 h-64` = 64x64 px

#### 调整网格间距
```tsx
// 当前间距设置
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
```

修改间距：
- `gap-2` = 8px
- `gap-4` = 16px（当前）
- `gap-6` = 24px
- `gap-8` = 32px

#### 启用/禁用图片点击放大功能
图片点击放大功能已内置在 `Team.tsx` 中：
- 点击任意成员头像会打开全屏预览
- 点击背景或关闭按钮可以退出

### 3. 修改导航栏和页脚

#### 修改导航栏文字
编辑国际化文件：
- `src/i18n/locales/zh.json` 中的 `header` 部分
- `src/i18n/locales/en.json` 中的 `header` 部分

#### 修改导航栏样式
编辑 `src/components/common/Header.tsx`：

```tsx
// 导航链接样式
className={cn(
  'text-lg font-semibold transition-colors hover:text-blue-200 relative',
  // ...
)}
```

调整字体大小：
- `text-base` = 16px
- `text-lg` = 18px（当前）
- `text-xl` = 20px
- `text-2xl` = 24px

#### 修改页脚内容
编辑 `src/components/common/Footer.tsx` 和国际化文件中的 `footer` 部分。

---

## 自定义元素指南

### 1. 添加新的页面

#### 步骤1：创建页面组件
在 `src/pages/` 目录下创建新文件，例如 `About.tsx`：

```tsx
import { useI18n } from '@/i18n/I18nContext';

const About = () => {
  const { t } = useI18n();
  
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-3xl font-semibold text-primary mb-12 section-title">
          {t('about.title')}
        </h1>
        {/* 页面内容 */}
      </div>
    </div>
  );
};

export default About;
```

#### 步骤2：添加路由
编辑 `src/App.tsx`：

```tsx
import About from '@/pages/About';

// 在路由配置中添加
<Route path="/about" element={<About />} />
```

#### 步骤3：添加导航链接
编辑 `src/components/common/Header.tsx`：

```tsx
const navLinks = [
  { path: '/', key: 'header.home' },
  { path: '/about', key: 'header.about' }, // 新增
  // ...
];
```

#### 步骤4：添加国际化文本
在 `src/i18n/locales/zh.json` 和 `en.json` 中添加对应的翻译键。

### 2. 添加新的配色方案

编辑 `tailwind.config.js`：

```javascript
theme: {
  extend: {
    colors: {
      primary: '#1a365d',      // 主色调（深蓝色）
      primaryDark: '#0f2440',  // 深色版本
      accent: '#8b3a3a',        // 强调色（酒红色）
      background: '#f8f9fa',    // 背景色
      'text-primary': '#2d3748', // 主文字色
      'text-secondary': '#718096', // 次要文字色
      link: '#2b6cb0',          // 链接色
    },
  },
}
```

### 3. 添加自定义样式

编辑 `src/index.css`：

```css
/* 添加自定义类 */
.custom-section {
  @apply py-16 bg-white;
}

.custom-title {
  @apply text-2xl font-bold text-primary mb-8;
}
```

---

## 新增团队成员信息指南

### 步骤1：准备成员照片

1. 将照片文件放入 `public/images/team/` 目录
2. **文件名格式**：`姓氏-名字.jpg`（例如：`zhang-san.jpg`）
3. **推荐尺寸**：400x400 像素（正方形）
4. **文件格式**：JPG 或 PNG
5. **文件名要求**：使用小写字母和连字符，不要使用空格

### 步骤2：编辑团队成员数据

打开 `src/data/team-members.json` 文件，添加新的成员对象：

```json
{
  "id": 14,
  "name": "张三",
  "nameEn": "San Zhang",
  "position": "PhD Student",
  "positionCn": "博士研究生",
  "category": "phd",
  "email": "zhangsan@mail.ustc.edu.cn",
  "research": "InSAR time series analysis, earthquake geodesy",
  "photo": "/images/team/zhang-san.jpg",
  "homepage": "https://example.com/zhangsan",
  "joinYear": 2024
}
```

### 字段说明

| 字段 | 类型 | 说明 | 示例 |
|------|------|------|------|
| `id` | 数字 | 唯一标识符（必须递增） | 14 |
| `name` | 字符串 | 中文姓名 | "张三" |
| `nameEn` | 字符串 | 英文姓名 | "San Zhang" |
| `position` | 字符串 | 英文职位 | "PhD Student" |
| `positionCn` | 字符串 | 中文职位 | "博士研究生" |
| `category` | 字符串 | 成员类别 | "phd" |
| `email` | 字符串 | 电子邮箱 | "zhangsan@mail.ustc.edu.cn" |
| `research` | 字符串 | 研究方向（英文） | "InSAR time series analysis" |
| `photo` | 字符串 | 照片路径 | "/images/team/zhang-san.jpg" |
| `homepage` | 字符串 | 个人主页链接（可选） | "https://example.com" |
| `joinYear` | 数字 | 加入年份 | 2024 |

### 成员类别选项

| 类别值 | 说明 |
|--------|------|
| `professor` | 教授（Group Leader） |
| `associate` | 副研究员（Research Associates） |
| `postdoc` | 博士后（Postdoctoral Fellows） |
| `phd` | 博士研究生（PhD Students） |
| `master` | 硕士研究生（Master Students） |
| `undergraduate` | 本科生（Undergraduate Students） |

### 步骤3：验证添加结果

1. 运行 `npm run dev` 启动开发服务器
2. 访问团队页面，确认新成员已显示
3. 检查照片是否正确加载
4. 验证中英文切换是否正常
5. 测试姓名点击跳转是否工作

### 编辑现有成员信息

直接在 `src/data/team-members.json` 中修改对应成员的字段即可：

- **修改研究方向**：编辑 `research` 字段
- **更新邮箱**：编辑 `email` 字段
- **添加个人主页**：编辑 `homepage` 字段（空字符串表示无主页）
- **更换照片**：更新 `photo` 字段并替换照片文件

---

## 新增新闻和出版物

### 新增新闻

编辑 `src/data/news.json`：

```json
{
  "id": 10,
  "date": "2024-05-01",
  "title": {
    "en": "New Paper Accepted",
    "zh": "新论文被接受"
  },
  "summary": {
    "en": "Our latest research has been accepted for publication.",
    "zh": "我们的最新研究已被接受发表。"
  },
  "content": {
    "en": "Detailed content in English...",
    "zh": "详细中文内容..."
  }
}
```

### 新增出版物

编辑 `src/data/publications.json`：

```json
{
  "id": 50,
  "authors": "Zhang S, Wang L, Xu X",
  "title": "Title of the Paper",
  "journal": "Journal Name, 2024",
  "year": 2024,
  "doi": "10.1000/xyz123",
  "pdf": "https://example.com/paper.pdf",
  "type": "journal"
}
```

---

## 快速参考：常用 Tailwind CSS 类

### 间距
- `p-4` = 内边距 16px
- `m-4` = 外边距 16px
- `gap-4` = 网格间距 16px
- `py-12` = 上下内边距 48px

### 尺寸
- `w-48` = 宽度 192px
- `h-48` = 高度 192px
- `w-full` = 100% 宽度
- `h-auto` = 自动高度

### 排版
- `text-lg` = 18px 字体
- `font-semibold` = 半粗体
- `text-center` = 居中对齐
- `truncate` = 文本截断

### 颜色
- `text-primary` = 主色调文字
- `bg-background` = 背景色
- `text-link` = 链接色

### 布局
- `flex` = 弹性布局
- `grid` = 网格布局
- `md:flex-row` = 中等屏幕以上横向排列
- `justify-end` = 右对齐

## Frontend Directory Structure

```
USTC_InSAR/
├── .github/workflows/
│   └── deploy.yml          # GitHub Actions deployment workflow
├── src/
│   ├── components/         # Reusable components
│   │   └── common/         # Common components
│   │       ├── Header.tsx  # Website header with navigation
│   │       └── Footer.tsx  # Website footer with contact info
│   ├── pages/              # Page components
│   │   ├── Home.tsx        # Home page with hero section
│   │   ├── Team.tsx        # Team members page
│   │   ├── Research.tsx    # Research and publications page
│   │   ├── Teaching.tsx    # Teaching and courses page
│   │   ├── News.tsx        # News and gallery page
│   │   └── Links.tsx       # Links and resources page
│   ├── data/               # Content data files (JSON format)
│   │   ├── team-members.json  # Team member information
│   │   ├── publications.json  # Publication list
│   │   ├── news.json           # News items
│   │   ├── courses.json        # Teaching courses
│   │   └── gallery.json        # Gallery albums
│   ├── lib/                # Utility functions
│   │   └── imageUtils.ts   # Image URL helper function
│   ├── App.tsx             # Main application component
│   ├── main.tsx            # Application entry point
│   └── index.css           # Global styles
├── public/                 # Static assets
│   ├── favicon.svg         # Website favicon
│   └── images/             # Image files
│       ├── team/           # Team member photos
│       ├── gallery/        # Gallery images (organized by year)
│       │   └── 2024/       # Year-based organization
│       ├── research/       # Research-related images
│       ├── news/           # News images
│       └── logo/           # Logo images
├── package.json            # Project dependencies
├── vite.config.ts          # Vite configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── README.md               # This documentation
```

## Local Setup Instructions

### Prerequisites
- Node.js (v20 or higher)
- npm (v10 or higher) or pnpm
- Git

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/Xiaohua-Eric-Xu/xiaohua-eric-xu.github.io.git
   cd xiaohua-eric-xu.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Access local development server**
   Open your browser and go to: http://localhost:5173/xiaohua-eric-xu.github.io/
   
   **Note**: The URL includes `/xiaohua-eric-xu.github.io/` because of the `base` configuration in `vite.config.ts`.

5. **Build for production**
   ```bash
   npm run build
   ```

6. **Preview production build**
   ```bash
   npm run preview
   ```

## Important: Image Path Handling

### Understanding the Base URL

This project uses a custom `base` path in `vite.config.ts` for GitHub Pages deployment. This means all static asset URLs must be properly prefixed.

### The `getImageUrl` Helper Function

We provide a utility function `getImageUrl()` in `src/lib/imageUtils.ts` to handle image paths correctly:

```typescript
export const getImageUrl = (path: string): string => {
  const base = import.meta.env.BASE_URL || '/';
  return `${base}${path}`.replace(/\/+/g, '/');
};
```

### How to Use Images in Components

**✅ Correct Way** (using `getImageUrl`):
```tsx
import { getImageUrl } from '@/lib/imageUtils';

<img 
  src={getImageUrl('/images/team/xu-xiaohua.jpg')} 
  alt="Professor Xu"
/>
```

**❌ Incorrect Way** (direct path):
```tsx
// This will NOT work when deployed to GitHub Pages
<img 
  src="/images/team/xu-xiaohua.jpg" 
  alt="Professor Xu"
/>
```

### Image Path Format in JSON Files

In JSON data files, always use paths starting with `/`:

```json
{
  "photo": "/images/team/xu-xiaohua.jpg",
  "image": "/images/gallery/2024/group-1.jpg"
}
```

The `getImageUrl()` function will automatically add the correct base prefix.

## Detailed Usage Guide

### 1. Updating Team Members

#### Step 1: Add Team Member Photos
- Upload photos to `public/images/team/` folder
- **Filename format**: `lastname-firstname.jpg` (e.g., `xu-xiaohua.jpg`)
- **Recommended size**: 400x400px, JPG format
- **Naming convention**: Use lowercase letters and hyphens

#### Step 2: Update Team Data
Open `src/data/team-members.json` and add/edit member objects:

```json
{
  "id": 1,
  "name": "Xu Xiaohua",
  "nameEn": "Xiaohua Xu",
  "position": "Professor",
  "positionCn": "教授",
  "category": "professor",
  "email": "xiaohuaxu@ustc.edu.cn",
  "research": "InSAR technology and applications, crustal deformation monitoring",
  "photo": "/images/team/xu-xiaohua.jpg",
  "homepage": "https://faculty.ustc.edu.cn/xiaohua/",
  "joinYear": 2010
}
```

**Team Categories**:
- `professor` - Professors (教授)
- `associate` - Associate Researchers (副研究员)
- `postdoc` - Postdoctoral Fellows (博士后)
- `phd` - PhD Students (博士研究生)
- `master` - Master's Students (硕士研究生)
- `undergraduate` - Undergraduate Students (本科生)

### 2. Updating Publications

#### Step 1: Add Publication Data
Open `src/data/publications.json` and add new entries. Each publication should include the following fields:

```json
{
  "id": 1,
  "authors": "K Wang, X Xu, Y Hu",
  "title": "Kinematics of the 2023 Kahramanmaraş Earthquake Doublet: Biased Near-Fault Data and Shallow Slip Deficit",
  "journal": "Seismological Research Letters, 2024",
  "year": 2024,
  "doi": "",
  "pdf": "https://www.researchgate.net/profile/Kai-Wang-481/publication/384111163_Kinematics_of_the_2023_Kahramanmaras_Earthquake_Doublet_Biased_Near-Fault_Data_and_Shallow_Slip_Deficit/links/672e09d2db208342def34016/Kinematics-of-the-2023-Kahramanmaras-Earthquake-Doublet-Biased-Near-Fault-Data-and-Shallow-Slip-Deficit.pdf",
  "type": "journal",
  "citations": 0
}
```

**Required Fields**:
- `id`: Unique identifier for the publication (increment this for each new paper)
- `authors`: List of authors (last name, initials format)
- `title`: Full title of the paper
- `journal`: Journal name and publication year
- `year`: Publication year
- `type`: Publication type (`journal` or `conference`)

**Optional Fields**:
- `doi`: DOI link (if available)
- `pdf`: Direct URL to the PDF file (can be external links)
- `citations`: Citation count (can be updated periodically)

**Publication Types**:
- `journal` - Journal articles
- `conference` - Conference papers

#### Step 2: Adding New Publications

1. **Gather publication information**:
   - Authors
   - Title
   - Journal name with volume, issue, and page numbers
   - Publication year
   - PDF link (if available)
   - DOI (if available)

2. **Format the publication entry**:
   - Follow the JSON format shown above
   - Use incremental ID numbers
   - For PDF links, you can use direct external URLs (e.g., from ResearchGate, institutional repositories, or journal websites)

3. **Add the entry to publications.json**:
   - Open `src/data/publications.json`
   - Add the new publication object to the array
   - Ensure the JSON syntax is valid

#### Step 3: Updating Citation Counts

1. **Check Google Scholar** for the latest citation counts:
   - Visit: https://scholar.google.com/citations?hl=zh-CN&user=ME1EfdsAAAAJ&view_op=list_works&sortby=pubdate
   - Find the paper and note the citation count

2. **Update the `citations` field** in the corresponding publication entry

#### Step 4: Verifying Publications

After adding new publications:
1. Run `npm run dev` to start the development server
2. Navigate to the Research page
3. Verify the new publication appears in the list
4. Check that PDF links work correctly
5. Ensure the publication is properly categorized and searchable

### 3. Updating News

#### Step 1: Add News Images (Optional)
- Upload images to `public/images/news/`
- Use descriptive filenames: `paper-2024.jpg`, `award-ceremony.jpg`

#### Step 2: Update News Data
Open `src/data/news.json` and add new entries:

```json
[
  {
    "id": 1,
    "date": "2024-04-02",
    "title": "New paper published in Nature Communications",
    "category": "Publication",
    "content": "Our latest research on InSAR time series analysis has been published in Nature Communications. The paper focuses on developing a new algorithm for processing InSAR data with improved accuracy.",
    "image": "/images/news/paper-2024.jpg"
  },
  {
    "id": 2,
    "date": "2024-03-15",
    "title": "Team attends international conference",
    "category": "Event",
    "content": "Our research team participated in the 2024 International InSAR Workshop held in Beijing, presenting our latest findings on crustal deformation monitoring.",
    "image": "/images/news/conference-2024.jpg"
  }
]
```

**News Categories**:
- `Publication` - Paper publications (论文发表)
- `Award` - Awards and honors (荣誉奖项)
- `Event` - Group events and activities (团队活动)
- `Other` - Other news (其他)

#### Step 3: Adding Detailed Content
For each news item, you can add more detailed content that will be displayed on the news detail page. The content field can include paragraphs of text describing the news item in detail.

### 4. Updating Gallery

#### Step 1: Organize Gallery Images
1. **Create year folders** in `public/images/gallery/`:
   - `public/images/gallery/2024/`
   - `public/images/gallery/2023/`
   - etc.

2. **Upload images** to the appropriate year folder
   - Use descriptive filenames: `group-1.jpg`, `conference-spring.jpg`
   - Recommended image size: 1200x800px or similar aspect ratio
   - Supported formats: JPG, PNG

#### Step 2: Update Gallery Data
Open `src/data/gallery.json` and add new album entries:

```json
[
  {
    "id": 1,
    "year": 2024,
    "category": "Group Photos",
    "title": "Spring 2024 Group Photo",
    "date": "2024-03-15",
    "images": [
      "/images/gallery/2024/group-1.jpg",
      "/images/gallery/2024/group-2.jpg"
    ],
    "description": "Group photo taken during the spring semester meeting"
  },
  {
    "id": 2,
    "year": 2024,
    "category": "Conferences",
    "title": "2024 International InSAR Workshop",
    "date": "2024-04-10",
    "images": [
      "/images/gallery/2024/conference-1.jpg",
      "/images/gallery/2024/conference-2.jpg",
      "/images/gallery/2024/conference-3.jpg"
    ],
    "description": "Our team at the 2024 International InSAR Workshop in Beijing"
  }
]
```

**Gallery Categories**:
- `Group Photos` - Group portraits (团队合影)
- `Conferences` - Conference photos (学术会议)
- `Field Work` - Field work photos (野外考察)
- `Social Events` - Social gathering photos (社交活动)

#### Step 3: Viewing Gallery
Once you've added the images and updated the gallery.json file, the gallery will be visible on the News & Gallery page. Clicking on an album will take you to the album detail page where you can view all images in the album with navigation controls.

### 5. Updating Teaching Information

#### Step 1: Updating Courses
Open `src/data/courses.json`:

```json
{
  "id": 1,
  "name": "Satellite Remote Sensing and Earth Observation",
  "nameEn": "Satellite Remote Sensing and Earth Observation",
  "code": "ESP501",
  "semester": "Spring 2024",
  "description": "Introduction to satellite remote sensing techniques.",
  "syllabus": "/pdfs/syllabus-esp501.pdf"
}
```

#### Step 2: Updating Teaching Achievements
Open `src/pages/Teaching.tsx` and update the `teachingAchievements` array:

```typescript
const teachingAchievements = [
  {
    title: '校级教学成果奖',
    description: '2023年获得中国科学技术大学校级教学成果二等奖',
    year: 2023
  },
  // Add more achievements here
];
```

#### Step 3: Updating Student Resources
Open `src/pages/Teaching.tsx` and update the `studentResources` array:

```typescript
const studentResources = [
  {
    category: '推荐读物',
    items: [
      'Synthetic Aperture Radar Interferometry - Rosen et al.',
      // Add more books here
    ]
  },
  // Add more resource categories here
];
```

### 6. Replacing Website Images

#### Hero Section Background
1. Upload new image to `public/images/research/`
2. The image is automatically loaded via `getImageUrl('/images/research/ustcblue.jpg')`

#### Research Section Images
1. Upload to `public/images/research/`
2. Images are defined in `src/pages/Research.tsx` in the `researchAreas` array

#### Logo Replacement
1. Upload logo to `public/images/logo/`
2. Edit `src/components/common/Header.tsx`:

```tsx
<img 
  src={getImageUrl('/images/logo/ustc-insar-logo.png')} 
  alt="USTC-InSAR" 
  className="h-12"
/>
```

## Deployment Workflow

### Step 1: Make Changes Locally
1. Update data files or images as described above
2. Test changes with `npm run dev`
3. Verify all images load correctly in the browser

### Step 2: Commit and Push Changes

```bash
# Check what changed
git status

# Stage all changes
git add .

# Commit with descriptive message
git commit -m "Update: Add new team member photos and publications"

# Push to GitHub
git push origin main
```

### Step 3: Automatic Deployment
- GitHub Actions will automatically build and deploy
- Deployment takes 1-3 minutes
- Check status at: https://github.com/Xiaohua-Eric-Xu/xiaohua-eric-xu.github.io/actions

### Step 4: Verify Deployment
- Visit: https://xiaohua-eric-xu.github.io/
- Clear browser cache if changes don't appear
- Check that all images load correctly

## Uploading to a New GitHub Repository

### Step 1: Create a New Repository
1. Go to GitHub: https://github.com/new
2. Create a new repository with the name `xiaohua-eric-xu.github.io`
3. Make sure the repository is public
4. Do not initialize with README.md or other files

### Step 2: Initialize Git in Your Project
```bash
# Navigate to your project directory
cd /path/to/USTC_InSAR

# Initialize git (if not already initialized)
git init

# Add all files
git add .

# Commit initial files
git commit -m "Initial commit: USTC-InSAR website"
```

### Step 3: Add Remote Repository
```bash
# Add the new GitHub repository as remote
git remote add origin https://github.com/your-username/xiaohua-eric-xu.github.io.git

# Push to the new repository
git push -u origin main
```

### Step 4: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" section
4. Under "Source", select "main" branch and "root" directory
5. Click "Save"
6. Wait a few minutes for GitHub to build and deploy the site

### Step 5: Verify Deployment
- Visit: https://your-username.github.io/xiaohua-eric-xu.github.io/
- Note: If you're using the exact repository name `xiaohua-eric-xu.github.io`, the site will be available at https://xiaohua-eric-xu.github.io/

## Creating a Pull Request

If you're working on a forked repository and want to submit changes to the original repository:

### Step 1: Fork the Repository
1. Go to the original repository: https://github.com/Xiaohua-Eric-Xu/xiaohua-eric-xu.github.io
2. Click on "Fork" button in the top right corner
3. This will create a copy of the repository under your GitHub account

### Step 2: Make Changes
1. Clone your forked repository
2. Make the necessary changes
3. Commit and push the changes to your forked repository

### Step 3: Create Pull Request
1. Go to your forked repository on GitHub
2. Click on "Pull requests" tab
3. Click on "New pull request" button
4. Select the base repository (original) and branch
5. Select your forked repository and branch with changes
6. Add a descriptive title and comment explaining your changes
7. Click "Create pull request"

### Step 4: Wait for Review
- The repository maintainer will review your changes
- They may request additional changes or approve the pull request
- Once approved, your changes will be merged into the original repository

## Troubleshooting

### Images Not Loading

**Problem**: Images show as broken or 404 errors

**Solutions**:
1. **Check file path**: Ensure path in JSON starts with `/`
2. **Verify file exists**: Check `public/images/` folder
3. **Use getImageUrl**: Always use `getImageUrl()` for image sources
4. **Check file extension**: Ensure `.jpg` vs `.png` matches

### Development Server Issues

**Problem**: `npm run dev` not working

**Solutions**:
1. Run `npm install` to ensure dependencies are installed
2. Check Node.js version: `node --version` (should be v20+)
3. Delete `node_modules` and run `npm install` again

### Build Errors

**Problem**: `npm run build` fails

**Solutions**:
1. Check TypeScript errors: `npm run check`
2. Verify all imports are correct
3. Ensure all JSON files have valid syntax

### Deployment Issues

**Problem**: GitHub Pages shows 404

**Solutions**:
1. Check GitHub Actions completed successfully
2. Verify `base` in `vite.config.ts` matches repository name
3. Wait a few minutes for GitHub Pages to update

## Maintenance Schedule

### Weekly
- Update news items
- Check for new publications

### Monthly
- Update team member information
- Add new publications with citation counts
- Backup `src/data/` folder

### Quarterly
- Update gallery with new photos
- Update course information for new semesters
- Run `npm update` for security patches

## Contact & Support

For questions or support:
- Professor Xiaohua Xu: xiaohuaxu@ustc.edu.cn
- GitHub Issues: https://github.com/Xiaohua-Eric-Xu/xiaohua-eric-xu.github.io/issues

## License

MIT License - feel free to use this project for academic and research purposes.

Copyright © 2024 USTC-InSAR Research Group
