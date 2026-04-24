import * as React from 'react';
import { Button } from '@progress/kendo-react-buttons';
import { ActionSheet, ActionSheetItemProps, ActionSheetFooter } from '@progress/kendo-react-layout';

const items: ActionSheetItemProps[] = [{ title: 'Edit Item' }, { title: 'Add to Favorites' }, { title: 'Cancel' }];

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
                    <div className="centered-action-sheet-container">
                        <ActionSheet
                            title={title}
                            expand={open}
                            items={items}
                            onClose={handleOverlayClick}
                            onItemSelect={handleItemClick}
                            className="centered-action-sheet"
                            animation={false}
                        >
                            <ActionSheetFooter>
                                <Button
                                    style={{ width: '100%' }}
                                    fillMode="flat"
                                    themeColor="primary"
                                    onClick={() => setOpen(false)}
                                >
                                    Close
                                </Button>
                            </ActionSheetFooter>
                        </ActionSheet>
                    </div>
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
                    background-color: rgba(0, 0, 0, 0.5);
                    z-index: 1000;
                }

                .centered-action-sheet-container {
                    width: 50%;
                    max-width: 400px;
                    min-width: 300px;
                    position: relative;
                }

                .centered-action-sheet {
                    width: 100%;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
                    border-radius: 8px;
                    background-color: white;
                    padding: 16px;
                }
            `}</style>
        </>
    );
};

export default App;
