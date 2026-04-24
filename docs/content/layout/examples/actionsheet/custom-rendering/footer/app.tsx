import * as React from 'react';
import { Button } from '@progress/kendo-react-buttons';
import { ActionSheetItemProps, ActionSheet, ActionSheetFooter } from '@progress/kendo-react-layout';
import { SvgIcon } from '@progress/kendo-react-common';
import { cancelIcon, editToolsIcon, heartIcon, uploadIcon } from '@progress/kendo-svg-icons';

const items: ActionSheetItemProps[] = [
    {
        title: 'Edit Item',
        icon: <SvgIcon className="k-actionsheet-item-icon" style={{ color: 'error' }} icon={editToolsIcon} />,
        description: 'Click to edit'
    },
    {
        title: 'Add to Favorites',
        icon: <SvgIcon className="k-actionsheet-item-icon" style={{ color: 'error' }} icon={heartIcon} />
    },
    {
        title: 'Upload New',
        icon: <SvgIcon className="k-actionsheet-item-icon" style={{ color: 'error' }} icon={uploadIcon} />,
        disabled: true,
        group: 'top'
    }
];

const App = () => {
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
    const cancel = () => {
        setOpen(false);
    };

    return (
        <>
            <Button onClick={openHandler}>OPEN ACTION SHEET</Button>
            <ActionSheet expand={open} items={items} onClose={handleOverlayClick} onItemSelect={handleItemClick}>
                <ActionSheetFooter>
                    <Button
                        style={{ width: '100%' }}
                        fillMode="flat"
                        themeColor="primary"
                        svgIcon={cancelIcon}
                        onClick={cancel}
                    >
                        Cancel
                    </Button>
                </ActionSheetFooter>
            </ActionSheet>
        </>
    );
};

export default App;
