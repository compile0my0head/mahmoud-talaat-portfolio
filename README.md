# Mahmoud Talaat — BIM Architect Portfolio

A static portfolio website built with Angular 18 for Mahmoud Talaat. The project uses standalone components and a build-time content generation script to allow easy content management via Markdown and YAML files, with no backend or database required.

## How to Edit Content

All content is managed in the `src/content/` directory. 

### 1. Global Settings & Section Toggles
Edit `src/content/site.yaml` to change your name, role, colors, counters, or toggle sections on/off.
- The `design-projects` and `about` sections can be safely toggled by setting `enabled: false`.
- If you try to disable a locked section (like `hero` or `working-drawings`), the build script will fail and prevent deployment.

### 2. Adding a New Project
1. Create a new `.md` file in the appropriate directory (e.g. `src/content/working-drawings/`).
2. Follow the YAML frontmatter structure from existing files (title, year, slug, sheets array, etc).
3. Place your images in `src/assets/images/<slug>/`.
4. Ensure `enabled: true`.

### 3. Updating the PDF
Drop your updated PDF into `src/assets/documents/` and name it `portfolio-web.pdf` (for the standard version) and `portfolio-full.pdf` (for the high-res version). The CV should be `cv.pdf`.

## Development & Deployment

### Run Locally
```bash
npm install
npm run start
```
This will start the development server at `http://localhost:4200/`. The content script will run automatically before starting.

### Process Images
```bash
npm run images
```
This script (`scripts/convert-images.mjs`) scans your image directories and converts all raster images into optimized WebP formats at sensible sizes. Run this before deploying if you've added new images.

### Build & Deploy
```bash
npm run build
```
The output will be placed in the `dist/mahmoud-talaat-portfolio/browser/` folder. Since it's a completely static site without server-side rendering, you can literally drag and drop this entire folder into Netlify Drop to publish it immediately, or deploy it to any static host like GitHub Pages, Vercel, or AWS S3.
