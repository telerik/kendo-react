import * as React from 'react';

import { AutoComplete } from '@progress/kendo-react-dropdowns';
import { Notification } from '@progress/kendo-react-notification';
import { Label } from '@progress/kendo-react-labels';

const App = () => {
    const listNoDataRender = (element: React.ReactElement<HTMLDivElement>) => {
        const noData = <Notification type={{ style: 'warning' }}>No data here</Notification>;

        return React.cloneElement(element, { ...element.props }, noData);
    };

    return (
        <div>
            <Label>
                Select <br />
                <AutoComplete
                    data={[]}
                    opened
                    listNoDataRender={listNoDataRender}
                    placeholder="No data"
                    style={{ width: '300px' }}
                />
            </Label>
        </div>
    );
};

export default App;
