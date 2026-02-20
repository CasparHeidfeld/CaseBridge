const STORAGE_CODES = "cb_case_codes";
const STORAGE_SUBMISSIONS = "cb_submissions";
const STORAGE_SESSION = "cb_student_session";

const joinForm = document.getElementById("join-form");
const codeInput = document.getElementById("class-code-input");
const nameInput = document.getElementById("student-name-input");
const joinStatus = document.getElementById("join-status");
const workspace = document.getElementById("student-workspace");
const caseTitle = document.getElementById("case-title");
const caseMeta = document.getElementById("case-meta");
const studentDownload = document.getElementById("student-download");
const uploadArea = document.getElementById("student-upload-area");
const fileInput = document.getElementById("student-file-input");
const uploadStatus = document.getElementById("upload-status");
const submissionsList = document.getElementById("student-submissions");
const submissionsEmpty = document.getElementById("student-submissions-empty");
const leaveBtn = document.getElementById("leave-session");
const joinPanel = document.getElementById("join-panel");

let currentSession = null;

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

const setStatus = (message, type = "info") => {
  if (!joinStatus) return;
  joinStatus.textContent = message;
  joinStatus.dataset.type = type;
};

const setUploadStatus = (message, type = "info") => {
  if (!uploadStatus) return;
  uploadStatus.textContent = message;
  uploadStatus.dataset.type = type;
};

const getCodeEntry = (code) => {
  const codes = readJson(STORAGE_CODES, {});
  return codes[code] || null;
};

const storeSession = (session) => {
  writeJson(STORAGE_SESSION, session);
};

const clearSession = () => {
  localStorage.removeItem(STORAGE_SESSION);
};

const formatDate = (timestamp) => {
  const date = new Date(timestamp);
  return date.toLocaleString("de-DE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });
};

const renderSubmissions = () => {
  if (!currentSession) return;
  const allSubmissions = readJson(STORAGE_SUBMISSIONS, []);
  const mySubmissions = allSubmissions
    .filter((item) => item.code === currentSession.code && item.studentName === currentSession.studentName)
    .sort((a, b) => b.submittedAt - a.submittedAt);

  submissionsList.innerHTML = "";

  if (mySubmissions.length === 0) {
    submissionsEmpty.style.display = "block";
    return;
  }

  submissionsEmpty.style.display = "none";

  mySubmissions.forEach((item) => {
    const row = document.createElement("div");
    row.className = "submission-item";
    row.innerHTML = `
      <span>${item.fileName}</span>
      <span>${formatDate(item.submittedAt)}</span>
      <span class="submission-badge">Bewertet</span>
      <button class="btn btn-outline" data-submission-id="${item.id}" type="button">Loeschen</button>
    `;
    submissionsList.appendChild(row);
  });

  submissionsList.querySelectorAll("button[data-submission-id]").forEach((button) => {
    button.addEventListener("click", () => {
      deleteSubmission(button.getAttribute("data-submission-id"));
    });
  });
};

const showWorkspace = (session, codeEntry) => {
  if (joinPanel) joinPanel.style.display = "none";
  workspace.style.display = "block";
  caseTitle.textContent = codeEntry.caseTitle || "Case";
  caseMeta.textContent = `Klassen-Code: ${session.code} - Name: ${session.studentName}`;
  studentDownload.href = codeEntry.studentPdf || "student-pdf.pdf";
  setUploadStatus("", "info");
  renderSubmissions();
};

const joinSession = (code, studentName) => {
  const codeEntry = getCodeEntry(code);
  if (!codeEntry) {
    setStatus("Code nicht gefunden. Bitte pruefen.", "error");
    return;
  }

  const session = {
    code,
    studentName: studentName.trim(),
    caseId: codeEntry.caseId
  };

  currentSession = session;
  storeSession(session);
  setStatus("Erfolgreich beigetreten.", "success");
  showWorkspace(session, codeEntry);
};

const addSubmission = (file) => {
  if (!currentSession) {
    setUploadStatus("Bitte zuerst beitreten.", "error");
    return;
  }
  const submissions = readJson(STORAGE_SUBMISSIONS, []);
  const score = Math.round((6 + Math.random() * 4) * 10) / 10;
  const id = typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`;

  submissions.push({
    id,
    code: currentSession.code,
    caseId: currentSession.caseId,
    studentName: currentSession.studentName,
    fileName: file.name,
    submittedAt: Date.now(),
    score
  });

  writeJson(STORAGE_SUBMISSIONS, submissions);
  setUploadStatus("Upload erfolgreich. KI bewertet die Abgabe.", "success");
  renderSubmissions();
};

const deleteSubmission = (submissionId) => {
  const submissions = readJson(STORAGE_SUBMISSIONS, []);
  const filtered = submissions.filter((item) => item.id !== submissionId);
  writeJson(STORAGE_SUBMISSIONS, filtered);
  setUploadStatus("Abgabe geloescht.", "success");
  renderSubmissions();
};

const bindUpload = () => {
  if (!uploadArea || !fileInput) return;

  uploadArea.addEventListener("click", () => fileInput.click());

  uploadArea.addEventListener("dragover", (event) => {
    event.preventDefault();
    uploadArea.style.borderColor = "var(--primary)";
    uploadArea.style.background = "var(--accent)";
  });

  uploadArea.addEventListener("dragleave", () => {
    uploadArea.style.borderColor = "";
    uploadArea.style.background = "";
  });

  uploadArea.addEventListener("drop", (event) => {
    event.preventDefault();
    uploadArea.style.borderColor = "";
    uploadArea.style.background = "";
    const file = event.dataTransfer.files[0];
    if (file) addSubmission(file);
  });

  fileInput.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file) addSubmission(file);
    fileInput.value = "";
  });
};

if (joinForm) {
  joinForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const code = codeInput.value.trim();
    const studentName = nameInput.value.trim();

    if (!code || code.length < 4) {
      setStatus("Bitte gueltigen Code eingeben.", "error");
      return;
    }

    if (!studentName) {
      setStatus("Bitte Namen angeben.", "error");
      return;
    }

    joinSession(code, studentName);
  });
}

if (leaveBtn) {
  leaveBtn.addEventListener("click", () => {
    clearSession();
    currentSession = null;
    workspace.style.display = "none";
    if (joinPanel) joinPanel.style.display = "block";
    codeInput.value = "";
    nameInput.value = "";
    setStatus("Abgemeldet.", "info");
  });
}

const init = () => {
  const params = new URLSearchParams(window.location.search);
  const codeParam = params.get("code");
  if (codeParam) codeInput.value = codeParam;

  const session = readJson(STORAGE_SESSION, null);
  if (session && session.code && session.studentName) {
    const codeEntry = getCodeEntry(session.code);
    if (codeEntry) {
      currentSession = session;
      showWorkspace(session, codeEntry);
      return;
    }
  }
};

bindUpload();
init();
