import * as React from 'react';

import { Drawer, DrawerContent, DrawerSelectEvent } from '@progress/kendo-react-layout';
import { inboxIcon, calendarIcon, heartIcon, linkIcon, bellIcon } from '@progress/kendo-svg-icons';
import { Button } from "@progress/kendo-react-buttons";
import './styles.css';

const items = [
    { text: 'Inbox', svgIcon: inboxIcon, selected: true },
    { text: 'Calendar', svgIcon: calendarIcon },
    { text: 'Attachments', svgIcon: linkIcon },
    { text: 'Favourites', svgIcon: heartIcon }
];

const App = () => {
    const [expanded, setExpanded] = React.useState<boolean>(true);
    const [selectedId, setSelectedId] = React.useState<number>(items.findIndex(x => x.selected === true));

    const handleClick = () => { setExpanded(prevState => !prevState); };

    const handleSelect = (ev: DrawerSelectEvent) => {
        setSelectedId(ev.itemIndex);
        setExpanded(false);
    };

    return (
      <Drawer
        expanded={expanded}
        position='start'
        mode='push'
        items={items.map(
                (item, index) => ({ ...item, selected: index === selectedId }))}
        onSelect={handleSelect}
        >
        <DrawerContent>
          <Button onClick={handleClick}>Toggle the drawer state</Button>
        </DrawerContent>
      </Drawer>
    );
};

export default App;
