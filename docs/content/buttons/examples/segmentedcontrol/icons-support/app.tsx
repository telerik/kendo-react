import * as React from 'react';
import { SegmentedControl, DropDownButton, Button } from '@progress/kendo-react-buttons';
import { globeIcon } from '@progress/kendo-svg-icons';

import './styles.css';

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
    const [selectedReport, setSelectedReport] = React.useState('progress');
    const [selectedLanguage, setSelectedLanguage] = React.useState('EN');
    const [reportItems, setReportItems] = React.useState<ReportItem[]>(initialReportItems);

    const selectedReportLabel = reportItems.find((item) => item.value === selectedReport)?.label ?? selectedReport;

    const reportSegmentItems = React.useMemo(
        () =>
            reportItems.map((item) => ({
                value: item.value,
                text: `${item.label} (${item.count})`
            })),
        [reportItems]
    );

    const handleLayoutModeChange = (value: string) => {
        setSelectedLayoutMode(value as LayoutMode);
    };

    const simulateUpdate = () => {
        setReportItems((prev) =>
            prev.map((item) => ({
                ...item,
                count: item.count + item.increment
            }))
        );
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
                        />
                    </div>

                    <div className="control-group">
                        <span className="control-label">Language:</span>
                        <DropDownButton
                            text={selectedLanguage}
                            svgIcon={globeIcon}
                            items={languageItems}
                            onItemClick={(event) => setSelectedLanguage(event.item.text)}
                        />
                    </div>
                </div>
            </div>

            <div className="tickets-section">
                <SegmentedControl
                    value={selectedReport}
                    onChange={setSelectedReport}
                    items={reportSegmentItems}
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

            <div className="preview-section">
                <div className="preview-header">
                    <span className="k-skeleton k-opacity-30 k-rounded-full k-h-10" style={{ width: '180px' }} />
                    <span className="k-skeleton k-opacity-30 k-rounded-full k-h-10" style={{ width: '120px' }} />
                    <span className="k-skeleton k-opacity-30 k-rounded-full k-h-10" style={{ width: '160px' }} />
                </div>

                <div className="preview-content">
                    <div className="preview-content-left">
                        <span
                            className="k-skeleton k-opacity-30 k-rounded-md k-h-5 k-mb-3"
                            style={{ width: '250px' }}
                        />
                        <span className="k-skeleton k-opacity-25 k-rounded-md k-h-4 k-mb-2" style={{ width: '80%' }} />
                        <span className="k-skeleton k-opacity-25 k-rounded-md k-h-4" style={{ width: '60%' }} />
                    </div>
                    <span className="k-skeleton k-opacity-30 k-rounded-md k-h-10" style={{ width: '120px' }} />
                </div>

                <div className="preview-content">
                    <div className="preview-content-left">
                        <span
                            className="k-skeleton k-opacity-30 k-rounded-md k-h-5 k-mb-3"
                            style={{ width: '250px' }}
                        />
                        <span className="k-skeleton k-opacity-25 k-rounded-md k-h-4 k-mb-2" style={{ width: '80%' }} />
                        <span className="k-skeleton k-opacity-25 k-rounded-md k-h-4" style={{ width: '60%' }} />
                    </div>
                    <span className="k-skeleton k-opacity-30 k-rounded-md k-h-10" style={{ width: '120px' }} />
                </div>

                <div className="preview-content">
                    <div className="preview-content-left">
                        <span
                            className="k-skeleton k-opacity-30 k-rounded-md k-h-5 k-mb-3"
                            style={{ width: '250px' }}
                        />
                        <span className="k-skeleton k-opacity-25 k-rounded-md k-h-4 k-mb-2" style={{ width: '80%' }} />
                        <span className="k-skeleton k-opacity-25 k-rounded-md k-h-4" style={{ width: '60%' }} />
                    </div>
                    <span className="k-skeleton k-opacity-30 k-rounded-md k-h-10" style={{ width: '120px' }} />
                </div>
            </div>
        </div>
    );
};

export default App;
