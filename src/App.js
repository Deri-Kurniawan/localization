import React from "react";
import { useTranslation } from "react-i18next";
import LangChanger from "./components/LangChanger";

export default function App() {
  const { t } = useTranslation();
  document.title = t("title");

  return (
    <>
      <LangChanger />
      <h2>{t('intro', {name: 'Deri Kurniawan', age: new Date().getFullYear()-2001})}</h2>
      <p>{t('lorem')}</p>
    </>
  );
}