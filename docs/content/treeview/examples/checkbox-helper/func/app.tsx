import * as React from 'react';

import {
    TreeView,
    processTreeViewItems,
    handleTreeViewCheckChange,
    TreeViewExpandChangeEvent
} from '@progress/kendo-react-treeview';
import { Label } from '@progress/kendo-react-labels';
import { Checkbox } from '@progress/kendo-react-inputs';

interface TreeViewDataItem {
    text: string;
    expanded?: boolean;
    checked?: boolean;
    selected?: boolean;
    items?: TreeViewDataItem[];
}

const tree: TreeViewDataItem[] = [
    {
        text: 'Item1',
        expanded: true,
        items: [
            { text: 'Item1.1' },
            { text: 'Item1.2', expanded: true, items: [{ text: 'Item1.2.1' }, { text: 'Item1.2.2' }] }
        ]
    },
    { text: 'Item2' },
    { text: 'Item3' }
];

const App = () => {
    const [items] = React.useState<Array<any>>(tree);
    const [singleMode, setSingleMode] = React.useState<boolean>(false);
    const [checkChildren, setCheckChildren] = React.useState<boolean>(false);
    const [checkParents, setCheckParents] = React.useState<boolean>(false);
    const [check, setCheck] = React.useState({ ids: [], applyCheckIndeterminate: true });

    const onCheckChange = (event: TreeViewExpandChangeEvent) => {
        const settings = { singleMode, checkChildren, checkParents };
        setCheck(handleTreeViewCheckChange(event, check, items, settings));
    };
    const onSingleModeChange = ({ value }) => {
        setSingleMode(value);
        setCheckChildren(false);
        setCheckParents(false);
    };
    const onCheckChildrenChange = ({ value }) => {
        setSingleMode(false);
        setCheckChildren(value);
    };
    const onCheckParentsChange = ({ value }) => {
        if (value) {
            setSingleMode(false);
        }
        setCheckParents(value);
    };

    return (
        <div>
            <div className="example-config">
                <h5>Check Settings</h5>
                <Checkbox id="singleMode" checked={singleMode} onChange={onSingleModeChange} label="Single mode" />
                <Checkbox
                    id="checkChildren"
                    checked={checkChildren}
                    onChange={onCheckChildrenChange}
                    label="Check all children"
                />
                <Checkbox
                    id="checkParents"
                    checked={checkParents}
                    onChange={onCheckParentsChange}
                    label="Check all parents when children are checked"
                />
            </div>
            <TreeView
                data={processTreeViewItems(items, { check: check })}
                checkboxes={true}
                onCheckChange={onCheckChange}
            />
            <div style={{ marginTop: 5 }}>
                <i>Press SPACE to check/uncheck the active item</i>
                <div className="example-config">Checked indices: {check.ids.join(',')}</div>
            </div>
        </div>
    );
};

export default App;
