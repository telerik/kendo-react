import * as React from 'react';
import { TimePicker } from '@progress/kendo-react-dateinputs';

const App = () => (
    <div className="row example-wrapper" style={{ minHeight: '450px' }}>
        <div className="col-xs-12 col-md-6 example-col">
            <p>Full-length format description:</p>
            <TimePicker formatPlaceholder="wide" />
        </div>

        <div className="col-xs-12 col-md-6 example-col">
            <p>Narrow-length format description:</p>
            <TimePicker formatPlaceholder="narrow" />
        </div>

        <div className="col-xs-12 col-md-6 example-col">
            <p>Short-length format description:</p>
            <TimePicker formatPlaceholder="short" />
        </div>

        <div className="col-xs-12 col-md-6 example-col">
            <p>Display defined format:</p>
            <TimePicker format="HH:mm:ss" formatPlaceholder="formatPattern" />
        </div>

        <div className="col-xs-12 col-md-6 example-col">
            <p>Custom defined format descriptions</p>
            <TimePicker format="HH:mm:ss" formatPlaceholder={{ hour: 'h', minute: 'm', second: 's' }} />
        </div>
    </div>
);

export default App;
