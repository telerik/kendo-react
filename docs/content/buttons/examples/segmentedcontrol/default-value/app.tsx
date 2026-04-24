import * as React from 'react';
import { SegmentedControl } from '@progress/kendo-react-buttons';
import { listUnorderedIcon, gridIcon } from '@progress/kendo-svg-icons';

const DefaultValueExample = () => {
    return (
        <SegmentedControl
            defaultValue="grid"
            items={[
                { value: 'list', text: 'List View', svgIcon: listUnorderedIcon },
                { value: 'grid', text: 'Grid View', svgIcon: gridIcon }
            ]}
            onChange={(value) => {
                console.log('Selected:', value);
            }}
        />
    );
};

export default DefaultValueExample;
