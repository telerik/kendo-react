import * as React from 'react';
import { Button } from '@progress/kendo-react-buttons';
import {
    ActionSheet,
    ActionSheetActionsOrientation,
    ActionSheetFooter,
    ActionSheetItemProps
} from '@progress/kendo-react-layout';

interface ActionSheetItemSelectEvent {
    item?: any;
    syntheticEvent: React.SyntheticEvent<Element>;
    title?: string;
}

const items: ActionSheetItemProps[] = [
    {
        title: 'horizontal'
    },
    {
        title: 'vertical'
    }
];

const App = () => {
    const title = 'Select Orientation';
    const [open, setOpen] = React.useState<boolean>(true);
    const [orientation, setOrientation] = React.useState<ActionSheetActionsOrientation>('horizontal');

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleItemSelect = (e: ActionSheetItemSelectEvent) => {
        setOrientation((e.title as ActionSheetActionsOrientation) || 'horizontal');
    };

    return (
        <>
            <Button onClick={handleOpen}>OPEN ACTION SHEET</Button>
            <ActionSheet
                expand={open}
                title={title}
                items={items}
                onClose={handleClose}
                onItemSelect={handleItemSelect}
            >
                <ActionSheetFooter actionButtonsOrientation={orientation}>
                    <Button>Cancel</Button>
                    <Button themeColor={'primary'}>Apply</Button>
                </ActionSheetFooter>
            </ActionSheet>
        </>
    );
};

export default App;
