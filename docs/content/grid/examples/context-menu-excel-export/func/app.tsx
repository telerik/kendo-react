import * as React from 'react';
import { Grid, GridColumn, GridContextMenuEvent } from '@progress/kendo-react-grid';
import { ContextMenu, MenuItem, MenuSelectEvent } from '@progress/kendo-react-layout';
import { ExcelExport } from '@progress/kendo-react-excel-export';
import sampleProducts from './gd-sample-products';
import { Product } from './gd-interfaces';

const App = () => {
    const [gridData] = React.useState<Array<Product>>(sampleProducts);
    const [show, setShow] = React.useState(false);

    const _export = React.useRef<ExcelExport | null>(null);
    const offset = React.useRef({ left: 0, top: 0 });

    const handleContextMenuOpen = (e: React.MouseEvent) => {
        e.preventDefault();

        offset.current = { left: e.pageX, top: e.pageY };
        setShow(true);
    };

    const handleCloseMenu = () => {
        setShow(false);
    };

    const handleExcelExport = () => {
        if (_export.current !== null) {
            _export.current.save();
        }
    };

    const handleOnSelect = (e: MenuSelectEvent) => {
        switch (e.item.data.action) {
            case 'exportExcel':
                handleExcelExport();
                break;
            default:
        }
        setShow(false);
    };

    const handleContextMenu = (event: GridContextMenuEvent) => {
        handleContextMenuOpen(event.syntheticEvent);
    };

    return (
        <ExcelExport data={gridData} ref={_export}>
            <Grid data={gridData} onContextMenu={handleContextMenu}>
                <GridColumn field="ProductID" title="ID" />
                <GridColumn field="ProductName" title="Name" />
                <GridColumn field="UnitPrice" title="Price" />
                <GridColumn field="UnitsInStock" title="In stock" />
                <GridColumn field="Discontinued" title="Discontinued" />
            </Grid>
            <ContextMenu show={show} offset={offset.current} onSelect={handleOnSelect} onClose={handleCloseMenu}>
                <MenuItem text="Export" data={{ action: 'exportExcel' }} icon="excel" />
            </ContextMenu>
        </ExcelExport>
    );
};

export default App;
