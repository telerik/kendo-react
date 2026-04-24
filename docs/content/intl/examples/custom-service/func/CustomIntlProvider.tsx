import React, { useMemo } from 'react';
import { CustomIntlContext } from './CustomIntlContext';
import { createCustomIntl } from './createCustomIntl';

export const CustomIntlProvider = (props: {
  locale: string;
  children: React.ReactNode;
}) => {
  const { locale, children } = props;
  const intl = useMemo(() => createCustomIntl(locale), [locale]);

  return (
    <CustomIntlContext.Provider value={intl}>
      {children}
    </CustomIntlContext.Provider>
  );
};
