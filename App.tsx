import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Experience,
} from "./components";
import { useEffect } from "react";
import { config } from "./constants/config";
import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import translationEN from "./locales/en/translation.json";
import translationTR from "./locales/tr/translation.json";

const resources = {
  en: {
    translation: translationEN,
  },
  tr: {
    translation: translationTR,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  react: {
    transSupportBasicHtmlNodes:true,
    transKeepBasicHtmlNodesFor:['br', 'b', 'i', 'p','h1']
  }
});

 
const App = () => {
  useEffect(() => {
    if (document.title !== config.html.title) {
      document.title = config.html.title;
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="bg-primary relative z-0">
        <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Tech />
        <Works />
        <Experience />
        {/* <Feedbacks /> */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
