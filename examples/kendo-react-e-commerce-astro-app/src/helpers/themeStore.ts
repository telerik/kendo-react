import { atom } from 'nanostores';

export const themeStore = atom<string>(
  typeof window !== 'undefined'
    ? localStorage.getItem('theme') ||
      'https://unpkg.com/@progress/kendo-theme-default@10.3.1/dist/default-main.css'
    : 'https://unpkg.com/@progress/kendo-theme-default@10.3.1/dist/default-main.css'
);

export const setTheme = (newTheme: string) => {
  themeStore.set(newTheme);
  if (typeof window !== 'undefined') {
    localStorage.setItem('theme', newTheme);
  }
};
