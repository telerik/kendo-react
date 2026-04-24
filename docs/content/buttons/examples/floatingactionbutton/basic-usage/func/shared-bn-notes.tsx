import * as React from 'react';

import { FloatingActionButton, FloatingActionButtonItemProps } from '@progress/kendo-react-buttons';
import { Avatar } from '@progress/kendo-react-layout';
import { TextArea } from '@progress/kendo-react-inputs';
import { cancelIcon, shareIcon } from '@progress/kendo-svg-icons';

const contacts = [
    {
        name: 'Mallory Gillian',
        image: (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/listview/contacts/7.png'
    },
    {
        name: 'Mia Coldwell',
        image: (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/listview/contacts/4.png'
    },
    {
        name: 'Darrel Solis',
        image: (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/listview/contacts/1.png'
    }
];

export const NotesComponent = () => {
    const [open, setOpen] = React.useState(false);
    const text = 'I renamed my iPod The Titanic, so when I plug in it, it says "The Titanic is syncing."';

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div className="notes-wrap k-block">
            <h2 className="title">Notes: </h2>
            <TextArea value={text} rows={4} />
            <FloatingActionButton
                svgIcon={open ? cancelIcon : shareIcon}
                items={contacts}
                item={CustomItem}
                positionMode="absolute"
                modal={true}
                onOpen={handleOpen}
                onClose={handleClose}
            />
        </div>
    );
};

const CustomItem = (props: FloatingActionButtonItemProps) => {
    return (
        <React.Fragment>
            <span className="k-fab-item-text">{props.item.name}</span>
            <Avatar type="image" style={{ cursor: 'pointer' }}>
                <img src={props.item.image} alt="KendoReact Buttons Contacts image" />
            </Avatar>
        </React.Fragment>
    );
};
