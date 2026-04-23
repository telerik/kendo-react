import * as React from 'react';

import { Scheduler, DayView } from '@progress/kendo-react-scheduler';
import { sampleDataWithResources, displayDate } from './sc-events-utc';
import { Label } from '@progress/kendo-react-labels';
import { RadioButton, RadioButtonChangeEvent } from '@progress/kendo-react-inputs';

type Orientation = 'horizontal' | 'vertical';

const App = () => {
    const [orientation, setOrientation] = React.useState<Orientation>('horizontal');

    const handleOrientationChange = React.useCallback(
        (event: RadioButtonChangeEvent) => {
            setOrientation(event.value);
        },
        [setOrientation]
    );

    return (
        <div>
            <div className="example-config">
                <RadioButton
                    value="horizontal"
                    checked={orientation === 'horizontal'}
                    onChange={handleOrientationChange}
                    label="Horizontal"
                />
                <br />
                <RadioButton
                    value="vertical"
                    checked={orientation === 'vertical'}
                    onChange={handleOrientationChange}
                    label="Vertical"
                />
            </div>
            <Scheduler
                data={sampleDataWithResources}
                defaultDate={displayDate}
                group={{
                    resources: ['Rooms', 'Persons'],
                    orientation
                }}
                resources={[
                    {
                        name: 'Rooms',
                        data: [
                            { text: 'Meeting Room 101', value: 1 },
                            { text: 'Meeting Room 201', value: 2, color: 'green' }
                        ],
                        field: 'roomId',
                        valueField: 'value',
                        textField: 'text',
                        colorField: 'color'
                    },
                    {
                        name: 'Persons',
                        data: [
                            { text: 'Peter', value: 1, color: 'red' },
                            { text: 'Alex', value: 2 }
                        ],
                        field: 'personId',
                        valueField: 'value',
                        textField: 'text',
                        colorField: 'color'
                    }
                ]}
            >
                <DayView
                    title="Two-Day-View"
                    numberOfDays={2}
                    slotDuration={60}
                    slotDivisions={2}
                    startTime={'07:00'}
                    endTime={'19:00'}
                    workDayStart={'08:00'}
                    workDayEnd={'18:00'}
                />
            </Scheduler>
        </div>
    );
};

export default App;
