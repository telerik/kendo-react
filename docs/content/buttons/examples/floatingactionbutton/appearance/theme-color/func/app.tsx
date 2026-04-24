import * as React from 'react';

import { FloatingActionButton, FloatingActionButtonThemeColor } from '@progress/kendo-react-buttons';

import './styles.css';
import { checkIcon } from '@progress/kendo-svg-icons';

const themeColors: Array<FloatingActionButtonThemeColor> = [
    'primary',
    'secondary',
    'tertiary',
    'info',
    'success',
    'error',
    'warning',
    'dark',
    'light',
    'inverse',
    null
];

const App = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            {themeColors.map((color, index) => {
                return (
                    <span
                        className="k-d-inline-flex k-flex-col k-align-items-center"
                        style={{ minWidth: 105 }}
                        key={index}
                    >
                        <span style={{ color: '#6c757d', padding: 15 }}>{color ? color.toUpperCase() : 'NULL'}</span>
                        <FloatingActionButton themeColor={color} svgIcon={checkIcon} className="static-fab" />
                    </span>
                );
            })}
        </div>
    );
};

export default App;
