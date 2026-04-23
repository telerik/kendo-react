import React, { useState, useCallback } from 'react';
import { TextBox } from '@progress/kendo-react-inputs';
import { TreeView } from '@progress/kendo-react-treeview';
import '@progress/kendo-react-animation';

const treeData = [
    {
        text: 'Furniture',
        expanded: true,
        items: [{ text: 'Tables & Chairs' }, { text: 'Sofas' }, { text: 'Occasional Furniture' }]
    },
    {
        text: 'Decor',
        expanded: true,
        items: [{ text: 'Bed Linen' }, { text: 'Curtains & Blinds' }, { text: 'Carpets' }]
    }
];

const App = () => {
    const [data, setData] = useState(treeData);

    const contains = useCallback((text: string, term: string) => {
        return text.toLowerCase().indexOf(term.toLowerCase()) >= 0;
    }, []);

    const search = useCallback(
        (items: any[], term: string): any[] => {
            return items.reduce((acc: any[], item) => {
                if (contains(item.text, term)) {
                    acc.push(item);
                } else if (item.items && item.items.length > 0) {
                    const newItems = search(item.items, term);
                    if (newItems && newItems.length > 0) {
                        acc.push({
                            text: item.text,
                            items: newItems,
                            expanded: item.expanded
                        });
                    }
                }
                return acc;
            }, []);
        },
        [contains]
    );

    const handleSearch = useCallback(
        (event: any) => {
            const value = event.value || '';
            const newData = search(treeData, value);
            setData(newData);
        },
        [search]
    );

    return (
        <div>
            <TextBox style={{ width: '200px' }} onChange={handleSearch} />
            <hr />
            <TreeView data={data} expandIcons={true} />
        </div>
    );
};

export default App;
