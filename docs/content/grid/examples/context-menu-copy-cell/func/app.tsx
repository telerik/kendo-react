import * as React from 'react';
import { Grid, GridColumn, GridContextMenuEvent } from '@progress/kendo-react-grid';
import { ContextMenu, MenuItem } from '@progress/kendo-react-layout';
import sampleProducts from './gd-sample-products';
import { Product } from './gd-interfaces';
import { copyIcon } from '@progress/kendo-svg-icons';

const App = () => {
    const [gridData] = React.useState<Array<Product>>(sampleProducts);
    const [show, setShow] = React.useState(false);
    const [selectedCell, setSelectedCell] = React.useState<string>('');

    const offset = React.useRef({ left: 0, top: 0 });

    const handleContextMenuOpen = (e: React.MouseEvent) => {
        e.preventDefault();

        offset.current = { left: e.pageX, top: e.pageY };
        setShow(true);
    };

    const handleCloseMenu = () => {
        setShow(false);
    };

    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(selectedCell);
    };

    const handleOnSelect = (e: any) => {
        switch (e.item.data.action) {
            case 'copyCell':
                handleCopyToClipboard();
                break;
            default:
        }
        setShow(false);
    };

    const handleContextMenu = (event: GridContextMenuEvent) => {
        handleContextMenuOpen(event.syntheticEvent);

        const { dataItem, field } = event;
        if (field) {
            const cell = dataItem[field];
            setSelectedCell(cell);
        }
    };

    return (
        <>
            <Grid data={gridData} onContextMenu={handleContextMenu} contextMenu={true}>
                <GridColumn field="ProductID" title="ID" />
                <GridColumn field="ProductName" title="Name" />
                <GridColumn field="UnitPrice" title="Price" />
                <GridColumn field="UnitsInStock" title="In stock" />
                <GridColumn field="Discontinued" title="Discontinued" />
            </Grid>
            <ContextMenu show={show} offset={offset.current} onSelect={handleOnSelect} onClose={handleCloseMenu}>
                <MenuItem text="Copy cell" data={{ action: 'copyCell' }} svgIcon={copyIcon} />
            </ContextMenu>
        </>
    );
};

export default App;
