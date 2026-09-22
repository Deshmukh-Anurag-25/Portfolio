export const projects = [
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
    name: 'BlogSphere',
    stack: 'Spring Boot · React · PostgreSQL · RabbitMQ',
    status: 'in progress',
    bullets: [
      'Full-stack blogging platform with a JWT-secured REST API (access + refresh tokens), OTP-based registration/verification, and BCrypt password hashing.',
      'Event-driven architecture using RabbitMQ topic exchanges and routing keys for post, comment, like, bookmark, and follow lifecycle events.',
      'Relational schema covering posts, pages, categories, tags, comments, likes, bookmarks, follows, and revision history, with scheduled publishing support.',
      'React + TypeScript frontend with protected routes, a post editor, bookmarking, and user profiles, consuming the API via a typed Axios client.',
    ],
    link: 'https://github.com/Deshmukh-Anurag-25/BLOG-CRM',
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
    link: 'https://github.com/Deshmukh-Anurag-25/ImageEnhancer',
    link: 'https://enhance0io.streamlit.app'
  },
  {
    name: 'Weather Station',
    stack: 'React · Weather API',
    status: 'complete',
    bullets: [
      'Real-time weather dashboard showing current conditions and forecasts for searched locations.',
      'Clean, responsive UI for quickly scanning temperature, conditions, and other at-a-glance weather data.',
    ],
    link: 'https://weatherboard25.netlify.app/',
  },
  {
    name: 'Stock Dashboard',
    stack: 'React · Market Data API',
    status: 'complete',
    bullets: [
      'Stock market dashboard for tracking ticker prices and trends in a simple, glanceable layout.',
      'Search and view functionality for pulling up quotes and historical performance on demand.',
    ],
    link: 'https://mystock1.netlify.app/',
  },
  {
    name: 'CoinBoard',
    stack: 'React · Crypto Market API',
    status: 'complete',
    bullets: [
      'Cryptocurrency tracking dashboard showing live prices and market movement across coins.',
      'Searchable, sortable coin list built for quickly comparing prices and trends.',
    ],
    link: 'https://cryptracky.netlify.app/',
  },
  {
    name: 'CineSearch',
    stack: 'React · Movie Database API',
    status: 'complete',
    bullets: [
      'Movie discovery app for searching titles and browsing details like ratings, cast, and synopsis.',
      'Responsive search-driven UI for quickly finding and exploring films.',
    ],
    link: 'https://cinemasearch1.netlify.app/',
  },
];
