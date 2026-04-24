import React from 'react';
import { useCustomIntl } from './CustomIntlContext';

export const DateFormatter = (props: { date: Date }) => {
  const { date } = props;
  const intl = useCustomIntl();
  return <span>{intl.formatDate(date, 'EEEE, d.MM.yyyy')}</span>;
};
