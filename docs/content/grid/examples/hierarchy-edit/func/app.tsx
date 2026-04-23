import * as React from 'react';
import {
    Grid,
    GridItemChangeEvent,
    GridCustomCellProps,
    GridColumn as Column,
    GridDetailExpandChangeEvent
} from '@progress/kendo-react-grid';
import { DetailExpandDescriptor, EditDescriptor } from '@progress/kendo-react-data-tools';
import { MyCommandCell } from './gd-myCommandCell';
import { Product } from './gd-interfaces';

const DetailComponent = (props: any) => {
    const [data, setData] = React.useState(props.dataItem.details || []);
    const [edit, setEdit] = React.useState<EditDescriptor>({});

    const CommandCell = (props: GridCustomCellProps) => (
        <MyCommandCell
            {...props}
            edit={enterEdit}
            remove={remove}
            add={add}
            discard={discard}
            update={update}
            cancel={cancel}
        />
    );

    const enterEdit = (dataItem: Product) => {
        setEdit({
            ...edit,
            [dataItem.ProductID]: true
        });
        setData(
            data.map((item: Product) => (item.ProductID === dataItem.ProductID ? { ...item } : item))
        );
    };

    const remove = (dataItem: Product) => {
        const newData = data.filter((item) => item.ProductID !== dataItem.ProductID);
        setData(newData);
        props.onUpdateCategoryDetails(props.dataItem.CategoryID, newData);
    };

    const add = (dataItem: Product) => {
        const newData = [dataItem, ...data];
        setData(newData);
        props.onUpdateCategoryDetails(props.dataItem.CategoryID, newData);
    };

    const update = (dataItem: Product) => {
        const newData = data.map((item) => (item.ProductID === dataItem.ProductID ? { ...dataItem } : item));
        setData(newData);
        props.onUpdateCategoryDetails(props.dataItem.CategoryID, newData);
    };

    const discard = (dataItem: Product) => {
        setEdit({
            ...edit,
            [dataItem.ProductID]: undefined
        });
        setData(data.filter((item) => item.ProductID !== dataItem.ProductID));
    };

    const cancel = (dataItem: Product) => {
        setEdit({
            ...edit,
            [dataItem.ProductID]: undefined
        });
        setData(data.map((item) => (item.ProductID === dataItem.ProductID ? { ...item } : item)));
    };

    const itemChange = (event: GridItemChangeEvent) => {
        const field = event.field || '';
        const newData = data.map((item) =>
            item.ProductID === event.dataItem.ProductID ? { ...item, [field]: event.value } : item
        );
        setData(newData);
    };

    return (
        <Grid data={data} onItemChange={itemChange} editable edit={edit} dataItemKey="ProductID">
            <Column field="ProductID" title="Product ID" width="120px" />
            <Column field="ProductName" title="Product Name" />
            <Column field="UnitPrice" title="Unit Price" format="{0:c}" />
            <Column cells={{ data: CommandCell }} width="240px" />
        </Grid>
    );
};
const baseUrl = 'https://demos.telerik.com/service/v2/odata/';
const init = { method: 'GET', accept: 'application/json', headers: {} };

const App = () => {
    const [categories, setCategories] = React.useState<any[]>([]);
    const [detailExpand, setDetailExpand] = React.useState<DetailExpandDescriptor>({ 2: true });

    const handleDetailExpandChange = (event: GridDetailExpandChangeEvent) => {
        setDetailExpand(event.detailExpand);
    };

    React.useEffect(() => {
        fetch(baseUrl + `Categories`, init)
            .then((response) => response.json())
            .then(async (json) => {
                const categoriesWithDetails = await Promise.all(
                    json.value.map(async (category) => {
                        const details = await fetchCategoryDetails(category.CategoryID);
                        return { ...category, details };
                    })
                );
                setCategories(categoriesWithDetails);
            });
    }, [detailExpand]);

    const fetchCategoryDetails = async (categoryId) => {
        const response = await fetch(baseUrl + `Products?$filter=CategoryID%20eq%20` + categoryId, init);
        const json = await response.json();
        return json.value;
    };

    const updateCategoryDetails: any = (categoryID, newDetails) => {
        const newCategories = categories.map((category) =>
            category.CategoryID === categoryID ? { ...category, details: newDetails } : category
        );
        setCategories(newCategories);
    };

    return (
        <div>
            <Grid
                style={{ height: '550px' }}
                data={categories}
                dataItemKey="CategoryID"
                detail={(props) => <DetailComponent {...props} onUpdateCategoryDetails={updateCategoryDetails} />}
                detailExpand={detailExpand}
                onDetailExpandChange={handleDetailExpandChange}
                scrollable={'scrollable'}
            >
                <Column field="CategoryID" title="ID" width="65px" />
                <Column field="CategoryName" width="200px" title="Category Name" />
                <Column field="Description" />
            </Grid>
        </div>
    );
};

export default App;
