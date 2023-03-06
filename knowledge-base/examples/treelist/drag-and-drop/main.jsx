
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
    TreeList, getItemPath
} from '@progress/kendo-react-treelist';

const removeItem = (tree, itemLevel) => {
    const itemPath = getItemPath(tree, itemLevel, subItemsField);
    const item = itemPath.pop();
    const parent = itemPath.pop();
    const itemIndex = itemLevel[itemLevel.length - 1];
    (parent ? parent[subItemsField] : tree).splice(itemIndex, 1);

    return item;
};

const insertItem = (tree, insertLevel, item) => {
    const destinationItemPath = getItemPath(tree, insertLevel, subItemsField);
    const destinationItem = destinationItemPath.pop();
    const destinationParent = destinationItemPath.pop();
    if (destinationParent) {
        const insertAt = destinationParent[subItemsField].indexOf(destinationItem) + 1;
        const destItems = destinationParent[subItemsField].slice();
        destItems.splice(insertAt, 0, item);
        destinationParent[subItemsField] = destItems;
    } else {
        tree.splice(insertLevel[0] + 1, 0, item);
    }
};

const subItemsField = 'subItems';
const expandField = 'expanded';
const columns = [
    { field: 'name', title: 'Name', width: 250, expandable: true }
];

const tree1 = [
    { name: 'data 1', [expandField]: true, [subItemsField]: [{ name: 'data 1.1', [expandField]: true, [subItemsField]: [{ name: 'data 1.2' }] }] }
];

const tree2 = [
    { name: 'data 2', [expandField]: true, [subItemsField]: [{ name: 'data 2.1', [expandField]: true, [subItemsField]: [{ name: 'data 2.2' }] }] }
];

const RowRender = (properties) => {
    const { row, props, onDrop, onDragStart } = properties;
    const additionalProps = {
        onDragStart: (e) => onDragStart(e, props),
        onDragOver: (e) => { e.preventDefault(); },
        onDrop: (e) => onDrop(e, props),
        draggable: true
    };
    return React.cloneElement(row, { ...row.props, ...additionalProps }, row.props.children)
}

class App extends React.Component {
    state = {
        data1: tree1,
        data2: tree2,
        dragFrom: '',
        dragged: null
    };

    handleOnDropFirst = (_e, props) => {
        if (this.state.dragFrom === 'second') {
            const { dragged, data1, data2 } = this.state;
            const { dataItem, level } = dragged;
            const newData1 = [...data1];
            const newData2 = [...data2];
            removeItem(newData2, level);
            insertItem(newData1, props.level, dataItem);

            this.setState({
                data1: newData1,
                data2: newData2
            });
        }
    }
    handleDragStartFirst = (_e, props) => {
        const { dataItem, level } = props;
        this.setState({
            dragFrom: "first",
            dragged: { dataItem, level }
        });
    }

    handleOnDropSecond = (_e, props) => {
        if (this.state.dragFrom === 'first') {
            const { dragged, data1, data2 } = this.state;
            const { dataItem, level } = dragged;
            const newData1 = [...data1];
            const newData2 = [...data2];
            removeItem(newData1, level);
            insertItem(newData2, props.level, dataItem);

            this.setState({
                data1: newData1,
                data2: newData2
            });
        }
    }

    handleDragStartSecond = (_e, props) => {
        const { dataItem, level } = props;
        this.setState({
            dragFrom: "second",
            dragged: { dataItem, level }
        });
    }

    rowForTreeList1 = (row, props) => {
        return <RowRender props={props} row={row} onDrop={this.handleOnDropFirst} onDragStart={this.handleDragStartFirst} />
    }

    rowForTreeList2 = (row, props) => {
        return <RowRender props={props} row={row} onDrop={this.handleOnDropSecond} onDragStart={this.handleDragStartSecond} />
    }

    render() {
        return (
            <>
                <TreeList
                    data={this.state.data1}
                    rowRender={this.rowForTreeList1}
                    columns={columns}
                    style={{ maxHeight: '510px', overflow: 'auto' }}
                    expandField={expandField}
                    subItemsField={subItemsField}
                >
                </TreeList>
                <p />
                <hr />
                <p />
                <TreeList
                    data={this.state.data2}
                    rowRender={this.rowForTreeList2}
                    columns={columns}
                    style={{ maxHeight: '510px', overflow: 'auto' }}
                    expandField={expandField}
                    subItemsField={subItemsField}
                >
                </TreeList>
            </>
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('my-app')
);

