import * as React from 'react';
import {
    Spreadsheet,
    SpreadsheetSelectEvent,
    SpreadsheetChangeEvent,
    SpreadsheetExcelImportEvent,
    SpreadsheetExcelExportEvent
} from '@progress/kendo-react-spreadsheet';
import { orders } from './shared-sp-orders';

const EventsLogger = (props: { events: string[] }) => {
    return (
        <div className="example-config">
            <h5>Event log</h5>
            <ul
                className="event-log"
                style={{
                    textAlign: 'right'
                }}
            >
                {props.events
                    .slice()
                    .reverse()
                    .map((event, index) => {
                        return <li key={index}>{event}</li>;
                    })}
            </ul>
        </div>
    );
};

const App = () => {
    const [events, setEvents] = React.useState<string[]>([]);

    const onSelect = React.useCallback(
        (e: SpreadsheetSelectEvent) => {
            setEvents([...events, `New range selected. New value: ${e.range.value()}`]);
        },
        [events]
    );

    const onChange = React.useCallback(
        (e: SpreadsheetChangeEvent) => {
            setEvents([...events, `Spreadsheet change. New value: ${e.range.value()}`]);
        },
        [events]
    );

    const onChangeFormat = React.useCallback(
        (e: SpreadsheetChangeEvent) => {
            setEvents([...events, `Format of the range with value ${e.range.value()} changed to ${e.range.format()}`]);
        },
        [events]
    );

    const onExcelImport = React.useCallback(
        (e: SpreadsheetExcelImportEvent) => {
            setEvents([...events, `${(e.file as File).name} file is about to be imported in the Spreadsheet.`]);
        },
        [events]
    );

    const onExcelExport = React.useCallback(
        (e: SpreadsheetExcelExportEvent) => {
            setEvents([...events, 'Spreadsheet is exported to Excel.']);
        },
        [events]
    );

    return (
        <>
            <Spreadsheet
                style={{
                    width: '100%',
                    height: 450
                }}
                defaultProps={{ sheets: orders }}
                onSelect={onSelect}
                onChange={onChange}
                onChangeFormat={onChangeFormat}
                onExcelImport={onExcelImport}
                onExcelExport={onExcelExport}
            />
            <br />
            <EventsLogger events={events} />
        </>
    );
};

export default App;
