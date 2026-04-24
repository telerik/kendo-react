import React from 'react';
import { Scheduler, DayView, WeekView, MonthView } from '@progress/kendo-react-scheduler';
import { IntlProvider, load, LocalizationProvider, loadMessages } from '@progress/kendo-react-intl';
import likelySubtags from 'cldr-core/supplemental/likelySubtags.json';
import currencyData from 'cldr-core/supplemental/currencyData.json';
import weekData from 'cldr-core/supplemental/weekData.json';
import numbers from 'cldr-numbers-full/main/es/numbers.json';
import currencies from 'cldr-numbers-full/main/es/currencies.json';
import caGregorian from 'cldr-dates-full/main/es/ca-gregorian.json';
import dateFields from 'cldr-dates-full/main/es/dateFields.json';
import timeZoneNames from 'cldr-dates-full/main/es/timeZoneNames.json';
import esMessages from './es.json';
import { sampleData, displayDate } from './sc-events-utc';

load(likelySubtags, currencyData, weekData, numbers, currencies, caGregorian, dateFields, timeZoneNames);
loadMessages(esMessages as any, 'es-ES');

const App = () => {
    return (
        <LocalizationProvider language="es-ES">
            <IntlProvider locale="es">
                <Scheduler data={sampleData} defaultDate={displayDate}>
                    <DayView />
                    <WeekView />
                    <MonthView />
                </Scheduler>
            </IntlProvider>
        </LocalizationProvider>
    );
};

export default App;
