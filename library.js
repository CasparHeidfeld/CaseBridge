import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

const SUPABASE_URL = "https://sereldjnwxdyehaevvad.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_qVf29l_oGYTn56V9hxzfsw__CtoSmt1";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const STORAGE_CODES = "cb_case_codes";
const STORAGE_SUBMISSIONS = "cb_submissions";
const STORAGE_CASE_CODE_MAP = "cb_case_code_map";

const readJson = (key, fallback) => {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw);
  } catch (error) {
    console.warn("Storage parse failed:", error);
    return fallback;
  }
};

const writeJson = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

// Beispieldaten für Cases
const allCases = [
  {
    id: 1,
    company: "Würth",
    logo: "https://logo.clearbit.com/wuerth.com",
    title: "Online-Shop für Handwerker",
    description: "Wie kann Würth seinen Vertrieb digitaler machen und Handwerker online erreichen?",
    duration: 90,
    difficulty: "medium",
    schoolSubject: "Wirtschaft",
    topic: "strategy",
    industry: "Handel & Distribution",
    skill: "strategy",
    date: new Date("2026-02-01"),
    objectives: [
      "Verstehen, wie Unternehmen ihre Produkte online verkaufen",
      "Herausfinden, was Kunden beim Online-Einkauf wichtig ist",
      "Eine Strategie entwickeln, wie Online- und Offline-Verkauf zusammenpassen"
    ],
    lessonPlan: [
      "Briefing: Aufgabenstellung & Kontext (5 min)",
      "Einstieg: B2B-Handel & Digitalisierung (10 min)",
      "Gruppenarbeit: Customerjourney analysieren (25 min)",
      "Ausarbeitung: Digitale Strategieoptionen (30 min)",
      "Präsentation & Diskussion (10 min)",
      "Nachbesprechung: Learnings & Transfer (10 min)"
    ],
    context: `Würth verkauft Schrauben, Werkzeuge und andere Produkte an Handwerker. Bisher kommen Verkäufer direkt zu den Kunden. Jetzt will Würth auch online mehr verkaufen.

Ihr untersucht: Wie kaufen Handwerker am liebsten ein? Was muss ein guter Online-Shop können? Wie kombiniert man persönlichen Service mit digitalem Shopping?`,
    subject: "Klasse 11-13",
    materials: "Laptops, Präsentationsfolien",
    prepTime: "15 Minuten",
    deliverable: "Eine Präsentation (5-7 Folien) mit eurer Idee: Wie soll der Online-Shop aussehen und was bietet er den Handwerkern?"
  },
  {
    id: 9,
    company: "Rudolfstädter Systembau",
    logo: "",
    title: "Mathe trifft Produktion: Kapazitäten planen",
    description: "Wie plant RSB Produktionsmengen und Kapazitäten so, dass Termine gehalten und Ressourcen effizient genutzt werden?",
    duration: 90,
    difficulty: "medium",
    schoolSubject: "Mathematik",
    topic: "operations",
    industry: "Maschinenbau",
    skill: "analysis",
    date: new Date("2026-02-20"),
    objectives: [
      "Mathematische Modelle auf eine reale Unternehmensfrage anwenden",
      "Kapazitäten, Zeiten und Mengen strukturiert berechnen und vergleichen",
      "Eine begründete Entscheidung mit Zahlen transparent herleiten"
    ],
    lessonPlan: [
      "Briefing: Aufgabenstellung & Unternehmenskontext (10 min)",
      "Einstieg: Rechenwege und Annahmen klären (10 min)",
      "Gruppenarbeit: Daten auswerten und Szenarien berechnen (35 min)",
      "Ausarbeitung: Empfehlung mit Begründung erstellen (20 min)",
      "Präsentation, Vergleich und Reflexion (15 min)"
    ],
    context: `RSB Rudolstädter Systembau GmbH entwickelt und fertigt technische Systemlösungen. In der Planung stellt sich die Frage, wie Produktionsmengen, Bearbeitungszeiten und verfügbare Kapazitäten sinnvoll aufeinander abgestimmt werden.

Ihr analysiert die bereitgestellten Zahlen und entwickelt eine mathematisch fundierte Empfehlung, wie RSB die Planung für einen 90-Minuten-Unterrichtsfall optimieren kann.`,
    subject: "Klasse 10-12",
    materials: "Taschenrechner, Arbeitsblatt/Case-PDF, optional Tabellenkalkulation",
    prepTime: "10 Minuten",
    deliverable: "Eine kurze Ergebnispräsentation mit Rechenweg, Annahmen und finaler Handlungsempfehlung für RSB.",
    studentPdf: "pdf/RSB_Case_Final.pdf"
  },
  {
    id: 2,
    company: "Trumpf",
    logo: "https://logo.clearbit.com/trumpf.com",
    title: "Smarte Fabrik der Zukunft",
    description: "Wie können Maschinen bei Trumpf intelligent zusammenarbeiten und selbst Entscheidungen treffen?",
    duration: 90,
    difficulty: "hard",
    schoolSubject: "Informatik",
    topic: "technology",
    industry: "Maschinenbau",
    skill: "strategy",
    date: new Date("2026-01-28"),
    objectives: [
      "Verstehen, wie vernetzte Maschinen die Produktion verbessern",
      "Herausfinden, welche Daten wichtig sind und wie sie genutzt werden",
      "Einen Plan erstellen, wie die Fabrik Schritt für Schritt smart wird"
    ],
    lessonPlan: [
      "Briefing: Aufgabenstellung & Kontext (5 min)",
      "Einstieg: Smart Factory Grundlagen (10 min)",
      "Analyse: Produktionsprozesse & Potenziale (25 min)",
      "Planung: Digitalisierungsroadmap (30 min)",
      "Präsentation der Konzepte (10 min)",
      "Nachbesprechung: Reflexion & Learnings (10 min)"
    ],
    context: `Trumpf baut Maschinen, die Metall schneiden und formen. In einer "Smart Factory" sind alle Maschinen vernetzt und können miteinander kommunizieren - wie Smartphones, die Daten austauschen.

Ihr entwickelt Ideen: Welche Maschinen sollen Daten austauschen? Was wird dadurch besser? Wie startet man so ein Projekt?`,
    subject: "Klasse 12-13",
    materials: "Laptops, Case-Material, Flipchart",
    prepTime: "10 Minuten",
    deliverable: "Ein Konzept für die smarte Fabrik: Welche Technologien werden genutzt und wie wird die Produktion dadurch besser?"
  },
  {
    id: 3,
    company: "IONOS",
    logo: "https://logo.clearbit.com/ionos.com",
    title: "Cloud-Kosten senken",
    description: "Wo gibt IONOS zu viel Geld für seine Cloud-Server aus und wie kann man das ändern?",
    duration: 60,
    difficulty: "easy",
    schoolSubject: "Informatik",
    topic: "operations",
    industry: "Technologie & IT",
    skill: "analysis",
    date: new Date("2026-01-25"),
    objectives: [
      "Verstehen, wofür ein Cloud-Anbieter Geld ausgibt",
      "Die größten Kostentreiber finden",
      "Konkrete Spar-Ideen entwickeln"
    ],
    lessonPlan: [
      "Briefing: Aufgabenstellung & Kontext (5 min)",
      "Einstieg: Cloud-Kostenbausteine (10 min)",
      "Analyse: Kostentreiber (20 min)",
      "Lösung: Maßnahmenkatalog (20 min)",
      "Nachbesprechung: Quick Wins & Learnings (5 min)"
    ],
    context: `IONOS betreibt tausende Server in der Cloud - das kostet viel Strom und Geld. Manchmal laufen Server, die gar nicht gebraucht werden, oder es wird mehr Leistung eingekauft als nötig.

Ihr analysiert: Wo entstehen die höchsten Kosten? Welche Server können ausgeschaltet werden? Wie spart man am meisten?`,
    subject: "Klasse 10-12",
    materials: "Laptops, Tabellenkalkulationssoftware",
    prepTime: "10 Minuten",
    deliverable: "Eine Liste mit den 3 besten Spar-Ideen und wie viel Geld damit gespart werden kann (Excel oder Präsentation)."
  },
  {
    id: 4,
    company: "Festo",
    logo: "https://logo.clearbit.com/festo.com",
    title: "Umweltfreundliche Maschinen",
    description: "Wie kann Festo seine Automatisierungssysteme energiesparender und nachhaltiger machen?",
    duration: 60,
    difficulty: "medium",
    schoolSubject: "Biologie",
    topic: "sustainability",
    industry: "Automatisierungstechnik",
    skill: "innovation",
    date: new Date("2026-01-20"),
    objectives: [
      "Verstehen, wo Maschinen in Fabriken viel Energie verbrauchen",
      "Ideen entwickeln, wie man Energie sparen kann",
      "Überlegen, warum Kunden umweltfreundliche Lösungen kaufen würden"
    ],
    lessonPlan: [
      "Briefing: Aufgabenstellung & Kontext (5 min)",
      "Einstieg: Automatisierung & Nachhaltigkeit (10 min)",
      "Gruppenarbeit: Effizienzpotenziale analysieren (20 min)",
      "Bewertung: Lösungsansätze & Kundennutzen (20 min)",
      "Nachbesprechung: Umsetzung & Learnings (5 min)"
    ],
    context: `Festo baut Systeme, die Maschinen in Fabriken automatisch steuern - z.B. mit Druckluft. Das verbraucht viel Energie. Gleichzeitig wollen immer mehr Kunden umweltfreundliche Lösungen.

Ihr untersucht: Wo wird am meisten Energie verschwendet? Welche neuen Technologien könnten helfen? Was macht eine "grüne" Lösung attraktiv für Kunden?`,
    subject: "Klasse 11-13",
    materials: "Laptops, Präsentationsfolien",
    prepTime: "10 Minuten",
    deliverable: "Eine Präsentation (5 Folien): Eure Idee für umweltfreundlichere Maschinen und warum Kunden sie kaufen würden."
  },
  {
    id: 5,
    company: "Miele",
    logo: "https://logo.clearbit.com/miele.de",
    title: "Warum Miele teurer ist - und sein darf",
    description: "Wie bleibt Miele erfolgreich, obwohl die Waschmaschinen viel teurer sind als bei anderen Marken?",
    duration: 90,
    difficulty: "medium",
    schoolSubject: "Wirtschaft",
    topic: "strategy",
    industry: "Haushaltsgeräte",
    skill: "problem-solving",
    date: new Date("2026-01-15"),
    objectives: [
      "Verstehen, warum manche Marken mehr kosten als andere",
      "Herausfinden, was Miele besonders macht",
      "Ideen entwickeln, wie Miele seine Stärken zeigen kann"
    ],
    lessonPlan: [
      "Briefing: Aufgabenstellung & Kontext (5 min)",
      "Einstieg: Premiummarken & Wettbewerb (10 min)",
      "Analyse: Markenkern & Differenzierung (25 min)",
      "Maßnahmen: Strategieempfehlungen (30 min)",
      "Kurzpräsentationen (10 min)",
      "Nachbesprechung: Reflexion & Transfer (10 min)"
    ],
    context: `Miele verkauft Waschmaschinen und andere Haushaltsgeräte - aber viel teurer als die Konkurrenz. Das Motto: "Immer besser". Doch heute gibt es viele günstige Alternativen.

Ihr analysiert: Was macht Miele wirklich besser? Warum kaufen Menschen trotzdem die teureren Geräte? Wie kann Miele zeigen, dass sich der höhere Preis lohnt?`,
    subject: "Klasse 11-13",
    materials: "Laptops, Case-Materialien, Flipchart",
    prepTime: "15 Minuten",
    deliverable: "Ein Poster oder eine Präsentation: Was macht Miele besonders und wie sollte das Unternehmen das besser zeigen?"
  },
  {
    id: 6,
    company: "Siemens",
    logo: "https://logo.clearbit.com/siemens.com",
    title: "Vernetzte Fabriken",
    description: "Wie kann Siemens mit dem Internet der Dinge Fabriken intelligenter machen?",
    duration: 90,
    difficulty: "hard",
    schoolSubject: "Informatik",
    topic: "technology",
    industry: "Elektrotechnik & Automation",
    skill: "analysis",
    date: new Date("2026-01-10"),
    objectives: [
      "Verstehen, wie Maschinen und Geräte über das Internet kommunizieren",
      "Herausfinden, welche Daten gesammelt werden und was man damit machen kann",
      "Probleme erkennen, die beim Vernetzen auftreten können"
    ],
    lessonPlan: [
      "Briefing: Aufgabenstellung & Kontext (5 min)",
      "Einstieg: IIoT Überblick (10 min)",
      "Analyse: Wertbeiträge bewerten (25 min)",
      "Design: Plattform & Daten (30 min)",
      "Präsentation der Strategien (10 min)",
      "Nachbesprechung: Risiken & Learnings (10 min)"
    ],
    context: `Stellt euch vor, alle Maschinen in einer Fabrik sind mit dem Internet verbunden und können Daten senden - wie viele Teile sie produziert haben, ob sie bald kaputt gehen, etc. Siemens will solche Systeme bauen.

Ihr überlegt: Was kann man mit diesen Daten Nützliches machen? Wie baut man so ein System? Was kann dabei schiefgehen?`,
    subject: "Klasse 12-13",
    materials: "Laptops, Case-Material",
    prepTime: "15 Minuten",
    deliverable: "Eine Präsentation: Konkrete Beispiele, was vernetzte Maschinen können, wie das System funktioniert und welche Risiken es gibt."
  },
  {
    id: 7,
    company: "Ottobock",
    logo: "https://logo.clearbit.com/ottobock.com",
    title: "Smarte Prothesen",
    description: "Wie kann Ottobock Prothesen mit digitaler Technik verbessern und den Trägern helfen?",
    duration: 60,
    difficulty: "medium",
    schoolSubject: "Biologie",
    topic: "technology",
    industry: "Medizintechnik",
    skill: "innovation",
    date: new Date("2026-01-05"),
    objectives: [
      "Verstehen, wie digitale Technik in der Medizin helfen kann",
      "Ideen für smarte Prothesen entwickeln",
      "Überlegen, was den Menschen mit Prothesen wirklich hilft"
    ],
    lessonPlan: [
      "Briefing: Aufgabenstellung & Kontext (5 min)",
      "Einstieg: Medizintechnik & Digitalisierung (10 min)",
      "Analyse: Anwendungsfälle & Bedürfnisse (15 min)",
      "Ideation: Digitale Lösungskonzepte (20 min)",
      "Pitch-Präsentationen & Feedback (10 min)"
    ],
    context: `Ottobock baut künstliche Gliedmaßen (Prothesen) für Menschen, die z.B. nach einem Unfall einen Arm oder ein Bein verloren haben. Moderne Prothesen können mit Sensoren und Apps ausgestattet werden.

Ihr entwickelt Ideen: Welche digitalen Features würden helfen? Wie könnte eine App die Prothese steuern? Was würde das Leben der Menschen verbessern?`,
    subject: "Klasse 11-13",
    materials: "Laptops, Präsentationsfolien",
    prepTime: "10 Minuten",
    deliverable: "Eine kurze Pitch-Präsentation: Eure Idee für eine smarte Prothese und wie sie Menschen im Alltag hilft."
  },
  {
    id: 8,
    company: "Kärcher",
    logo: "https://logo.clearbit.com/kaercher.com",
    title: "Kärcher erobert neue Länder",
    description: "In welche Länder sollte Kärcher expandieren und was muss dabei beachtet werden?",
    duration: 90,
    difficulty: "hard",
    schoolSubject: "Politik",
    topic: "strategy",
    industry: "Reinigungstechnik",
    skill: "strategy",
    date: new Date("2025-12-28"),
    objectives: [
      "Verschiedene Länder und Märkte vergleichen und bewerten",
      "Verstehen, wie Unternehmen in neue Länder gehen können",
      "Herausfinden, was in verschiedenen Kulturen anders gemacht werden muss"
    ],
    lessonPlan: [
      "Briefing: Aufgabenstellung & Kontext (5 min)",
      "Einstieg: Internationalisierung & Marktanalyse (15 min)",
      "Analyse: Zielmärkte & Wettbewerb (25 min)",
      "Strategie: Markteintritt & Lokalisierung (25 min)",
      "Präsentation der Strategien (10 min)",
      "Nachbesprechung: Risiken & Learnings (10 min)"
    ],
    context: `Kärcher kennt jeder - gelbe Hochdruckreiniger für Auto und Terrasse. Die Firma ist sehr erfolgreich in Deutschland, will aber in neue Länder expandieren - z.B. in Asien oder Südamerika.

Ihr analysiert: Welches Land ist am vielversprechendsten? Wie unterscheiden sich die Märkte? Was muss Kärcher anders machen (Werbung, Produkte, Preise)?`,
    subject: "Klasse 12-13",
    materials: "Laptops, Case-Material, Flipchart",
    prepTime: "15 Minuten",
    deliverable: "Eine Präsentation: Empfehlung für ein Zielland mit Begründung und Strategie, wie Kärcher dort starten sollte."
  }
];

