import { createContext, useContext, useState, useEffect } from "react";

const TranslationContext = createContext();

export function TranslationProvider({ children }) {
  const [translations, setTranslations] = useState({});
  const [lang, setLang] = useState("en");

    useEffect(() => {
    const storedLang = localStorage.getItem("lang");
    const browserLang = navigator.language?.split("-")[0]; // 'en', 'ua'

    if (storedLang) {
      setLang(storedLang);
    } else if (["en", "ua"].includes(browserLang)) {
      setLang(browserLang);
      localStorage.setItem("lang", browserLang);
    } else {
      setLang("en");
    }
  }, []);

  useEffect(() => {
    import(`../i18n/${lang}/${lang}.json`).then((module) =>
      setTranslations(module.default)
    );
  }, [lang]);
  
  const changeLanguage = (newLang) => {
    setLang(newLang);
  };

  return (
    <TranslationContext.Provider value={{ translations, changeLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  return useContext(TranslationContext);
}