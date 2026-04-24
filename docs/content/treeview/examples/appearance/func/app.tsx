import * as React from 'react';

import {
    TreeView,
    TreeViewExpandChangeEvent,
    TreeViewCheckChangeEvent,
    TreeViewItemClickEvent,
    processTreeViewItems,
    handleTreeViewCheckChange
} from '@progress/kendo-react-treeview';

interface TreeViewDataItem {
    text: string;
    expanded?: boolean;
    checked?: boolean;
    selected?: boolean;
    items?: TreeViewDataItem[];
}
const tree: TreeViewDataItem[] = [
    {
        text: 'Furniture',
        items: [{ text: 'Tables & Chairs' }, { text: 'Sofas' }, { text: 'Occasional Furniture' }]
    },
    {
        text: 'Decor',
        items: [{ text: 'Bed Linen' }, { text: 'Curtains & Blinds' }, { text: 'Carpets' }]
    }
];

const App = () => {
    // State for small TreeView
    const [checkSmall, setCheckSmall] = React.useState([]);
    const [expandSmall, setExpandSmall] = React.useState({ ids: ['Furniture'], idField: 'text' });
    const [selectSmall, setSelectSmall] = React.useState(['']);

    // State for medium TreeView
    const [checkMedium, setCheckMedium] = React.useState([]);
    const [expandMedium, setExpandMedium] = React.useState({ ids: ['Furniture'], idField: 'text' });
    const [selectMedium, setSelectMedium] = React.useState(['']);

    // State for large TreeView
    const [checkLarge, setCheckLarge] = React.useState([]);
    const [expandLarge, setExpandLarge] = React.useState({ ids: ['Furniture'], idField: 'text' });
    const [selectLarge, setSelectLarge] = React.useState(['']);

    // Handlers for small TreeView
    const onItemClickSmall = (event: TreeViewItemClickEvent) => {
        setSelectSmall([event.itemHierarchicalIndex]);
    };
    const onExpandChangeSmall = (event: TreeViewExpandChangeEvent) => {
        let ids = expandSmall.ids.slice();
        const index = ids.indexOf(event.item.text);
        index === -1 ? ids.push(event.item.text) : ids.splice(index, 1);
        setExpandSmall({ ids, idField: 'text' });
    };
    const onCheckChangeSmall = (event: TreeViewCheckChangeEvent) => {
        const settings = { singleMode: false, checkChildren: false, checkParents: false };
        setCheckSmall(handleTreeViewCheckChange(event, checkSmall, tree, settings));
    };

    // Handlers for medium TreeView
    const onItemClickMedium = (event: TreeViewItemClickEvent) => {
        setSelectMedium([event.itemHierarchicalIndex]);
    };
    const onExpandChangeMedium = (event: TreeViewExpandChangeEvent) => {
        let ids = expandMedium.ids.slice();
        const index = ids.indexOf(event.item.text);
        index === -1 ? ids.push(event.item.text) : ids.splice(index, 1);
        setExpandMedium({ ids, idField: 'text' });
    };
    const onCheckChangeMedium = (event: TreeViewCheckChangeEvent) => {
        const settings = { singleMode: false, checkChildren: false, checkParents: false };
        setCheckMedium(handleTreeViewCheckChange(event, checkMedium, tree, settings));
    };

    // Handlers for large TreeView
    const onItemClickLarge = (event: TreeViewItemClickEvent) => {
        setSelectLarge([event.itemHierarchicalIndex]);
    };
    const onExpandChangeLarge = (event: TreeViewExpandChangeEvent) => {
        let ids = expandLarge.ids.slice();
        const index = ids.indexOf(event.item.text);
        index === -1 ? ids.push(event.item.text) : ids.splice(index, 1);
        setExpandLarge({ ids, idField: 'text' });
    };
    const onCheckChangeLarge = (event: TreeViewCheckChangeEvent) => {
        const settings = { singleMode: false, checkChildren: false, checkParents: false };
        setCheckLarge(handleTreeViewCheckChange(event, checkLarge, tree, settings));
    };

    return (
        <section className="k-container k-gap-1 k-gap-sm-6">
            <div className="k-row k-col-gap-1 k-col-gap-sm-6">
                <div className="k-col">
                    <TreeView
                        size={'small'}
                        data={processTreeViewItems(tree, {
                            select: selectSmall,
                            check: checkSmall,
                            expand: expandSmall
                        })}
                        expandIcons={true}
                        onExpandChange={onExpandChangeSmall}
                        onItemClick={onItemClickSmall}
                        onCheckChange={onCheckChangeSmall}
                    />
                </div>
                <div className="k-col">
                    <TreeView
                        size={'medium'}
                        data={processTreeViewItems(tree, {
                            select: selectMedium,
                            check: checkMedium,
                            expand: expandMedium
                        })}
                        expandIcons={true}
                        onExpandChange={onExpandChangeMedium}
                        onItemClick={onItemClickMedium}
                        onCheckChange={onCheckChangeMedium}
                    />
                </div>
                <div className="k-col">
                    <TreeView
                        size={'large'}
                        data={processTreeViewItems(tree, {
                            select: selectLarge,
                            check: checkLarge,
                            expand: expandLarge
                        })}
                        expandIcons={true}
                        onExpandChange={onExpandChangeLarge}
                        onItemClick={onItemClickLarge}
                        onCheckChange={onCheckChangeLarge}
                    />
                </div>
            </div>
        </section>
    );
};

export default App;
