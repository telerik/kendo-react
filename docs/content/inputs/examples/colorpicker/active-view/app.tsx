import * as React from 'react';

import { ColorPicker } from '@progress/kendo-react-inputs';

const App = () => {
    return (
        <>
            <div className="example-wrapper">
                <div className="wrapper">
                    <p>Gradient</p>
                    <div>
                        <ColorPicker views={['gradient', 'palette']} defaultValue="#325693" />
                    </div>
                </div>
                <div className="wrapper">
                    <p>Palette</p>
                    <div>
                        <ColorPicker views={['gradient', 'palette']} activeView="palette" defaultValue="#325693" />
                    </div>
                </div>
            </div>
            <style>{`
                .example-wrapper {
                    display: flex;
                    justify-content: space-evenly;
                }
                .wrapper {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 150px;
                }`}</style>
        </>
    );
};

export default App;
