import * as React from 'react';
import { AutoComplete, AutoCompleteChangeEvent } from '@progress/kendo-react-dropdowns';
import { Label } from '@progress/kendo-react-labels';
import { filterBy, FilterDescriptor } from '@progress/kendo-data-query';

const movies: string[] = [
    'The Godfather',
    'The Shawshank Redemption',
    'Pulp Fiction',
    'The Dark Knight',
    'Forrest Gump',
    'Inception',
    'The Matrix',
    'Fight Club',
    'Goodfellas',
    'The Lord of the Rings: The Fellowship of the Ring',
    'The Lord of the Rings: The Two Towers',
    'The Lord of the Rings: The Return of the King',
    'Star Wars: A New Hope',
    'Star Wars: The Empire Strikes Back',
    'Star Wars: Return of the Jedi',
    'Interstellar',
    'Schindler’s List',
    'Gladiator',
    'The Silence of the Lambs',
    'Titanic',
    'The Green Mile',
    'Saving Private Ryan',
    'Django Unchained',
    'The Departed',
    'The Prestige',
    'The Lion King',
    'Spirited Away',
    'Avengers: Endgame',
    'Avatar',
    'Parasite',
    'Joker',
    'The Truman Show',
    'Back to the Future',
    'Jurassic Park',
    'The Grand Budapest Hotel',
    'No Country for Old Men',
    'The Big Lebowski',
    'Se7en',
    'Whiplash',
    'A Clockwork Orange',
    'Casablanca',
    '12 Angry Men',
    'Requiem for a Dream',
    'Amélie',
    'The Revenant',
    'Blade Runner 2049',
    'The Wolf of Wall Street',
    'Black Panther',
    'The Social Network',
    'La La Land'
];

const App = () => {
    const [state, setState] = React.useState({
        data: movies,
        value: '',
        opened: false
    });

    const onChange = (event: AutoCompleteChangeEvent) => {
        const value = event.target.value;

        const filterData = (value: string) => {
            const data = movies;
            const filter: FilterDescriptor = {
                value: value,
                operator: 'contains',
                ignoreCase: true
            };
            return filterBy(data, filter);
        };

        const stateData =
            value.length < 3 ? { data: movies, opened: false } : { data: filterData(value), opened: true };

        const eventType = event.nativeEvent.type;
        const nativeEvent: any = event.nativeEvent;
        const valueSelected = eventType === 'click' || (eventType === 'keydown' && nativeEvent.keyCode === 13);

        if (valueSelected && stateData.data.includes(value)) {
            stateData.opened = false;
        }

        setState({
            value: value,
            ...stateData
        });
    };

    return (
        <div>
            <Label editorId="movie">Select movie</Label>
            <br />
            <AutoComplete
                id="movie"
                data={state.data}
                value={state.value}
                onChange={onChange}
                opened={state.opened}
                placeholder="Enter at least 3 characters"
                style={{ width: '300px' }}
            />
        </div>
    );
};

export default App;
