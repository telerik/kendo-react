import * as React from 'react';

import {
    AutoComplete,
    ComboBox,
    DropDownList,
    MultiSelect,
    DropDownTree,
    MultiColumnComboBox
} from '@progress/kendo-react-dropdowns';
import { dataProducts, dataCategories, dataOrders, productsTree, employees } from './data';

const App = () => {
    const columns = [
        { field: 'id', header: 'ID', width: '100px' },
        { field: 'name', header: 'Name', width: '300px' },
        { field: 'position', header: 'Position', width: '300px' }
    ];

    return (
        <div>
            <div className="row">
                <div className="m-3">
                    <p>AutoComplete</p>
                    <AutoComplete
                        style={{ width: '300px' }}
                        label="Order"
                        data={dataOrders}
                        textField="orderName"
                        suggest={true}
                    />
                </div>
                <div className="m-3">
                    <p>ComboBox</p>
                    <ComboBox
                        style={{ width: '300px' }}
                        label="Category"
                        data={dataCategories}
                        textField="categoryName"
                        suggest={true}
                    />
                </div>
                <div className="m-3">
                    <p>DropDownList</p>
                    <DropDownList
                        style={{ width: '300px' }}
                        label="Product"
                        data={dataProducts}
                        textField="productName"
                    />
                </div>
                <div className="m-3">
                    <p>MultiColumnComboBox</p>
                    <MultiColumnComboBox label="Owner" data={employees} columns={columns} textField={'name'} />
                </div>
            </div>
            <div className="row">
                <div className="m-3">
                    <p>MultiSelect</p>
                    <MultiSelect
                        style={{ width: '300px' }}
                        label="Product(s)"
                        data={dataProducts}
                        textField="productName"
                    />
                </div>
                <div className="m-3">
                    <p>DropDownTree</p>
                    <DropDownTree
                        style={{ width: '300px' }}
                        label="Product(s)"
                        data={productsTree}
                        textField="name"
                        dataItemKey="id"
                    />
                </div>
            </div>
        </div>
    );
};

export default App;
