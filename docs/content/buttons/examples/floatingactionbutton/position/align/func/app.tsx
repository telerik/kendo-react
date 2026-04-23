import * as React from 'react';

import { FloatingActionButton, FloatingActionButtonAlign } from '@progress/kendo-react-buttons';
import { cancelIcon, editToolsIcon, plusIcon, SVGIcon, userIcon } from '@progress/kendo-svg-icons';
interface Item {
    svgIcon: SVGIcon;
    text: string;
}

const alignments: Array<FloatingActionButtonAlign> = [
    { vertical: 'top', horizontal: 'start' },
    { vertical: 'top', horizontal: 'center' },
    { vertical: 'top', horizontal: 'end' },
    { vertical: 'middle', horizontal: 'start' },
    { vertical: 'middle', horizontal: 'end' },
    { vertical: 'bottom', horizontal: 'start' },
    { vertical: 'bottom', horizontal: 'center' },
    { vertical: 'bottom', horizontal: 'end' }
];

const items: Item[] = [
    { svgIcon: plusIcon, text: 'Create' },
    { svgIcon: editToolsIcon, text: 'Edit' },
    { svgIcon: cancelIcon, text: 'Delete' }
];

const App = () => {
    return (
        <div className="example">
            {alignments.map((align, index) => {
                return <FloatingActionButton align={align} svgIcon={userIcon} items={items} key={index} />;
            })}
        </div>
    );
};

export default App;
