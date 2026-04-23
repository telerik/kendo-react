import * as React from 'react';
import { Checkbox, NumericTextBox, RadioButton } from '@progress/kendo-react-inputs';
import { Grid, GridColumn as Column, GridPagerSettings } from '@progress/kendo-react-grid';

import products from './gd-products';

interface AppState {
    pageSize: number;
    skip: number;
    pageable: GridPagerSettings;
}

const App = () => {
    const [state, setState] = React.useState<AppState>({
        pageSize: 10,
        skip: 0,
        pageable: {
            buttonCount: 5,
            info: true,
            type: 'numeric',
            pageSizes: true,
            previousNext: true
        }
    });
    const [data, setData] = React.useState(products);

    const updatePagerState = (key: string, value: string | number | boolean | null) => {
        const newPageableState = Object.assign({}, state.pageable, { [key]: value });
        setState(Object.assign({}, state, { pageable: newPageableState }));
    };

    return (
        <div>
            <div className="example-config row">
                <div className="col-md-6">
                    <dl>
                        <dt>Pager type:</dt>
                        <dd>
                            <RadioButton
                                name="pager"
                                id="numeric"
                                value="numeric"
                                defaultChecked={true}
                                onChange={(e) => {
                                    updatePagerState('type', e.value);
                                }}
                                label="Numeric&nbsp;"
                            />

                            <RadioButton
                                name="pager"
                                id="input"
                                value="input"
                                onChange={(e) => {
                                    updatePagerState('type', e.value);
                                }}
                                label="Input&nbsp;"
                            />
                        </dd>
                    </dl>
                    <dl>
                        <dt>Max. number of buttons:</dt>
                        <dd>
                            <div style={{ width: 100 }}>
                                <NumericTextBox
                                    defaultValue={5}
                                    className="k-input k-input-md k-rounded-md k-input-solid k-input-solid-md"
                                    onChange={(e) => {
                                        updatePagerState('buttonCount', e.value);
                                    }}
                                />
                            </div>
                        </dd>
                    </dl>
                </div>
                <div className="col-md-6 row">
                    <div className="col-md-12">
                        <Checkbox
                            defaultChecked={true}
                            id="showInfo"
                            onChange={(e) => {
                                updatePagerState('info', e.value);
                            }}
                            label="Show info"
                        />
                    </div>

                    <div className="col-md-12">
                        <Checkbox
                            defaultChecked={true}
                            id="pageSize"
                            onChange={(e) => {
                                updatePagerState('pageSizes', e.value);
                            }}
                            label="Show page sizes"
                        />
                    </div>
                    <div className="col-md-12">
                        <Checkbox
                            defaultChecked={true}
                            id="previousNext"
                            onChange={(e) => {
                                updatePagerState('previousNext', e.value);
                            }}
                            label="Show previous / next buttons"
                        />
                    </div>
                </div>
            </div>
            <Grid
                style={{ height: '280px' }}
                dataItemKey="ProductID"
                data={data}
                autoProcessData={true}
                defaultSkip={state.skip}
                defaultTake={10}
                pageable={state.pageable}
                pageSize={state.pageSize}
            >
                <Column field="ProductID" />
                <Column field="ProductName" title="Product Name" />
                <Column field="UnitPrice" title="Unit Price" />
            </Grid>
        </div>
    );
};

export default App;
