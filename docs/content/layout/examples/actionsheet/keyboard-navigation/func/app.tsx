import * as React from 'react';
import { Button } from '@progress/kendo-react-buttons';
import {
    ActionSheetItemProps,
    ActionSheet
} from '@progress/kendo-react-layout';

const items: ActionSheetItemProps[] = [
    { title: 'Edit Item' },
    { title: 'Add to Favorites' },
    { title: 'Cancel' }
];

const App = () => {
    const title = 'Select item';
    const [open, setOpen] = React.useState(true);

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
        expand={open}
        title={title}
        items={items}
        onClose={handleOverlayClick}
        onItemSelect={handleItemClick}
        />
    </div>
    );
};

export default App;
