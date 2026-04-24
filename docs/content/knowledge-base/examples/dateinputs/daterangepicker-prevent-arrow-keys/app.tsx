import * as React from 'react';
import {
    DateRangePicker,
    DateRangePickerChangeEvent,
    DateRangePickerHandle,
    SelectionRange
} from '@progress/kendo-react-dateinputs';
const App = () => {
    const [value, setValue] = React.useState<SelectionRange>({
        start: new Date(2018, 8, 5),
        end: new Date(2018, 8, 12)
    });
    const [isRangeValid, setIsRangeValid] = React.useState<boolean>(true);
    const handleChange = (event: DateRangePickerChangeEvent) => {
        setValue(event.value);
        if (event.value.start && event.value.end && event.value.start <= event.value.end) {
            setIsRangeValid(true);
        } else {
            setIsRangeValid(false);
        }
    };

    const dateRangeRef = React.useRef<DateRangePickerHandle>(null);
    React.useEffect(() => {
        if (dateRangeRef.current?.startDateInput?.element && dateRangeRef.current?.endDateInput?.element) {
            const startDateInputElement = dateRangeRef.current.startDateInput.element;
            const endDateInputElement = dateRangeRef.current.endDateInput.element;

            const handleKeyDown = (e) => {
                console.log(e);
                if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
                    e.preventDefault();
                    e.stopPropagation();
                }
            };

            startDateInputElement.addEventListener('keydown', handleKeyDown, { capture: true });
            endDateInputElement.addEventListener('keydown', handleKeyDown, { capture: true });

            return () => {
                startDateInputElement.removeEventListener('keydown', handleKeyDown, { capture: true });
                endDateInputElement.removeEventListener('keydown', handleKeyDown, { capture: true });
            };
        }
    }, [dateRangeRef]);
    return (
        <div className="row">
            <div className="example-config col-xs-12 col-md-12 example-col">
                <p>
                    The range is: <br />
                    start: {`${value.start}`}
                    <br />
                    end: {`${value.end}`}
                </p>
            </div>
            <div className="col-xs-12 col-md-12 example-col">
                <p>Controlled DateRangePicker</p>
                <DateRangePicker ref={dateRangeRef} value={value} onChange={handleChange} valid={isRangeValid} />
                {!isRangeValid && <em style={{ color: 'red' }}>"End date must be after start date"</em>}
            </div>
        </div>
    );
};
export default App;
