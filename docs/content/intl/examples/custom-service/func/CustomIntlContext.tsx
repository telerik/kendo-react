import React, { createContext, useContext } from 'react';

export const CustomIntlContext = createContext<any>(null);

export const useCustomIntl = () => {
  const ctx = useContext(CustomIntlContext);
  if (!ctx) {
    throw new Error('useCustomIntl must be used inside <CustomIntlProvider>');
  }
  return ctx;
};
