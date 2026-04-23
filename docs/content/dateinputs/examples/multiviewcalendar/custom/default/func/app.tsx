import * as React from 'react';

import { CalendarCellProps, MultiViewCalendar } from '@progress/kendo-react-dateinputs';
import { Tooltip } from '@progress/kendo-react-tooltip';
import { classNames } from '@progress/kendo-react-common';

const CustomCell = (props: CalendarCellProps) => {
    const title = "We're closed on the weekends!";
    const handleClick = () => {
        if (!props.isWeekend && props.onClick) {
            props.onClick(props.value);
        }
    };

    const style = {
        cursor: 'pointer',
        opacity: props.isWeekend ? 0.6 : 1
    };

    const className = classNames({
        'k-selected': props.isSelected,
        'k-focus': props.isFocused
    });

    return (
        <td onClick={handleClick} className={className} style={style}>
            <span className="k-link" title={props.isWeekend ? title : ''}>
                {props.children}
            </span>
        </td>
    );
};

const App = () => {
    const [value, setValue] = React.useState(null);

    const handleChange = (event) => {
        const dayOfWeek = event.value.getDay();

        // 0 = Sunday, 6 = Saturday
        if (dayOfWeek !== 0 && dayOfWeek !== 6) {
            setValue(event.value);
        }
    };

    return (
        <Tooltip anchorElement="target" position="top">
            <MultiViewCalendar cell={CustomCell} value={value} onChange={handleChange} />
        </Tooltip>
    );
};
export default App;
