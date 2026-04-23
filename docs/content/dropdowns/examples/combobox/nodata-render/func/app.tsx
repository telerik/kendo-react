import * as React from 'react';

import { ComboBox } from '@progress/kendo-react-dropdowns';

const App = () => {
    const listNoDataRender = (element: React.ReactElement<HTMLDivElement>) => {
        const noData = (
            <h4 style={{ fontSize: '1em' }}>
                <span className="k-icon k-i-warning" style={{ fontSize: '2.5em' }} />
                <br />
                <br />
                no data here
            </h4>
        );

        return React.cloneElement(element, { ...element.props }, noData);
    };

    return <ComboBox style={{ width: '300px' }} data={[]} listNoDataRender={listNoDataRender} />;
};

export default App;
