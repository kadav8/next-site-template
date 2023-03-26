const dictionaries = {
  hu: () => import('./content/hu.json').then(module => module.default),
  en: () => import('./content/en.json').then(module => module.default)
}

export const dictionary = async locale => dictionaries[locale]()