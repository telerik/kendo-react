import * as React from 'react';

import { guid } from '@progress/kendo-react-common';
import { timezoneNames } from '@progress/kendo-date-math';
import { DropDownList, DropDownListChangeEvent } from '@progress/kendo-react-dropdowns';
import { Label } from '@progress/kendo-react-labels';
import { IntlProvider, load, LocalizationProvider, loadMessages } from '@progress/kendo-react-intl';
import {
    Scheduler,
    TimelineView,
    DayView,
    WeekView,
    MonthView,
    AgendaView,
    SchedulerViewChangeEvent,
    SchedulerDateChangeEvent,
    SchedulerDataChangeEvent
} from '@progress/kendo-react-scheduler';

import weekData from 'cldr-core/supplemental/weekData.json';
import currencyData from 'cldr-core/supplemental/currencyData.json';
import likelySubtags from 'cldr-core/supplemental/likelySubtags.json';

import numbers from 'cldr-numbers-full/main/es/numbers.json';
import dateFields from 'cldr-dates-full/main/es/dateFields.json';
import currencies from 'cldr-numbers-full/main/es/currencies.json';
import caGregorian from 'cldr-dates-full/main/es/ca-gregorian.json';
import timeZoneNames from 'cldr-dates-full/main/es/timeZoneNames.json';

import '@progress/kendo-date-math/tz/Etc/UTC';
import '@progress/kendo-date-math/tz/Europe/Sofia';
import '@progress/kendo-date-math/tz/Europe/Madrid';
import '@progress/kendo-date-math/tz/Asia/Dubai';
import '@progress/kendo-date-math/tz/Asia/Tokyo';
import '@progress/kendo-date-math/tz/America/New_York';
import '@progress/kendo-date-math/tz/America/Los_Angeles';

import esMessages from './es.json';
import { sampleDataWithCustomSchema, displayDate, customModelFields } from './sc-events-utc';
import { RadioButton } from '@progress/kendo-react-inputs';

load(likelySubtags, currencyData, weekData, numbers, currencies, caGregorian, dateFields, timeZoneNames);
loadMessages(esMessages, 'es-ES');

const App = () => {
    const timezones = React.useMemo(() => timezoneNames(), []);
    const locales = [
        { language: 'en-US', locale: 'en' },
        { language: 'es-ES', locale: 'es' }
    ];

    const [view, setView] = React.useState('day');
    const [date, setDate] = React.useState(displayDate);
    const [locale, setLocale] = React.useState(locales[0]);
    const [timezone, setTimezone] = React.useState('Etc/UTC');
    const [orientation, setOrientation] = React.useState<'horizontal' | 'vertical'>('horizontal');
    const [data, setData] = React.useState(sampleDataWithCustomSchema);

    const handleViewChange = React.useCallback(
        (event: SchedulerViewChangeEvent) => {
            setView(event.value);
        },
        [setView]
    );

    const handleDateChange = React.useCallback(
        (event: SchedulerDateChangeEvent) => {
            setDate(event.value);
        },
        [setDate]
    );

    const handleLocaleChange = React.useCallback(
        (event: DropDownListChangeEvent) => {
            setLocale(event.target.value);
        },
        [setLocale]
    );

    const handleTimezoneChange = React.useCallback(
        (event: DropDownListChangeEvent) => {
            setTimezone(event.target.value);
        },
        [setTimezone]
    );

    const handleOrientationChange = React.useCallback((event) => {
        console.log(event);

        setOrientation(event.target.element.getAttribute('data-orientation'));
    }, []);

    const handleDataChange = React.useCallback(
        ({ created, updated, deleted }: SchedulerDataChangeEvent) => {
            setData((old) =>
                old
                    .filter((item) => deleted.find((current) => current.TaskID === item.TaskID) === undefined)
                    .map((item) => updated.find((current) => current.TaskID === item.TaskID) || item)
                    .concat(created.map((item) => Object.assign({}, item, { TaskID: guid() })))
            );
        },
        [setData]
    );

    return (
        <div>
            <div className="example-config">
                <div className="row">
                    <div className="col">
                        <h5>Timezone:</h5>
                        <DropDownList value={timezone} onChange={handleTimezoneChange} data={timezones} />
                    </div>
                    <div className="col">
                        <h5>Locale:</h5>
                        <DropDownList
                            value={locale}
                            onChange={handleLocaleChange}
                            data={locales}
                            textField="language"
                            dataItemKey="locale"
                        />
                    </div>
                    <div className="col">
                        <h5>Orientation:</h5>
                        <RadioButton
                            name="orientation"
                            id="horizontal"
                            data-orientation="horizontal"
                            checked={orientation === 'horizontal'}
                            onChange={handleOrientationChange}
                        />
                        <Label className="k-radio-label" editorId="horizontal">
                            Horizontal
                        </Label>
                        <br />
                        <RadioButton
                            name="orientation"
                            id="vertical"
                            data-orientation="vertical"
                            checked={orientation === 'vertical'}
                            onChange={handleOrientationChange}
                        />
                        <Label className="k-radio-label" editorId="vertical">
                            Vertical
                        </Label>
                    </div>
                </div>
            </div>
            <LocalizationProvider language={locale.language}>
                <IntlProvider locale={locale.locale}>
                    <Scheduler
                        data={data}
                        onDataChange={handleDataChange}
                        view={view}
                        onViewChange={handleViewChange}
                        date={date}
                        onDateChange={handleDateChange}
                        editable={true}
                        timezone={timezone}
                        modelFields={customModelFields}
                        group={{
                            resources: ['Rooms', 'Persons'],
                            orientation
                        }}
                        resources={[
                            {
                                name: 'Rooms',
                                data: [
                                    { text: 'Meeting Room 101', value: 1 },
                                    { text: 'Meeting Room 201', value: 2, color: '#FF7272' }
                                ],
                                field: 'RoomID',
                                valueField: 'value',
                                textField: 'text',
                                colorField: 'color'
                            },
                            {
                                name: 'Persons',
                                data: [
                                    { text: 'Peter', value: 1, color: '#5392E4' },
                                    { text: 'Alex', value: 2, color: '#54677B' }
                                ],
                                field: 'PersonIDs',
                                valueField: 'value',
                                textField: 'text',
                                colorField: 'color'
                            }
                        ]}
                    >
                        <TimelineView />
                        <DayView />
                        <WeekView />
                        <MonthView />
                        <AgendaView />
                    </Scheduler>
                </IntlProvider>
            </LocalizationProvider>
        </div>
    );
};

export default App;
