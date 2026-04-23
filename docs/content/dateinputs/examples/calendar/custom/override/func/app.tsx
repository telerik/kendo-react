import * as React from 'react';

import { Calendar, CalendarCellProps, CalendarChangeEvent } from '@progress/kendo-react-dateinputs';
import { Tooltip } from '@progress/kendo-react-tooltip';
import { classNames } from '@progress/kendo-react-common';

const CustomCell = (props: CalendarCellProps) => {
    const title = "We're closed on the weekends!";
    const handleClick = (e) => {
        if (!props.isWeekend) {
            if (props.onClick) {
                props.onClick(props.value, e);
            }
        }
    };

    const style = {
        cursor: 'pointer',
        opacity: props.isWeekend ? 0.6 : 1
    };

    const {
        className,
        formattedValue,
        isWeekend,
        isFocused,
        isInRange,
        isSelected,
        isRangeStart,
        isRangeMid,
        isRangeEnd,
        isRangeSplitStart,
        isRangeSplitEnd,
        isToday,
        isDisabled,
        view,
        value,
        ...other
    } = props;

    const isEndActive = props.activeRangeEnd === 'end' && isRangeEnd;
    const isStartActive = props.activeRangeEnd === 'start' && isRangeStart;

    const rootClassName = classNames(
        'k-calendar-td',
        {
            'k-range-end': isRangeEnd,
            'k-range-mid': isRangeMid,
            'k-range-split-end': isRangeSplitEnd,
            'k-range-split-start': isRangeSplitStart,
            'k-range-start': isRangeStart,
            'k-active': isStartActive || isEndActive,
            'k-state-pending-focus': isFocused,
            'k-selected': isSelected || isRangeStart || isRangeEnd,
            'k-today': isToday,
            'k-weekend': isWeekend,
            'k-disabled': isDisabled
        },
        className
    );
    const titleValue: string = props.isWeekend ? title : '';
    return !props.isOtherMonth ? (
        <td
            {...other}
            className={rootClassName}
            onClick={handleClick}
            onMouseEnter={props.handleMouseEnter}
            onMouseLeave={props.handleMouseLeave}
            style={style}
        >
            <span className="k-link" title={titleValue}>
                {props.children}
            </span>
        </td>
    ) : (
        <td className="k-calendar-td k-empty" />
    );
};

const sunday = 0;
const saturday = 6;

const App = () => {
    const [value, setValue] = React.useState(new Date());
    const handleChange = (event: CalendarChangeEvent) => {
        const dayOfWeek = event.value.getDay();

        if (dayOfWeek !== sunday && dayOfWeek !== saturday) {
            setValue(event.value);
        }
    };

    return (
        <Tooltip anchorElement="target" position="top">
            <Calendar cell={CustomCell} value={value} onChange={handleChange} />
        </Tooltip>
    );
};

export default App;
