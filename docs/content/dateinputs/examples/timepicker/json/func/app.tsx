import * as React from 'react';
import { TimePicker, TimePickerChangeEvent } from '@progress/kendo-react-dateinputs';
import { Label } from '@progress/kendo-react-labels';

const App = () => {
    let model = JSON.parse('{ "departureTime": "2017-06-30T12:22:32Z" }');

    const [modelState, setModelState] = React.useState(model);

    const handleChange = (event: TimePickerChangeEvent) => {
        setModelState((prevState) => {
            prevState.departureTime = event.target.value;
            return {
                ...prevState
            };
        });
    };

    console.log(modelState.departureTime);

    return (
        <div>
            <div className="example-config">
                <p>Model: {JSON.stringify(modelState)}</p>
                <p>TimePicker value: {`${modelState.departureTime}`}</p>
            </div>
            <Label>
                Select Departure Time:
                <TimePicker value={new Date(modelState.departureTime)} onChange={handleChange} />
            </Label>
        </div>
    );
};

export default App;
