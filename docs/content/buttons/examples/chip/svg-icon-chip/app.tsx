import * as React from 'react';
import { Chip } from '@progress/kendo-react-buttons';
import { filterIcon, filterClearIcon, SVGIcon } from '@progress/kendo-svg-icons';

interface Items {
    text: string;
    value: string;
    svgIcon?: SVGIcon;
}

const items: Items[] = [
    {
        text: 'Filter',
        value: 'filter',
        svgIcon: filterIcon
    },
    {
        text: 'Clear filter',
        value: 'filterClear',
        svgIcon: filterClearIcon
    }
];

const App = () => {
    return (
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {items.map((person) => (
                <Chip key={person.value} text={person.text} svgIcon={person.svgIcon} />
            ))}
        </div>
    );
};

export default App;
