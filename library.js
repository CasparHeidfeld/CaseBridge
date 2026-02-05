import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

const SUPABASE_URL = "https://sereldjnwxdyehaevvad.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_qVf29l_oGYTn56V9hxzfsw__CtoSmt1";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Beispieldaten für Cases
const allCases = [
  {
    id: 1,
    company: "Porsche",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Porsche_Carrera_GT_Logo.svg/320px-Porsche_Carrera_GT_Logo.svg.png",
    title: "Electric Mobility: Growing Porsche's EV Market",
    description: "Develop strategies to expand Porsche's electric vehicle market segment.",
    duration: 90,
    difficulty: "medium",
    topic: "strategy",
    industry: "automotive",
    skill: "strategy",
    date: new Date("2026-02-01")
  },
  {
    id: 2,
    company: "SAP",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/SAP_2011_logo.svg/320px-SAP_2011_logo.svg.png",
    title: "SAP Go-To-Market Strategy Challenge",
    description: "Craft a go-to-market plan for a new SAP Cloud-based product.",
    duration: 60,
    difficulty: "hard",
    topic: "strategy",
    industry: "technology",
    skill: "strategy",
    date: new Date("2026-01-28")
  },
  {
    id: 3,
    company: "IONOS",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/IONOS_logo.svg/320px-IONOS_logo.svg.png",
    title: "Cloud Infrastructure Cost Optimization",
    description: "Analyse and improve the cost efficiency of Ionos' cloud infrastructure.",
    duration: 60,
    difficulty: "easy",
    topic: "operations",
    industry: "technology",
    skill: "analysis",
    date: new Date("2026-01-25")
  },
  {
    id: 4,
    company: "Deutsche Telekom",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telekom_Logo_2013.svg/320px-Telekom_Logo_2013.svg.png",
    title: "5G Technology Strategy for Telekom",
    description: "Explore how Telekom can expand and leverage its 5G infrastructure.",
    duration: 60,
    difficulty: "medium",
    topic: "technology",
    industry: "telecommunications",
    skill: "innovation",
    date: new Date("2026-01-20")
  },
  {
    id: 5,
    company: "Mercedes-Benz",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Logo.svg/320px-Mercedes-Logo.svg.png",
    title: "Sustainable Manufacturing at Mercedes-Benz",
    description: "Develop sustainability strategies for Mercedes-Benz production facilities.",
    duration: 75,
    difficulty: "medium",
    topic: "sustainability",
    industry: "automotive",
    skill: "problem-solving",
    date: new Date("2026-01-15")
  },
  {
    id: 6,
    company: "Siemens",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Siemens-logo.svg/320px-Siemens-logo.svg.png",
    title: "Digital Transformation in Industrial IoT",
    description: "Analyze opportunities for Siemens in the Industrial Internet of Things.",
    duration: 90,
    difficulty: "hard",
    topic: "technology",
    industry: "technology",
    skill: "analysis",
    date: new Date("2026-01-10")
  },
  {
    id: 7,
    company: "Allianz",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Allianz_logo.svg/320px-Allianz_logo.svg.png",
    title: "InsurTech Innovation Strategy",
    description: "Create an innovation strategy for Allianz's digital insurance products.",
    duration: 60,
    difficulty: "medium",
    topic: "strategy",
    industry: "finance",
    skill: "innovation",
    date: new Date("2026-01-05")
  },
  {
    id: 8,
    company: "BMW",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/320px-BMW.svg.png",
    title: "Autonomous Driving Market Entry",
    description: "Develop BMW's strategy for entering the autonomous vehicle market.",
    duration: 90,
    difficulty: "hard",
    topic: "strategy",
    industry: "automotive",
    skill: "strategy",
    date: new Date("2025-12-28")
  }
];

let filteredCases = [...allCases];

// Auth-Check: Nicht eingeloggte Nutzer zur Login-Seite umleiten
const checkAuth = async () => {
  const { data: { session } } = await supabase.auth.getSession();
  
  if (!session) {
    window.location.href = "index.html#login";
    return null;
  }
  
  return session;
};

// User Email anzeigen
const displayUserEmail = (session) => {
  const emailEl = document.getElementById("user-email");
  if (emailEl && session?.user?.email) {
    emailEl.textContent = session.user.email;
  }
};

// Logout Funktion
const handleLogout = async () => {
  await supabase.auth.signOut();
  window.location.href = "index.html";
};

// Cases rendern
const renderCases = () => {
  const grid = document.getElementById("cases-grid");
  const noResults = document.getElementById("no-results");
  
  if (filteredCases.length === 0) {
    grid.style.display = "none";
    noResults.style.display = "block";
    return;
  }
  
  grid.style.display = "grid";
  noResults.style.display = "none";
  
  grid.innerHTML = filteredCases.map(caseItem => {
    const difficultyClass = `difficulty-${caseItem.difficulty}`;
    return `
      <div class="case-card">
        <div class="case-header">
          <div class="case-company">
            <span class="company-name">${caseItem.company}</span>
          </div>
          <div class="case-meta">
            <span class="case-duration">${caseItem.duration} min</span>
            <span class="case-difficulty ${difficultyClass}">${caseItem.difficulty.charAt(0).toUpperCase() + caseItem.difficulty.slice(1)}</span>
          </div>
        </div>
        <h3 class="case-title">${caseItem.title}</h3>
        <p class="case-description">${caseItem.description}</p>
        <button class="btn btn-primary btn-case">Case öffnen</button>
      </div>
    `;
  }).join("");
};

// Filter anwenden
const applyFilters = () => {
  const topicFilter = document.getElementById("filter-topic").value;
  const industryFilter = document.getElementById("filter-industry").value;
  const skillFilter = document.getElementById("filter-skill").value;
  const difficultyFilter = document.getElementById("filter-difficulty").value;
  const sortFilter = document.getElementById("filter-sort").value;
  
  filteredCases = allCases.filter(caseItem => {
    if (topicFilter && caseItem.topic !== topicFilter) return false;
    if (industryFilter && caseItem.industry !== industryFilter) return false;
    if (skillFilter && caseItem.skill !== skillFilter) return false;
    if (difficultyFilter && caseItem.difficulty !== difficultyFilter) return false;
    return true;
  });
  
  // Sortierung anwenden
  switch (sortFilter) {
    case "newest":
      filteredCases.sort((a, b) => b.date - a.date);
      break;
    case "oldest":
      filteredCases.sort((a, b) => a.date - b.date);
      break;
    case "duration-asc":
      filteredCases.sort((a, b) => a.duration - b.duration);
      break;
    case "duration-desc":
      filteredCases.sort((a, b) => b.duration - a.duration);
      break;
  }
  
  renderCases();
};

// Event Listeners für Filter
const initFilters = () => {
  const filters = [
    "filter-topic",
    "filter-industry",
    "filter-skill",
    "filter-difficulty",
    "filter-sort"
  ];
  
  filters.forEach(filterId => {
    const filterEl = document.getElementById(filterId);
    if (filterEl) {
      filterEl.addEventListener("change", applyFilters);
    }
  });
};

// Logout Button
const logoutBtn = document.getElementById("logout-btn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", handleLogout);
}

// Initialisierung
const init = async () => {
  const session = await checkAuth();
  if (session) {
    displayUserEmail(session);
    initFilters();
    renderCases();
  }
};

init();
