import React, { useState, useCallback } from 'react';
import { Grid, GridColumn as Column, GridDataStateChangeEvent } from '@progress/kendo-react-grid';
import { Button } from '@progress/kendo-react-buttons';
import { process } from '@progress/kendo-data-query';
import EditForm from './editForm';
import products from './shared-kb-products';

const EditCommandCell = (props: any) => {
    return (
        <td {...props.tdProps}>
            <Button themeColor={'primary'} onClick={() => props.enterEdit(props.dataItem)}>
                Edit
            </Button>
        </td>
    );
};

const App = () => {
    const [openForm, setOpenForm] = useState(false);
    const [editItem, setEditItem] = useState<any>({});
    const [data, setData] = useState<any[]>([...products]);
    const [dataState, setDataState] = useState<any>({});
    const [result, setResult] = useState<any>(process(products, {}));

    const enterEdit = useCallback((item: any) => {
        setOpenForm(true);
        setEditItem(item);
    }, []);

    const handleSubmit = useCallback(
        (event: any) => {
            const newData = data.map((item) => (event.ProductID === item.ProductID ? { ...event } : item));
            setData(newData);
            setResult(process(newData, dataState));
            setOpenForm(false);
        },
        [data, dataState]
    );

    const handleCancelEdit = useCallback(() => {
        setOpenForm(false);
    }, []);

    const MyEditCommandCell = useCallback(
        (props: any) => <EditCommandCell {...props} enterEdit={enterEdit} />,
        [enterEdit]
    );

    const dataStateChange = useCallback(
        (event: GridDataStateChangeEvent) => {
            setResult(process(data, event.dataState));
            setDataState(event.dataState);
        },
        [data]
    );

    const expandChange = useCallback(
        // Note: Using any here because this uses a custom expand pattern not matching GridDetailExpandChangeEvent
        (event: any) => {
            event.dataItem[event.target.props.expandField] = event.value;
            setResult({ ...result });
            setDataState({ ...dataState });
        },
        [result, dataState]
    );

    return (
        <>
            <Grid
                style={{ height: '520px' }}
                resizable
                reorderable
                filterable
                sortable
                pageable={{ pageSizes: true }}
                data={result}
                onDataStateChange={dataStateChange}
                {...dataState}
                onExpandChange={expandChange}
                expandField="expanded"
            >
                <Column field="ProductID" filterable={false} title="ID" width="50px" />
                <Column field="ProductName" title="Product Name" />
                <Column field="UnitPrice" title="Unit Price" filter="numeric" />
                <Column field="UnitsInStock" title="Units In Stock" filter="numeric" />
                <Column cells={{ data: MyEditCommandCell }} filterable={false} />
            </Grid>
            {openForm && <EditForm cancelEdit={handleCancelEdit} onSubmit={handleSubmit} item={editItem} />}
        </>
    );
};

export default App;
