// GENERATED FILE - DO NOT EDIT MANUALLY
import { SiteConfig, AutomationItem, WorkingDrawingItem, DesignProjectItem } from './content.models';

export const SITE_CONFIG: SiteConfig = {
  "name": "Mahmoud Talaat",
  "role": "BIM Architect",
  "tagline": "Revit · Dynamo · BIM Automation",
  "email": "mahmoud.talaat605@gmail.com",
  "linkedin": "https://www.linkedin.com/in/mahmoud-talaat605",
  "portfolioPdf": "assets/documents/portfolio-web.pdf",
  "portfolioFullPdf": "assets/documents/portfolio-full.pdf",
  "cvPdf": "assets/documents/cv.pdf",
  "ogImage": "assets/og-image.png",
  "metaDescription": "Mahmoud Talaat — BIM Architect portfolio. Revit, Dynamo, BIM automation, working drawings, and design projects.",
  "accentColor": "#1F5C99",
  "backgroundColor": "#F7F6F2",
  "inkColor": "#1A1A1A",
  "counters": [
    {
      "value": 3,
      "label": "Working-Drawing Projects"
    },
    {
      "value": 35,
      "label": "Sheets"
    },
    {
      "value": 4,
      "label": "Automation Tools"
    },
    {
      "value": 6,
      "label": "Design Projects"
    }
  ],
  "sections": [
    {
      "id": "hero",
      "enabled": true
    },
    {
      "id": "automation",
      "enabled": true
    },
    {
      "id": "working-drawings",
      "enabled": true
    },
    {
      "id": "design-projects",
      "enabled": true
    },
    {
      "id": "about",
      "enabled": true
    },
    {
      "id": "contact",
      "enabled": true
    }
  ]
};

