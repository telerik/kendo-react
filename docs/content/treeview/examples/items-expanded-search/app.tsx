import * as React from 'react';

import { TreeView, TreeViewExpandChangeEvent } from '@progress/kendo-react-treeview';
import { Input, InputChangeEvent } from '@progress/kendo-react-inputs';

type TreeViewDataItem = {
    text: string;
    expanded?: boolean;
    items?: TreeViewDataItem[];
};

const treeData: TreeViewDataItem[] = [
    {
        text: 'Furniture',
        expanded: true,
        items: [
            { text: 'Tables & Chairs' },
            { text: 'Sofas' },
            { text: 'Occasional Furniture' },
        ],
    },
    {
        text: 'Decor',
        expanded: true,
        items: [
            { text: 'Bed Linen' },
            { text: 'Curtains & Blinds' },
            { text: 'Carpets' },
        ],
    },
];

const App = () => {
    const [data, setData] = React.useState<TreeViewDataItem[]>(treeData);
    const [value, setValue] = React.useState<string>('');

    const handleSearch = (e: InputChangeEvent) => {
        const searchValue = e.value as string;
        const newData = search(treeData, searchValue);
        setData(newData);
        setValue(searchValue);
    };

    const search = (items: TreeViewDataItem[], term: string): TreeViewDataItem[] => {
        return items.reduce<TreeViewDataItem[]>((acc, item) => {
            if (contains(item.text, term)) {
                acc.push(item);
            } else if (item.items && item.items.length > 0) {
                const newItems = search(item.items, term);
                if (newItems.length > 0) {
                    acc.push({ text: item.text, items: newItems, expanded: item.expanded });
                }
            }
            return acc;
        }, []);
    };

    const contains = (text: string, term: string): boolean => {
        return text.toLowerCase().includes(term.toLowerCase());
    };

    const onExpandChange = (event: TreeViewExpandChangeEvent) => {
        const updatedData = [...data];
        const itemIndex = updatedData.indexOf(event.item);
        updatedData[itemIndex] = { ...event.item, expanded: !event.item.expanded };
        setData(updatedData);
    };

    return (
        <div>
            <Input value={value} onChange={handleSearch} placeholder='Search...'/>
            <hr />
            <TreeView data={data} expandIcons={true} onExpandChange={onExpandChange} />
        </div>
    );
};

export default App;
