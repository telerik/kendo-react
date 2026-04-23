import * as React from 'react';
import { Button, ButtonHandle } from '@progress/kendo-react-buttons';
import { ActionSheetItemProps, ActionSheet } from '@progress/kendo-react-layout';

const items: ActionSheetItemProps[] = [
    { title: 'Edit Item', description: 'Click to edit', tabIndex: 1 },
    { title: 'Add to Favorites', tabIndex: 1 },
    { title: 'Upload New', tabIndex: 1 },
    { title: 'Cancel', tabIndex: 1 }
];

const App = () => {
    const title = 'Select item';
    const buttonRef = React.useRef<ButtonHandle>(null);
    const [open, setOpen] = React.useState(false);

    const openHandler = () => {
        setOpen(true);
    };
    const handleOverlayClick = () => {
        setOpen(false);
        buttonRef?.current?.element?.focus();
    };
    const handleItemClick = () => {
        setOpen(false);
        buttonRef?.current?.element?.focus();
    };

    return (
      <>
        <Button onClick={openHandler} ref={buttonRef}>
          OPEN ACTION SHEET
        </Button>
        <ActionSheet
          expand={open}
          title={title}
          items={items}
          onClose={handleOverlayClick}
          onItemSelect={handleItemClick}
            />
      </>
    );
};

export default App;