export const AUTOMATION_ITEMS: AutomationItem[] = [
  {
    "title": "Clash-Driven Wall Openings",
    "tool": "Dynamo",
    "order": 1,
    "enabled": true,
    "slug": "clash-wall-openings",
    "demoUrl": "https://lnkd.in/p/eg-tnM5T",
    "video": "assets/videos/beam_wall_cutter_1.mp4",
    "images": [
      {
        "path": "assets/images/automation/a1-clash/ex2-1.webp",
        "alt": "Beam-wall intersection conflict before automation"
      },
      {
        "path": "assets/images/automation/a1-clash/ex2-3.webp",
        "alt": "Clean result after running the Dynamo script"
      },
      {
        "path": "assets/images/automation/a1-clash/ex2-4.webp",
        "alt": "Detailed view of parametric void families placed at intersections"
      },
      {
        "path": "assets/images/automation/a1-clash/ex2-5.webp",
        "alt": "Scale of resolution across the full project"
      },
      {
        "path": "assets/images/automation/a1-clash/script.webp",
        "alt": "Dynamo script graph for clash-driven wall openings"
      }
    ],
    "problem": "Revit cannot join linked-model elements to host walls, leaving beam-wall intersections unresolved in documentation.",
    "solution": "A Dynamo script finds every beam-wall intersection on a chosen level and places one parametric void family per unique beam, cutting every wall the beam crosses.",
    "result": "Quantities and schedules become accurate without manual editing."
  },
  {
    "title": "Face-Hosted Family Placement",
    "tool": "Dynamo",
    "order": 2,
    "enabled": true,
    "slug": "face-hosted-placement",
    "demoUrl": "https://lnkd.in/p/etpatCun",
    "video": "assets/videos/face-based_family_placement_automation.mp4",
    "images": [
      {
        "path": "assets/images/automation/a2-face-hosted/ex1-1.webp",
        "alt": "Face-hosted void families placed on a slab with configurable parameters"
      },
      {
        "path": "assets/images/automation/a2-face-hosted/ex1-2.webp",
        "alt": "Lean result showing void families cutting the slab"
      },
      {
        "path": "assets/images/automation/a2-face-hosted/ex2-1.webp",
        "alt": "Extended capabilities showing placement of any face-hosted family"
      },
      {
        "path": "assets/images/automation/a2-face-hosted/script.webp",
        "alt": "Dynamo script graph for face-hosted family placement"
      }
    ],
    "problem": "Placing face-hosted families across a surface at precise intervals requires tedious manual work and is error-prone with custom types and exclusion zones.",
    "solution": "A configurable Dynamo workflow places face-hosted families on any surface, with custom types, dimensions, offsets, and row/column exclusions.",
    "result": "Repetitive placement tasks are automated with full control over spacing, types, and excluded zones."
  },
  {
    "title": "Beam Automation Pipeline",
    "tool": "Revit Plugin (C#)",
    "order": 3,
    "enabled": true,
    "slug": "beam-automation",
    "images": [
      {
        "path": "assets/images/automation/a3-beam-plugin/ex1-1.webp",
        "alt": "CAD file with beam lines and labels imported into Revit"
      },
      {
        "path": "assets/images/automation/a3-beam-plugin/ex1-2.webp",
        "alt": "Scan results showing beam labels detected from CAD"
      },
      {
        "path": "assets/images/automation/a3-beam-plugin/ex1-3.webp",
        "alt": "Creation results with unmatched beam types excluded"
      },
      {
        "path": "assets/images/automation/a3-beam-plugin/ex1-4.webp",
        "alt": "Beams created with correct types from CAD labels"
      }
    ],
    "problem": "Manually placing structural beams from a CAD drawing into a Revit model is slow and error-prone, especially when dozens of beam types are involved.",
    "solution": "A Revit plugin prototype, developed with AI-assisted coding, reads CAD beam lines and labels, matches each label to an existing Revit beam type, and places the beam automatically.",
    "result": "First test run: 63 beams created, 0 failed. 59 beams excluded because no matching type existed in the project."
  },
  {
    "title": "Parametric Door Family",
    "tool": "Revit Family Editor",
    "order": 4,
    "enabled": true,
    "slug": "parametric-door",
    "images": [
      {
        "path": "assets/images/automation/a4-parametric-door/door-family.webp",
        "alt": "Parametric door family with 16 named parameters and flip controls"
      }
    ],
    "problem": "Standard Revit door families lack sufficient parametric control for varied project requirements.",
    "solution": "A custom parametric door family with 16 named parameters, equal-constrained dimensions, and flip controls, built entirely in the Revit family editor.",
    "result": "One family adapts to multiple door configurations without creating separate types."
  }
];

