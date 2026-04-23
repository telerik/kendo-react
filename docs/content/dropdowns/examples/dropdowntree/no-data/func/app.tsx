import * as React from 'react';

import { DropDownTree } from '@progress/kendo-react-dropdowns';
import { ListNoData } from './listNoData';

const App = () => {
    return (
        <div>
            <div>Select item:</div>
            <DropDownTree
                style={{ width: '300px' }}
                data={[]}
                textField="text"
                dataItemKey="id"
                placeholder="Please select ..."
                listNoData={ListNoData}
            />
        </div>
    );
};

export default App;
