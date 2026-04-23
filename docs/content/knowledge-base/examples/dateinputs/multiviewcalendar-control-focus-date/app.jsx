import * as React from 'react';
import { MultiViewCalendar } from '@progress/kendo-react-dateinputs';
import { Button } from '@progress/kendo-react-buttons';
import { cloneDate, addDays } from '@progress/kendo-date-math';
const EMPTY_SELECTIONRANGE = {
    start: null,
    end: null
};

const App = () => {
    const myCal = React.useRef(null);
    const [state, setState] = React.useState({
        value: null,
        mode: 'range'
    });

    const handleChange = (event) => {
        setState({
            ...state,
            value: event.value
        });
    };

    const handleSpecialClick = () => {
        const today = new Date();
        const christmas = {
            start: new Date(today.getFullYear(), 11, 24),
            end: new Date(today.getFullYear(), 11, 26)
        };
        setState({
            mode: 'range',
            value: christmas
        });
    };

    const handleArrayClick = () => {
        if (state.mode === 'multiple') {
            return;
        }

        let range = state.value || EMPTY_SELECTIONRANGE;
        let value = splitRangeToDays(range.start, range.end);
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
        let value = extractRangeFromDays(dates);
        setState({
            value,
            mode: 'range'
        });
    };

    const extractRangeFromDays = (dates) => {
        let start = null;
        let end = null;
        dates.forEach((date) => {
            if (!start || date.getTime() < start.getTime()) {
                start = date;
            }

            if (!end || end.getTime() < date.getTime()) {
                end = date;
            }
        });
        return start && end
            ? {
                  start,
                  end
              }
            : null;
    };

    const splitRangeToDays = (start, end) => {
        let dates = [];

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
                    <div style={{ display: 'flex', gap: '8px' }}>
                        <Button type="button" fillMode="outline" themeColor="primary" onClick={handleArrayClick}>
                            Focus on Multiple Dates (Array)
                        </Button>
                        <Button type="button" fillMode="outline" onClick={handleRangeClick}>
                            Focus on Date Range
                        </Button>
                    </div>
                </div>
                <div className="col-md-4">
                    <Button type="button" fillMode="outline" themeColor="primary" onClick={handleSpecialClick}>
                        Focus on Special Dates
                    </Button>
                </div>
            </div>
            <MultiViewCalendar
                mode={state.mode}
                ref={myCal}
                value={state.value}
                onChange={handleChange}
                topView="month"
            />
        </div>
    );
};

export default App;
