export const projects = [
  {
    name: 'WorkLog Pro',
    stack: 'Spring Boot · React · PostgreSQL',
    status: 'in progress',
    bullets: [
      'Full-stack productivity-tracking platform with secure REST APIs; core CRUD functionality is built, with analytics and deployment features planned next.',
      'Normalized relational data model with one-to-many and many-to-many relationships to support accomplishments, categories, tags, and goal tracking.',
      'Responsive React dashboard with calendar views, dynamic search and filtering, and interactive charts for productivity trends.',
    ],
    link: 'https://github.com/Deshmukh-Anurag-25',
  },
  {
    name: 'MediaHub',
    stack: 'Spring Boot · React · PostgreSQL · Elasticsearch · Redis',
    status: 'in progress',
    bullets: [
      'Full-stack media discovery and review platform supporting multiple media types, ratings, follows, and personalized tracking lists.',
      'Relational schema modeling complex one-to-many and many-to-many relationships for reviews, ratings, and user-generated content at scale.',
      'Full-text search with Elasticsearch and Redis-based caching for trending and recommendation features; JWT/OAuth2 auth planned.',
    ],
    link: 'https://github.com/Deshmukh-Anurag-25',
  },
  {
    name: 'AI Workflow Studio',
    stack: 'React 18 · TypeScript · Node.js · Express · MongoDB',
    status: 'client project — Rubiscape',
    bullets: [
      "Browser-based visual programming platform letting users design, simulate, and execute AI/data pipelines through a drag-and-drop node canvas.",
      "Asynchronous execution engine supporting 21 node types across 8 categories, using Kahn's topological sort for DAG validation and real-time, step-by-step execution.",
      'Live HTTP requests and local LLM inference via Ollama (LLaMA3, Phi3, Mistral); cron scheduling, webhook triggers, version snapshots, and an analytics dashboard.',
      'Zero TypeScript errors, fully passing backend test suite.',
    ],
    link: 'https://github.com/Deshmukh-Anurag-25',
  },
  {
    name: 'Super-Resolution Image Generator',
    stack: 'PyTorch · ESRGAN · Flask · React.js',
    status: 'complete',
    bullets: [
      'Image super-resolution system using ESRGAN — an RRDB-based generator with a relativistic discriminator — upscaling images by 2x, 4x, and 8x with enhanced perceptual detail.',
      'Trained on the DIV2K dataset with PyTorch and CUDA acceleration, combining pixel-wise L1, VGG19-based perceptual loss, and adversarial loss.',
      'Flask REST API for asynchronous enhancement jobs and a React.js frontend with drag-and-drop upload, live processing status, and side-by-side PSNR/SSIM comparisons.',
    ],
    link: 'https://github.com/Deshmukh-Anurag-25',
  },
];
