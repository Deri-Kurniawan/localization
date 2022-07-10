const languages = [
  {
    code: "en",
    name: "English",
    flag: "🇺🇸",
    dir: "ltr",
  },
  {
    code: "fr",
    name: "Français",
    flag: "fr",
    dir: "ltr",
  },
  {
    code: "id",
    name: "Bahasa Indonesia",
    flag: "id",
    dir: "ltr",
  },
  {
    code: "ae",
    name: "العربية",
    flag: "ae",
    dir: "rtl",
  },
  {
    code: "sunda",
    name: "Basa Sunda",
    flag: "id",
    dir: "ltr",
  },
];

export const supportedLanguages = languages.map((lng) => lng.code);

export default languages;