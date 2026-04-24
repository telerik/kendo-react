import * as React from 'react';
import { SegmentedControl } from '@progress/kendo-react-buttons';
import { alignLeftIcon, alignCenterIcon, alignRightIcon, alignJustifyIcon } from '@progress/kendo-svg-icons';

const App = () => {
    return (
        <SegmentedControl
            defaultValue="left"
            items={[
                { value: 'left', text: 'Left', svgIcon: alignLeftIcon },
                { value: 'center', text: 'Center', svgIcon: alignCenterIcon },
                { value: 'right', text: 'Right', svgIcon: alignRightIcon },
                { value: 'justify', text: 'Justify', svgIcon: alignJustifyIcon, disabled: true }
            ]}
        />
    );
};

export default App;
