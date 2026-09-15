import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  // 1. On retire le chemin de base
  const baseUrl = import.meta.env.BASE_URL;
  let pathWithoutBase = url.pathname.replace(baseUrl, '/');

  // Sécurité : éviter les doubles slashs
  pathWithoutBase = pathWithoutBase.replace('//', '/');

  // 2. On extrait la langue
  const [, lang] = pathWithoutBase.split('/');

  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

// 3. LA FONCTION MANQUANTE RESTAURÉE POUR TES TRADUCTIONS
export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: string = lang) {
    // On gère le préfixe
    const pathName = l === defaultLang ? path : `/${l}${path}`;
    // On nettoie
    const cleanPath = pathName.startsWith('/') ? pathName.slice(1) : pathName;
    // On retourne l'URL absolue
    return `${import.meta.env.BASE_URL}${cleanPath}`;
  }
}