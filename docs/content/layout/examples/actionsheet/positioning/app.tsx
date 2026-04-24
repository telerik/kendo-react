import * as React from 'react';
import { Button } from '@progress/kendo-react-buttons';
import { ActionSheetItemProps, ActionSheet } from '@progress/kendo-react-layout';
import { DropDownList, DropDownListChangeEvent } from '@progress/kendo-react-dropdowns';

const items: ActionSheetItemProps[] = [{ title: 'Edit Item' }, { title: 'Add to Favorites' }, { title: 'Cancel' }];

const positions = ['top', 'bottom', 'left', 'right', 'fullscreen'];

const App = () => {
    const title = 'Select item';
    const [open, setOpen] = React.useState(false);
    const [position, setPosition] = React.useState<'top' | 'bottom' | 'left' | 'right' | 'fullscreen'>('bottom');

    const openHandler = () => {
        setOpen(true);
    };
    const handleOverlayClick = () => {
        setOpen(false);
    };
    const handleItemClick = () => {
        setOpen(false);
    };
    const handleChange = (e: DropDownListChangeEvent) => {
        setPosition(e.value);
    };

    return (
        <React.Fragment>
            <div className="example-config">
                <h6>Change tabs position: </h6>
                <DropDownList data={positions} defaultValue="bottom" onChange={handleChange} />
            </div>
            <hr />
            <Button onClick={openHandler}>OPEN ACTION SHEET</Button>
            <ActionSheet
                expand={open}
                title={title}
                items={items}
                position={position}
                onClose={handleOverlayClick}
                onItemSelect={handleItemClick}
            />
        </React.Fragment>
    );
};

export default App;
