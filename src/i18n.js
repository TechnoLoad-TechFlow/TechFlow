import { createI18n } from 'vue-i18n';
import en from './locales/en.json';
import es from './locales/es.json';

const defaultLocale = import.meta.env.VITE_DEFAULT_LOCALE ?? 'es';

export const i18n = createI18n({
  legacy: false,
  locale: defaultLocale,
  fallbackLocale: 'en',
  globalInjection: true,
  messages: Object.freeze({ en, es })
});
