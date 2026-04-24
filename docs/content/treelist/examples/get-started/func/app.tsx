import * as React from 'react';
import { TreeList, TreeListColumnProps } from '@progress/kendo-react-treelist';
import data from './shared-tl-simple-data';

const subItemsField: string = 'employees';
const expandField: string = 'expanded';
const columns: TreeListColumnProps[] = [
    { field: 'name', title: 'Name', width: '250px', expandable: true },
    { field: 'title', title: 'Title' }
];

const App = () => {
    return (
        <TreeList
            style={{ maxHeight: '510px', overflow: 'auto' }}
            expandField={expandField}
            subItemsField={subItemsField}
            data={data}
            columns={columns}
        />
    );
};

export default App;
