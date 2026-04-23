import * as React from 'react';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { SvgIcon } from '@progress/kendo-react-common';
import { reorderIcon } from '@progress/kendo-svg-icons';
import products from './gd-products';
import { Product } from './gd-interfaces';

type ContextProps = {
    reorder: (dataItem: Product) => void;
    dragStart: (dataItem: Product) => void;
};

const MyContext = React.createContext<ContextProps>({ reorder: (dataItem) => {}, dragStart: (dataItem) => {} });

const DragCell = (props) => {
    const currentContext = React.useContext(MyContext);
    return (
        <td
            onDragOver={(e) => {
                currentContext.reorder(props.dataItem);

                e.preventDefault();
                e.dataTransfer.dropEffect = 'copy';
            }}
        >
            <span
                className="k-icon k-i-reorder"
                draggable={true}
                style={{ cursor: 'move' }}
                onDragStart={(e) => {
                    currentContext.dragStart(props.dataItem);
                    e.dataTransfer.setData('dragging', '');
                }}
            >
                <SvgIcon icon={reorderIcon} />
            </span>
        </td>
    );
};

const App = () => {
    const [gridData, setGridData] = React.useState<Product[]>(products);
    const [activeItem, setActiveItem] = React.useState<Product | null>(null);

    const reorder = (dataItem: Product) => {
        if (activeItem === dataItem) {
            return;
        }
        let reorderedData = gridData.slice();
        let prevIndex = reorderedData.findIndex((p) => p === activeItem);
        let nextIndex = reorderedData.findIndex((p) => p === dataItem);
        reorderedData.splice(prevIndex, 1);
        reorderedData.splice(nextIndex, 0, activeItem || reorderedData[0]);

        setGridData(reorderedData);
    };

    const dragStart = (dataItem: Product) => {
        setActiveItem(dataItem);
    };

    return (
        <MyContext.Provider value={{ reorder: reorder, dragStart: dragStart }}>
            <Grid style={{ height: '400px' }} data={gridData} dataItemKey={'ProductID'}>
                <Column title="" width="40px" cells={{ data: DragCell }} />
                <Column field="ProductID" title="ID" width="65px" />
                <Column field="ProductName" title="Name" width="250px" />
                <Column field="Category.CategoryName" title="CategoryName" />
                <Column field="UnitPrice" title="Price" width="80px" />
                <Column field="UnitsInStock" title="In stock" width="80px" />
            </Grid>
        </MyContext.Provider>
    );
};

export default App;
