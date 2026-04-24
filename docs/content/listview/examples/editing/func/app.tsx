import React, { useCallback, useState } from 'react';
import { ListView, ListViewHeader, ListViewItemProps } from '@progress/kendo-react-listview';
import MyItemRender from './myItemRender';
import products from './shared-lv-products';

const MyHeader = () => (
    <ListViewHeader style={{ color: 'rgb(160, 160, 160)', fontSize: 14 }} className="pl-3 pb-2 pt-2">
        Product list
    </ListViewHeader>
);

const App = () => {
    const [data, setData] = useState(products);
    const saveData = useCallback((editItem: any) => {
        setData((prev) => prev.map((e) => (e.ProductID === editItem.ProductID ? { ...editItem, edit: false } : e)));
    }, []);
    const deleteItem = useCallback((editItem: any) => {
        setData((prev) => prev.filter((e) => e.ProductID !== editItem.ProductID));
    }, []);
    const MyCustomItem = useCallback(
        (props: ListViewItemProps) => <MyItemRender {...props} saveItem={saveData} deleteItem={deleteItem} />,
        [saveData, deleteItem]
    );
    return <ListView data={data} item={MyCustomItem} style={{ width: '100%', height: 500 }} header={MyHeader} />;
};

export default App;
