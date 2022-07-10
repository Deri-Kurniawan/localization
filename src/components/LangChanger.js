import i18next from 'i18next'
import React, { useEffect } from 'react'
import languages from '../locales/languages'
import cookies from 'js-cookie';

function LangChanger() {
  const languageCode = cookies.get('i18next') || 'en';

  useEffect(() => {
    document.body.dir = languages.find(lang => lang.code === languageCode).dir || 'ltr';
  }, [languageCode]);

  return (
    <>
      <select
        onChange={({ target }) =>
          i18next.changeLanguage(target.value)}
        defaultValue={languageCode}
        >
      {
        languages.map(({ code, name }, index) => 
          <option key={index} value={code}>
            {name}
          </option>
        )
      }
      </select>
      <span className={`fi fi-${languageCode !== 'en' ? languageCode : 'us' }`}></span>({languageCode})
    </>
  );
}

export default LangChanger