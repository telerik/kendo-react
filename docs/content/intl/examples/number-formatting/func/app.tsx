import React from 'react';
import {
    IntlProvider,
    load,
    useInternationalization,
} from '@progress/kendo-react-intl';
import likelySubtags from 'cldr-core/supplemental/likelySubtags.json';
import currencyData from 'cldr-core/supplemental/currencyData.json';
import weekData from 'cldr-core/supplemental/weekData.json';

// CLDR Data for English, German, and Bulgarian
import enNumbers from 'cldr-numbers-full/main/en/numbers.json';
import enCurrencies from 'cldr-numbers-full/main/en/currencies.json';
import enCaGregorian from 'cldr-dates-full/main/en/ca-gregorian.json';

import deNumbers from 'cldr-numbers-full/main/de/numbers.json';
import deCurrencies from 'cldr-numbers-full/main/de/currencies.json';
import deCaGregorian from 'cldr-dates-full/main/de/ca-gregorian.json';

import bgNumbers from 'cldr-numbers-full/main/bg/numbers.json';
import bgCurrencies from 'cldr-numbers-full/main/bg/currencies.json';
import bgCaGregorian from 'cldr-dates-full/main/bg/ca-gregorian.json';

// Load the necessary CLDR data
load(
    likelySubtags,
    currencyData,
    weekData,
    enNumbers,
    enCurrencies,
    enCaGregorian,
    deNumbers,
    deCurrencies,
    deCaGregorian,
    bgNumbers,
    bgCurrencies,
    bgCaGregorian
);

const App: React.FC = () => {
    return (
        <div>
            <IntlProvider locale="en">
                <div style={{ marginBottom: '1em' }}>
                    <h5>Format 1234.567 using a 'n2' format (2 decimal places)</h5>
                    <div style={{ fontSize: '1.2em' }}>
                        Result:
                        <strong>
                            <FormattedNumber value={1234.567} format="n2" />
                        </strong>
                    </div>
                </div>
            </IntlProvider>

            <IntlProvider locale="de">
                <div style={{ marginBottom: '1em' }}>
                    <h5>Format 1234.567 using a 'c' format</h5>
                    <div style={{ fontSize: '1.2em' }}>
                        Result:
                        <strong>
                            <FormattedNumber value={1234.567} format="c" />
                        </strong>
                    </div>
                </div>
            </IntlProvider>

            <IntlProvider locale="bg">
                <div style={{ marginBottom: '1em' }}>
                    <h5>Format 1234.567 using custom format options</h5>
                    <div style={{ fontSize: '1.2em' }}>
                        Result:
                        <strong>
                            <FormattedNumber
                                value={1234.567}
                                formatOptions={{
                                    style: 'currency',
                                    currency: 'USD',
                                    currencyDisplay: 'name',
                                }}
                            />
                        </strong>
                    </div>
                </div>
            </IntlProvider>

            <IntlProvider locale="en">
                <div>
                    <h5>Format 2345678 using a custom '#,##0.00' format</h5>
                    <div style={{ fontSize: '1.2em' }}>
                        Result:
                        <strong>
                            <FormattedNumber value={2345678} format="#,##0.00" />
                        </strong>
                    </div>
                </div>
            </IntlProvider>
        </div>
    );
};

const FormattedNumber: React.FC<{
    value: number;
    format?: string;
    formatOptions?: any;
}> = ({ value, format, formatOptions }) => {
    const intl = useInternationalization();

    if (formatOptions) {
        return <em>{intl.formatNumber(value, formatOptions)}</em>;
    }

    const finalFormat = format || 'n';
    return <em>{intl.formatNumber(value, finalFormat)}</em>;
};

export default App;
