import * as React from 'react';
import { SegmentedControl } from '@progress/kendo-react-buttons';
import { boldIcon, italicIcon, underlineIcon } from '@progress/kendo-svg-icons';

const items = [
    { value: 'bold', text: 'Bold', svgIcon: boldIcon },
    { value: 'italic', text: 'Italic', svgIcon: italicIcon },
    { value: 'underline', text: 'Underline', svgIcon: underlineIcon }
];

const App = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
                <p style={{ marginBottom: '8px' }}>Small</p>
                <SegmentedControl size="small" items={items} defaultValue="bold" />
            </div>
            <div>
                <p style={{ marginBottom: '8px' }}>Medium (default)</p>
                <SegmentedControl size="medium" items={items} defaultValue="bold" />
            </div>
            <div>
                <p style={{ marginBottom: '8px' }}>Large</p>
                <SegmentedControl size="large" items={items} defaultValue="bold" />
            </div>
        </div>
    );
};

export default App;
