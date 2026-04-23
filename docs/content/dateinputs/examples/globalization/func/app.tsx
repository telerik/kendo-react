import * as React from 'react';

import {
    Calendar,
    DateInput,
    DatePicker,
    TimePicker,
    DateRangePicker,
    DateTimePicker
} from '@progress/kendo-react-dateinputs';
import { IntlProvider, load, loadMessages, LocalizationProvider } from '@progress/kendo-react-intl';

import likelySubtags from 'cldr-core/supplemental/likelySubtags.json';
import currencyData from 'cldr-core/supplemental/currencyData.json';
import weekData from 'cldr-core/supplemental/weekData.json';

import numbers from 'cldr-numbers-full/main/es/numbers.json';
import caGregorian from 'cldr-dates-full/main/es/ca-gregorian.json';
import dateFields from 'cldr-dates-full/main/es/dateFields.json';
import timeZoneNames from 'cldr-dates-full/main/es/timeZoneNames.json';

load(likelySubtags, currencyData, weekData, numbers, caGregorian, dateFields, timeZoneNames);

import esMessages from './shared-di-es';
loadMessages(esMessages, 'es');

const App = () => {
    const state = { locale: 'es', value: new Date() };

    return (
        <LocalizationProvider language={state.locale}>
            <IntlProvider locale={state.locale}>
                <div className="example-wrapper row">
                    <div className="col-xs-12 col-md-12 example-config">
                        <h5>
                            Current local - <em>{state.locale}</em>
                        </h5>
                    </div>
                    <div className="col-xs-12 col-md-6 example-col">
                        <p>Calendar</p>
                        <Calendar value={state.value} />
                    </div>
                    <div className="col-xs-12 col-md-6 example-col">
                        <p>DatePicker</p>
                        <DatePicker />
                        <p>TimePicker</p>
                        <TimePicker />
                        <p>DateTimePicker</p>
                        <DateTimePicker />
                        <p>DateRangePicker</p>
                        <DateRangePicker style={{ width: 250 }} format="d.MMMM.yyyy" />
                        <p>DateInput</p>
                        <div>
                            <DateInput value={state.value} width={250} spinners={true} />
                        </div>
                        <br />
                        <div>
                            <DateInput width={250} />
                        </div>
                        <br />
                        <div>
                            <DateInput width={250} format="d.MMM.y, hh:mm:ss EEEE" />
                        </div>
                        <br />
                        <div>
                            <DateInput width={250} format="d.MMMM.yyyy" />
                        </div>
                    </div>
                </div>
            </IntlProvider>
        </LocalizationProvider>
    );
};

export default App;
