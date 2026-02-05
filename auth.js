import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

const SUPABASE_URL = "https://sereldjnwxdyehaevvad.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_qVf29l_oGYTn56V9hxzfsw__CtoSmt1";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const form = document.querySelector(".login-form");
const emailInput = document.getElementById("login-email");
const passwordInput = document.getElementById("login-password");
const statusEl = document.querySelector(".login-status");

const setStatus = (message, type = "info") => {
  if (!statusEl) return;
  statusEl.textContent = message;
  statusEl.dataset.type = type;
};

const handleLogin = async (event) => {
  event.preventDefault();
  setStatus("Anmeldung läuft…");

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    setStatus(`Fehler: ${error.message}`, "error");
    return;
  }

  if (data.session) {
    setStatus("Erfolgreich angemeldet. Weiterleitung...", "success");
    
    // Fallback-Link anzeigen
    const linkContainer = document.getElementById("library-link-container");
    if (linkContainer) {
      linkContainer.style.display = "block";
    }
    
    // Sofortige Weiterleitung
    window.location.href = "./library.html";
  } else {
    setStatus("Fehler: Keine Session erhalten", "error");
  }
};
};

const handleSignup = async (event) => {
  event.preventDefault();
  setStatus("Registrierung läuft…");

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  const { error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    setStatus(`Fehler: ${error.message}`, "error");
    return;
  }

  setStatus("Registrierung erfolgreich. Bitte E-Mail bestätigen.", "success");
};

if (form) {
  const signupBtn = document.getElementById("signup-submit");
  const signupLink = document.getElementById("signup-link");

  form.addEventListener("submit", handleLogin);
  signupBtn?.addEventListener("click", handleSignup);
  signupLink?.addEventListener("click", handleSignup);
}

// Prüfen, ob der Nutzer bereits eingeloggt ist
// Falls ja, zur Library weiterleiten
const checkExistingSession = async () => {
  const { data: { session } } = await supabase.auth.getSession();
  
  if (session) {
    console.log("Active session found, redirecting to library");
    window.location.href = "./library.html";
  }
};

// Nur auf der Startseite prüfen (nicht in library.html)
if (!window.location.pathname.includes("library.html")) {
  checkExistingSession();
}
