import React, { useState } from 'react';
import { TimePicker } from '@progress/kendo-react-dateinputs';
import { Button } from '@progress/kendo-react-buttons';

const App = () => {
    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow(!show);
    };

    return (
        <div className="row">
            <div className="col-xs-12 col-md-6 example-col">
                <p>
                    Controlled TimePicker: <Button onClick={handleClick}>Toggle</Button>
                </p>
                <TimePicker show={show} />
                &nbsp;
            </div>
            <div className="col-xs-12 col-md-6 example-col">
                <p>Always shown</p>
                <TimePicker show={true} />
                &nbsp;
            </div>
        </div>
    );
};

export default App;
