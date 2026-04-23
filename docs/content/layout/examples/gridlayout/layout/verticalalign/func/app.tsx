import * as React from 'react';

import { GridLayout, GridLayoutItem } from '@progress/kendo-react-layout';
import { DropDownList, DropDownListChangeEvent } from '@progress/kendo-react-dropdowns';

import './styles.css';

const App = () => {
    const [vAlign, setVAlign] = React.useState<'top' | 'middle' | 'bottom' | 'stretch'>('stretch');
    const vAligns = ['top', 'middle', 'bottom', 'stretch'];

    const handleAlignChange = React.useCallback(
        (e: DropDownListChangeEvent) => {
            setVAlign(e.value);
        },
        [setVAlign]
    );

    return (
        <div>
            <div className="row k-d-inline-flex k-mb-4">
                <DropDownList data={vAligns} value={vAlign} onChange={handleAlignChange} style={{ minWidth: 200 }} />
            </div>
            <div className="example-wrapper">
                <div className="page">
                    <div className="content">
                        <GridLayout
                            align={{ vertical: vAlign }}
                            rows={[{ height: 90 }, { height: 90 }, { height: 90 }, { height: 90 }, { height: 90 }]}
                            cols={[{ width: 90 }, { width: 90 }, { width: 90 }]}
                            gap={{ rows: 5, cols: 5 }}
                        >
                            {[...Array(15)].map((_, i) => (
                                <GridLayoutItem className={`box box-${i}`} key={i}>
                                    Box
                                </GridLayoutItem>
                            ))}
                        </GridLayout>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
