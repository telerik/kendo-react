import * as React from 'react';

/* CLDR Data */
import likelySubtags from 'cldr-core/supplemental/likelySubtags.json';
import currencyData from 'cldr-core/supplemental/currencyData.json';
import weekData from 'cldr-core/supplemental/weekData.json';

import bgNumbers from 'cldr-numbers-full/main/bg/numbers.json';
import bgLocalCurrency from 'cldr-numbers-full/main/bg/currencies.json';
import bgCaGregorian from 'cldr-dates-full/main/bg/ca-gregorian.json';
import bgDateFields from 'cldr-dates-full/main/bg/dateFields.json';

import usNumbers from 'cldr-numbers-full/main/en/numbers.json';
import usLocalCurrency from 'cldr-numbers-full/main/en/currencies.json';
import usCaGregorian from 'cldr-dates-full/main/en/ca-gregorian.json';
import usDateFields from 'cldr-dates-full/main/en/dateFields.json';

import gbNumbers from 'cldr-numbers-full/main/en-GB/numbers.json';
import gbLocalCurrency from 'cldr-numbers-full/main/en-GB/currencies.json';
import gbCaGregorian from 'cldr-dates-full/main/en-GB/ca-gregorian.json';
import gbDateFields from 'cldr-dates-full/main/en-GB/dateFields.json';

import { IntlProvider, load } from '@progress/kendo-react-intl';
import { DateFormatter } from './DateFormatter';
import { CurrencyFormatter } from './CurrencyFormatter';
import { Chooser } from './Chooser';

load(
    likelySubtags,
    currencyData,
    weekData,
    bgNumbers,
    bgLocalCurrency,
    bgCaGregorian,
    bgDateFields,
    usNumbers,
    usLocalCurrency,
    usCaGregorian,
    usDateFields,
    gbNumbers,
    gbLocalCurrency,
    gbCaGregorian,
    gbDateFields
);

const locales = ['en-US', 'bg-BG', 'en-GB'];

const App = () => {
    const [locale, setLocale] = React.useState<string>('en-US');

    const handleChange = React.useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
        setLocale(event.target.value);
    }, []);

    return (
        <IntlProvider locale={locale}>
            <div className="example-wrapper row" style={{ minHeight: 60 }}>
                <Chooser value={locale} onChange={handleChange} options={locales} label="Select locale" />
                <DateFormatter />
                <CurrencyFormatter />
            </div>
        </IntlProvider>
    );
};

export default App;