let filteredCases = [...allCases];
let activeCaseItem = null;

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
  document.getElementById("detail-schoolsubject").textContent = caseItem.schoolSubject;
  document.getElementById("detail-materials").textContent = caseItem.materials;
  document.getElementById("detail-preptime").textContent = caseItem.prepTime;

  const objectivesEl = document.getElementById("detail-objectives");
  objectivesEl.innerHTML = caseItem.objectives.map(item => `<li>${item}</li>`).join("");

  const lessonEl = document.getElementById("detail-lesson");
  lessonEl.innerHTML = caseItem.lessonPlan.map(item => `<li>${item}</li>`).join("");

  document.getElementById("detail-deliverable").textContent = caseItem.deliverable;
  const studentPdfLink = document.getElementById("student-pdf");
  if (studentPdfLink) {
    studentPdfLink.href = caseItem.studentPdf || "student-pdf.pdf";
  }

  activeCaseItem = caseItem;
  updateSubmissionDashboard();
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
  activeCaseItem = null;
};

const getCaseCodeMap = () => readJson(STORAGE_CASE_CODE_MAP, {});

const setCaseCode = (caseId, code) => {
  const map = getCaseCodeMap();
  map[caseId] = code;
  writeJson(STORAGE_CASE_CODE_MAP, map);
};