export const WORKING_DRAWING_ITEMS: WorkingDrawingItem[] = [
  {
    "title": "Residential Villa",
    "year": 2022,
    "sheetCount": 10,
    "order": 1,
    "enabled": true,
    "slug": "residential-villa",
    "academic": true,
    "description": "Plans, sections, schedules, door/window details, swimming pool, finishes.",
    "sheets": [
      {
        "id": "A-001",
        "path": "assets/images/working-drawings/villa/villa-A-001.webp",
        "alt": "Residential Villa — Site Plan"
      },
      {
        "id": "A-101",
        "path": "assets/images/working-drawings/villa/villa-A-101.webp",
        "alt": "Residential Villa — Ground Floor Plan"
      },
      {
        "id": "A-102",
        "path": "assets/images/working-drawings/villa/villa-A-102.webp",
        "alt": "Residential Villa — First Floor Plan"
      },
      {
        "id": "A-111",
        "path": "assets/images/working-drawings/villa/villa-A-111.webp",
        "alt": "Residential Villa — Ground Floor Finishes"
      },
      {
        "id": "A-112",
        "path": "assets/images/working-drawings/villa/villa-A-112.webp",
        "alt": "Residential Villa — First Floor Finishes"
      },
      {
        "id": "A-201",
        "path": "assets/images/working-drawings/villa/villa-A-201.webp",
        "alt": "Residential Villa — Section 1"
      },
      {
        "id": "A-202",
        "path": "assets/images/working-drawings/villa/villa-A-202.webp",
        "alt": "Residential Villa — Section 2"
      },
      {
        "id": "A-301",
        "path": "assets/images/working-drawings/villa/villa-A-301.webp",
        "alt": "Residential Villa — Door and Window Details"
      },
      {
        "id": "A-302",
        "path": "assets/images/working-drawings/villa/villa-A-302.webp",
        "alt": "Residential Villa — Swimming Pool"
      },
      {
        "id": "A-401",
        "path": "assets/images/working-drawings/villa/villa-A-401.webp",
        "alt": "Residential Villa — 3D Views"
      }
    ]
  },
  {
    "title": "Multipurpose Hall",
    "year": 2022,
    "sheetCount": 14,
    "order": 2,
    "enabled": true,
    "slug": "multipurpose-hall",
    "academic": true,
    "description": "Architectural, foundation, steel connections, electrical, HVAC, fire alarm, drainage, ceiling details.",
    "sheets": [
      {
        "id": "A-101",
        "path": "assets/images/working-drawings/hall/hall-A-101.webp",
        "alt": "Multipurpose Hall — Sheet 1"
      },
      {
        "id": "A-102",
        "path": "assets/images/working-drawings/hall/hall-A-102.webp",
        "alt": "Multipurpose Hall — Sheet 2"
      },
      {
        "id": "A-103",
        "path": "assets/images/working-drawings/hall/hall-A-103.webp",
        "alt": "Multipurpose Hall — Sheet 3"
      },
      {
        "id": "A-104",
        "path": "assets/images/working-drawings/hall/hall-A-104.webp",
        "alt": "Multipurpose Hall — Sheet 4"
      },
      {
        "id": "A-105",
        "path": "assets/images/working-drawings/hall/hall-A-105.webp",
        "alt": "Multipurpose Hall — Sheet 5"
      },
      {
        "id": "A-106",
        "path": "assets/images/working-drawings/hall/hall-A-106.webp",
        "alt": "Multipurpose Hall — Sheet 6"
      },
      {
        "id": "A-107",
        "path": "assets/images/working-drawings/hall/hall-A-107.webp",
        "alt": "Multipurpose Hall — Sheet 7"
      },
      {
        "id": "A-108",
        "path": "assets/images/working-drawings/hall/hall-A-108.webp",
        "alt": "Multipurpose Hall — Sheet 8"
      },
      {
        "id": "A-109",
        "path": "assets/images/working-drawings/hall/hall-A-109.webp",
        "alt": "Multipurpose Hall — Sheet 9"
      },
      {
        "id": "A-110",
        "path": "assets/images/working-drawings/hall/hall-A-110.webp",
        "alt": "Multipurpose Hall — Sheet 10"
      },
      {
        "id": "A-111",
        "path": "assets/images/working-drawings/hall/hall-A-111.webp",
        "alt": "Multipurpose Hall — Sheet 11"
      },
      {
        "id": "A-112",
        "path": "assets/images/working-drawings/hall/hall-A-112.webp",
        "alt": "Multipurpose Hall — Sheet 12"
      },
      {
        "id": "A-113",
        "path": "assets/images/working-drawings/hall/hall-A-113.webp",
        "alt": "Multipurpose Hall — Sheet 13"
      },
      {
        "id": "A-114",
        "path": "assets/images/working-drawings/hall/hall-A-114.webp",
        "alt": "Multipurpose Hall — Sheet 14"
      }
    ]
  },
  {
    "title": "Car Showroom",
    "year": 2023,
    "sheetCount": 11,
    "order": 3,
    "enabled": true,
    "slug": "car-showroom",
    "academic": true,
    "description": "Steel, glazing, curtain wall, ceiling, space-frame roof; geometry generated in Grasshopper.",
    "sheets": [
      {
        "id": "A-101",
        "path": "assets/images/working-drawings/showroom/showroom-A-101.webp",
        "alt": "Car Showroom — Sheet 1"
      },
      {
        "id": "A-102",
        "path": "assets/images/working-drawings/showroom/showroom-A-102.webp",
        "alt": "Car Showroom — Sheet 2"
      },
      {
        "id": "A-103",
        "path": "assets/images/working-drawings/showroom/showroom-A-103.webp",
        "alt": "Car Showroom — Sheet 3"
      },
      {
        "id": "A-104",
        "path": "assets/images/working-drawings/showroom/showroom-A-104.webp",
        "alt": "Car Showroom — Sheet 4"
      },
      {
        "id": "A-105",
        "path": "assets/images/working-drawings/showroom/showroom-A-105.webp",
        "alt": "Car Showroom — Sheet 5"
      },
      {
        "id": "A-106",
        "path": "assets/images/working-drawings/showroom/showroom-A-106.webp",
        "alt": "Car Showroom — Sheet 6"
      },
      {
        "id": "A-107",
        "path": "assets/images/working-drawings/showroom/showroom-A-107.webp",
        "alt": "Car Showroom — Sheet 7"
      },
      {
        "id": "A-108",
        "path": "assets/images/working-drawings/showroom/showroom-A-108.webp",
        "alt": "Car Showroom — Sheet 8"
      },
      {
        "id": "A-109",
        "path": "assets/images/working-drawings/showroom/showroom-A-109.webp",
        "alt": "Car Showroom — Sheet 9"
      },
      {
        "id": "A-110",
        "path": "assets/images/working-drawings/showroom/showroom-A-110.webp",
        "alt": "Car Showroom — Sheet 10"
      },
      {
        "id": "A-111",
        "path": "assets/images/working-drawings/showroom/showroom-A-111.webp",
        "alt": "Car Showroom — Sheet 11"
      }
    ]
  }
];

