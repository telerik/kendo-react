import { IntlService } from '@progress/kendo-react-intl';

export function createCustomIntl(locale: string) {
  const base = new IntlService(locale);

  const service: any = {
    __isCustom: true,
    locale,
    formatDate(value: Date, format?: string) {
      return 'custom format: ' + base.formatDate(value, format);
    },
  };

  if (typeof (base as any).formatNumber === 'function') {
    service.formatNumber = (base as any).formatNumber.bind(base);
  }
  if (typeof (base as any).formatCurrency === 'function') {
    service.formatCurrency = (base as any).formatCurrency.bind(base);
  }
  if (typeof (base as any).toString === 'function') {
    service.toString = (base as any).toString.bind(base);
  }

  return service;
}
