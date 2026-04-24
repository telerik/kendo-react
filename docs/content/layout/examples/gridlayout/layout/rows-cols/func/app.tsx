import * as React from 'react';

import { GridLayout, GridLayoutItem } from '@progress/kendo-react-layout';
import { NumericTextBox, NumericTextBoxChangeEvent } from '@progress/kendo-react-inputs';

import './styles.css';

const App = () => {
    const [rowHeight, setRowHeight] = React.useState(90);
    const [colWidth, setColWidth] = React.useState(90);

    const handleRowChange = React.useCallback(
        (e: NumericTextBoxChangeEvent) => {
            if (e.target.value !== null) {
                setRowHeight(e.target.value);
            }
        },
        [setRowHeight]
    );

    const handleColChange = React.useCallback(
        (e: NumericTextBoxChangeEvent) => {
            if (e.target.value !== null) {
                setColWidth(e.target.value);
            }
        },
        [setColWidth]
    );

    return (
        <div>
            <div className="row k-d-inline-flex k-mb-4">
                <div className="col col-6">
                    <div className="k-label">Set Row Height</div>
                    <NumericTextBox value={rowHeight} onChange={handleRowChange} />
                </div>
                <div className="col col-6">
                    <div className="k-label">Set Column Width</div>
                    <NumericTextBox value={colWidth} onChange={handleColChange} />
                </div>
            </div>
            <div className="example-wrapper">
                <div className="page">
                    <div className="content">
                        <GridLayout
                            rows={[
                                { height: rowHeight },
                                { height: rowHeight },
                                { height: rowHeight },
                                { height: rowHeight },
                                { height: rowHeight }
                            ]}
                            cols={[{ width: colWidth }, { width: colWidth }, { width: colWidth }]}
                            gap={{ rows: 5, cols: 5 }}
                        >
                            {[...Array(15)].map((_, i) => (
                                <GridLayoutItem className={`box box-${i}`} key={i} />
                            ))}
                        </GridLayout>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
