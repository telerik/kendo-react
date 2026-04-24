import * as React from 'react';

import { FloatingActionButton } from '@progress/kendo-react-buttons';
import { cancelIcon, gearIcon, pencilIcon, plusIcon, SVGIcon } from '@progress/kendo-svg-icons';

interface Item {
    svgIcon: SVGIcon;
    text: string;
}

const items: Item[] = [
    { svgIcon: plusIcon, text: 'Create' },
    { svgIcon: pencilIcon, text: 'Edit' },
    { svgIcon: cancelIcon, text: 'Delete' }
];

const App = () => {
    return (
        <div className="example">
            <FloatingActionButton svgIcon={gearIcon} items={items} />
        </div>
    );
};

export default App;