export const DESIGN_PROJECT_ITEMS: DesignProjectItem[] = [
  {
    "title": "The Sun That Sets in the South",
    "order": 1,
    "enabled": true,
    "slug": "sun-sets-south",
    "image": {
      "path": "assets/images/design-projects/sun-south/hero.webp",
      "alt": "Train station design perspective"
    },
    "description": "Train station design exploring movement, departure, and arrival through architectural form."
  },
  {
    "title": "Audi Showroom",
    "order": 2,
    "enabled": true,
    "slug": "audi-showroom",
    "image": {
      "path": "assets/images/design-projects/audi/hero.webp",
      "alt": "Audi Showroom exterior perspective"
    },
    "description": "Automotive showroom design with steel structure and glazed facades."
  },
  {
    "title": "Boutique Hotel of the Arabian Nights",
    "order": 3,
    "enabled": true,
    "slug": "boutique-hotel",
    "image": {
      "path": "assets/images/design-projects/boutique-hotel/hero.webp",
      "alt": "Boutique Hotel of the Arabian Nights exterior perspective"
    },
    "description": "Boutique hotel design inspired by Arabian Nights narrative and regional architecture."
  },
  {
    "title": "Siwa Discovery Center",
    "order": 4,
    "enabled": true,
    "slug": "siwa-discovery-center",
    "image": {
      "path": "assets/images/design-projects/siwa/hero.webp",
      "alt": "Siwa Discovery Center exterior view"
    },
    "description": "Discovery center in Siwa Oasis exploring local heritage and desert landscape integration."
  },
  {
    "title": "Alexandria Community Center",
    "order": 5,
    "enabled": true,
    "slug": "alexandria-community-center",
    "image": {
      "path": "assets/images/design-projects/community-center/hero.webp",
      "alt": "Alexandria Community Center exterior perspective"
    },
    "description": "Community center serving the Alexandria waterfront neighborhood."
  },
  {
    "title": "Oblivion: The Sin of Time",
    "order": 6,
    "enabled": true,
    "slug": "oblivion",
    "image": {
      "path": "assets/images/design-projects/oblivion/hero.webp",
      "alt": "Oblivion museum design render"
    },
    "description": "Graduation project: a museum exploring the concept of oblivion and the passage of time."
  }
];
