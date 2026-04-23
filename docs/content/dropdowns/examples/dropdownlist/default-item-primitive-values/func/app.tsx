import * as React from 'react';
import { DropDownList } from '@progress/kendo-react-dropdowns';
import { Label } from '@progress/kendo-react-labels';

const App = () => {
    const movieGenres: string[] = [
        'Action',
        'Comedy',
        'Drama',
        'Horror',
        'Sci-Fi',
        'Fantasy',
        'Thriller',
        'Mystery',
        'Romance',
        'Documentary',
        'Animation'
    ];
    return (
        <div>
            <DropDownList id="genre" style={{ width: '300px' }} data={movieGenres} defaultItem="Select genre..." />
        </div>
    );
};

export default App;
