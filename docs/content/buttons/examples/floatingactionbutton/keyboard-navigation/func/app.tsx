import * as React from 'react';

import { FloatingActionButton } from '@progress/kendo-react-buttons';
import { facebookIcon, pinterestIcon, shareIcon, SVGIcon, twitterIcon } from '@progress/kendo-svg-icons';

interface Item {
    svgIcon: SVGIcon;
    text: string;
}

const items: Item[] = [
    {
        text: 'Twitter',
        svgIcon: twitterIcon
    },
    {
        text: 'Facebook',
        svgIcon: facebookIcon
    },
    {
        text: 'Pinterest',
        svgIcon: pinterestIcon
    }
];

const App = () => {
    return (
        <div className="example">
            <FloatingActionButton items={items} svgIcon={shareIcon} />
        </div>
    );
};

export default App;
