import * as React from 'react';
import { Button } from '@progress/kendo-react-buttons';
import { ActionSheetItemProps, ActionSheet } from '@progress/kendo-react-layout';

const items: ActionSheetItemProps[] = [
    { title: 'Add to Cart', className: 'custom-font' },
    {
        title: 'Add to Favorites',
        style: { textDecoration: 'underline', color: '#fe7f76' }
    },
    { title: 'Cancel', group: 'bottom' }
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
        <>
            <Button onClick={openHandler}>OPEN ACTION SHEET</Button>
            {open && (
                <div className="action-sheet-overlay" onClick={handleOverlayClick}>
                    <ActionSheet
                        expand={open}
                        title={title}
                        items={items}
                        onClose={handleOverlayClick}
                        onItemSelect={handleItemClick}
                        className="centered-action-sheet"
                        animation={false}
                    />
                </div>
            )}
            <style>{`
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

                .custom-font {
                    color: #1174ab;
                    font-weight: bold;
                }
            `}</style>
        </>
    );
};

export default App;
