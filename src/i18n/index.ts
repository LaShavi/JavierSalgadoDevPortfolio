import es from './es.json';
import en from './en.json';

export const translations = { es, en };
export type Language = 'es' | 'en';

export const DEFAULT_LANGUAGE = 'es' as Language;
export const SUPPORTED_LANGUAGES: Language[] = ['es', 'en'];

export function getTranslation(lang: Language, key: string): string {
  const keys = key.split('.');
  let value: any = translations[lang];

  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      // Fallback a español si no encuentra la traducción
      value = translations['es'];
      for (const fallbackK of keys) {
        if (value && typeof value === 'object' && fallbackK in value) {
          value = value[fallbackK];
        } else {
          return key; // Retorna la clave si no encuentra nada
        }
      }
    }
  }

  return typeof value === 'string' ? value : key;
}

export function isValidLanguage(lang: string): lang is Language {
  return SUPPORTED_LANGUAGES.includes(lang as Language);
}
