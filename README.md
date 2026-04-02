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
Open `src/data/publications.json` and add new entries:

```json
{
  "id": 1,
  "authors": "Xu, X., Sandwell, D. T., et al.",
  "title": "Coseismic deformation of the 2019 Ridgecrest earthquake sequence from InSAR",
  "journal": "Geophysical Research Letters",
  "year": 2020,
  "doi": "10.1029/2020GL088888",
  "pdf": "/pdfs/publication-2020.pdf",
  "type": "journal",
  "citations": 150
}
```

**Publication Types**:
- `journal` - Journal articles
- `conference` - Conference papers

#### Step 2: Import Publications from Google Scholar
You can import publications from Professor Xu's Google Scholar profile:

1. **Visit Google Scholar**: https://scholar.google.com/citations?hl=zh-CN&user=ME1EfdsAAAAJ&view_op=list_works&sortby=pubdate
2. **Copy publication information** for each paper:
   - Authors
   - Title
   - Journal
   - Year
   - DOI (if available)
   - Citation count
3. **Add to publications.json** in the format shown above

#### Step 3: Add PDF Files (Optional)
- Create `public/pdfs/` folder if needed
- Upload PDF files
- Update the `pdf` field with path: `/pdfs/filename.pdf`

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
