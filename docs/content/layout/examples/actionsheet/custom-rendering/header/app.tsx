import * as React from 'react';
import { Button } from '@progress/kendo-react-buttons';
import { ActionSheetItemProps, ActionSheet, ActionSheetHeader } from '@progress/kendo-react-layout';
import { SvgIcon } from '@progress/kendo-react-common';
import { editToolsIcon, heartIcon, hyperlinkOpenIcon, uploadIcon } from '@progress/kendo-svg-icons';

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

    return (
        <>
            <Button onClick={openHandler}>OPEN ACTION SHEET</Button>
            {open && (
                <div className="action-sheet-overlay" onClick={handleOverlayClick}>
                    <ActionSheet
                        expand={open}
                        items={items}
                        onClose={handleOverlayClick}
                        onItemSelect={handleItemClick}
                        className="centered-action-sheet"
                        animation={false}
                    >
                        <ActionSheetHeader>
                            <span>
                                Select item <SvgIcon icon={hyperlinkOpenIcon} />
                            </span>
                        </ActionSheetHeader>
                    </ActionSheet>
                </div>
            )}
            <style>
                {`
                    .action-sheet-overlay {
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 100vw;
                        height: 100vh;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }

                    .centered-action-sheet {
                        width: 50%;
                        max-width: 400px;
                        min-width: 300px;
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                    }
                `}
            </style>
        </>
    );
};

export default App;
