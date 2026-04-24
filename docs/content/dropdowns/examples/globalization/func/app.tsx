import * as React from 'react';

import {
    AutoComplete,
    ComboBox,
    MultiColumnComboBox,
    DropDownList,
    MultiSelect,
    DropDownTree
} from '@progress/kendo-react-dropdowns';
import { loadMessages, LocalizationProvider } from '@progress/kendo-react-intl';
import { employees } from './shared-dd-data';
import esMessages from './shared-dd-es';
loadMessages(esMessages, 'es');

const App = () => {
    const columns = [
        { field: 'id', header: 'ID', width: '100px' },
        { field: 'name', header: 'Name', width: '300px' },
        { field: 'position', header: 'Position', width: '300px' }
    ];
    const data = employees;

    return (
        <LocalizationProvider language="es">
            <div className="example-wrapper">
                <div className="col-xs-12 col-sm-6 example-col">
                    <p>AutoComplete</p>
                    <AutoComplete style={{ width: '300px' }} />
                </div>
                <div className="col-xs-12 col-sm-6 example-col">
                    <p>ComboBox</p>
                    <ComboBox style={{ width: '300px' }} data={[]} />
                </div>
                <div className="col-xs-12 col-sm-6 example-col">
                    <p>MultiColumnComboBox</p>
                    <MultiColumnComboBox data={data} columns={columns} textField={'name'} />
                </div>
                <div className="col-xs-12 col-sm-6 example-col">
                    <p>DropDownList</p>
                    <DropDownList style={{ width: '300px' }} data={[]} />
                </div>
                <div className="col-xs-12 col-sm-6 example-col">
                    <p>MultiSelect</p>
                    <MultiSelect data={[]} />
                </div>
                <div className="col-xs-12 col-sm-6 example-col">
                    <p>DropDownTree</p>
                    <DropDownTree style={{ width: '300px' }} data={[]} textField="text" dataItemKey="id" />
                </div>
            </div>
        </LocalizationProvider>
    );
};

export default App;
