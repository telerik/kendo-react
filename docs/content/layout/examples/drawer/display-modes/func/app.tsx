import * as React from 'react';

import { Drawer, DrawerContent, DrawerSelectEvent } from '@progress/kendo-react-layout';
import { Switch } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';
import { inboxIcon, calendarIcon, heartIcon, linkIcon, bellIcon } from '@progress/kendo-svg-icons';
import { Label } from '@progress/kendo-react-labels';
import './styles.css';

const items = [
    { text: 'Inbox', svgIcon: inboxIcon, selected: true },
    { separator: true },
    { text: 'Notifications', svgIcon: bellIcon },
    { text: 'Calendar', svgIcon: calendarIcon },
    { separator: true },
    { text: 'Attachments', svgIcon: linkIcon },
    { text: 'Favourites', svgIcon: heartIcon }
];

const App = () => {
    const [expanded, setExpanded] = React.useState<boolean>(true);
    const [mode, setMode] = React.useState<boolean>(true);
    const [selectedId, setSelectedId] = React.useState<number>(items.findIndex((x) => x.selected === true));

    let expandMode: 'overlay' | 'push' | undefined = mode ? 'overlay' : 'push';

    const handleClick = () => {
        setExpanded((prevState) => !prevState);
    };

    const handleChange = () => {
        setMode((prevState) => !prevState);
    };

    const handleSelect = (ev: DrawerSelectEvent) => {
        setSelectedId(ev.itemIndex);
        setExpanded(false);
    };

    return (
        <div>
            <Drawer
                expanded={expanded}
                position={'start'}
                mode={expandMode}
                animation={{ duration: 400 }}
                items={items.map((item, index) => ({ ...item, selected: index === selectedId }))}
                onOverlayClick={handleClick}
                onSelect={handleSelect}
            >
                <DrawerContent>
                    <div className="k-form">
                        <div className="k-form-field">
                            <Button onClick={handleClick}>Toggle the Drawer state</Button>
                        </div>
                        <div className="k-form-field">
                            <Label editorId={'expandedSwitch'}>Switch Drawer expand mode &nbsp;</Label>
                            <Switch checked={mode} onChange={handleChange} id={'expandedSwitch'} />
                        </div>
                        <div className="k-form-field">
                            <p>
                                Current drawer mode is <b>{expandMode}</b>
                            </p>
                        </div>
                    </div>
                </DrawerContent>
            </Drawer>
        </div>
    );
};

export default App;
