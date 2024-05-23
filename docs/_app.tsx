import {
    TreeList, TreeListCellProps, TreeListColumnProps, TreeListExpandChangeEvent,
    TreeListToolbar,
    extendDataItem, mapTree, mapTreeItem
} from '@progress/kendo-react-treelist';
import React from 'react';
import { useMemo, useState } from 'react';
import { RouteObject } from 'react-router-dom';

interface RootProps {
    routes: RouteObject[];
}

interface Entry {
    id: any;
    name: string;
    items?: Entry[];
    route?: RouteObject;
}

function createTree(routes: RouteObject[]) {
    const tree: any = { name: "", items: [] };
    let id = 0;
    for (const route of routes) {
        let currentNode = tree;
        const routeNodes = route.path?.split('/') || [];
        for (const node of routeNodes) {
            const idx = currentNode.items.findIndex((item: any) => item.name === node);
            if (idx === -1) {
                const item: Entry = { id: id++, name: node, items: [] };
                currentNode.items.push(item);
                currentNode = item;
            } else {
                currentNode = currentNode.items[idx];
            };
        }
        currentNode.route = route;

    }

    return tree.items;
}

const subItemsField = 'items';
const expandField = 'expanded';
const MIN_AUTOEXPAND_FILTER_LENGTH = 3;

export default function Index({ routes }: RootProps) {
    const initialTreeData = useMemo(() => createTree(routes), [routes]);
    const [treeData, setTreeData] = useState(initialTreeData);

    const [filter, setFilter] = useState('');
    const allItemKeys = useMemo(() => Array.from(Array(routes.length).keys()), [routes]);
    const [expandedItems, setExpandedItems] = useState([] as number[]);

    const columns: TreeListColumnProps[] = [{
        expandable: true,
        title: 'Path',
        field: 'name',
        width: '30%'
    }, {
        title: 'Example',
        cell: (props: TreeListCellProps) => (
            <td>
                {props.dataItem.route ?
                    <a href={props.dataItem.route.path} target="_blank">{props.dataItem.route.path}</a> :
                    null
                }
            </td>
        )
    }];

    const onExpandChange = (e: TreeListExpandChangeEvent) => {
        const expanded = !e.value;
        const nextTreeData = [...treeData];

        mapTreeItem(nextTreeData, e.level, subItemsField, item =>
            extendDataItem(item, subItemsField, { [expandField]: expanded })
        );

        const nextExpandedItems = e.value ?
            expandedItems.filter(id => id !== (e.dataItem as Entry).id) :
            [...expandedItems, e.dataItem.id];

        setTreeData(nextTreeData);
        setExpandedItems(nextExpandedItems);
    };

    const onFilter = (e: any) => {
        const value = (e.target as HTMLInputElement).value;
        setFilter(value);
        applyFilter(value);
    };

    const applyFilter = (value) => {
        if (!value) {
            setTreeData(initialTreeData);
            setExpandedItems([]);
            return;
        }

        const autoExpand = value.length > MIN_AUTOEXPAND_FILTER_LENGTH;
        setExpandedItems(autoExpand ? allItemKeys : []);

        try {
            const regexp = new RegExp(value);
            setTreeData(createTree(routes.filter(({ path }) => path?.match(regexp))));
        } catch (e) {
            /* noop */
        }
    };

    const callback = item => expandedItems.includes(item.id) ?
        extendDataItem(item, subItemsField, { [expandField]: true }) : item;

    return (
        <div className="examples-list">
            <TreeList
                data={mapTree(treeData, subItemsField, callback)} 
                expandField={expandField}
                subItemsField={subItemsField}
                onExpandChange={onExpandChange}
                sortable={true}
                columns={columns}
                toolbar={
                    <TreeListToolbar>
                        <label>
                            <input style={{ margin: '0 1em' }}
                                autoFocus={true}
                                value={filter}
                                onInput={onFilter} />
                            <span>Filter examples (<code>RegExp</code>)</span>
                        </label>
                    </TreeListToolbar>
                }
            />
        </div>
    );
}
