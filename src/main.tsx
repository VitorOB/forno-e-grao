import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Fontes hospedadas localmente (@fontsource, font-display: swap), só subconjunto latino e pesos usados.
import "@fontsource/fraunces/latin-600.css";
import "@fontsource/dm-sans/latin-400.css";
import "@fontsource/dm-sans/latin-500.css";
import "@fontsource/dm-sans/latin-700.css";
import "./index.css";

import App from "./App";
import { LanguageProvider } from "./i18n/LanguageProvider";

document.documentElement.classList.add("js");

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>,
);
