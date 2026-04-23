import * as React from 'react';
import { Button } from '@progress/kendo-react-buttons';
import { ActionSheet, ActionSheetItemProps } from '@progress/kendo-react-layout';
import { SvgIcon } from '@progress/kendo-react-common';
import { cancelIcon, heartIcon, pencilIcon } from '@progress/kendo-svg-icons';

const items: ActionSheetItemProps[] = [
    { title: 'Edit Item', icon: <SvgIcon icon={pencilIcon} /> },
    { title: 'Add to Favorites', icon: <SvgIcon icon={heartIcon} /> },
    { title: 'Cancel', icon: <SvgIcon icon={cancelIcon} /> }
];

const App = () => {
    const title = 'Select item';
    const [open, setOpen] = React.useState(false);
    const openHandler = () => {
        setOpen(true);
    };
    const handleOverlayClick = () => {
        setOpen(false);
    };
    const handleItemClick = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button onClick={openHandler}>OPEN ACTION SHEET</Button>
            <ActionSheet
                title={title}
                expand={open}
                animation={true}
                animationDuration={{ openDuration: 500, closeDuration: 700 }}
                items={items}
                onClose={handleOverlayClick}
                onItemSelect={handleItemClick}
            />
        </div>
    );
};

export default App;
