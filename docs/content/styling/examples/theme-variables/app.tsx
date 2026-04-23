import React, { useState } from 'react';
import { Button } from '@progress/kendo-react-buttons';
import { Checkbox } from '@progress/kendo-react-inputs';
const App = () => {
    const [renderCustomVariables, setRenderCustomVariables] = useState(true);
    const onChange = (e) => setRenderCustomVariables(e.target.value);

    return (
        <div>
            {renderCustomVariables && (
                <style>
                    {`:root {
                        --kendo-color-base: #ddf;
                        --kendo-color-base-hover: #eef;
                        --kendo-color-base-active: #ccf;
                        --kendo-color-on-base: #00c;
                        --kendo-color-primary: #c00;
                        --kendo-color-primary-hover: #c66;
                        --kendo-color-primary-active: #900;
                        --kendo-color-on-primary: #fee;
                        --kendo-border-radius-md: 1rem;
                        --kendo-font-size: 18px;
                    }`}
                </style>
            )}
            <Checkbox checked={renderCustomVariables} onChange={onChange} label="Apply Custom Theme Variables" />
            <br />
            <div className="k-d-flex k-gap-2">
                <Button>Base Button</Button>
                <Button themeColor="primary">Primary Button</Button>
            </div>
        </div>
    );
};
export default App;
