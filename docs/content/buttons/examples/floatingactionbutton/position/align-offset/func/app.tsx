import * as React from 'react';

import { FloatingActionButton } from '@progress/kendo-react-buttons';
import { NumericTextBox, NumericTextBoxChangeEvent } from '@progress/kendo-react-inputs';
import { homeIcon } from '@progress/kendo-svg-icons';

const App = () => {
    const [xValue, setXValue] = React.useState<number>(16);
    const [yValue, setYValue] = React.useState<number>(16);

    const handleXChange = (e: NumericTextBoxChangeEvent) => {
        setXValue(e.value || 0);
    };

    const handleYChange = (e: NumericTextBoxChangeEvent) => {
        setYValue(e.value || 0);
    };

    return (
        <div className="example">
            <div className="row">
                <div className="col-6">
                    <p>Horizontal offset</p>
                    <NumericTextBox value={xValue} onChange={handleXChange} />
                </div>
                <div className="col-6">
                    <p>Vertical offset</p>
                    <NumericTextBox value={yValue} onChange={handleYChange} />
                </div>
            </div>

            <FloatingActionButton alignOffset={{ x: xValue, y: yValue }} svgIcon={homeIcon} />
        </div>
    );
};

export default App;
