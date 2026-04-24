import * as React from 'react';

import { Stepper, StepperChangeEvent } from '@progress/kendo-react-layout';
import { lockIcon, trackChangesIcon, userIcon } from '@progress/kendo-svg-icons';

const steps = [{}, {}, {}];

const stepsWithLabel = [
    { label: 'Step 1' },
    { label: 'Step 2' },
    { label: 'Step 3' }
];
const icons = [
    { svgIcon: lockIcon },
    { svgIcon: userIcon },
    { svgIcon: trackChangesIcon },
];
const iconsWithLabel = [
    { svgIcon: lockIcon, label: 'Step 1' },
    { svgIcon: userIcon, label: 'Step 2' },
    { svgIcon: trackChangesIcon, label: 'Step 3' },
];
const customText = [
    { text: 'A' },
    { text: 'B' },
    { text: 'C' }
];
const labelOnly = [
    { label: 'Step 1' },
    { label: 'Step 2' },
    { label: 'Step 3' }
];

const App = () => {
    const [value, setValue] = React.useState<number>(1);

    const handleChange = (e: StepperChangeEvent) => {
        setValue(e.value);
    };

    return (
        <React.Fragment>
            <div className="row">
                <div className="col-6">
                    <p>Simple Steps</p>
                    <Stepper value={value} onChange={handleChange} items={steps} />
                </div>
                <div className="col-6">
                    <p>Steps with icons</p>
                    <Stepper value={value} onChange={handleChange} items={icons} />
                </div>
                <div className="col-6 pt-5">
                    <p>Steps with labels</p>
                    <Stepper value={value} onChange={handleChange} items={stepsWithLabel} />
                </div>
                <div className="col-6 pt-5">
                    <p>Steps with icons and labels</p>
                    <Stepper value={value} onChange={handleChange} items={iconsWithLabel} />
                </div>
                <div className="col-6 pt-5">
                    <p>Steps with custom text</p>
                    <Stepper value={value} onChange={handleChange} items={customText} />
                </div>
                <div className="col-6 pt-5">
                    <p>Labels Only</p>
                    <Stepper value={value} onChange={handleChange} mode={'labels'} items={labelOnly} />
                </div>
            </div>
        </React.Fragment>
    );
};

export default App;
