import * as React from 'react';

import {
    MultiViewCalendar,
    MultiViewCalendarChangeEvent,
    MultiViewCalendarMode,
    SelectionRange
} from '@progress/kendo-react-dateinputs';
import { Button } from '@progress/kendo-react-buttons';
import { cloneDate, addDays } from '@progress/kendo-date-math';

interface AppState {
    value: SelectionRange;
    mode: MultiViewCalendarMode;
}

const EMPTY_SELECTIONRANGE = {
    start: null,
    end: null
};

const App = () => {
    const [state, setState] = React.useState<AppState>({
        value: EMPTY_SELECTIONRANGE,
        mode: 'range'
    });

    const handleChange = (event: MultiViewCalendarChangeEvent) => {
        let currentValue: any = event.value;
        setState({ ...state, value: currentValue });
    };

    const handleSpecialClick = () => {
        const today = new Date();
        const christmas = {
            start: new Date(today.getFullYear(), 11, 24),
            end: new Date(today.getFullYear(), 11, 26)
        };

        setState({ mode: 'range', value: christmas });
    };

    const handleArrayClick = () => {
        if (state.mode === 'multiple') {
            return;
        }
        let range = state.value || EMPTY_SELECTIONRANGE;

        let value: any = splitRangeToDays(range.start, range.end);

        setState({
            value,
            mode: 'multiple'
        });
    };
    const handleRangeClick = () => {
        if (state.mode === 'range') {
            return;
        }
        let dates = state.value;
        let value: any = extractRangeFromDays(dates);

        setState({
            value,
            mode: 'range'
        });
    };

    const extractRangeFromDays = (dates) => {
        let start = new Date();
        let end = new Date();
        dates.forEach((date) => {
            if (!start || date.getTime() < start.getTime()) {
                start = date;
            }
            if (!end || end.getTime() < date.getTime()) {
                end = date;
            }
        });

        return start && end ? { start, end } : null;
    };

    const splitRangeToDays = (start, end) => {
        let dates: Date[] = [];
        if (!start && !end) {
            return dates;
        }
        if (start && !end) {
            return [start];
        }
        let currentDate = cloneDate(start || undefined);
        while (currentDate && end && currentDate.getTime() <= end.getTime()) {
            dates.push(cloneDate(currentDate));
            currentDate = addDays(currentDate, 1);
        }
        return dates;
    };

    return (
        <div>
            <div className="row">
                <div className="col-md-8">
                    <Button
                        themeColor={'primary'}
                        fillMode="outline"
                        onClick={handleArrayClick}
                        className="m-2 p-1"
                        type="button"
                    >
                        To Array
                    </Button>
                    <Button fillMode="outline" className="m-3 p-1" onClick={handleRangeClick} type="button">
                        To Range
                    </Button>
                </div>
                <div className="col-md-4">
                    <Button
                        themeColor={'primary'}
                        fillMode="outline"
                        onClick={handleSpecialClick}
                        className="m-3 p-1"
                        type="button"
                    >
                        Set Date to Christmas
                    </Button>
                </div>
            </div>
            <MultiViewCalendar mode={state.mode} value={state.value} onChange={handleChange} topView="month" />
        </div>
    );
};

export default App;
