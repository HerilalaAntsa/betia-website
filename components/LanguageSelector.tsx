import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex gap-2 items-center text-xs">
      <button
        onClick={() => changeLanguage('fr')}
        className={
          i18n.language === 'fr'
            ? 'font-bold underline text-[#B8976A]'
            : 'hover:underline text-gray-500'
        }
        aria-label="Français"
      >
        FR
      </button>
      <span className="text-gray-400">|</span>
      <button
        onClick={() => changeLanguage('en')}
        className={
          i18n.language === 'en'
            ? 'font-bold underline text-[#B8976A]'
            : 'hover:underline text-gray-500'
        }
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSelector;
