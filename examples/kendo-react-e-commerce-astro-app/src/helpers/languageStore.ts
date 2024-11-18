import { atom } from 'nanostores';

export const selectedLanguage = atom('en'); 

if (typeof window !== 'undefined' && window.localStorage) {
  const savedLanguage = localStorage.getItem('selectedLanguage');
  if (savedLanguage) {
    selectedLanguage.set(savedLanguage);
  }

  selectedLanguage.listen((newLanguage) => {
    localStorage.setItem('selectedLanguage', newLanguage);
  });
}
