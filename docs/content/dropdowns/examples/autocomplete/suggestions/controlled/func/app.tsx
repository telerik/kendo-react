import * as React from 'react';

import { AutoComplete, AutoCompleteChangeEvent } from '@progress/kendo-react-dropdowns';
import { Label } from '@progress/kendo-react-labels';
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
            <Label>
                Enter text <br />
                <AutoComplete
                    data={countries}
                    suggest={state.suggest}
                    value={state.value}
                    onChange={handleChange}
                    placeholder="e.g. Austria"
                    style={{ width: '300px' }}
                />
            </Label>
        </div>
    );
};

export default App;
