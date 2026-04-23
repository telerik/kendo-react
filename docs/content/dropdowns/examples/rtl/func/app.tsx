import * as React from 'react';

import {
    AutoComplete,
    ComboBox,
    MultiColumnComboBox,
    DropDownList,
    MultiSelect,
    DropDownTree
} from '@progress/kendo-react-dropdowns';
import { employees } from './shared-dd-data';

const App = () => {
    const sports = ['Baseball', 'Basketball', 'Football', 'Tennis', 'Volleyball'];
    const columns = [
        { field: 'id', header: 'ID', width: '100px' },
        { field: 'name', header: 'Name', width: '300px' },
        { field: 'position', header: 'Position', width: '300px' }
    ];
    const data = employees;

    return (
        <div className="example-wrapper" style={{ textAlign: 'right' }}>
            <div className="col-xs-12 col-sm-6 example-col">
                <p>AutoComplete</p>
                <AutoComplete style={{ width: '300px' }} data={sports} placeholder="Your favorite sport" dir="rtl" />
            </div>
            <div className="col-xs-12 col-sm-6 example-col">
                <p>ComboBox</p>
                <ComboBox style={{ width: '300px' }} data={sports} defaultValue="Basketball" dir="rtl" />
            </div>
            <div className="col-xs-12 col-sm-6 example-col">
                <p>MultiColumnComboBox</p>
                <MultiColumnComboBox
                    style={{ width: '300px' }}
                    data={data}
                    columns={columns}
                    textField={'name'}
                    dir={'rtl'}
                />
            </div>
            <div className="col-xs-12 col-sm-6 example-col">
                <p>DropDownList</p>
                <DropDownList style={{ width: '300px' }} data={sports} defaultValue="Basketball" dir="rtl" />
            </div>
            <div className="col-xs-12 col-sm-6 example-col">
                <p>MultiSelect</p>
                <MultiSelect style={{ width: '300px' }} data={sports} defaultValue={['Basketball']} dir="rtl" />
            </div>
            <div className="col-xs-12 col-sm-6 example-col">
                <p>DropDownTree</p>
                <DropDownTree
                    style={{ width: '300px' }}
                    data={[
                        {
                            text: 'Furniture',
                            id: 1,
                            expanded: true,
                            items: [
                                { text: 'Tables & Chairs', id: 2 },
                                { text: 'Sofas', id: 3 },
                                { text: 'Occasional Furniture', id: 4 }
                            ]
                        }
                    ]}
                    defaultValue={{ text: 'Sofas', id: 3 }}
                    textField="text"
                    dataItemKey="id"
                    dir="rtl"
                />
            </div>
        </div>
    );
};

export default App;
