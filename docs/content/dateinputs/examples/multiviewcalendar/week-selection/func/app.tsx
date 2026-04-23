import * as React from 'react';

import { MultiViewCalendar, MultiViewCalendarMode } from '@progress/kendo-react-dateinputs';
import { Label } from '@progress/kendo-react-labels';
import { RadioButton } from '@progress/kendo-react-inputs';

const multiple = 'multiple';
const range = 'range';

const App = () => {
    const [mode, setMode] = React.useState<MultiViewCalendarMode>(multiple);

    return (
        <div className="example-wrapper">
            <div className="example-config">
                <div>
                    <RadioButton
                        name="mode"
                        label="multiple mode"
                        checked={mode === multiple}
                        onChange={() => setMode(multiple)}
                    />
                </div>
                <div>
                    <RadioButton
                        name="mode"
                        label="range mode"
                        checked={mode === range}
                        onChange={() => setMode(range)}
                    />
                </div>
            </div>

            <MultiViewCalendar weekNumber={true} mode={mode} />
        </div>
    );
};

export default App;
