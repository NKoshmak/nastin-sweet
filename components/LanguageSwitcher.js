// import Link from 'next/link';
// import { useRouter } from 'next/router';
import { useTranslation } from "../translations/provider.js";
import { useState } from "react";

export default function LanguageSwitcher() {
  const { translations, changeLanguage } = useTranslation();
  const [active, setActive] = useState("en");

  const handleSwitch = (lang) => {
    changeLanguage(lang);
    setActive(lang);
  };

  return (
    <div className="language-switcher">
      <span className="lang-label">{translations?.choose_language}</span>
      <button
        onClick={() => handleSwitch("en")}
        className={`lang-btn ${active === "en" ? "active" : ""}`}
      >
        EN
      </button>
      <button
        onClick={() => handleSwitch("ua")}
        className={`lang-btn ${active === "ua" ? "active" : ""}`}
      >
        UA
      </button>
    </div>
  );
}