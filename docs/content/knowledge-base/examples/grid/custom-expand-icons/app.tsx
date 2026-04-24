import * as React from 'react';
import { Grid, GridColumn as Column, GridDetailRowProps } from '@progress/kendo-react-grid';
import { DetailExpandDescriptor } from '@progress/kendo-react-data-tools';
import { arrowDownIcon, arrowRightIcon, plusIcon, minusIcon } from '@progress/kendo-svg-icons';
import { IconsContext } from '@progress/kendo-react-common';

const baseUrl: string = 'https://demos.telerik.com/service/v2/odata/';
const init = { method: 'GET', accept: 'application/json', headers: {} };

const DetailComponent = (props: GridDetailRowProps) => {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        fetch(baseUrl + `Products?$filter=CategoryID%20eq%20` + props.dataItem.CategoryID, init)
            .then((response) => response.json())
            .then((json) => json.value)
            .then(setData);
    }, [props.dataItem.CategoryID]);

    if (data) {
        return (
            <Grid data={data}>
                <Column field="ProductID" title="Product ID" width="120px" />
                <Column field="ProductName" title="Product Name" />
                <Column field="UnitPrice" title="Unit Price" format="{0:c}" />
            </Grid>
        );
    }
    return (
        <div style={{ height: '50px', width: '100%' }}>
            <div style={{ position: 'absolute', width: '100%' }}>
                <div className="k-loading-image" />
            </div>
        </div>
    );
};

const App = () => {
    const [categories, setCategories] = React.useState<any[]>([]);
    const [detailExpand, setDetailExpand] = React.useState<DetailExpandDescriptor>({ 2: true });

    React.useEffect(() => {
        fetch(baseUrl + `Categories`, init)
            .then((response) => response.json())
            .then((json) => json.value)
            .then(setCategories);
    }, [detailExpand]);

    return (
        <IconsContext.Provider
            value={{
                type: 'svg',
                icons: {
                    [plusIcon.name]: arrowRightIcon,
                    [minusIcon.name]: arrowDownIcon
                }
            }}
        >
            <Grid
                style={{ height: '550px' }}
                data={categories}
                autoProcessData={true}
                dataItemKey="CategoryID"
                detail={DetailComponent}
                defaultDetailExpand={detailExpand}
                scrollable={'scrollable'}
            >
                <Column field="CategoryID" title="ID" width="65px" />
                <Column field="CategoryName" width="200px" title="Category Name" />
                <Column field="Description" />
            </Grid>
        </IconsContext.Provider>
    );
};

export default App;
