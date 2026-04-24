import * as React from 'react';
import { SegmentedControl, SegmentedItemProps } from '@progress/kendo-react-buttons';

import './styles.css';

const items: SegmentedItemProps[] = [
    { value: 'day', text: 'Day' },
    { value: 'week', text: 'Week' },
    { value: 'month', text: 'Month' },
    { value: 'year', text: 'Year', disabled: true }
];

const App = () => {
    const [selectedValue, setSelectedValue] = React.useState<string>('week');
    const [focusedValue, setFocusedValue] = React.useState<string>('Week');

    const selectedLabel = items.find((item) => item.value === selectedValue)?.text ?? '';

    const itemsWithFocus = items.map((item) => ({
        ...item,
        onFocus: () => setFocusedValue(item.text ?? '')
    }));

    return (
        <div className="page-host">
            <div className="demo-container">
                <SegmentedControl
                    items={itemsWithFocus}
                    value={selectedValue}
                    onChange={setSelectedValue}
                    size="large"
                    layoutMode="stretch"
                    style={{ width: 420 }}
                />

                <div className="status-group">
                    <p className="hint-text">Click the control, then use the keyboard.</p>

                    <div className="status-divider" />

                    <div className="status-bar">
                        <div className="status-item">
                            <span className="status-label">Focused:</span>
                            <span className="status-value">{focusedValue}</span>
                        </div>
                        <div className="status-separator" />
                        <div className="status-item">
                            <span className="status-label">Selected:</span>
                            <span className="status-value">{selectedLabel}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
