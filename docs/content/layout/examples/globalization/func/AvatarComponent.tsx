import * as React from 'react';
import { Avatar } from '@progress/kendo-react-layout';
import { userIcon } from '@progress/kendo-svg-icons';
import { SvgIcon } from '@progress/kendo-react-common';

const firstContactImage = (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/dropdowns/contacts/RICSU.jpg';
const secondContactImage = 'https://demos.telerik.com/kendo-ui/content/web/Customers/GOURL.jpg';

const contactImages = [
    { avatar: firstContactImage, name: 'Michael Holz', position: 'Manager' },
    { avatar: secondContactImage, name: 'André Stewart', position: 'Product Manager' }
];

const contactInitials = [
    { avatar: 'JS', name: 'Jason Smith', position: 'UX Designer' },
    { avatar: 'GP', name: 'George Porter', position: 'Software Engineer' }
];

const AvatarComponent = (props: any) => {
    const { dir } = props;
    return (
        <div
            style={{
                width: 280,
                margin: 'auto',
                padding: '4px 10px',
                boxShadow:
                    '0 1px 5px 0 rgba(0, 0, 0, 0.26), 0 2px 2px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.08)'
            }}
        >
            <div className="contact-list" style={{ textAlign: 'center', padding: 4, fontSize: 20 }}>
                Contacts
            </div>
            <div style={{ padding: '8px 14px', marginBottom: '4px', boxShadow: '0 1px 2px #ccc' }}>
                {contactInitials.map((contact, index) => {
                    return (
                        <div className="k-hbox" key={index}>
                            <Avatar rounded={'full'} type="icon">
                                {contact.avatar}
                            </Avatar>
                            <div style={dir === 'rtl' ? { marginRight: 10 } : { marginLeft: 10 }}>
                                <h2 style={{ fontSize: '1.3em', fontWeight: 'normal', margin: 0 }}>{contact.name}</h2>
                                <p style={{ margin: 0, fontSize: '0.8em' }}>{contact.position}</p>
                            </div>
                        </div>
                    );
                })}
                {contactImages.map((contact, index) => {
                    return (
                        <div className="k-hbox" key={index}>
                            <Avatar rounded={'full'} type="image">
                                <img src={contact.avatar} alt="KendoReact Avatar Contact Image" />
                            </Avatar>
                            <div style={dir === 'rtl' ? { marginRight: 10 } : { marginLeft: 10 }}>
                                <h2 style={{ fontSize: '1.3em', fontWeight: 'normal', margin: 0 }}>{contact.name}</h2>
                                <p style={{ margin: 0, fontSize: '0.8em' }}>{contact.position}</p>
                            </div>
                        </div>
                    );
                })}
                <div className="k-hbox">
                    <Avatar rounded={'full'} type="icon">
                        <SvgIcon icon={userIcon} />
                    </Avatar>
                    <div style={dir === 'rtl' ? { marginRight: 10 } : { marginLeft: 10 }}>
                        <h2 style={{ fontSize: '1.3em', fontWeight: 'normal', margin: 0 }}>Unknown</h2>
                        <p style={{ margin: 0, fontSize: '0.8em' }}>Not specified</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AvatarComponent;
