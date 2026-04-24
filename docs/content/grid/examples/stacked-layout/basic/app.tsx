import * as React from 'react';
import { Grid, GridColumn as Column, GridDataLayoutMode } from '@progress/kendo-react-grid';
import { DropDownList, DropDownListChangeEvent } from '@progress/kendo-react-dropdowns';
import { employees } from './data';

const App = () => {
    const DATA_ITEM_KEY = 'fullName';

    const [layoutMode, setLayoutMode] = React.useState<GridDataLayoutMode>('stacked');
    const [cols, setCols] = React.useState<number>(2);

    const handleModeChange = (event: DropDownListChangeEvent) => {
        setLayoutMode(event.target.value);
    };

    const handleColsChange = (event: DropDownListChangeEvent) => {
        setCols(event.target.value);
    };

    return (
        <div>
            <div className="example-config">
                <div style={{ marginBottom: '10px' }}>
                    <span style={{ marginRight: '10px' }}>Layout Mode:</span>
                    <DropDownList
                        data={['columns', 'stacked']}
                        value={layoutMode}
                        onChange={handleModeChange}
                        style={{ width: '150px', marginRight: '20px' }}
                    />
                    {layoutMode === 'stacked' && (
                        <>
                            <span style={{ marginRight: '10px' }}>Stacked Columns:</span>
                            <DropDownList
                                data={[1, 2, 3, 4]}
                                value={cols}
                                onChange={handleColsChange}
                                style={{ width: '100px' }}
                            />
                        </>
                    )}
                </div>
            </div>
            <Grid
                data={employees}
                dataLayoutMode={layoutMode}
                stackedLayoutSettings={{ cols: cols }}
                style={{ height: '400px' }}
                navigatable={true}
                dataItemKey={DATA_ITEM_KEY}
                autoProcessData={true}
                selectable={{
                    enabled: true,
                    mode: 'single'
                }}
            >
                <Column field="fullName" title="Name" />
                <Column field="jobTitle" title="Title" />
                <Column field="country" title="Country" />
                <Column field="isOnline" title="Status" />
            </Grid>
        </div>
    );
};

export default App;
