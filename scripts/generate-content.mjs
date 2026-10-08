import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const yaml = require('js-yaml');
const matter = require('gray-matter');
import { marked } from 'marked';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const contentDir = path.join(rootDir, 'src', 'content');

// 1. Read and validate site config
const siteConfigPath = path.join(contentDir, 'site.yaml');
const siteConfigRaw = fs.readFileSync(siteConfigPath, 'utf8');
const siteConfig = yaml.load(siteConfigRaw);

const LOCKED_SECTIONS = ['hero', 'automation', 'working-drawings', 'contact'];

siteConfig.sections.forEach(section => {
  if (LOCKED_SECTIONS.includes(section.id) && !section.enabled) {
    console.error(`ERROR: Locked section '${section.id}' cannot be disabled.`);
    process.exit(1);
  }
});

// Helper to read directory
function readMarkdownDir(subDir) {
  const dirPath = path.join(contentDir, subDir);
  if (!fs.existsSync(dirPath)) return [];
  const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.md'));
  
  return files.map(file => {
    const filePath = path.join(dirPath, file);
    const content = fs.readFileSync(filePath, 'utf8');
    return matter(content);
  });
}

// 2. Read automation
const automationFiles = readMarkdownDir('automation');
const automationItems = automationFiles.map(file => {
  const data = file.data;
  let problem, solution, result;
  
  if (file.content) {
    // Basic extraction
    const lines = file.content.split('\n');
    let currentSection = null;
    let p = [], s = [], r = [];
    
    for (const line of lines) {
      if (line.includes('**Problem:**')) {
        currentSection = 'p';
        p.push(line.replace('**Problem:**', '').trim());
      } else if (line.includes('**Solution:**')) {
        currentSection = 's';
        s.push(line.replace('**Solution:**', '').trim());
      } else if (line.includes('**Result:**')) {
        currentSection = 'r';
        r.push(line.replace('**Result:**', '').trim());
      } else if (currentSection === 'p') {
        p.push(line);
      } else if (currentSection === 's') {
        s.push(line);
      } else if (currentSection === 'r') {
        r.push(line);
      }
    }
    problem = p.join('\n').trim();
    solution = s.join('\n').trim();
    result = r.join('\n').trim();
  }

  return {
    ...data,
    problem,
    solution,
    result
  };
}).filter(i => i.enabled).sort((a, b) => a.order - b.order);

// 3. Read working drawings
const workingDrawingFiles = readMarkdownDir('working-drawings');
const workingDrawingItems = workingDrawingFiles.map(file => file.data).filter(i => i.enabled).sort((a, b) => a.order - b.order);

// 4. Read design projects
const designProjectFiles = readMarkdownDir('design-projects');
const designProjectItems = designProjectFiles.map(file => {
  return {
    ...file.data,
    description: file.content ? String(marked.parse(file.content)).trim() : ''
  };
}).filter(i => i.enabled).sort((a, b) => a.order - b.order);

// Generate TypeScript file
const tsOutputPath = path.join(rootDir, 'src', 'app', 'services', 'content.generated.ts');

const tsContent = `// GENERATED FILE - DO NOT EDIT MANUALLY
import { SiteConfig, AutomationItem, WorkingDrawingItem, DesignProjectItem } from './content.models';

export const SITE_CONFIG: SiteConfig = ${JSON.stringify(siteConfig, null, 2)};

export const AUTOMATION_ITEMS: AutomationItem[] = ${JSON.stringify(automationItems, null, 2)};

export const WORKING_DRAWING_ITEMS: WorkingDrawingItem[] = ${JSON.stringify(workingDrawingItems, null, 2)};

export const DESIGN_PROJECT_ITEMS: DesignProjectItem[] = ${JSON.stringify(designProjectItems, null, 2)};
`;

fs.writeFileSync(tsOutputPath, tsContent);
console.log('Content generated successfully.');
