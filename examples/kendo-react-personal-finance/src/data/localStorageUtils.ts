import { DEFAULT_PERSONAL_INFO, DEFAULT_CARD_INFO } from "./defaults";

// Utility functions for managing localStorage data
export function checkLocalStorageData(key) {
  const data = localStorage.getItem(key);
  if (!data) {
    const defaultData = key === "personalInfo" ? DEFAULT_PERSONAL_INFO : DEFAULT_CARD_INFO;
    localStorage.setItem(key, JSON.stringify(defaultData)); // Set default data in localStorage
    return defaultData;
  }
  return JSON.parse(data); // Parse and return existing data
}