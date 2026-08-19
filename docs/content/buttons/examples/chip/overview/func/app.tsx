import * as React from 'react';
import { Chip } from '@progress/kendo-react-buttons';
import { AutoComplete, AutoCompleteChangeEvent } from '@progress/kendo-react-dropdowns';
import './styles.css';

interface Contact {
    label: string;
    image: string;
}

const contacts: Contact[] = [
    { label: 'Pedro Afonso', image: 'https://demos.telerik.com/kendo-react-ui/assets/dropdowns/contacts/SPLIR.jpg' },
    { label: 'Maria Shore', image: 'https://demos.telerik.com/kendo-react-ui/assets/dropdowns/contacts/ALFKI.jpg' },
    { label: 'Thomas Hardy', image: 'https://demos.telerik.com/kendo-react-ui/assets/dropdowns/contacts/RICSU.jpg' },
    { label: 'Christina Berg', image: 'https://demos.telerik.com/kendo-react-ui/assets/dropdowns/contacts/BERGS.jpg' },
    { label: 'Paula Wilson', image: 'https://demos.telerik.com/kendo-react-ui/assets/dropdowns/contacts/RATTC.jpg' }
];

const App = () => {
    const [selectedContacts, setSelectedContacts] = React.useState<Contact[]>([contacts[1]]);
    const [autocompleteValue, setAutocompleteValue] = React.useState('');

    const filteredData = contacts
        .map((c) => c.label)
        .filter((label) => label.toLowerCase().includes(autocompleteValue.toLowerCase()));

    const handleChange = (event: AutoCompleteChangeEvent) => {
        const value = event.value as string;
        setAutocompleteValue(value);

        const contactData = contacts.find((c) => c.label === value);
        if (contactData && !selectedContacts.includes(contactData)) {
            setSelectedContacts((prev) => [...prev, contactData]);
            setAutocompleteValue('');
        }
    };

    const handleRemove = (label: string) => {
        setSelectedContacts((prev) => prev.filter((c) => c.label !== label));
    };

    return (
        <div className="k-block">
            {selectedContacts.map((contact) => (
                <Chip
                    key={contact.label}
                    text={contact.label}
                    value={contact.label}
                    removable={true}
                    onRemove={() => handleRemove(contact.label)}
                    avatar={{ image: contact.image, imageAlt: contact.label, rounded: 'circle' }}
                />
            ))}
            <div className="compose-area">
                <AutoComplete
                    data={filteredData}
                    value={autocompleteValue}
                    onChange={handleChange}
                    className="contacts-input"
                    placeholder="To: Email Address*"
                />
                <textarea className="k-textarea k-input" defaultValue="Hi there! Don't miss out our dinner party!" />
            </div>
        </div>
    );
};

export default App;
