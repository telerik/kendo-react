import * as React from 'react';

import { Icon, IconThemeColor } from '@progress/kendo-react-common';

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
        <React.Fragment>
            <link rel="stylesheet" href="https://unpkg.com/@progress/kendo-font-icons/dist/index.css" />
            <div className="wrap">
                {themeColors.map((color: IconThemeColor, index) => {
                    return (
                        <span key={index} className="k-d-inline-flex k-flex-col k-align-items-center">
                            <span className="title">{color.toUpperCase()}</span>
                            <Icon name="palette" themeColor={color} />
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
        </React.Fragment>
    );
};

export default App;
