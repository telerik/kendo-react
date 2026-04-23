import * as React from 'react';

import { GridLayout, GridLayoutItem } from '@progress/kendo-react-layout';
import { DropDownList, DropDownListChangeEvent } from '@progress/kendo-react-dropdowns';

import './styles.css';

const App = () => {
    const [hAlign, setHAlign] = React.useState<'start' | 'center' | 'end' | 'stretch'>('stretch');
    const hAligns = ['start', 'center', 'end', 'stretch'];

    const handleAlignChange = React.useCallback(
        (e: DropDownListChangeEvent) => {
            setHAlign(e.value);
        },
        [setHAlign]
    );

    return (
        <div>
            <div className="row k-d-inline-flex k-mb-4">
                <DropDownList data={hAligns} value={hAlign} onChange={handleAlignChange} style={{ minWidth: 200 }} />
            </div>
            <div className="example-wrapper">
                <div className="page">
                    <div className="content">
                        <GridLayout
                            align={{ horizontal: hAlign }}
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
