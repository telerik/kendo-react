import * as React from 'react';
import './styles.css';

import {
    DateInput,
    DatePicker,
    DateRangePicker,
    TimePicker,
    MultiViewCalendar,
    CalendarCell,
    CalendarCellProps,
    DateRangePickerChangeEvent,
    SelectionRange
} from '@progress/kendo-react-dateinputs';

const today = new Date();
const maxDate = new Date(today.getFullYear(), today.getMonth() + 6, 0);
const NIGHTLY_RATE = 189;

const disabledDates = (date: Date): boolean => date.getDay() === 0;
const timeSteps = { hour: 1, minute: 15 };

const getAvailabilityClass = (date: Date): string => {
    const day = date.getDay();
    const dateNum = date.getDate();

    if (day === 0) return 'dot-sold-out';
    if (day === 5 || day === 6 || dateNum % 7 === 0) return 'dot-limited';
    return '';
};

const AvailabilityCell = (props: CalendarCellProps) => {
    const availabilityClass = props.value ? getAvailabilityClass(props.value) : '';
    return (
        <CalendarCell {...props}>
            <span className="cell-inner">
                {props.formattedValue}
                {availabilityClass && <span className={`availability-dot ${availabilityClass}`} />}
            </span>
        </CalendarCell>
    );
};

const App = () => {
    const [range, setRange] = React.useState<SelectionRange>({
        start: new Date(today.getFullYear(), today.getMonth() + 1, 3),
        end: new Date(today.getFullYear(), today.getMonth() + 1, 9)
    });
    const [earlyCheckIn, setEarlyCheckIn] = React.useState<Date | null>(null);
    const [arrivalTime, setArrivalTime] = React.useState<Date>(
        new Date(today.getFullYear(), today.getMonth(), today.getDate(), 15, 0)
    );

    const checkoutDeadline = new Date(today.getFullYear(), today.getMonth() + 1, 9, 11, 0);

    const nightCount = React.useMemo(() => {
        if (range.start && range.end) {
            const diff = range.end.getTime() - range.start.getTime();
            return Math.max(0, Math.round(diff / (1000 * 60 * 60 * 24)));
        }
        return 0;
    }, [range.start, range.end]);

    const estimatedTotal = `$${(NIGHTLY_RATE * nightCount).toFixed(2)}`;

    return (
        <div className="demo-container">
            <div className="booking-layout">
                <div className="booking-card">
                    <h2 className="booking-heading">Book Your Stay</h2>

                    <div className="form-section">
                        <h3 className="section-label">Check-in / Check-out</h3>
                        <DateRangePicker
                            value={range}
                            onChange={(e: DateRangePickerChangeEvent) => setRange(e.value)}
                            startDateInputSettings={{ label: 'Check-in', min: today }}
                            endDateInputSettings={{ label: 'Check-out', min: today }}
                        />
                    </div>

                    <div className="form-section">
                        <h3 className="section-label">Preferred Arrival</h3>
                        <DatePicker
                            value={earlyCheckIn}
                            onChange={(e) => setEarlyCheckIn(e.value)}
                            min={today}
                            max={maxDate}
                            disabledDates={disabledDates}
                            format="EEEE, MMM d"
                            placeholder="Select a date"
                        />
                    </div>

                    <div className="form-section">
                        <h3 className="section-label">Estimated Arrival Time</h3>
                        <TimePicker
                            value={arrivalTime}
                            onChange={(e) => setArrivalTime(e.value)}
                            format="hh:mm a"
                            steps={timeSteps}
                        />
                    </div>

                    <div className="form-section">
                        <h3 className="section-label">Checkout Deadline (read-only)</h3>
                        <DateInput value={checkoutDeadline} readOnly={true} format="MMM d, y hh:mm a" />
                    </div>

                    {nightCount > 0 && (
                        <div className="booking-summary">
                            <div className="summary-header">
                                <span className="summary-label">Duration:</span>
                                <span className="summary-value">
                                    {nightCount} {nightCount === 1 ? 'night' : 'nights'}
                                </span>
                            </div>
                            <div className="rate-row">
                                <span>Nightly rate</span>
                                <span>$189.00</span>
                            </div>
                            <div className="rate-row rate-total">
                                <span>Estimated total</span>
                                <span>{estimatedTotal}</span>
                            </div>
                        </div>
                    )}
                </div>

                <div className="calendar-card">
                    <h3 className="section-label">Room Availability</h3>
                    <div className="legend">
                        <span className="legend-item">
                            <span className="legend-dot limited" /> Limited
                        </span>
                        <span className="legend-item">
                            <span className="legend-dot sold-out" /> Sold Out
                        </span>
                    </div>
                    <MultiViewCalendar views={2} min={today} max={maxDate} cell={AvailabilityCell} />
                    <div className="info-box">
                        <p className="info-title">Booking Policy</p>
                        <p className="info-text">
                            Standard check-in begins at 3:00 PM. Checkout is by 11:00 AM. Weekend rates may apply for
                            Friday and Saturday stays. Sundays are unavailable for new check-ins.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
