import * as React from 'react';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { HeaderThElement } from '@progress/kendo-react-data-tools';
import { Button } from '@progress/kendo-react-buttons';
import { plusIcon, minusIcon } from '@progress/kendo-svg-icons';

const DetailComponent = (props) => {
    const data = props.dataItem.details;
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
        <div
            style={{
                height: '50px',
                width: '100%'
            }}
        >
            <div
                style={{
                    position: 'absolute',
                    width: '100%'
                }}
            >
                <div className="k-loading-image" />
            </div>
        </div>
    );
};
const App = () => {
    const baseUrl = 'https://demos.telerik.com/service/v2/odata/';
    const init = {
        method: 'GET',
        accept: 'application/json',
        headers: {}
    };
    const [categories, setCategories] = React.useState([]);
    const [detailExpand, setDetailExpand] = React.useState({});

    const expandChange = (event) => {
        let categoryID = event.dataItem.CategoryID;
        setCategories([...categories]);
        if (!event.value || event.dataItem.details) {
            return;
        }
        fetch(baseUrl + `Products?$filter=CategoryID%20eq%20` + categoryID, init)
            .then((response) => response.json())
            .then((json) => {
                let data = categories.slice();
                let index = data.findIndex((d) => d.CategoryID === categoryID);
                data[index].details = json.value;
                setCategories(data);
            });
    };

    React.useEffect(() => {
        fetch(baseUrl + `Categories`, init)
            .then((response) => response.json())
            .then((json) => setCategories(json.value));
    }, []);

    const expand = () => {
        const allIds = categories.map((dataItem) => {
            const value = detailExpand[dataItem.CategoryID] ? false : true;
            const expandEvent = {
                value: dataItem.CategoryID,
                dataItem
            };
            expandChange(expandEvent);

            return { id: dataItem.CategoryID, value: value };
        });
        setDetailExpand(allIds.reduce((acc, curr) => ((acc[curr.id] = curr.value), acc), {}));
    };

    const headerCellRender = (props) => {
          return  <HeaderThElement columnId={props.thProps?.columnId || ''} {...props.thProps}>
                {
                 props.field
                 ? props.children
                 : (<Button
                        onClick={expand}
                        fillMode="clear"
                        svgIcon={!Object.keys(detailExpand).length > 0 ? plusIcon : minusIcon}
                    />)
                }
         </HeaderThElement>
    };
    return (
        <div>
            <Grid
                style={{
                    height: '550px'
                }}
                data={categories}
                dataItemKey="CategoryID"
                detail={DetailComponent}
                detailExpand={detailExpand}
                onDetailExpandChange={expand}
                cells={{ headerCell: headerCellRender }}
            >
                <Column field="CategoryID" title="ID" width="65px" />
                <Column field="CategoryName" width="200px" title="Category Name" />
                <Column field="Description" />
            </Grid>
        </div>
    );
};
export default App;
