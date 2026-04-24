import * as React from 'react';

import { SvgIcon, IconThemeColor } from '@progress/kendo-react-common';

import { paletteIcon } from '@progress/kendo-svg-icons';

const themeColors: IconThemeColor[] = [
    'inherit',
    'primary',
    'secondary',
    'tertiary',
    'info',
    'success',
    'warning',
    'error',
    'dark',
    'light',
    'inverse'
];

const App = () => {
    return (
        <div>
            <div className="wrap">
                {themeColors.map((color: IconThemeColor, index) => {
                    return (
                        <span key={index} className="k-d-inline-flex k-flex-col k-align-items-center">
                            <span className="title">{color.toUpperCase()}</span>
                            <SvgIcon icon={paletteIcon} themeColor={color} />
                        </span>
                    );
                })}
            </div>
            <style>
                {`
                .title {
                    color: #6c757d;
                    padding: 6px 15px;
                }
                .wrap {
                    margin-top: 15px;
                    text-align: center;
                }`}
            </style>
        </div>
    );
};

export default App;
