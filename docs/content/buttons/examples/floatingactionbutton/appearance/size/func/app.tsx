import * as React from 'react';

import { FloatingActionButton, FloatingActionButtonSize } from '@progress/kendo-react-buttons';

import './styles.css';
import { heartIcon } from '@progress/kendo-svg-icons';

const sizes: Array<FloatingActionButtonSize> = ['small', 'medium', 'large', null];

const App = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            {sizes.map((size, index) => {
                return (
                    <span
                        className="k-d-inline-flex k-flex-col k-align-items-center"
                        style={{ minWidth: 105 }}
                        key={index}
                    >
                        <span style={{ color: '#6c757d', padding: 15 }}>{size ? size.toUpperCase() : 'NULL'}</span>
                        <FloatingActionButton size={size} svgIcon={heartIcon} className="static-fab" />
                    </span>
                );
            })}
        </div>
    );
};

export default App;
