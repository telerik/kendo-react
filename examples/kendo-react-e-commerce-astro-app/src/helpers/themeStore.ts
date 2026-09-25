import { atom } from 'nanostores';

export const themeStore = atom<string>(
  typeof window !== 'undefined'
    ? localStorage.getItem('theme') ||
      'https://unpkg.com/@progress/kendo-theme-meridian@14.5.0/dist/meridian-main.css'
    : 'https://unpkg.com/@progress/kendo-theme-meridian@14.5.0/dist/meridian-main.css'
);

export const setTheme = (newTheme: string) => {
  themeStore.set(newTheme);
  if (typeof window !== 'undefined') {
    localStorage.setItem('theme', newTheme);
  }
};
