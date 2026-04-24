import * as React from 'react';

import {
    TreeView,
    TreeViewExpandChangeEvent,
    TreeViewCheckChangeEvent,
    TreeViewItemClickEvent,
    processTreeViewItems,
    handleTreeViewCheckChange,
    moveTreeViewItem,
    TreeViewContextMenuEvent
} from '@progress/kendo-react-treeview';

import { ContextMenu, MenuItem } from '@progress/kendo-react-layout';

import { insertBottomIcon, insertTopIcon, insertMiddleIcon } from '@progress/kendo-svg-icons';

const SEPARATOR = '_';

const itemDataInitial: { ids: any[]; idField: string } = {
    ids: [],
    idField: 'text'
};

const treeData = [
    {
        text: 'Furniture',
        expanded: true,
        items: [
            { text: 'Tables & Chairs' },
            { text: 'Sofas', disabled: true },
            { text: 'Occasional Furniture' }
        ]
    },
    {
        text: 'Decor',
        expanded: true,
        items: [
            { text: 'Bed Linen' },
            { text: 'Curtains & Blinds' },
            { text: 'Carpets' }
        ]
    }
];

const getSiblings = (itemIndex, data) => {
    let result = data;
    const indices = itemIndex.split(SEPARATOR).map((index) => Number(index));
    for (let i = 0; i < indices.length - 1; i++) {
        result = result[indices[i]].items || [];
    }
    return result;
};

const App = () => {
    const [tree, setTree] = React.useState(treeData);
    const [check, setCheck] = React.useState([]);
    const [menuEmitter, setMenuEmitter] = React.useState('');
    const [sourceNode, setSourceNode] = React.useState('');
    const [expand, setExpand] = React.useState(itemDataInitial);
    const [select, setSelect] = React.useState(itemDataInitial);
    const [show, setShow] = React.useState(false);
    const offset = React.useRef({ left: 0, top: 0 });

    const onItemClick = (event: TreeViewItemClickEvent) => {
        let ids = select.ids.slice();
        const index = ids.indexOf(event.item.text);
        index === -1 ? ids.push(event.item.text) : ids.splice(index, 1);
        setSelect({
            ids,
            idField: 'text'
        });
        if (sourceNode !== '') {
            setSourceNode('');
            handleMove('child', event.itemHierarchicalIndex);
        }
    };

    const onExpandChange = (event: TreeViewExpandChangeEvent) => {
        let ids = expand.ids.slice();
        const index = ids.indexOf(event.item.text);
        index === -1 ? ids.push(event.item.text) : ids.splice(index, 1);
        setExpand({
            ids,
            idField: 'text'
        });
    };

    const onCheckChange = (event: TreeViewCheckChangeEvent) => {
        const settings = {
            singleMode: false,
            checkChildren: false,
            checkParents: false
        };
        setCheck(handleTreeViewCheckChange(event, check, tree, settings));
    };

    const onContextMenuClose = () => {
        setShow(false);
    };

    const onContextMenuSelect = (event: any) => {
        switch (event.item.data.action) {
            case 'moveBefore':
                handleMove('before');
                break;
            case 'moveAfter':
                handleMove('after');
                break;
            case 'addToParent':
                setSourceNode(menuEmitter);
                break;
            default:
        }
        setShow(false);
    };


    const handleMove = (direction: 'before' | 'after' | 'child', updatedIndex?) => {
        const siblingsLength = getSiblings(menuEmitter, tree).length - 1;
        const itemIndex = Number(menuEmitter.slice(-1));

        if (direction !== "child") {
            updatedIndex =
                menuEmitter.substring(0, menuEmitter.length - 1) +
                (direction === 'before' ? itemIndex - 1 : itemIndex + 1);
        }

        if (itemIndex <= siblingsLength) {
            const updatedTree = moveTreeViewItem(
                menuEmitter,
                tree,
                direction,
                updatedIndex
            );
            setTree(updatedTree as any);
        }
    };

    const onTreeViewContextMenu = (event: TreeViewContextMenuEvent) => {
        const { syntheticEvent, itemID } = event;

        syntheticEvent.preventDefault();

        offset.current = { left: syntheticEvent.pageX, top: syntheticEvent.pageY };
        setMenuEmitter(itemID);
        setShow(true);
    };

    return (
      <div>
        <TreeView
          data={processTreeViewItems(tree, {
                    select: select,
                    check: check,
                    expand: expand
                })}
          expandIcons={true}
          onExpandChange={onExpandChange}
          aria-multiselectable={true}
          onItemClick={onItemClick}
          checkboxes={true}
          onCheckChange={onCheckChange}
          onContextMenu={onTreeViewContextMenu}
            />
        <ContextMenu
          show={show}
          offset={offset.current}
          onSelect={onContextMenuSelect}
          onClose={onContextMenuClose}
            >
          <MenuItem
            text="Move before"
            data={{ action: 'moveBefore' }}
            svgIcon={insertTopIcon}
                />
          <MenuItem
            text="Move after"
            data={{ action: 'moveAfter' }}
            svgIcon={insertBottomIcon}
                />
          <MenuItem
            text="Add to parent"
            data={{ action: 'addToParent' }}
            svgIcon={insertMiddleIcon}
                />
        </ContextMenu>
      </div>
    );
};

export default App;
