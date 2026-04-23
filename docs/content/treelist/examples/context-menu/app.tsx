import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
    TreeList,
    TreeListRowClickEvent,
    TreeListRowContextMenuEvent,
    TreeListSelectionChangeEvent
} from '@progress/kendo-react-treelist';
import { ContextMenu, ContextMenuProps, MenuItem, MenuSelectEvent } from '@progress/kendo-react-layout';
import { MyDialog } from './customDialog';
import { data as sampleData } from './sampleData';
import { ColumnDescriptor, Employee } from './sampleTypes';

const subItemsField = 'employees';
const expandField = 'expanded';

const columns: ColumnDescriptor[] = [
    {
        field: 'name',
        title: 'Name',
        width: '250px',
        expandable: true
    },
    {
        field: 'title',
        title: 'Title'
    }
];

export const App = () => {
    const [data, setData] = React.useState<Employee[]>(sampleData);
    const [show, setShow] = React.useState<boolean>(false);
    const [visible, setVisible] = React.useState<boolean>(false);

    const offset = React.useRef({
        left: 0,
        top: 0
    });

    const handleContextMenuOpen = (e: React.MouseEvent, dataItem: Employee) => {
        e.preventDefault();

        offset.current = {
            left: e.pageX,
            top: e.pageY
        };
        setShow(true);
    };

    const handleCloseMenu = () => {
        setShow(false);
    };

    const changeVisible = () => {
        setVisible(!visible);
    };

    const handleOnSelect = (e: MenuSelectEvent) => {
        switch (e.item.data.action) {
            case 'openDialog':
                changeVisible();
                break;
            //other cases for other menu items

            default:
        }
        setShow(false);
    };

    const handleContextMenu = (event: TreeListRowContextMenuEvent) => {
        handleContextMenuOpen(event.syntheticEvent as any, event.dataItem);
    };

    return (
        <>
            <TreeList
                style={{
                    maxHeight: '510px',
                    overflow: 'auto'
                }}
                onRowContextMenu={handleContextMenu}
                expandField={expandField}
                subItemsField={subItemsField}
                data={data}
                columns={columns}
            />
            <ContextMenu show={show} offset={offset.current} onSelect={handleOnSelect} onClose={handleCloseMenu}>
                <MenuItem
                    text="Open Dialog"
                    data={{
                        action: 'openDialog'
                    }}
                    icon="edit"
                />
            </ContextMenu>
            {visible && <MyDialog changeVisible={changeVisible} />}
        </>
    );
};

export default App;
