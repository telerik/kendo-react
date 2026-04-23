import * as React from 'react';
import { ListView, ListViewItemProps, ListViewItemWrapper } from '@progress/kendo-react-listview';
import products from './shared-lv-products';

const MyItemRender = (props: ListViewItemProps) => {
    let item = props.dataItem;
    return (
        <ListViewItemWrapper style={{ padding: 10, borderBottom: '1px solid lightgrey' }}>
            {item.ProductName}
        </ListViewItemWrapper>
    );
};

const App = () => {
    return (
        <div>
            <ListView data={products} item={MyItemRender} style={{ width: '100%', height: 600 }} />
        </div>
    );
};

export default App;
