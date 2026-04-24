import * as React from 'react';

import { GridLayout, GridLayoutItem } from '@progress/kendo-react-layout';
import { NumericTextBox, NumericTextBoxChangeEvent } from '@progress/kendo-react-inputs';

import './styles.css';

const App = () => {
    const [rowGap, setRowGap] = React.useState(5);
    const [colGap, setColGap] = React.useState(5);

    const handleRowGapChange = React.useCallback(
        (e: NumericTextBoxChangeEvent) => {
            if (e.target.value !== null) {
                setRowGap(e.target.value);
            }
        },
        [setRowGap]
    );

    const handleColGapChange = React.useCallback(
        (e: NumericTextBoxChangeEvent) => {
            if (e.target.value !== null) {
                setColGap(e.target.value);
            }
        },
        [setColGap]
    );

    return (
        <div>
            <div className="row k-d-inline-flex k-mb-4">
                <div className="col col-6">
                    <div className="k-label">Set Row Gap</div>
                    <NumericTextBox value={rowGap} onChange={handleRowGapChange} />
                </div>
                <div className="col col-6">
                    <div className="k-label">Set Column Gap</div>
                    <NumericTextBox value={colGap} onChange={handleColGapChange} />
                </div>
            </div>
            <div className="example-wrapper">
                <div className="page">
                    <div className="content">
                        <GridLayout
                            rows={[{ height: 90 }, { height: 90 }, { height: 90 }, { height: 90 }]}
                            cols={[{ width: 90 }, { width: 90 }, { width: 90 }]}
                            gap={{ rows: rowGap, cols: colGap }}
                        >
                            {[...Array(12)].map((_, i) => (
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
