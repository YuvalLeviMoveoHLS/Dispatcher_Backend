const languageMap = {
  ar: 'Arabic',
  de: 'German',
  en: 'English',
  es: 'Spanish',
  fr: 'French',
  it: 'Itilian',
  nl: 'Dutch',
  no: 'Norwegian',
  pt: 'Portuguese',
  ru: 'Russian',
  sv: 'Swedish',
  tr: 'Turkish',
  zh: 'Chinese',
  da: 'Danish',
  fi: 'Finnish',
  he: 'Hebrew',
  id: 'Indonesian',
  ja: 'Japanese',
  ko: 'Korean',
  ms: 'Malay',
  '': 'None',
};

export function mapLanguageCodeToName(code: string): string {
  return languageMap[code] || code; // Returns the code itself if no mapping is found
}
