import * as React from 'react';
import { Avatar } from '@progress/kendo-react-layout';
import { SvgIcon } from '@progress/kendo-react-common';
import { userIcon } from '@progress/kendo-svg-icons';
import './styles.css';

interface Contact {
    name: string;
    position: string;
    avatar: string;
    avatarType: 'text' | 'image' | 'icon';
}

const contacts: Contact[] = [
    {
        name: 'Jason Smith',
        position: 'UX Designer',
        avatar: 'JS',
        avatarType: 'text'
    },
    {
        name: 'George Porter',
        position: 'Software Engineer',
        avatar: 'GP',
        avatarType: 'text'
    },
    {
        name: 'Michael Holz',
        position: 'Manager',
        avatar: 'https://demos.telerik.com/kendo-react-ui/assets/dropdowns/contacts/RICSU.jpg',
        avatarType: 'image'
    },
    {
        name: 'André Stewart',
        position: 'Product Manager',
        avatar: 'https://demos.telerik.com/kendo-react-ui/assets/dropdowns/contacts/SPLIR.jpg',
        avatarType: 'image'
    },
    {
        name: 'Unknown',
        position: 'Not specified',
        avatar: '',
        avatarType: 'icon'
    }
];

const App = () => {
    return (
        <div className="contact-list-wrapper">
            <div className="contact-list-title">Contacts</div>
            {contacts.map((contact) => (
                <div key={contact.name} className="contact-item">
                    {contact.avatarType === 'text' && (
                        <Avatar type="text">
                            <span>{contact.avatar}</span>
                        </Avatar>
                    )}
                    {contact.avatarType === 'image' && (
                        <Avatar type="image">
                            <img src={contact.avatar} alt={contact.name} />
                        </Avatar>
                    )}
                    {contact.avatarType === 'icon' && (
                        <Avatar type="icon">
                            <SvgIcon icon={userIcon} />
                        </Avatar>
                    )}
                    <div className="contact-info">
                        <h2 className="contact-name">{contact.name}</h2>
                        <p className="contact-position">{contact.position}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default App;
