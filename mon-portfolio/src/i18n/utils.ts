import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  let base = import.meta.env.BASE_URL;
  if (base.endsWith('/')) base = base.slice(0, -1);

  let pathWithoutBase = url.pathname;
  if (pathWithoutBase.startsWith(base)) {
    pathWithoutBase = pathWithoutBase.slice(base.length);
  }
  if (!pathWithoutBase.startsWith('/')) pathWithoutBase = '/' + pathWithoutBase;

  const [, lang] = pathWithoutBase.split('/');

  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: string = lang) {
    // 1. On gère le préfixe de la langue (vide pour le FR, '/en' pour l'anglais)
    const langPrefix = l === defaultLang ? '' : `/${l}`;
    
    // 2. On s'assure que le chemin de la page a bien un slash au début
    const safePath = path.startsWith('/') ? path : `/${path}`;
    
    // 3. On assemble la langue et la page
    let fullPath = `${langPrefix}${safePath}`;
    
    // 4. On récupère la base (ex: "/Portfolio")
    let base = import.meta.env.BASE_URL;
    
    // 5. SÉCURITÉ ABSOLUE : On force la base à ne PAS avoir de slash à la fin...
    if (base.endsWith('/')) {
      base = base.slice(0, -1);
    }
    
    // ...et on force la suite à TOUJOURS avoir un slash au début
    if (!fullPath.startsWith('/')) {
      fullPath = `/${fullPath}`;
    }

    // L'assemblage sera toujours parfait : "/Portfolio" + "/en/a-propos"
    return `${base}${fullPath}`;
  }
}