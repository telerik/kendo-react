import * as React from 'react';
import { Button } from '@progress/kendo-react-buttons';
import { ActionSheet, ActionSheetItemProps } from '@progress/kendo-react-layout';

const items: ActionSheetItemProps[] = [
    { title: 'Edit Item' },
    { title: 'Add to Favorites' },
    { title: 'Cancel' }
];

const App = () => {
    const title = 'Select item';
    const [open, setOpen] = React.useState(false);
    const [eventLog, setEventLog] = React.useState<string []>([]);

    const openHandler = () => {
        setOpen(true);
    };
    const handleOverlayClick = () => {
        setEventLog(state => ['Overlay click', ...state]);
        setOpen(false);
    };
    const handleItemClick = (event: {
        syntheticEvent: React.SyntheticEvent<Element, Event>;
        title?: string | undefined;
        item?: any;
    }) => {
        setEventLog(state => [`Item click: ${JSON.stringify(event.title)}`, ...state]);
        setOpen(false);
    };

    return (
      <>
        <Button onClick={openHandler}>
          OPEN ACTION SHEET
        </Button>
        <ActionSheet
          expand={open}
          title={title}
          items={items}
          onClose={handleOverlayClick}
          onItemSelect={handleItemClick}
            />
        <div className='example-config'>
          <h5>Event log</h5>
          <ul className='event-log'>
            {eventLog.length > 0 && eventLog.map((log, i) => <li key={i}>{log}</li>)}
          </ul>
        </div>
      </>
    );
};

export default App;
