import { Article } from './articles/article.interface';

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
export interface ArticleFront {
  source: {
    id: string | null;
    name: string | null;
  };
  title: string | null;
  description: string | null;
  url: string | null;
  urlToImage: string | null;
  publishedAt: string | null;
  content: string | null;
  author?: string | null;
}

export function getArticleFrontProjection() {
  return {
    'source.id': 1,
    'source.name': 1,
    title: 1,
    description: 1,
    url: 1,
    urlToImage: 1,
    publishedAt: 1,
    content: 1,
    author: 1,
  };
}
