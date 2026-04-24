import * as React from 'react';

import { ComboBox, ListItemProps } from '@progress/kendo-react-dropdowns';
import countries from './shared-dd-countries';

const App = () => {
    const itemRender = (li: React.ReactElement<HTMLLIElement>, itemProps: ListItemProps) => {
        const index = itemProps.index;
        const itemChildren = (
            <span style={{ color: '#00F' }}>
                {li.props.children as any} {index}
            </span>
        );

        return React.cloneElement(li, li.props, itemChildren);
    };
    return (
        <div className="example-wrapper">
            <p>Type the name of a European country:</p>
            <ComboBox data={countries} placeholder="e.g. Denmark" itemRender={itemRender} style={{ width: '200px' }} />
        </div>
    );
};

export default App;
