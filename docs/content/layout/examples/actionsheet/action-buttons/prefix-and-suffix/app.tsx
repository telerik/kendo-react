import * as React from 'react';

import { Button } from '@progress/kendo-react-buttons';
import { SvgIcon } from '@progress/kendo-react-common';
import { ActionSheet, ActionSheetItemProps } from '@progress/kendo-react-layout';
import { checkIcon, xIcon, saveIcon, copyIcon, hyperlinkOpenIcon, trashIcon } from '@progress/kendo-svg-icons';

const items: ActionSheetItemProps[] = [
    {
        title: 'Save to device',
        icon: <SvgIcon icon={saveIcon} />
    },
    {
        title: 'Copy to clipboard',
        icon: <SvgIcon icon={copyIcon} />
    },
    {
        title: 'Open in browser',
        icon: <SvgIcon icon={hyperlinkOpenIcon} />
    },
    {
        title: 'Delete',
        icon: <SvgIcon icon={trashIcon} />,
        group: 'bottom'
    }
];

const App = () => {
    const title = 'Select action';
    const [open, setOpen] = React.useState<boolean>(true);

    const openHandler = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleItemSelect = () => {
        setOpen(false);
    };

    return (
        <>
            <Button onClick={openHandler}>OPEN ACTION SHEET</Button>
            <ActionSheet
                expand={open}
                title={title}
                items={items}
                onClose={handleClose}
                onItemSelect={handleItemSelect}
                prefixActions={<Button svgIcon={checkIcon} fillMode={'flat'} />}
                suffixActions={<Button svgIcon={xIcon} fillMode={'flat'} />}
            ></ActionSheet>
        </>
    );
};

export default App;
