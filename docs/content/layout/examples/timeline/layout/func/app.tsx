import * as React from 'react';
import { Timeline, sortEventList } from '@progress/kendo-react-layout';
import { Label } from '@progress/kendo-react-labels';

import { events } from './events';
import { RadioButton } from '@progress/kendo-react-inputs';

const sortedEvents = sortEventList(events);

const App = () => {
    const [alterMode, setAlterMode] = React.useState(false);

    const handleExpandModeChange = (e) => {
        const selectedValue = e.value;
        const alterModeValue = selectedValue === 'single';
        setAlterMode(alterModeValue);
    };

    return (
        <div className="app-wrapper">
            <div className="example-config row">
                <div className="col-sm-4">
                    <h5>Layout modes:</h5>
                    <RadioButton
                        id="multiple"
                        name="expandModeGroup"
                        value="multiple"
                        checked={alterMode === false}
                        onChange={handleExpandModeChange}
                        label="Render the events on one side of the axis"
                    />
                    <br />
                    <RadioButton
                        id="single"
                        name="expandModeGroup"
                        value="single"
                        checked={alterMode === true}
                        onChange={handleExpandModeChange}
                        label="Render the events on both sides of the axis"
                    />
                </div>
            </div>
            <Timeline events={sortedEvents} alterMode={alterMode} collapsibleEvents={true} />
        </div>
    );
};
export default App;
