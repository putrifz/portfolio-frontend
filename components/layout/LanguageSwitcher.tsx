import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (e) => {
    const newLang = e.target.dataset.value;
    i18n.changeLanguage(newLang);
  };

  const options = [
    { value: 'en', label: 'EN' },
    { value: 'tr', label: 'TR' }
  ]

  const rows = [];
  for (var option in options) {      
      var opt = options[option];
      rows.push(<button className="language" data-value={opt.value} onClick={handleLanguageChange}>{opt.label}</button>);
  }

  return <div className="languages">{rows}</div>;

};

export default LanguageSwitcher;