import * as React from 'react';

import { Scheduler, TimelineView } from '@progress/kendo-react-scheduler';
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
                data={[]}
                defaultDate={new Date()}
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
                <TimelineView showWorkHours={false} title="Default" />
                {/* Disable current time */}
                <TimelineView showWorkHours={false} title="Disabled" name="disabled" currentTimeMarker={false} />
            </Scheduler>
        </div>
    );
};

export default App;
