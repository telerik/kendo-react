import * as React from 'react';

import { Avatar } from '@progress/kendo-react-layout';

const themeColors: Array<
    'primary' | 'secondary' | 'tertiary' | 'info' | 'success' | 'error' | 'warning' | 'dark' | 'light' | 'inverse'
> = ['primary', 'secondary', 'tertiary', 'info', 'success', 'error', 'warning', 'dark', 'light', 'inverse'];

const App = () => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <h2 style={{ marginBottom: '20px' }}>Avatar Theme Colors</h2>
            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '20px',
                    padding: '20px',
                    border: '1px solid #ccc',
                    borderRadius: '10px',
                    boxShadow: '0px 4px 10px rgba(0,0,0,0.1)'
                }}
            >
                {themeColors.map((color, index) => (
                    <div key={index} style={{ textAlign: 'center' }}>
                        <Avatar
                            themeColor={color}
                            type="text"
                            style={{ margin: 10, padding: '10px', fontSize: '1.2em' }}
                        >
                            {color.substr(0, 2).toUpperCase()}
                        </Avatar>
                        <div style={{ fontSize: '0.9em', fontWeight: 'bold', color: '#555' }}>
                            {color.charAt(0).toUpperCase() + color.slice(1)}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App;
