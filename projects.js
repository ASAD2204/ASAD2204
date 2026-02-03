// Project data with all details
const projectsData = [
  {
    name: "Project Nexus (FYP)",
    icon: "🎓",
    description: "AI-powered university management ecosystem solving data silos — integrates SIS, LMS, finance, HR; uses polyglot microservices, Kafka event-driven architecture, hybrid AI (CAG + RAG), biometric attendance with spoof detection, and predictive at-risk student analytics.",
    category: "ai-ml",
    displayCategory: "AI/ML",
    live: true,
    liveUrl: "https://asad2204.github.io/PROJECT_NEXUS/",
    url: "https://github.com/ASAD2204/PROJECT_NEXUS",
    featured: true,
    tags: ["AI", "Microservices", "Full-Stack"]
  },
  {
    name: "NetMon-AI",
    icon: "🤖",
    description: "Next-generation intelligent system administration platform with conversational AI shell, real-time TUI dashboards, natural language interaction, process/service management, JSON playbooks, and Human-in-the-Loop (HITL) security protocol for safe critical operations.",
    category: "ai-ml",
    displayCategory: "AI/ML",
    live: false,
    url: "https://github.com/ASAD2204/NetMon-AI",
    featured: true,
    tags: ["AI", "System Admin", "Security"]
  },
  {
    name: "VisionPass (Face Attendance)",
    icon: "👁️",
    description: "Privacy-first, production-ready attendance system with Triple-Layer Security (Geo-Fencing + Liveness Detection + Facial Recognition), 99.8% spoofing prevention, voice/blink verification fallback, encrypted embeddings, and optimized low-end hardware support.",
    category: "ai-ml",
    displayCategory: "AI/ML",
    live: false,
    url: "https://github.com/ASAD2204/Face_Attendance_System",
    featured: true,
    tags: ["Computer Vision", "Security", "Biometric"]
  },
  {
    name: "Study Buddy",
    icon: "📖",
    description: "Advanced RAG-based intelligent PDF chatbot with Neural Intent Router (dynamic persona switching), Semantic Caching (Redis + embeddings), Hybrid Retrieval (BM25 + ChromaDB + FlashRank), contextual query rewriting, and smart follow-up questions.",
    category: "ai-ml",
    displayCategory: "AI/ML",
    live: true,
    liveUrl: "https://studybuddy-6f5w44uwydp5xxbazis5eb.streamlit.app/",
    url: "https://github.com/ASAD2204/StudyBuddy",
    featured: true,
    tags: ["RAG", "NLP", "Chatbot"]
  },
  {
    name: "G&G SmartStore",
    icon: "🛍️",
    description: "G&G SmartStore — AI-driven e-commerce platform with a Gemini-powered customer chatbot, voice input, semantic search (ChromaDB), personalized product recommendations, order tracking, admin analytics, and visual product search (BLIP).",
    category: "fullstack",
    displayCategory: "Full-Stack",
    live: false,
    url: "https://github.com/ASAD2204/webstore-ai-ecommerce",
    tags: ["E-commerce", "AI", "Full-Stack"]
  },
  {
    name: "TaskFlow Ultimate",
    icon: "📱",
    description: "Comprehensive Flutter-based task management mobile app with Kanban boards, analytics dashboards, calendar views, team collaboration, light/dark themes, and advanced state management + local persistence.",
    category: "mobile",
    displayCategory: "Mobile App",
    live: false,
    url: "https://github.com/ASAD2204/Task-Flow",
    tags: ["Flutter", "Mobile", "Productivity"]
  },
  {
    name: "CV Text Recognition Pipeline",
    icon: "🔍",
    description: "Hybrid OCR system combining TrOCR, EasyOCR, PaddleOCR + YOLO detection, preprocessing, layout analysis, ensemble inference, and NLP post-processing for robust text extraction from diverse images/documents.",
    category: "ai-ml",
    displayCategory: "AI/ML",
    live: false,
    url: "https://github.com/ASAD2204/CV-Text-Recognition-Pipeline",
    tags: ["Computer Vision", "OCR", "NLP"]
  },
  {
    name: "Netflix Data Analysis & Recommendation",
    icon: "🎬",
    description: "Comprehensive data science project with Exploratory Data Analysis (EDA) on Netflix dataset + content-based recommendation system suggesting similar titles using content features.",
    category: "data-science",
    displayCategory: "Data Science",
    live: false,
    url: "https://github.com/ASAD2204/Netflix_Data_Analysis__Recommendation_System",
    tags: ["Data Science", "ML", "Recommendation"]
  },
  {
    name: "PyShell",
    icon: "💻",
    description: "Cross-platform Python-based shell with unified commands (Windows/Linux), pipelining, I/O redirection, auto-completion, command history, color-coded output, Git branch prompt, and built-in system monitor.",
    category: "utility",
    displayCategory: "Utility",
    live: false,
    url: "https://github.com/ASAD2204/MyShell",
    tags: ["Python", "CLI", "Shell"]
  },
  {
    name: "DSA Projects in C++",
    icon: "🌳",
    description: "10 complete DSA projects (Linked List, BST, Heap, Stack, Queue, Graph, Hash Map) with real-world applications: Student Management, Contact Book, ToDo List, Maze Solver, Sorting Visualizer, and more — all menu-driven with file I/O and error handling.",
    category: "dsa",
    displayCategory: "DSA/Algorithms",
    live: false,
    url: "https://github.com/ASAD2204/DSA-Projects-CPP",
    tags: ["C++", "DSA", "Algorithms"]
  },
  {
    name: "Assignment Submission System",
    icon: "📝",
    description: "Modern Google Apps Script platform with glassmorphism UI, dark/light mode, 20x image zoom, multi-file upload, progress tracking, dual student/teacher portals, and Google Drive integration.",
    category: "web",
    displayCategory: "Web App",
    live: false,
    url: "https://github.com/ASAD2204/assignment-submission-system",
    tags: ["Google Apps Script", "Education", "Web"]
  },
  {
    name: "SQL Database Scripts",
    icon: "🗄️",
    description: "Collection of 7 complete, production-ready database schemas (Oracle, MySQL, MS SQL Server) for domains like banking, e-commerce, library management, and student information systems.",
    category: "database",
    displayCategory: "Database",
    live: false,
    url: "https://github.com/ASAD2204/sql-database-scripts",
    tags: ["SQL", "Database", "Schema Design"]
  },
  {
    name: "Web Projects Portfolio",
    icon: "🌐",
    description: "Collection of 17+ mini web development projects showcasing responsive design, JavaScript interactivity, CSS animations — includes games (BlackJack, Basketball Counter), utilities (Password Generator, Metric Converter), clones (Instagram, Facebook Signup), landing pages, and more.",
    category: "web",
    displayCategory: "Web Projects",
    live: true,
    liveUrl: "https://asad2204.github.io/Web-Projects/",
    url: "https://github.com/ASAD2204/Web-Projects",
    tags: ["HTML", "CSS", "JavaScript"]
  }
];

