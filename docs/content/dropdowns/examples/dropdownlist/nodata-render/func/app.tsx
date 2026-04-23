import * as React from 'react';

import { DropDownList } from '@progress/kendo-react-dropdowns';
import { Notification } from '@progress/kendo-react-notification';

const App = () => {
    const listNoDataRender = (element: React.ReactElement<HTMLDivElement>) => {
        const noData = <Notification type={{ style: 'warning' }}>No data here</Notification>;

        return React.cloneElement(element, { ...element.props }, noData);
    };

    return (
        <div>
            <DropDownList
                data={[]}
                label="Select"
                listNoDataRender={listNoDataRender}
                style={{ width: '300px' }}
                opened
            />
        </div>
    );
};

export default App;
