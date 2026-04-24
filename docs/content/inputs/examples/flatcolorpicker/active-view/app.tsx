import * as React from 'react';

import { FlatColorPicker } from '@progress/kendo-react-inputs';

const App = () => {
    return (
        <>
            <div className="example-wrapper">
                <div className="wrapper">
                    <p>Gradient</p>
                    <div>
                        <FlatColorPicker views={['gradient', 'palette']} showPreview={false} />
                    </div>
                </div>
                <div className="wrapper">
                    <p>Palette</p>
                    <div>
                        <FlatColorPicker views={['gradient', 'palette']} activeView="palette" showPreview={false} />
                    </div>
                </div>
            </div>
            <style>
                {`
                .example-wrapper {
                    display: grid;
                    grid-template-columns: auto auto;
                }
                .wrapper {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin-bottom: 30px;
                }`}
            </style>
        </>
    );
};

export default App;
