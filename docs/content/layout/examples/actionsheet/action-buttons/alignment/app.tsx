import * as React from 'react';
import { Button } from '@progress/kendo-react-buttons';
import {
    ActionSheet,
    ActionSheetActionsAlignment,
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
        title: 'stretched'
    },
    {
        title: 'start'
    },
    {
        title: 'center'
    },
    {
        title: 'end'
    },
    {
        title: 'justify'
    }
];

const App = () => {
    const title = 'Select Alignment';
    const [open, setOpen] = React.useState<boolean>(true);
    const [alignment, setAlignment] = React.useState<ActionSheetActionsAlignment>('stretched');

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleItemSelect = (e: ActionSheetItemSelectEvent) => {
        setAlignment((e.title as ActionSheetActionsAlignment) || 'stretched');
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
                <ActionSheetFooter actionButtonsAlignment={alignment}>
                    <Button>Cancel</Button>
                    <Button themeColor={'primary'}>Apply</Button>
                </ActionSheetFooter>
            </ActionSheet>
        </>
    );
};

export default App;
