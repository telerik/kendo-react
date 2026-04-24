import * as React from 'react';

import { MultiSelectTree } from '@progress/kendo-react-dropdowns';
import { ListNoData } from './listNoData';

const App = () => {
    return (
        <div>
            <div>Categories:</div>
            <MultiSelectTree
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
