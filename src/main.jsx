import React from 'react';
import { createRoot } from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import translationUzLatin from './../public/locales/uz-latn/translation.json';
import translationUzCyrl from './../public/locales/uz-cyrl/translation.json';
import translationRu from './../public/locales/ru/translation.json';
import App from './App.jsx';
import './index.css';
import './i18n';

i18next.init({
  lng: 'en',
  resources: {
    uzLatin: {
      translation: translationUzLatin,
    },
    uzCyrl: {
      translation: translationUzCyrl,
    },
    ru: {
      translation: translationRu,
    },
  
  },
});

const root = createRoot(document.getElementById('root'));

root.render(
  <I18nextProvider i18n={i18next}>
    <App />
  </I18nextProvider>
);