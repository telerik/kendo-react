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
    const [position, setPosition] = React.useState<boolean>(true);
    const [selectedId, setSelectedId] = React.useState<number>(items.findIndex((x) => x.selected === true));

    let positionMode: 'end' | 'start' | undefined = position ? 'start' : 'end';

    const handleClick = () => {
        setExpanded((prevState) => !prevState);
    };

    const handleChange = () => {
        setPosition((prevState) => !prevState);
    };

    const handleSelect = (ev: DrawerSelectEvent) => {
        setSelectedId(ev.itemIndex);
        setExpanded(false);
    };

    return (
        <div>
            <Drawer
                expanded={expanded}
                position={positionMode}
                mode={'push'}
                items={items.map((item, index) => ({ ...item, selected: index === selectedId }))}
                onSelect={handleSelect}
            >
                <DrawerContent>
                    <div className="k-form">
                        <div className="k-form-field">
                            <Button onClick={handleClick}>Toggle the Drawer state</Button>
                        </div>
                        <div className="k-form-field">
                            <Label editorId={'switchPosition'}>Switch Drawer position&nbsp;</Label>
                            <Switch checked={position} onChange={handleChange} id={'switchPosition'} />
                        </div>
                        <div className="k-form-field">
                            <p>
                                Current drawer position is <b>{positionMode}</b>
                            </p>
                        </div>
                    </div>
                </DrawerContent>
            </Drawer>
        </div>
    );
};

export default App;
