import * as React from 'react';

import { Switch, SwitchHandle } from '@progress/kendo-react-inputs';

const App = () => {
    const ref = React.useRef<SwitchHandle>(null);

    React.useEffect(() => {
        if (ref.current) {
            ref.current.focus();
        }
    });

    return (
        <div>
            <p>Toggle:</p>
            <Switch ref={ref} />
        </div>
    );
};

export default App;
