import * as React from 'react';
import { TreeView } from '@progress/kendo-react-treeview';
const tree = [
    {
        text: 'Furniture',
        expanded: true,
        items: [
            {
                text: 'Tables & Chairs'
            },
            {
                text: 'Sofas'
            },
            {
                text: 'Occasional Furniture'
            }
        ]
    },
    {
        text: 'Decor',
        expanded: true,
        items: [
            {
                text: 'Bed Linen'
            },
            {
                text: 'Curtains & Blinds'
            },
            {
                text: 'Carpets'
            }
        ]
    }
];

const App = () => {
    return <TreeView data={tree} />;
};

export default App;
