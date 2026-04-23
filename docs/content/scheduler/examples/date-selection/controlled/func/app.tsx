import * as React from 'react';

import { Scheduler, MonthView, SchedulerDateChangeEvent } from '@progress/kendo-react-scheduler';
import { Switch } from '@progress/kendo-react-inputs';
import { DateInput, DateInputChangeEvent } from '@progress/kendo-react-dateinputs';
import { Label } from '@progress/kendo-react-labels';

const data: any[] = [
    {
        id: 0,
        title: 'Holiday',
        start: new Date('2019-08-14T11:00:00Z'),
        end: new Date('2019-08-14T11:01:00Z'),
        isAllDay: true
    }
];

const defaultDate: Date = new Date('2019-08-01T00:00:00Z');

const App = () => {
    const [date, setDate] = React.useState<Date>(defaultDate);
    const [canChangeDate, setCanChangeDate] = React.useState<boolean>(false);

    const handleDateChange = React.useCallback(
        (event: SchedulerDateChangeEvent) => {
            if (canChangeDate) {
                setDate(event.value);
            }
        },
        [setDate, canChangeDate]
    );

    const handleOverride = React.useCallback(
        (event: DateInputChangeEvent) => {
            if (event.value) {
                setDate(event.value);
            }
        },
        [setDate]
    );

    const handleLockChange = React.useCallback(() => {
        setCanChangeDate((old) => !old);
    }, [setCanChangeDate]);

    return (
        <div>
            <div className="example-config d-flex">
                <div className="col-12 col-md-6">
                    <Label className="d-block text-center">
                        Allow Internal Date Change: <br />
                        <Switch onChange={handleLockChange} checked={canChangeDate} />
                    </Label>
                </div>
                <div className="col-12 col-md-6">
                    <Label className="d-block text-center">
                        Or override the selected date from outside: <br />
                        <DateInput value={date} onChange={handleOverride} format="dd/MMM/yyyy" />
                    </Label>
                </div>
            </div>
            <Scheduler data={data} date={date} onDateChange={handleDateChange}>
                <MonthView />
            </Scheduler>
        </div>
    );
};

export default App;
