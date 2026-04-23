import * as React from 'react';
import { SegmentedControl } from '@progress/kendo-react-buttons';
import { listUnorderedIcon, gridIcon, menuIcon } from '@progress/kendo-svg-icons';

const ControlledExample = () => {
    const [selectedValue, setSelectedValue] = React.useState('list');

    const handleChange = (value: string) => {
        setSelectedValue(value);
        console.log(`Switched to: ${value}`);
    };

    return (
        <SegmentedControl
            value={selectedValue}
            items={[
                { value: 'list', text: 'List View', svgIcon: listUnorderedIcon },
                { value: 'grid', text: 'Grid View', svgIcon: gridIcon },
                { value: 'details', text: 'Details View', svgIcon: menuIcon }
            ]}
            onChange={handleChange}
            size="large"
            layoutMode="stretch"
        />
    );
};

export default ControlledExample;
