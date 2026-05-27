import * as React from 'react';

import { FloatingActionButton } from '@progress/kendo-react-buttons';
import { facebookIcon, pinterestIcon, shareIcon, xLogoIcon } from '@progress/kendo-svg-icons';
import { SVGIcon } from '@progress/kendo-react-common';

interface Item {
    svgIcon: SVGIcon;
    text: string;
    disabled?: boolean;
}

const items: Item[] = [
    {
        text: 'Twitter',
        svgIcon: xLogoIcon
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
            <FloatingActionButton
                popupSettings={{ animate: false, popupClass: 'my-popup' }}
                svgIcon={shareIcon}
                items={items}
            />
        </div>
    );
};

export default App;
