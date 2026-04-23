import * as React from 'react';
import { SegmentedControl, SegmentedItemProps, DropDownButton, Button } from '@progress/kendo-react-buttons';
import { SvgIcon } from '@progress/kendo-react-common';
import { chevronDownIcon, SVGIcon } from '@progress/kendo-svg-icons';

import './styles.css';

const lucideGlobeIcon: SVGIcon = {
    name: 'globe',
    content:
        '<circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></circle>' +
        '<path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>' +
        '<path d="M2 12h20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>',
    viewBox: '0 0 24 24'
};

type LayoutMode = 'stretch' | 'compact';

type LayoutModeItem = {
    value: LayoutMode;
    text: string;
};

type ReportItem = {
    label: string;
    value: string;
    count: number;
    increment: number;
};

const layoutModeItems: LayoutModeItem[] = [
    { text: 'Equal', value: 'stretch' },
    { text: 'Content-based', value: 'compact' }
];

const initialReportItems: ReportItem[] = [
    { label: 'Open', value: 'open', count: 16, increment: 5 },
    { label: 'In Progress', value: 'progress', count: 3, increment: 1 },
    { label: 'Waiting on Customer', value: 'waiting', count: 7, increment: 2 },
    { label: 'Resolved', value: 'resolved', count: 48, increment: 4 }
];

const languageItems: Array<{ text: string }> = [{ text: 'EN' }, { text: 'ES' }, { text: 'FR' }, { text: 'DE' }];

const App = () => {
    const [selectedLayoutMode, setSelectedLayoutMode] = React.useState<LayoutMode>('stretch');
    const [selectedReport, setSelectedReport] = React.useState('open');
    const [selectedLanguage, setSelectedLanguage] = React.useState('EN');
    const [reportItems, setReportItems] = React.useState<ReportItem[]>(initialReportItems);
    const [isUpdating, setIsUpdating] = React.useState(false);

    const selectedReportLabel = reportItems.find((item) => item.value === selectedReport)?.label ?? selectedReport;

    const reportSegmentItems = React.useMemo(
        () =>
            reportItems.map((item) => ({
                value: item.value,
                text: item.label
            })),
        [reportItems]
    );

    const countMap = React.useMemo(
        () => Object.fromEntries(reportItems.map((item) => [item.value, item.count])),
        [reportItems]
    );

    const reportItemTemplate = (itemData: SegmentedItemProps) => (
        <span className="segment-content">
            {itemData.text} <span className="count-badge">({countMap[itemData.value]})</span>
        </span>
    );

    const handleLayoutModeChange = (value: string) => {
        setSelectedLayoutMode(value as LayoutMode);
    };

    const simulateUpdate = () => {
        setIsUpdating(true);
        setTimeout(() => {
            setReportItems((prev) =>
                prev.map((item) => ({
                    ...item,
                    count: item.count + item.increment
                }))
            );
            setIsUpdating(false);
        }, 300);
    };

    return (
        <div className="demo-container">
            <div className="demo-header">
                <h2 className="demo-title">Support Tickets</h2>

                <div className="demo-controls">
                    <div className="control-group">
                        <span className="control-label">Width mode:</span>
                        <SegmentedControl
                            value={selectedLayoutMode}
                            onChange={handleLayoutModeChange}
                            items={layoutModeItems}
                            size="medium"
                        />
                    </div>

                    <div className="control-group">
                        <span className="control-label">Language:</span>
                        <DropDownButton
                            text={selectedLanguage}
                            svgIcon={lucideGlobeIcon}
                            endIcon={<SvgIcon icon={chevronDownIcon} />}
                            items={languageItems}
                            onItemClick={(event) => setSelectedLanguage(event.item.text)}
                        />
                    </div>
                </div>
            </div>

            <div className={`tickets-section${isUpdating ? ' updating' : ''}`}>
                <SegmentedControl
                    value={selectedReport}
                    onChange={setSelectedReport}
                    items={reportSegmentItems}
                    itemTemplate={reportItemTemplate}
                    size="large"
                    layoutMode={selectedLayoutMode}
                />
            </div>

            <div className="status-bar">
                <div className="status-text">
                    Showing: <strong>{selectedReportLabel}</strong>
                </div>

                <Button onClick={simulateUpdate}>Simulate update</Button>
            </div>

            <div className="skeleton-section">
                <div className="skeleton-card skeleton-card-header">
                    <div className="skeleton-row">
                        <div className="skeleton-bar skeleton-bar-lg skeleton-pulse" style={{ width: '16rem' }} />
                        <div className="skeleton-bar skeleton-bar-lg skeleton-pulse" style={{ width: '8rem' }} />
                        <div className="skeleton-bar skeleton-bar-lg skeleton-pulse" style={{ width: '8rem' }} />
                    </div>
                </div>

                <div className="skeleton-list">
                    {['ticket-1', 'ticket-2', 'ticket-3', 'ticket-4'].map((id) => (
                        <div className="skeleton-card" key={id}>
                            <div className="skeleton-row skeleton-row-between">
                                <div className="skeleton-bar skeleton-pulse" style={{ width: '33%', height: '1rem' }} />
                                <div
                                    className="skeleton-bar skeleton-pulse"
                                    style={{ width: '5rem', height: '1rem' }}
                                />
                            </div>
                            <div className="skeleton-bar skeleton-pulse" style={{ width: '75%', height: '0.75rem' }} />
                            <div className="skeleton-bar skeleton-pulse" style={{ width: '50%', height: '0.75rem' }} />
                        </div>
                    ))}
                    <div className="skeleton-fade" />
                </div>
            </div>
        </div>
    );
};

export default App;
