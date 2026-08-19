import * as React from 'react';

import { Loader, LoaderType, LoaderThemeColor } from '@progress/kendo-react-indicators';

const loaders: { type: LoaderType; themeColor: LoaderThemeColor; label: string }[] = [
    { type: 'pulsing', themeColor: 'primary', label: 'Pulsing' },
    { type: 'infinite-spinner', themeColor: 'secondary', label: 'Infinite Spinner' },
    { type: 'converging-spinner', themeColor: 'info', label: 'Converging Spinner' }
];

const App = () => (
    <div className="example">
        <div className="example-wrap">
            <div style={{ display: 'flex', alignItems: 'center', margin: '0 -10px' }}>
                {loaders.map((loader) => (
                    <div key={loader.type} style={{ flex: '0 0 33%', padding: '10px' }}>
                        <div style={{ marginBottom: 10, textAlign: 'center' }}>{loader.label}</div>
                        <div
                            className="k-block"
                            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 80 }}
                        >
                            <Loader type={loader.type} themeColor={loader.themeColor} size="medium" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default App;
