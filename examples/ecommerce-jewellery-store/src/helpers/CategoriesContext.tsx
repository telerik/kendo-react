import React, { createContext, useContext, useState } from "react";

interface CategoriesContextType {
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
}

const CategoriesContext = createContext<CategoriesContextType | undefined>(undefined);

export const CategoriesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <CategoriesContext.Provider value={{ selectedCategory, setSelectedCategory }}>
      {children}
    </CategoriesContext.Provider>
  );
};

export const useCategoriesContext = () => {
  const context = useContext(CategoriesContext);
  if (!context) {
    throw new Error("useCategoriesContext must be used within a CategoriesProvider");
  }
  return context;
};
