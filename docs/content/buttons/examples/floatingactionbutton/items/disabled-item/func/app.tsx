import * as React from 'react';

import { FloatingActionButton } from '@progress/kendo-react-buttons';
import { shareIcon, userIcon } from '@progress/kendo-svg-icons';
import { SVGIcon } from '@progress/kendo-react-common';

interface Item {
    svgIcon: SVGIcon;
    text: string;
    disabled?: boolean;
}

const items: Item[] = [
    { svgIcon: userIcon, text: 'Adam' },
    { svgIcon: userIcon, text: 'Ellie', disabled: true },
    { svgIcon: userIcon, text: 'Paul' }
];

const App = () => {
    return (
        <div className="example">
            <FloatingActionButton svgIcon={shareIcon} items={items} />
        </div>
    );
};

export default App;
