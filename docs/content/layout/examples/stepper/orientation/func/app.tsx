import * as React from 'react';

import { Stepper, StepperChangeEvent } from '@progress/kendo-react-layout';
import { DropDownList, DropDownListChangeEvent } from '@progress/kendo-react-dropdowns';
import { lockIcon, myspaceIcon, trackChangesIcon, userIcon } from '@progress/kendo-svg-icons';

const items = [
    { svgIcon: lockIcon, label: 'Account Info' },
    { svgIcon: userIcon, label: 'Personal Info' },
    { svgIcon: myspaceIcon, label: 'Membership' },
    { svgIcon: trackChangesIcon, label: 'Verification' }
];

const App = () => {
    const [value, setValue] = React.useState<number>(1);
    const [orientation, setOrientation] = React.useState<any>('horizontal');

    const handleChange = (e: StepperChangeEvent) => {
        setValue(e.value);
    };

    const handleOrientationChange = (e: DropDownListChangeEvent) => {
        setOrientation(e.target.value);
    }

    return (
      <React.Fragment>
        <p>Change the orientation:</p>
        <DropDownList
          data={['horizontal', 'vertical']}
          value={orientation}
          onChange={handleOrientationChange}
            />
        <hr />
        <Stepper value={value} onChange={handleChange} items={items} orientation={orientation} />
      </React.Fragment>
    );
};

export default App;
