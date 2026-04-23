import * as React from 'react';
import { Grid, GridColumn as Column, GridItemChangeEvent } from '@progress/kendo-react-grid';
import { RadioGroup, RadioGroupChangeEvent, RadioButtonProps } from '@progress/kendo-react-inputs';
import sampleProducts from './gd-sample-products';
import { Product } from './gd-interfaces';

// Array.with() polyfill for older browsers
if (!Array.prototype.with) {
    Array.prototype.with = function <T>(this: T[], index: number, value: T): T[] {
        const newArray = this.slice();
        newArray[index] = value;
        return newArray;
    };
}

const performanceModeOptions: RadioButtonProps[] = [
    { label: 'Traditional editing (Array.map with condition)', value: 'traditional' },
    { label: 'Optimized editing (dataIndex with Array.with)', value: 'dataIndex' }
];

const App = () => {
    const [data, setData] = React.useState<Product[]>(sampleProducts);
    const [performanceMode, setPerformanceMode] = React.useState<'traditional' | 'dataIndex'>('dataIndex');
    const [editTimes, setEditTimes] = React.useState<number[]>([]);

    // Traditional approach - searches through array
    const traditionalItemChange = (event: GridItemChangeEvent) => {
        if (event.field) {
            const startTime = performance.now();

            setData((prevData) =>
                prevData.map((item) =>
                    item.ProductID === event.dataItem.ProductID ? { ...item, [event.field!]: event.value } : item
                )
            );

            const endTime = performance.now();
            const editTime = endTime - startTime;
            setEditTimes((prev) => [...prev.slice(-9), editTime]);
        }
    };

    // Optimized approach - uses dataIndex with Array.with()
    const dataIndexItemChange = (event: GridItemChangeEvent) => {
        if (event.field) {
            const startTime = performance.now();

            setData((prevData) =>
                prevData.with(event.dataIndex, {
                    ...event.dataItem,
                    [event.field!]: event.value
                })
            );

            const endTime = performance.now();
            const editTime = endTime - startTime;
            setEditTimes((prev) => [...prev.slice(-9), editTime]);
        }
    };

    const onItemChange = performanceMode === 'traditional' ? traditionalItemChange : dataIndexItemChange;

    const handlePerformanceModeChange = (event: RadioGroupChangeEvent) => {
        setPerformanceMode(event.value);
        setEditTimes([]);
    };

    const averageEditTime =
        editTimes.length > 0 ? (editTimes.reduce((sum, time) => sum + time, 0) / editTimes.length).toFixed(3) : '0';

    return (
        <div>
            <div className="mb-4 p-3 rounded example-config">
                <h3>Optimizing Editing Performance for Large Datasets</h3>

                <div className="mb-3">
                    <RadioGroup
                        data={performanceModeOptions}
                        value={performanceMode}
                        onChange={handlePerformanceModeChange}
                        layout="horizontal"
                    />
                </div>

                <div className="small">
                    <strong>Instructions:</strong> Edit any cell in the grid below to see the performance difference
                    between editing approaches. The optimization is most noticeable when editing cells in large
                    datasets.
                </div>
            </div>
            <div className="mb-4">
                <strong>Current Mode: </strong>
                <span
                    className={`ms-2 px-2 py-1 rounded small ${
                        performanceMode === 'dataIndex'
                            ? 'bg-success text-success-emphasis'
                            : 'bg-warning text-warning-emphasis'
                    }`}
                >
                    {performanceMode === 'traditional' ? 'Traditional Editing' : 'Optimized Editing'}
                </span>
                {editTimes.length > 0 && (
                    <span className="ms-4">
                        <strong> Avg Edit Time:</strong> {averageEditTime}ms
                    </span>
                )}
            </div>

            <Grid
                style={{ height: '440px' }}
                data={data}
                editable={true}
                onItemChange={onItemChange}
                dataItemKey="ProductID"
            >
                <Column field="ProductID" title="ID" width="80px" editable={false} />
                <Column field="ProductName" title="Product Name" />
                <Column field="UnitPrice" title="Price" width="100px" editor="numeric" format="{0:c}" />
                <Column field="UnitsInStock" title="Stock" width="100px" editor="numeric" />
                <Column field="Category" title="Category" width="150px" />
                <Column field="Discontinued" title="Discontinued" width="120px" editor="boolean" />
            </Grid>
        </div>
    );
};

export default App;
