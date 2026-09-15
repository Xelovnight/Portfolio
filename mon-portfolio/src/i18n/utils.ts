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
    // 1. On s'assure que le chemin demandé commence bien par un slash
    const safePath = path.startsWith('/') ? path : `/${path}`;
    
    // 2. On ajoute la langue si ce n'est pas le français (ex: "/en/certifications" ou "/certifications")
    let pathName = l === defaultLang ? safePath : `/${l}${safePath}`;

    // Sécurité anti double-slash (si path valait "/")
    pathName = pathName.replace('//', '/');

    // 3. On récupère le BASE_URL et on force la suppression de son slash final s'il en a un
    let base = import.meta.env.BASE_URL;
    if (base.endsWith('/')) {
      base = base.slice(0, -1);
    }

    // 4. On colle le BASE_URL (sans slash à la fin) avec le chemin (qui a un slash au début)
    return `${base}${pathName}`;
  }
}