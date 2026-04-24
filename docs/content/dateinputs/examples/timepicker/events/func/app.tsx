import * as React from 'react';

import { TimePicker } from '@progress/kendo-react-dateinputs';

interface EventLogProps {
    logs: string[];
    title: string;
}

const EventLog = (props: EventLogProps) => {
    const renderLogs = () => props.logs.map((log, index) => <li key={index}>{log}</li>);
    return (
        <div className="example-config">
            <h5>{props.title}</h5>
            <ul className="event-log" style={{ maxHeight: '300px' }}>
                {renderLogs()}
            </ul>
        </div>
    );
};

let logs: any = [];

const App = () => {
    const [state, setState] = React.useState({ value: new Date(), events: logs });

    const handleChange = (event) => {
        logs.unshift('change: ' + event.target.value);

        setState({
            value: event.target.value,
            events: logs.slice()
        });
    };

    return (
        <div className="row">
            <div className="col-md-6">
                <p>Select time:</p>
                <TimePicker onChange={handleChange} value={state.value} width={300} />
            </div>
            <div className="col-md-6">
                <EventLog logs={state.events} title={'TimePicker Events'} />
            </div>
        </div>
    );
};

export default App;
