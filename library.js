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
    title: "Elektromobilität: Wachstum im EV-Markt",
    description: "Strategien entwickeln, um Porsches Elektrofahrzeug-Segment zu erweitern.",
    duration: 90,
    difficulty: "medium",
    topic: "strategy",
    industry: "automotive",
    skill: "strategy",
    date: new Date("2026-02-01"),
    objectives: [
      "EV-Marktsegmente analysieren",
      "Kundennutzen und Positionierung ableiten",
      "Strategische Wachstumsoptionen bewerten"
    ],
    lessonPlan: [
      "Briefing: Aufgabenstellung & Kontext (5 min)",
      "Einstieg: Marktüberblick EV (10 min)",
      "Gruppenarbeit: Wachstumstreiber identifizieren (25 min)",
      "Ausarbeitung: Strategische Optionen (30 min)",
      "Präsentation & Diskussion (10 min)",
      "Nachbesprechung: Learnings & Transfer (10 min)"
    ],
    context: `Die Elektromobilität ist der Zukunftsmarkt der Automobilindustrie. Porsche steht vor der Herausforderung, seine Marke und Kundenerwartung mit einer wachsenden EV-Produktpalette in Einklang zu bringen.

In diesem Case analysieren die Schüler den aktuellen E-Mobilitätsmarkt, identifizieren relevante Kundensegmente und entwickeln strategische Empfehlungen für das Wachstum von Porsches Elektrofahrzeugsparte.`,
    subject: "Klasse 11-13",
    socialForm: "Gruppenarbeit (3-4 Personen)",
    materials: "Laptops, Präsentationsfolien",
    prepTime: "15 Minuten",
    deliverable: "Die Schülergruppen präsentieren eine Strategieempfehlung mit Marktsegmentierung, Positionierung und konkreten Wachstumsmaßnahmen (5-7 Folien)."
  },
  {
    id: 2,
    company: "SAP",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/SAP_2011_logo.svg/320px-SAP_2011_logo.svg.png",
    title: "SAP Markteinführungs-Strategie",
    description: "Markteinführungsplan für ein neues SAP Cloud-Produkt entwickeln.",
    duration: 90,
    difficulty: "hard",
    topic: "strategy",
    industry: "technology",
    skill: "strategy",
    date: new Date("2026-01-28"),
    objectives: [
      "Go-to-Market Modelle vergleichen",
      "Zielgruppen und Value Proposition schärfen",
      "Rollout-Plan strukturiert ableiten"
    ],
    lessonPlan: [
      "Briefing: Aufgabenstellung & Kontext (5 min)",
      "Einstieg: Produkt & Markt (10 min)",
      "Analyse: Zielgruppen & Nutzen (25 min)",
      "Planung: Kanäle & Rollout (30 min)",
      "Präsentation der Strategien (10 min)",
      "Nachbesprechung: Reflexion & Learnings (10 min)"
    ],
    context: `SAP entwickelt kontinuierlich neue Cloud-Lösungen für verschiedene Unternehmensbereiche. Die Herausforderung: Wie bringt man ein neues Produkt erfolgreich auf den Markt?

Die Schüler entwickeln eine Go-to-Market-Strategie für ein fiktives SAP Cloud-Produkt. Sie definieren Zielgruppen, erarbeiten das Nutzenversprechen und planen den Rollout über geeignete Kanäle.`,
    subject: "Klasse 12-13",
    socialForm: "Gruppenarbeit (4 Personen)",
    materials: "Laptops, Case-Material, Flipchart",
    prepTime: "10 Minuten",
    deliverable: "Ein Go-to-Market-Plan mit Zielgruppendefinition, Value Proposition, Kanalstrategie und Rollout-Phasen (Präsentation oder schriftlich)."
  },
  {
    id: 3,
    company: "IONOS",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/IONOS_logo.svg/320px-IONOS_logo.svg.png",
    title: "Cloud-Infrastruktur Kostenoptimierung",
    description: "Kosteneffizienz der Cloud-Infrastruktur von IONOS analysieren und verbessern.",
    duration: 60,
    difficulty: "easy",
    topic: "operations",
    industry: "technology",
    skill: "analysis",
    date: new Date("2026-01-25"),
    objectives: [
      "Kostenstrukturen im Cloudbetrieb verstehen",
      "Optimierungshebel identifizieren",
      "Maßnahmen priorisieren"
    ],
    lessonPlan: [
      "Briefing: Aufgabenstellung & Kontext (5 min)",
      "Einstieg: Cloud-Kostenbausteine (10 min)",
      "Analyse: Kostentreiber (20 min)",
      "Lösung: Maßnahmenkatalog (20 min)",
      "Nachbesprechung: Quick Wins & Learnings (5 min)"
    ],
    context: `Cloud-Infrastruktur bietet Flexibilität – verursacht aber oft unerwartete Kosten. IONOS möchte seine Cloud-Kosteneffizienz steigern.

Die Schüler analysieren die Kostenstruktur einer Cloud-Infrastruktur, identifizieren Einsparpotenziale und entwickeln einen priorisierten Maßnahmenkatalog zur Kostenoptimierung.`,
    subject: "Klasse 10-12",
    socialForm: "Partnerarbeit",
    materials: "Laptops, Tabellenkalkulationssoftware",
    prepTime: "10 Minuten",
    deliverable: "Eine Kostenanalyse mit Top-3-Maßnahmen zur Optimierung, inkl. erwarteter Einsparungen (Excel oder Präsentation)."
  },
  {
    id: 4,
    company: "Deutsche Telekom",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telekom_Logo_2013.svg/320px-Telekom_Logo_2013.svg.png",
    title: "5G-Technologie-Strategie für Telekom",
    description: "Erarbeiten, wie Telekom seine 5G-Infrastruktur ausbauen und nutzen kann.",
    duration: 60,
    difficulty: "medium",
    topic: "technology",
    industry: "telecommunications",
    skill: "innovation",
    date: new Date("2026-01-20"),
    objectives: [
      "5G-Anwendungsfälle strukturieren",
      "Wertschöpfungspotenziale bewerten",
      "Strategische Partnerschaften skizzieren"
    ],
    lessonPlan: [
      "Briefing: Aufgabenstellung & Kontext (5 min)",
      "Einstieg: 5G Ökosystem (10 min)",
      "Gruppenarbeit: Use Cases entwickeln (20 min)",
      "Bewertung: Nutzen & Aufwand (20 min)",
      "Nachbesprechung: Umsetzung & Learnings (5 min)"
    ],
    context: `5G ist mehr als nur schnelleres Internet – es ermöglicht neue Geschäftsmodelle in Industrie, Mobilität und Smart Cities. Die Deutsche Telekom investiert massiv in den 5G-Ausbau.

Die Schüler entwickeln konkrete Anwendungsfälle für 5G-Technologie, bewerten deren Potenzial und skizzieren strategische Partnerschaften zur Umsetzung.`,
    subject: "Klasse 11-13",
    socialForm: "Gruppenarbeit (3-4 Personen)",
    materials: "Laptops, Präsentationsfolien",
    prepTime: "10 Minuten",
    deliverable: "Präsentation von 2-3 Use Cases mit Nutzenbewertung, Aufwand und Partner-Strategie (5 Folien)."
  },
  {
    id: 5,
    company: "Mercedes-Benz",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Logo.svg/320px-Mercedes-Logo.svg.png",
    title: "Nachhaltige Produktion bei Mercedes-Benz",
    description: "Nachhaltigkeitsstrategien für Mercedes-Benz Produktionsstätten entwickeln.",
    duration: 90,
    difficulty: "medium",
    topic: "sustainability",
    industry: "automotive",
    skill: "problem-solving",
    date: new Date("2026-01-15"),
    objectives: [
      "Nachhaltigkeitsziele einordnen",
      "CO₂-Hebel im Werk erkennen",
      "Umsetzungsroadmap skizzieren"
    ],
    lessonPlan: [
      "Briefing: Aufgabenstellung & Kontext (5 min)",
      "Einstieg: Produktion & Emissionen (10 min)",
      "Analyse: Hotspots identifizieren (25 min)",
      "Maßnahmen: Roadmap erstellen (30 min)",
      "Kurzpräsentationen (10 min)",
      "Nachbesprechung: Reflexion & Transfer (10 min)"
    ],
    context: `Mercedes-Benz hat sich ehrgeizige Klimaziele gesetzt und will bis 2039 CO₂-neutral produzieren. Doch wie setzt man das in bestehenden Werken um?

Die Schüler analysieren Emissionsquellen in der Automobilproduktion, identifizieren CO₂-Einsparpotenziale und entwickeln eine Roadmap für nachhaltige Fertigung.`,
    subject: "Klasse 11-13",
    socialForm: "Gruppenarbeit (4 Personen)",
    materials: "Laptops, Case-Materialien, Flipchart",
    prepTime: "15 Minuten",
    deliverable: "Eine Roadmap zur CO₂-Reduktion mit konkreten Maßnahmen, Zeitplan und erwarteter Wirkung (Poster oder Präsentation)."
  },
  {
    id: 6,
    company: "Siemens",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Siemens-logo.svg/320px-Siemens-logo.svg.png",
    title: "Digitale Transformation im Industrial IoT",
    description: "Chancen für Siemens im Industrial Internet of Things analysieren.",
    duration: 90,
    difficulty: "hard",
    topic: "technology",
    industry: "technology",
    skill: "analysis",
    date: new Date("2026-01-10"),
    objectives: [
      "IoT-Potenziale in der Industrie bewerten",
      "Daten- und Plattformstrategie verstehen",
      "Implementierungsrisiken benennen"
    ],
    lessonPlan: [
      "Briefing: Aufgabenstellung & Kontext (5 min)",
      "Einstieg: IIoT Überblick (10 min)",
      "Analyse: Wertbeiträge bewerten (25 min)",
      "Design: Plattform & Daten (30 min)",
      "Präsentation der Strategien (10 min)",
      "Nachbesprechung: Risiken & Learnings (10 min)"
    ],
    context: `Das Industrial Internet of Things (IIoT) vernetzt Maschinen, Anlagen und Prozesse – und schafft neue Möglichkeiten für Effizienz und Wertschöpfung. Siemens ist Vorreiter in dieser Transformation.

Die Schüler bewerten IoT-Anwendungsfälle in der Industrie, skizzieren eine Daten- und Plattformstrategie und identifizieren Risiken bei der Implementierung.`,
    subject: "Klasse 12-13",
    socialForm: "Gruppenarbeit (4 Personen)",
    materials: "Laptops, Case-Material",
    prepTime: "15 Minuten",
    deliverable: "Ein IIoT-Strategiekonzept mit Use Cases, Plattformarchitektur und Risikobewertung (Präsentation)."
  },
  {
    id: 7,
    company: "Allianz",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Allianz_logo.svg/320px-Allianz_logo.svg.png",
    title: "InsurTech Innovations-Strategie",
    description: "Innovationsstrategie für digitale Versicherungsprodukte der Allianz entwickeln.",
    duration: 60,
    difficulty: "medium",
    topic: "strategy",
    industry: "finance",
    skill: "innovation",
    date: new Date("2026-01-05"),
    objectives: [
      "InsurTech Trends strukturieren",
      "Innovationsfelder priorisieren",
      "Go-to-Market Optionen bewerten"
    ],
    lessonPlan: [
      "Briefing: Aufgabenstellung & Kontext (5 min)",
      "Einstieg: Markt & Trends (10 min)",
      "Analyse: Zielgruppen definieren (15 min)",
      "Ideation: Produktideen entwickeln (20 min)",
      "Pitch-Präsentationen & Feedback (10 min)"
    ],
    context: `Die Versicherungsbranche wird durch digitale Technologien grundlegend verändert. Allianz investiert in InsurTech-Innovationen, um wettbewerbsfähig zu bleiben.

Die Schüler analysieren InsurTech-Trends, entwickeln Ideen für digitale Versicherungsprodukte und bewerten verschiedene Markteintrittswege.`,
    subject: "Klasse 11-13",
    socialForm: "Gruppenarbeit (3-4 Personen)",
    materials: "Laptops, Präsentationsfolien",
    prepTime: "10 Minuten",
    deliverable: "Ein Innovationskonzept für ein digitales Versicherungsprodukt mit Zielgruppe, Nutzen und Go-to-Market (Pitch-Präsentation)."
  },
  {
    id: 8,
    company: "BMW",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/320px-BMW.svg.png",
    title: "Markteintritt Autonomes Fahren",
    description: "Strategie für BMWs Eintritt in den Markt für autonome Fahrzeuge entwickeln.",
    duration: 90,
    difficulty: "hard",
    topic: "strategy",
    industry: "automotive",
    skill: "strategy",
    date: new Date("2025-12-28"),
    objectives: [
      "Markt für autonomes Fahren bewerten",
      "Regulatorik und Risiken einordnen",
      "Markteintrittsstrategie ableiten"
    ],
    lessonPlan: [
      "Briefing: Aufgabenstellung & Kontext (5 min)",
      "Einstieg: Markt & Regulatorik (15 min)",
      "Analyse: Wettbewerber & Trends (25 min)",
      "Strategie: Eintrittsoptionen entwickeln (25 min)",
      "Präsentation der Strategien (10 min)",
      "Nachbesprechung: Risiken & Learnings (10 min)"
    ],
    context: `Autonomes Fahren ist eine der größten technologischen Revolutionen der Automobilbranche. BMW muss entscheiden, wie und wann das Unternehmen in diesen Markt einsteigt.

Die Schüler bewerten den Markt für autonome Fahrzeuge, analysieren Wettbewerber und Regulierung und entwickeln eine Markteintrittsstrategie für BMW.`,
    subject: "Klasse 12-13",
    socialForm: "Gruppenarbeit (4 Personen)",
    materials: "Laptops, Case-Material, Flipchart",
    prepTime: "15 Minuten",
    deliverable: "Eine Markteintrittsstrategie mit Marktanalyse, Wettbewerbspositionierung und Risikobewertung (Präsentation)."
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
  const detail = document.getElementById("case-detail");
  
  if (filteredCases.length === 0) {
    grid.style.display = "none";
    noResults.style.display = "block";
    if (detail) detail.style.display = "none";
    return;
  }
  
  grid.style.display = "grid";
  noResults.style.display = "none";
  
  grid.innerHTML = filteredCases.map(caseItem => {
    const difficultyClass = `difficulty-${caseItem.difficulty}`;
    return `
      <div class="case-card" data-case-id="${caseItem.id}">
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
        <button class="btn btn-primary btn-case" data-case-id="${caseItem.id}">Case öffnen</button>
      </div>
    `;
  }).join("");
};

