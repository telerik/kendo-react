import { atom } from 'nanostores';

export const themeStore = atom<string>(
  typeof window !== 'undefined'
    ? localStorage.getItem('theme') ||
      'https://unpkg.com/@progress/kendo-theme-default@14.1.0/dist/default-main.css'
    : 'https://unpkg.com/@progress/kendo-theme-default@14.1.0/dist/default-main.css'
);

export const setTheme = (newTheme: string) => {
  themeStore.set(newTheme);
  if (typeof window !== 'undefined') {
    localStorage.setItem('theme', newTheme);
  }
};