const basePagesUrl = 'https://asad2204.github.io/Web-Projects/';
const baseRepoUrl = 'https://github.com/ASAD2204/Web-Projects/tree/main/';

// Create project card
function makeCard(project) {
  const card = document.createElement('article');
  card.className = 'project-card';
  card.dataset.category = project.category;

  const cardLink = document.createElement('a');
  cardLink.href = project.url || (basePagesUrl + encodeURIComponent(project.name));
  cardLink.className = 'card-link';
  cardLink.target = '_blank';
  cardLink.rel = 'noopener noreferrer';

  const icon = document.createElement('div');
  icon.className = 'project-icon';
  icon.textContent = project.icon;

  const category = document.createElement('span');
  category.className = 'project-category';
  category.textContent = project.displayCategory;

  const title = document.createElement('h3');
  title.className = 'project-title';
  title.textContent = project.name;

  const description = document.createElement('p');
  description.className = 'project-description';
  description.textContent = project.description;

  const footer = document.createElement('div');
  footer.className = 'project-footer';

  const tech = document.createElement('div');
  tech.className = 'project-tech';
  if (project.tags && project.tags.length > 0) {
    project.tags.forEach(tag => {
      const techTag = document.createElement('span');
      techTag.className = 'tech-tag';
      techTag.textContent = tag;
      tech.appendChild(techTag);
    });
  }

  const links = document.createElement('div');
  links.className = 'project-links';

  if (project.live && project.liveUrl) {
    const liveBtn = document.createElement('a');
    liveBtn.href = project.liveUrl;
    liveBtn.className = 'project-link-btn btn-live';
    liveBtn.target = '_blank';
    liveBtn.rel = 'noopener noreferrer';
    liveBtn.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
        <polyline points="15 3 21 3 21 9"></polyline>
        <line x1="10" y1="14" x2="21" y2="3"></line>
      </svg>
      <span>View Live</span>
    `;
    links.appendChild(liveBtn);
  }

  const repoBtn = document.createElement('a');
  repoBtn.href = project.url;
  repoBtn.target = '_blank';
  repoBtn.rel = 'noopener noreferrer';
  repoBtn.className = 'project-link-btn btn-repo';
  repoBtn.innerHTML = `
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
    <span>Check Repo</span>
  `;
  links.appendChild(repoBtn);

  footer.appendChild(tech);
  footer.appendChild(links);

  cardLink.appendChild(icon);
  cardLink.appendChild(category);
  cardLink.appendChild(title);
  cardLink.appendChild(description);
  cardLink.appendChild(footer);

  card.appendChild(cardLink);
  return card;
}

// Render projects
function renderProjects(projects) {
  const container = document.getElementById('projects');
  const noResults = document.getElementById('noResults');
  
  container.innerHTML = '';
  
  if (projects.length === 0) {
    container.style.display = 'none';
    noResults.style.display = 'block';
    return;
  }
  
  container.style.display = 'grid';
  noResults.style.display = 'none';
  
  projects.forEach((project, index) => {
    const card = makeCard(project);
    container.appendChild(card);
    
    // Stagger animation
    setTimeout(() => {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, index * 50);
  });
}

// Initial render
renderProjects(projectsData);

// Search functionality (use a unique variable name to avoid conflicts with global scripts)
const projectsSearchInput = document.getElementById('search');
let currentFilter = 'all';

if (projectsSearchInput) {
  projectsSearchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    filterProjects(currentFilter, query);
  });
}

// Filter functionality
const filterButtons = document.querySelectorAll('.filter-btn');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Update active button
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    
    // Get category and filter
    currentFilter = button.dataset.category;
    const searchQuery = (projectsSearchInput ? projectsSearchInput.value : '').toLowerCase().trim();
    filterProjects(currentFilter, searchQuery);
  });
});

function filterProjects(category, searchQuery = '') {
  let filtered = projectsData;
  
  // Filter by category
  if (category !== 'all') {
    filtered = filtered.filter(project => project.category === category);
  }
  
  // Filter by search query
  if (searchQuery) {
    filtered = filtered.filter(project =>
      project.name.toLowerCase().includes(searchQuery) ||
      project.description.toLowerCase().includes(searchQuery) ||
      project.displayCategory.toLowerCase().includes(searchQuery)
    );
  }
  
  renderProjects(filtered);
}

// Add scroll animations
const animateCards = () => {
  const cards = document.querySelectorAll('.project-card');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
  });
};

// Run animation on load
animateCards();