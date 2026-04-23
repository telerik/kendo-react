import * as React from 'react';
import { SegmentedControl } from '@progress/kendo-react-buttons';
import { Checkbox } from '@progress/kendo-react-inputs';
import { Label } from '@progress/kendo-react-labels';
import { Tooltip } from '@progress/kendo-react-tooltip';
import { SVGIcon } from '@progress/kendo-svg-icons';

import './styles.css';

const lucideTabletIcon: SVGIcon = {
    name: 'tablet',
    content:
        '<rect width="16" height="20" x="4" y="2" rx="2" ry="2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></rect>' +
        '<line x1="12" x2="12.01" y1="18" y2="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></line>',
    viewBox: '0 0 24 24'
};

const lucideMonitorIcon: SVGIcon = {
    name: 'monitor',
    content:
        '<rect width="20" height="14" x="2" y="3" rx="2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></rect>' +
        '<line x1="8" x2="16" y1="21" y2="21" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></line>' +
        '<line x1="12" x2="12" y1="17" y2="21" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></line>',
    viewBox: '0 0 24 24'
};

const iconTextItems = [
    { value: 'mobile', text: 'Mobile', svgIcon: lucideTabletIcon },
    { value: 'tablet', text: 'Tablet', svgIcon: lucideTabletIcon, disabled: true },
    { value: 'desktop', text: 'Desktop', svgIcon: lucideMonitorIcon }
];

const iconOnlyItems = [
    { value: 'mobile', svgIcon: lucideTabletIcon, 'aria-label': 'Mobile' },
    { value: 'tablet', svgIcon: lucideTabletIcon, 'aria-label': 'Tablet' },
    { value: 'desktop', svgIcon: lucideMonitorIcon, 'aria-label': 'Desktop' }
];

const App = () => {
    const [showTooltips, setShowTooltips] = React.useState(false);
    const [iconTextValue, setIconTextValue] = React.useState<string>('mobile');
    const [iconOnlyValue, setIconOnlyValue] = React.useState<string>('mobile');

    const iconOnlyItemsWithTitle = iconOnlyItems.map((item) => ({
        ...item,
        title: item['aria-label']
    }));

    return (
        <div className="page-host">
            <div className="demo-container">
                <div className="demo-section">
                    <span className="section-label">Icon + text</span>
                    <SegmentedControl items={iconTextItems} value={iconTextValue} onChange={setIconTextValue} size="large" />
                </div>

                <div className="demo-section">
                    <span className="section-label">Icon-only (with tooltips)</span>

                    {showTooltips ? (
                        <Tooltip anchorElement="target" parentTitle={true}>
                            <SegmentedControl
                                items={iconOnlyItemsWithTitle}
                                value={iconOnlyValue}
                                onChange={setIconOnlyValue}
                                size="large"
                            />
                        </Tooltip>
                    ) : (
                        <SegmentedControl items={iconOnlyItems} value={iconOnlyValue} onChange={setIconOnlyValue} size="large" />
                    )}

                    <p className="tip-text">Tip: Provide tooltips and accessible labels for icon-only segments.</p>

                    <div className="tooltip-toggle">
                        <Checkbox
                            id="show-tooltips"
                            checked={showTooltips}
                            onChange={(event) => setShowTooltips(event.value)}
                        />
                        <Label editorId="show-tooltips" className="k-checkbox-label">
                            Show tooltips
                        </Label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