const showCaseDetail = (caseItem) => {
  const grid = document.getElementById("cases-grid");
  const detail = document.getElementById("case-detail");
  const noResults = document.getElementById("no-results");
  const filters = document.querySelector(".library-filters");
  const hero = document.querySelector(".library-hero");
  if (!detail || !grid) return;

  grid.style.display = "none";
  if (noResults) noResults.style.display = "none";
  if (filters) filters.style.display = "none";
  if (hero) hero.style.display = "none";
  detail.style.display = "block";

  document.getElementById("detail-company").textContent = caseItem.company;
  document.getElementById("detail-title").textContent = caseItem.title;
  document.getElementById("detail-description").textContent = caseItem.description;
  document.getElementById("detail-duration").textContent = `${caseItem.duration} min`;

  const difficultyEl = document.getElementById("detail-difficulty");
  difficultyEl.textContent = caseItem.difficulty.charAt(0).toUpperCase() + caseItem.difficulty.slice(1);
  difficultyEl.className = `case-difficulty difficulty-${caseItem.difficulty}`;

  const contextEl = document.getElementById("detail-context");
  contextEl.innerHTML = caseItem.context.split('\n\n').map(p => `<p>${p}</p>`).join('');

  document.getElementById("detail-subject").textContent = caseItem.subject;
  document.getElementById("detail-socialform").textContent = caseItem.socialForm;
  document.getElementById("detail-materials").textContent = caseItem.materials;
  document.getElementById("detail-preptime").textContent = caseItem.prepTime;

  const objectivesEl = document.getElementById("detail-objectives");
  objectivesEl.innerHTML = caseItem.objectives.map(item => `<li>${item}</li>`).join("");

  const lessonEl = document.getElementById("detail-lesson");
  lessonEl.innerHTML = caseItem.lessonPlan.map(item => `<li>${item}</li>`).join("");

  document.getElementById("detail-deliverable").textContent = caseItem.deliverable;
};

const showLibrary = () => {
  const grid = document.getElementById("cases-grid");
  const detail = document.getElementById("case-detail");
  const filters = document.querySelector(".library-filters");
  const hero = document.querySelector(".library-hero");
  if (detail) detail.style.display = "none";
  if (grid) grid.style.display = "grid";
  if (filters) filters.style.display = "flex";
  if (hero) hero.style.display = "block";
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

const initCaseClick = () => {
  const grid = document.getElementById("cases-grid");
  if (!grid) return;
  grid.addEventListener("click", (event) => {
    const target = event.target.closest("[data-case-id]");
    if (!target) return;
    const caseId = Number(target.getAttribute("data-case-id"));
    const caseItem = allCases.find(item => item.id === caseId);
    if (caseItem) {
      showCaseDetail(caseItem);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });

  const backBtn = document.getElementById("back-to-library");
  if (backBtn) {
    backBtn.addEventListener("click", () => {
      showLibrary();
    });
  }
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
    initCaseClick();
    renderCases();
  }
};

init();
