import * as React from 'react';

import { AutoComplete } from '@progress/kendo-react-dropdowns';

const App = () => {
    const data = ['Albania', 'Andorra', 'Armenia', 'Austria', 'Azerbaijan'];

    return (
        <div>
            <div>Type the name of a European country:</div>
            <AutoComplete data={data} placeholder="e.g. Andorra" style={{ width: '300px' }} />
        </div>
    );
};

export default App;
