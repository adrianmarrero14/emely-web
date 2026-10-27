import { ui, type UiKey } from './ui';

// Spanish is the default language and keeps the unprefixed URLs; every other language lives under /<lang>/.
export const languages = {
  es: { label: 'ES', name: 'Español' },
  en: { label: 'EN', name: 'English' },
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'es';

/** A value written once per language, e.g. a project summary. */
export type Localized<T = string> = Record<Lang, T>;

export const isLang = (value: unknown): value is Lang => typeof value === 'string' && value in languages;

/** The page language, from Astro.currentLocale (set by the i18n config from the URL). */
export const getLang = (locale: string | undefined): Lang => (isLang(locale) ? locale : defaultLang);

export const useTranslations = (lang: Lang) => (key: UiKey) => ui[lang][key];

// Translated slugs: each page has its own URL per language.
export const routes = {
  home: { es: '/', en: '/en/' },
  about: { es: '/sobre-mi', en: '/en/about' },
  projects: { es: '/proyectos', en: '/en/projects' },
  contact: { es: '/contacto', en: '/en/contact' },
  thanks: { es: '/contacto/gracias', en: '/en/contact/thanks' },
} satisfies Record<string, Localized>;

export type RouteKey = keyof typeof routes;

export const path = (route: RouteKey, lang: Lang) => routes[route][lang];

// Pages that exist in one language only (the case studies, for now) send the switcher to the closest section.
const fallbacks: { prefix: string; route: RouteKey }[] = [{ prefix: '/proyectos/', route: 'projects' }];

const normalize = (pathname: string) => pathname.replace(/\/$/, '') || '/';

/**
 * The URL of the current page in every language, and whether each one is a real translation.
 * Feeds the language switcher and the hreflang links.
 */
export const getAlternates = (pathname: string) => {
  const current = normalize(pathname);
  const match = Object.values(routes).find((paths) =>
    Object.values(paths).some((candidate) => normalize(candidate) === current),
  );
  const fallback = fallbacks.find((entry) => current.startsWith(entry.prefix))?.route ?? 'home';
  const pageLang =
    (Object.keys(languages) as Lang[]).find(
      (lang) => lang !== defaultLang && (current === `/${lang}` || current.startsWith(`/${lang}/`)),
    ) ?? defaultLang;

  return (Object.keys(languages) as Lang[]).map((lang) => ({
    lang,
    href: match ? match[lang] : lang === pageLang ? current : routes[fallback][lang],
    translated: Boolean(match) || lang === pageLang,
  }));
};
