import * as React from 'react';
import { Drawer, DrawerContent } from '@progress/kendo-react-layout';
import { Button } from '@progress/kendo-react-buttons';
import './styles.css';
const items = [
    {
        text: 'Inbox',
        icon: 'k-i-inbox',
        selected: true,
    },
    {
        text: 'Calendar',
        icon: 'k-i-calendar',
    },
    {
        text: 'Attachments',
        icon: 'k-i-hyperlink-email',
    },
    {
        text: 'Favourites',
        icon: 'k-i-star-outline',
    },
];
const App = () => {
    const [expanded, setExpanded] = React.useState(true);
    const [selectedId, setSelectedId] = React.useState(
        items.findIndex((x) => x.selected === true)
    );
    const handleClick = () => {
        setExpanded((prevState) => !prevState);
    };
    const handleSelect = (ev) => {
        setSelectedId(ev.itemIndex);
    //setExpanded(false);
    };

    React.useEffect(() => {
        document.addEventListener('mousedown', (e) => {
            if (!document.querySelector('.k-drawer').contains(e.target)) {
                setExpanded(false);
            }
        });
    }, []);

    return (
    <Drawer
      expanded={expanded}
      position="start"
      mode="push"
      items={items.map((item, index) => ({
        ...item,
        selected: index === selectedId,
      }))}
      onSelect={handleSelect}
    >
      <DrawerContent>
        <Button
          type="button"
          onClick={handleClick}
        >
          Toggle the drawer state
        </Button>
      </DrawerContent>
    </Drawer>
    );
};
export default App;