const getCaseCode = (caseId) => {
  const map = getCaseCodeMap();
  return map[caseId] || null;
};

const generateClassCode = () => {
  let code = "";
  const existing = readJson(STORAGE_CODES, {});
  while (!code || existing[code]) {
    code = Math.floor(100000 + Math.random() * 900000).toString();
  }
  return code;
};

const registerCodeEntry = (code, caseItem) => {
  const codes = readJson(STORAGE_CODES, {});
  codes[code] = {
    caseId: caseItem.id,
    caseTitle: caseItem.title,
    caseCompany: caseItem.company,
    createdAt: Date.now(),
    studentPdf: caseItem.studentPdf || "student-pdf.pdf"
  };
  writeJson(STORAGE_CODES, codes);
};

const updateSubmissionDashboard = () => {
  if (!activeCaseItem) return;

  const codeEl = document.getElementById("class-code");
  const studentLink = document.getElementById("student-portal-link");
  const submissionCount = document.getElementById("submission-count");
  const submissionEmpty = document.getElementById("submission-empty");
  const submissionTable = document.getElementById("submission-table");
  const submissionRows = document.getElementById("submission-rows");

  const code = getCaseCode(activeCaseItem.id);
  if (codeEl) codeEl.textContent = code || "—";
  if (studentLink) {
    const url = code ? `schueler.html?code=${code}&caseId=${activeCaseItem.id}` : "schueler.html";
    studentLink.href = url;
  }

  if (code) {
    const codes = readJson(STORAGE_CODES, {});
    if (!codes[code]) {
      registerCodeEntry(code, activeCaseItem);
    }
  }

  const submissions = readJson(STORAGE_SUBMISSIONS, []);
  const filtered = code
    ? submissions.filter((item) => item.caseId === activeCaseItem.id && item.code === code)
    : [];

  filtered.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    return b.submittedAt - a.submittedAt;
  });

  if (submissionCount) {
    const label = filtered.length === 1 ? "Einreichung" : "Einreichungen";
    submissionCount.textContent = `${filtered.length} ${label}`;
  }

  if (!submissionRows || !submissionEmpty || !submissionTable) return;
  submissionRows.innerHTML = "";

  if (filtered.length === 0) {
    submissionEmpty.style.display = "block";
    submissionTable.style.display = "none";
    return;
  }

  submissionEmpty.style.display = "none";
  submissionTable.style.display = "grid";

  filtered.forEach((item, index) => {
    const bestBadge = index === 0 ? " <span class=\"submission-badge\">Best</span>" : "";
    const details = document.createElement("details");
    details.className = "submission-details";
    details.innerHTML = `
      <summary class="submission-row">
        <span>${item.studentName}${bestBadge}</span>
        <span>${new Date(item.submittedAt).toLocaleString("de-DE")}</span>
        <span class="submission-badge">${item.score}/10</span>
        <span>KI bewertet</span>
        <span class="dropdown-caret" aria-hidden="true">▾</span>
      </summary>
      <div class="submission-feedback-grid">
        <div class="feedback-group">
          <span class="feedback-tag feedback-tag-strong">Stark</span>
          <ul>
            <li>Die Struktur fuehrt klar durch Problem, Analyse und Ergebnis.</li>
            <li>Die Annahmen werden nachvollziehbar hergeleitet und belegt.</li>
            <li>Die Argumente sind konsistent und bauen logisch aufeinander auf.</li>
            <li>Die Loesung zeigt einen realistischen und umsetzbaren Ansatz.</li>
            <li>Die Kernaussagen sind praezise und gut zusammengefasst.</li>
          </ul>
        </div>
        <div class="feedback-group">
          <span class="feedback-tag feedback-tag-weak">Verbesserung</span>
          <ul>
            <li>Konkrete Beispiele wuerden die Empfehlungen greifbarer machen.</li>
            <li>Der Umsetzungsplan sollte mit klaren Schritten ergaenzt werden.</li>
          </ul>
        </div>
      </div>
    `;
    submissionRows.appendChild(details);
  });
};

