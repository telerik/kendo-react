import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { MultiViewCalendar } from '@progress/kendo-react-dateinputs';
import { cloneDate, addDays } from '@progress/kendo-date-math';
const EMPTY_SELECTIONRANGE = {
    start: null,
    end: null
};

const App = () => {
    const [state, setState] = React.useState({
        value: null,
        mode: 'range'
    });

    const handleChange = event => {
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
        this.cal.setState({ focusedDate: christmas.start });
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

    const extractRangeFromDays = dates => {
        let start = null;
        let end = null;
        dates.forEach(date => {
            if (!start || date.getTime() < start.getTime()) {
                start = date;
            }

            if (!end || end.getTime() < date.getTime()) {
                end = date;
            }
        });
        return start && end ? {
            start,
            end
        } : null;
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

    return <div>
        <div className="row">
            <div className="col-md-8">
                <button className="m-2 p-1 k-button k-outline k-primary" onClick={handleArrayClick}>To Array</button>
                <button className="m-3 p-1 k-button k-outline" onClick={handleRangeClick}>To Range</button>
            </div>
            <div className="col-md-4">
                <button className="m-3 p-1 k-button k-outline k-primary" onClick={handleSpecialClick}>Set Date to Christmas</button>
            </div>
        </div>
        <MultiViewCalendar
            mode={state.mode}
            ref={cal => this.cal = cal}
            value={state.value} onChange={handleChange} topView="month" />
    </div>;
};

ReactDOM.render(<App />, document.querySelector('my-app'));