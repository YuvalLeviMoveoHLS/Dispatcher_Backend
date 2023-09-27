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
const countryMap: { [key: string]: string } = {
  '': 'None',
  ar: 'Argentina',
  au: 'Australia',
  at: 'Austria',
  be: 'Belgium',
  br: 'Brazil',
  bg: 'Bulgaria',
  ca: 'Canada',
  cn: 'China',
  co: 'Colombia',
  cu: 'Cuba',
  cz: 'Czech Republic',
  de: 'Germany',
  eg: 'Egypt',
  fr: 'France',
  gr: 'Greece',
  hk: 'Hong Kong',
  hu: 'Hungary',
  id: 'Indonesia',
  ie: 'Ireland',
  il: 'Israel',
  it: 'Italy',
  jp: 'Japan',
  lv: 'Latvia',
  lt: 'Lithuania',
  my: 'Malaysia',
  mx: 'Mexico',
  ma: 'Morocco',
  nl: 'Netherlands',
  nz: 'New Zealand',
  ng: 'Nigeria',
  no: 'Norway',
  ph: 'Philippines',
  pl: 'Poland',
  pt: 'Portugal',
  ro: 'Romania',
  ru: 'Russia',
  sa: 'Saudi Arabia',
  rs: 'Serbia',
  sg: 'Singapore',
  sk: 'Slovakia',
  si: 'Slovenia',
  za: 'South Africa',
  kr: 'South Korea',
  se: 'Sweden',
  ch: 'Switzerland',
  tw: 'Taiwan',
  th: 'Thailand',
  tr: 'Turkey',
  ae: 'United Arab Emirates',
  ua: 'Ukraine',
  gb: 'United Kingdom',
  us: 'United States',
  ve: 'Venezuela',
};

export function mapCodeToCountry(code: string): string {
  return countryMap[code] || code; // Returns the code itself if no mapping is found
}

export const articleFrontProjection = {
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
