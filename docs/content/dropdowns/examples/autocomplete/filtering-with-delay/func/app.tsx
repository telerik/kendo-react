import * as React from 'react';
import { AutoComplete, AutoCompleteChangeEvent } from '@progress/kendo-react-dropdowns';
import { Label } from '@progress/kendo-react-labels';
import { filterBy, FilterDescriptor } from '@progress/kendo-data-query';

const books: string[] = [
    '1984',
    'Pride and Prejudice',
    'To Kill a Mockingbird',
    'The Great Gatsby',
    'Moby-Dick',
    'War and Peace',
    'The Catcher in the Rye',
    'Brave New World',
    'The Lord of the Rings',
    'Crime and Punishment',
    'Jane Eyre',
    'Wuthering Heights',
    'The Hobbit',
    'Anna Karenina',
    'Fahrenheit 451',
    'Don Quixote',
    'Les Misérables',
    'Dracula',
    'Frankenstein',
    'The Picture of Dorian Gray',
    'The Brothers Karamazov',
    'The Count of Monte Cristo',
    'A Tale of Two Cities',
    'The Alchemist',
    'Slaughterhouse-Five',
    'One Hundred Years of Solitude',
    'The Grapes of Wrath',
    'The Road',
    'Catch-22',
    'Ulysses',
    'The Old Man and the Sea',
    'The Divine Comedy',
    'The Stranger',
    'Alice’s Adventures in Wonderland',
    'The Little Prince',
    'The Secret Garden',
    'Charlotte’s Web',
    'Great Expectations',
    'David Copperfield',
    'Middlemarch',
    'The Scarlet Letter',
    'The Sun Also Rises',
    'Beloved',
    'Lolita',
    'Madame Bovary',
    'Gone with the Wind',
    'The Name of the Wind',
    'Dune',
    'The Hitchhiker’s Guide to the Galaxy',
    'Harry Potter and the Sorcerer’s Stone'
];

const delay = 500;

const App = () => {
    const [data, setData] = React.useState(books);
    const [loading, setLoading] = React.useState(false);
    const [value, setValue] = React.useState('');

    const timeout = React.useRef<any>(undefined);

    const onChange = (event: AutoCompleteChangeEvent) => {
        const value = event.target.value;

        const filterData = (value: string) => {
            const data = books;
            const filter: FilterDescriptor = {
                value: value,
                operator: 'startswith',
                ignoreCase: true
            };
            return filterBy(data, filter);
        };

        clearTimeout(timeout.current);

        timeout.current = setTimeout(() => {
            setData(filterData(value));
            setLoading(false);
        }, delay);

        setValue(value);
        setLoading(true);
    };

    return (
        <div>
            <Label editorId="book">Select book</Label>
            <br />
            <AutoComplete
                id="book"
                data={data}
                value={value}
                onChange={onChange}
                loading={loading}
                placeholder="e.g. The Great Gatsby"
                style={{ width: '300px' }}
            />
        </div>
    );
};

export default App;
