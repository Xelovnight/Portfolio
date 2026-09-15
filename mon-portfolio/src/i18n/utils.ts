import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  // 1. On retire le chemin de base (ex: /Portfolio/mon-portfolio/)
  const baseUrl = import.meta.env.BASE_URL;
  let pathWithoutBase = url.pathname.replace(baseUrl, '/');

  // Sécurité : éviter les doubles slashs
  pathWithoutBase = pathWithoutBase.replace('//', '/');

  // 2. On extrait le premier dossier qui est maintenant bien la langue
  const [, lang] = pathWithoutBase.split('/');

  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: string = lang) {
    // 1. On ajoute le préfixe de langue UNIQUEMENT si ce n'est pas le français
    const pathName = l === defaultLang ? path : `/${l}${path}`;

    // 2. On nettoie le slash au début pour le rattacher proprement au BASE_URL
    const cleanPath = pathName.startsWith('/') ? pathName.slice(1) : pathName;

    // 3. On retourne l'URL complète dans le bon ordre absolu
    return `${import.meta.env.BASE_URL}${cleanPath}`;
  }
}