import * as React from 'react';
import { RadioGroup, Switch, SwitchChangeEvent } from '@progress/kendo-react-inputs';
import { Label } from '@progress/kendo-react-labels';

type WorkSchedule = 'full-time' | 'part-time' | 'freelance';

const data: { label: string; value: WorkSchedule }[] = [
    { label: 'Full-Time (40+ hours/week)', value: 'full-time' },
    { label: 'Part-Time (20-30 hours/week)', value: 'part-time' },
    { label: 'Freelance (Flexible hours)', value: 'freelance' }
];

const App = () => {
    const [selectedSchedule, setSelectedSchedule] = React.useState<WorkSchedule>('full-time');
    const [disabled, setDisabled] = React.useState<boolean>(false);

    const handleSwitchChange = (event: SwitchChangeEvent): void => {
        setDisabled(event.value);
    };

    const handleChange = (e: { value: WorkSchedule }): void => {
        setSelectedSchedule(e.value);
    };

    return (
        <div className="k-d-flex k-justify-content-center k-align-items-center">
            <div className="k-d-flex k-flex-col k-gap-2">
                <Label>
                    Disable Work Schedule Selection&nbsp;&nbsp;
                    <Switch checked={disabled} onChange={handleSwitchChange} />
                </Label>
                <br />
                <div>
                    <RadioGroup data={data} disabled={disabled} value={selectedSchedule} onChange={handleChange} />
                </div>
                <br />
                <div>
                    <span>
                        Selected Work Schedule: <strong>{selectedSchedule}</strong>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default App;
