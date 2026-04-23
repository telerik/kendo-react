import * as React from 'react';

import { AutoComplete, AutoCompleteChangeEvent } from '@progress/kendo-react-dropdowns';
import countries from './shared-dd-countries';

const App = () => {
    const [state, setState] = React.useState({ value: '', suggest: '' });

    const handleChange = (event: AutoCompleteChangeEvent) => {
        setState({
            value: event.value,
            suggest: event.suggestion ? event.suggestion.value : ''
        });
    };

    return (
        <div className="example-wrapper" style={{ height: 90, minHeight: 90 }}>
            <div className="col-xs-12 col-sm-6 example-col">
                <p>AutoComplete in Uncontrolled Mode</p>
                <AutoComplete data={countries} suggest={true} placeholder="e.g. Austria" style={{ width: '300px' }} />
            </div>
            <div className="col-xs-12 col-sm-6 example-col">
                <p>AutoComplete in Controlled Mode</p>
                <AutoComplete
                    data={countries}
                    suggest={state.suggest}
                    value={state.value}
                    onChange={handleChange}
                    placeholder="e.g. Austria"
                    style={{ width: '300px' }}
                />
            </div>
        </div>
    );
};

export default App;
