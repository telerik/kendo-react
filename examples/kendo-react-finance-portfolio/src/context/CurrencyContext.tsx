import * as React from 'react';

export enum CURRENCY {
    USD,
    BGN,
    GBP
}

export interface CurrencyContextType {
    currency: CURRENCY,
    onCurrencyChange?: any
}

export const CurrencyContext = React.createContext<CurrencyContextType>({
    currency: CURRENCY.USD
});