const initSubmissionControls = () => {
  const generateBtn = document.getElementById("generate-code-btn");
  const refreshBtn = document.getElementById("refresh-submissions");
  const copyBtn = document.getElementById("copy-code");

  if (generateBtn) {
    generateBtn.addEventListener("click", () => {
      if (!activeCaseItem) return;
      const code = generateClassCode();
      setCaseCode(activeCaseItem.id, code);
      registerCodeEntry(code, activeCaseItem);
      updateSubmissionDashboard();
    });
  }

  if (refreshBtn) {
    refreshBtn.addEventListener("click", () => {
      updateSubmissionDashboard();
    });
  }

  if (copyBtn) {
    copyBtn.addEventListener("click", async () => {
      if (!activeCaseItem) return;
      const code = getCaseCode(activeCaseItem.id);
      if (!code) return;
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(code);
      }
    });
  }
};

// Filter anwenden
const applyFilters = () => {
  const subjectFilter = document.getElementById("filter-subject").value;
  const industryFilter = document.getElementById("filter-industry").value;
  const difficultyFilter = document.getElementById("filter-difficulty").value;
  
  filteredCases = allCases.filter(caseItem => {
    if (subjectFilter && caseItem.schoolSubject !== subjectFilter) return false;
    if (industryFilter && caseItem.industry !== industryFilter) return false;
    if (difficultyFilter && caseItem.difficulty !== difficultyFilter) return false;
    return true;
  });
  
  renderCases();
};

// Event Listeners für Filter
const initFilters = () => {
  const filters = [
    "filter-subject",
    "filter-industry",
    "filter-difficulty"
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
    initSubmissionControls();
    renderCases();
  }
};

init();
