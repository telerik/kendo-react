import * as React from 'react';

import { ColorPicker } from '@progress/kendo-react-inputs';

const App = () => {
    const [foregroundColor, setForegroundColor] = React.useState<string>('rgba(49,118,122,1)');
    const [backgroundColor, setBackgroundColor] = React.useState<string>('rgba(255,255,255,1)');

    const handleForegroundChange = (event) => {
        setForegroundColor(event.value);
    };

    const handleBackgroundChange = (event) => {
        setBackgroundColor(event.value);
    };

    return (
        <div className="row">
            <div className="col-xs-12 col-md-6 example-col">
                <p>Foreground Color</p>
                <ColorPicker
                    views={['gradient']}
                    value={foregroundColor}
                    onChange={handleForegroundChange}
                    gradientSettings={{ backgroundColor: backgroundColor }}
                />
            </div>
            <div className="col-xs-12 col-md-6 example-col">
                <p>Background Color</p>
                <ColorPicker
                    views={['gradient']}
                    value={backgroundColor}
                    onChange={handleBackgroundChange}
                    gradientSettings={{ opacity: false }}
                />
            </div>
        </div>
    );
};
export default App;
