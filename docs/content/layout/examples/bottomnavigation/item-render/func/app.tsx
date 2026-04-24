import * as React from 'react';

import { BottomNavigation, BottomNavigationItemProps } from '@progress/kendo-react-layout';
import { heartIcon, homeIcon, searchIcon, userIcon } from '@progress/kendo-svg-icons';
import { Button } from '@progress/kendo-react-buttons';

const items = [
    { svgIcon: homeIcon, text: 'Home' },
    { svgIcon: searchIcon, text: 'Search' },
    { svgIcon: heartIcon, text: 'Favorites' },
    { svgIcon: userIcon, text: 'Profile' }
];

const buttonItemRender = (element: React.ReactElement<HTMLSpanElement>, itemProps: BottomNavigationItemProps) => {
    return (
        <Button {...itemProps} className="k-bottom-nav-item">
            {element.props.children as any}
        </Button>
    );
};

const anchorItemRender = (element: React.ReactElement<HTMLSpanElement>, itemProps: BottomNavigationItemProps) => {
    return (
        <a {...itemProps} onClick={(e) => e.preventDefault()} href="#" className="k-bottom-nav-item">
            {element.props.children as any}
        </a>
    );
};

const App = () => {
    return (
        <div>
            <p>Bottom Navigation with BUTTON elements</p>
            <BottomNavigation
                items={items}
                fillMode={'solid'}
                themeColor={'light'}
                itemRender={buttonItemRender}
                positionMode={'sticky'}
            />
            <br />
            <p>Bottom Navigation with ANCHOR elements</p>
            <BottomNavigation
                items={items}
                fillMode={'solid'}
                themeColor={'light'}
                itemRender={anchorItemRender}
                positionMode={'sticky'}
            />
        </div>
    );
};

export default App;
