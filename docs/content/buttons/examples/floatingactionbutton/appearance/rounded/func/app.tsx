import * as React from 'react';

import { FloatingActionButton, FloatingActionButtonRounded } from '@progress/kendo-react-buttons';

import './styles.css';
import { checkIcon } from '@progress/kendo-svg-icons';

const roundedValues: Array<FloatingActionButtonRounded> = ['small', 'medium', 'large', 'full', 'none', null];

const App = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            {roundedValues.map((rounded, index) => {
                return (
                    <span
                        className="k-d-inline-flex k-flex-col k-align-items-center"
                        style={{ minWidth: 105 }}
                        key={index}
                    >
                        <span style={{ color: '#6c757d', padding: 15 }}>
                            {rounded ? rounded.toUpperCase() : 'NULL'}
                        </span>
                        <FloatingActionButton rounded={rounded} svgIcon={checkIcon} className="static-fab" />
                        <span style={{ padding: 15 }} />
                        <FloatingActionButton rounded={rounded} svgIcon={checkIcon} text="OK" className="static-fab" />
                        <span style={{ padding: 15 }} />
                        <FloatingActionButton rounded={rounded} text="OK" className="static-fab" />
                    </span>
                );
            })}
        </div>
    );
};

export default App;
