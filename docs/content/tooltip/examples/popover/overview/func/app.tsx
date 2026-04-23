import * as React from 'react';
import { Popover, PopoverActionsBar } from '@progress/kendo-react-tooltip';
import { Button } from '@progress/kendo-react-buttons';
import { Calendar, CalendarCellProps } from '@progress/kendo-react-dateinputs';
import { classNames } from '@progress/kendo-react-common';
import { useInternationalization } from '@progress/kendo-react-intl';
import { Events } from './events';

const today = new Date();
const events = [
    +new Date(today.getFullYear(), today.getMonth(), today.getDate()),
    +new Date(today.getFullYear(), today.getMonth(), 12),
    +new Date(today.getFullYear(), today.getMonth(), 24)
];
const calendarMin = new Date(today.getFullYear(), today.getMonth(), 1);
const calendarMax = new Date(today.getFullYear(), today.getMonth() + 1, 0);

export const PopoverContext = React.createContext<{ onClick: ({ tdRef, date, eventsInDate }) => void }>({
    onClick: () => null
});

const CustomCell = (props: CalendarCellProps) => {
    const { onClick: cellOnClick, value } = props;
    const tdRef = React.useRef<any>(null);
    const { onClick } = React.useContext(PopoverContext);
    const eventsInDate = events.indexOf(+props.value) > -1;

    const handleClick = React.useCallback(() => {
        if (cellOnClick) {
            cellOnClick(value);
        }

        if (onClick) {
            onClick({
                tdRef: tdRef,
                date: value,
                eventsInDate
            });
        }
    }, [cellOnClick, onClick, value, eventsInDate]);

    const style = {
        cursor: 'pointer',
        color: eventsInDate ? 'rgba(255, 99, 88, 0.87)' : 'rgba(0, 0, 0, 0.87)',
        fontWeight: eventsInDate ? 700 : 400
    };

    const className = classNames({
        'k-selected': props.isSelected,
        'k-focus': props.isFocused
    });

    return (
        <td onClick={handleClick} className={className} style={style} ref={tdRef}>
            <span className="k-link">{props.children}</span>
        </td>
    );
};

const App = () => {
    const [value, setValue] = React.useState(new Date());
    const [show, setShow] = React.useState<boolean>(false);
    const [elementRef, setElementRef] = React.useState<React.MutableRefObject<HTMLTableCellElement>>();
    const intl = useInternationalization();

    const handleDateClick = React.useCallback(
        (event: { tdRef: React.MutableRefObject<HTMLTableCellElement>; date: Date; eventsInDate: boolean }) => {
            setValue(event.date);

            if (event.eventsInDate) {
                setShow(true);
                setElementRef(event.tdRef);
            } else {
                setShow(false);
            }
        },
        [setValue, setShow, setElementRef]
    );

    const handleCloseClick = React.useCallback(() => setShow(false), [setShow]);

    return (
        <>
            <PopoverContext.Provider value={{ onClick: handleDateClick }}>
                <Calendar min={calendarMin} max={calendarMax} cell={CustomCell} value={value} />
            </PopoverContext.Provider>
            <Popover
                show={show}
                position={'right'}
                anchor={elementRef && elementRef.current}
                title={intl.formatDate(new Date(), 'd MMMM')}
                animate={{ type: 'slide', direction: 'right', openDuration: 500, closeDuration: 500 }}
            >
                <Events />
                <PopoverActionsBar>
                    <Button onClick={handleCloseClick} fillMode={'flat'}>
                        Close
                    </Button>
                </PopoverActionsBar>
            </Popover>
        </>
    );
};

export default App;
