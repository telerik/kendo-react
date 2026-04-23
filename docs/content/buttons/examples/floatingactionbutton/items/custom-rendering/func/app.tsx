import * as React from 'react';

import { FloatingActionButton, FloatingActionButtonItemProps } from '@progress/kendo-react-buttons';
import { Avatar } from '@progress/kendo-react-layout';
import { editToolsIcon } from '@progress/kendo-svg-icons';

interface Contact {
    name: string;
    image: string;
    role: string;
}

const contacts: Contact[] = [
    {
        name: 'Mallory Gillian',
        image: (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/listview/contacts/7.png',
        role: 'UX Designer'
    },
    {
        name: 'Mia Coldwell',
        image: (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/listview/contacts/4.png',
        role: 'Senior Director'
    },
    {
        name: 'Darrel Solis',
        image: (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/listview/contacts/1.png',
        role: 'Product Manager'
    }
];

const App = () => {
    return (
        <div className="example">
            <FloatingActionButton
                svgIcon={editToolsIcon}
                text={'Compose New'}
                themeColor={'info'}
                items={contacts}
                item={CustomItem}
                popupSettings={{ animate: false, popupClass: 'contacts-list' }}
            />
            <style>{`
            .contacts-list li.k-fab-item {
                margin-bottom: 0;
                padding: 0;
                border: 1px solid #f1f1f1;
            }
            .contacts-list .k-fab-items {
                padding: 0;
                width: 145px;
            }
            .contact-item {
                padding: 8px 10px;
                width: 100%;
                display: flex;
                align-items: center;
            }
            .contact-details {
                margin-left: 8px;
                display: flex;
                flex-direction: column;
                line-height: initial;
            }
            .contact-role {
                font-size: 10px;
                color: #0058e9;
            }`}</style>
        </div>
    );
};

const CustomItem = (props: FloatingActionButtonItemProps) => {
    return (
        <span className="contact-item">
            <Avatar type="image">
                <img src={props.item.image} alt="KendoReact Buttons Contacts Image" />
            </Avatar>
            <span className="contact-details">
                <span className="contact-name">{props.item.name}</span>
                <span className="contact-role">{props.item.role}</span>
            </span>
        </span>
    );
};

export default App;
