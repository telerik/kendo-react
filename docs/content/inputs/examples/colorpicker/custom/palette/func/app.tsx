import * as React from 'react';

import { ColorPicker } from '@progress/kendo-react-inputs';

const App = () => {
    const selectedColor = 'rgba(237, 126, 50, 1)';
    const paletteSettings = {
        palette: [
            '#f0d0c9',
            '#e2a293',
            '#d4735e',
            '#65281a',
            '#eddfda',
            '#dcc0b6',
            '#cba092',
            '#7b4b3a',
            '#fcecd5',
            '#f9d9ab',
            '#f6c781',
            '#c87d0e',
            '#e1dca5',
            '#d0c974',
            '#a29a36',
            '#514d1b',
            '#c6d9f0',
            '#8db3e2',
            '#548dd4',
            '#17365d'
        ],
        columns: 5,
        tileSize: 30
    };

    return (
        <div>
            <p>Select color:</p>
            <ColorPicker views={['palette']} defaultValue={selectedColor} paletteSettings={paletteSettings} />
        </div>
    );
};

export default App;
