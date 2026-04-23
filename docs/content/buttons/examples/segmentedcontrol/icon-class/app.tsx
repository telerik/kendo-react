import * as React from 'react';
import { SegmentedControl } from '@progress/kendo-react-buttons';
import { boldIcon, italicIcon, underlineIcon } from '@progress/kendo-svg-icons';
import './styles.css';

const App = () => {
    const [selectedValue, setSelectedValue] = React.useState('bold');

    return (
        <div>
            <p style={{ marginBottom: '8px' }}>
                Select an item to see the <code>iconClassName</code> applied to the active icon.
            </p>
            <SegmentedControl
                value={selectedValue}
                onChange={setSelectedValue}
                items={[
                    { value: 'bold', text: 'Bold', svgIcon: boldIcon, iconClassName: 'icon-active' },
                    { value: 'italic', text: 'Italic', svgIcon: italicIcon, iconClassName: 'icon-active' },
                    { value: 'underline', text: 'Underline', svgIcon: underlineIcon, iconClassName: 'icon-active' }
                ]}
            />
        </div>
    );
};

export default App;
