import * as React from 'react';
import {
    Spreadsheet,
    SpreadsheetSelectEvent,
    SpreadsheetChangeEvent,
    SpreadsheetExcelImportEvent
} from '@progress/kendo-react-spreadsheet';
import { EventLog } from '@docs-shared/EventLog';
import { orders } from './shared-sp-orders';

const App = () => {
    const [events, setEvents] = React.useState<string[]>([]);

    const log = (message: string) => setEvents((prev) => [message, ...prev]);

    const onSelect = React.useCallback((e: SpreadsheetSelectEvent) => {
        log(`New range selected. New value: ${e.range.value()}`);
    }, []);

    const onChange = React.useCallback((e: SpreadsheetChangeEvent) => {
        log(`Spreadsheet change. New value: ${e.range.value()}`);
    }, []);

    const onChangeFormat = React.useCallback((e: SpreadsheetChangeEvent) => {
        log(`Format of the range with value ${e.range.value()} changed to ${e.range.format()}`);
    }, []);

    const onExcelImport = React.useCallback((e: SpreadsheetExcelImportEvent) => {
        log(`${(e.file as File).name} file is about to be imported in the Spreadsheet.`);
    }, []);

    const onExcelExport = React.useCallback(() => {
        log('Spreadsheet is exported to Excel.');
    }, []);

    return (
        <EventLog events={events} onClear={() => setEvents([])}>
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
        </EventLog>
    );
};

export default App;
