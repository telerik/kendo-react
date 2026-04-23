import * as React from 'react';

import { IntlProvider, load, loadMessages, LocalizationProvider } from '@progress/kendo-react-intl';
import { NumericTextBox } from '@progress/kendo-react-inputs';

import likelySubtags from 'cldr-core/supplemental/likelySubtags.json';
import currencyData from 'cldr-core/supplemental/currencyData.json';
import esNumbers from 'cldr-numbers-full/main/es/numbers.json';
import esCurrencies from 'cldr-numbers-full/main/es/currencies.json';

load(likelySubtags, currencyData, esNumbers, esCurrencies);
import esMessages from './shared-in-es';
loadMessages(esMessages, 'es');

const App = () => {
    return (
        <div className="example-wrapper row" style={{ minHeight: 80 }}>
            <div className="col-xs-12 col-sm-6 example-col">
                <LocalizationProvider language="es">
                    <IntlProvider locale="en">
                        <NumericTextBox defaultValue={123.45} format="c2" />
                    </IntlProvider>
                </LocalizationProvider>
            </div>
            <div className="col-xs-12 col-sm-6 example-col">
                <LocalizationProvider language="es">
                    <IntlProvider locale="es">
                        <NumericTextBox defaultValue={123.45} format="c2" />
                    </IntlProvider>
                </LocalizationProvider>
            </div>
        </div>
    );
};

export default App;
