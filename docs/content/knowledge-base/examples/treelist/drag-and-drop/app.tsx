import React, { useCallback, useState } from 'react';
import { TreeList, getItemPath } from '@progress/kendo-react-treelist';

const subItemsField = 'subItems';
const expandField = 'expanded';
const columns = [{ field: 'name', title: 'Name', width: 250, expandable: true }];

const tree1 = [
  { name: 'data 1', [expandField]: true, [subItemsField]: [{ name: 'data 1.1', [expandField]: true, [subItemsField]: [{ name: 'data 1.2' }] }] }
];

const tree2 = [
  { name: 'data 2', [expandField]: true, [subItemsField]: [{ name: 'data 2.1', [expandField]: true, [subItemsField]: [{ name: 'data 2.2' }] }] }
];

const removeItem = (tree: any[], itemLevel: number[]) => {
  const itemPath = getItemPath(tree, itemLevel, subItemsField);
  const item = itemPath.pop();
  const parent = itemPath.pop();
  const itemIndex = itemLevel[itemLevel.length - 1];
  (parent ? parent[subItemsField] : tree).splice(itemIndex, 1);
  return item;
};

const insertItem = (tree: any[], insertLevel: number[], item: any) => {
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

const RowRender = ({ row, props, onDrop, onDragStart }: any) => {
  const additionalProps = {
    onDragStart: (e: any) => onDragStart(e, props),
    onDragOver: (e: any) => {
      e.preventDefault();
    },
    onDrop: (e: any) => onDrop(e, props),
    draggable: true
  };
  return React.cloneElement(row, { ...row.props, ...additionalProps }, row.props.children);
};

const App = () => {
  const [data1, setData1] = useState<any[]>(tree1);
  const [data2, setData2] = useState<any[]>(tree2);
  const [dragFrom, setDragFrom] = useState<'first' | 'second' | ''>('');
  const [dragged, setDragged] = useState<{ dataItem: any; level: number[] } | null>(null);

  const handleOnDropFirst = useCallback(
    (_e: any, props: any) => {
      if (dragFrom === 'second' && dragged) {
        const { dataItem, level } = dragged;
        const newData1 = [...data1];
        const newData2 = [...data2];
        removeItem(newData2, level);
        insertItem(newData1, props.level, dataItem);
        setData1(newData1);
        setData2(newData2);
      }
    },
    [dragFrom, dragged, data1, data2]
  );

  const handleDragStartFirst = useCallback((_e: any, props: any) => {
    const { dataItem, level } = props;
    setDragFrom('first');
    setDragged({ dataItem, level });
  }, []);

  const handleOnDropSecond = useCallback(
    (_e: any, props: any) => {
      if (dragFrom === 'first' && dragged) {
        const { dataItem, level } = dragged;
        const newData1 = [...data1];
        const newData2 = [...data2];
        removeItem(newData1, level);
        insertItem(newData2, props.level, dataItem);
        setData1(newData1);
        setData2(newData2);
      }
    },
    [dragFrom, dragged, data1, data2]
  );

  const handleDragStartSecond = useCallback((_e: any, props: any) => {
    const { dataItem, level } = props;
    setDragFrom('second');
    setDragged({ dataItem, level });
  }, []);

  const rowForTreeList1 = useCallback(
    (row: any, props: any) => (
      <RowRender props={props} row={row} onDrop={handleOnDropFirst} onDragStart={handleDragStartFirst} />
    ),
    [handleOnDropFirst, handleDragStartFirst]
  );

  const rowForTreeList2 = useCallback(
    (row: any, props: any) => (
      <RowRender props={props} row={row} onDrop={handleOnDropSecond} onDragStart={handleDragStartSecond} />
    ),
    [handleOnDropSecond, handleDragStartSecond]
  );

  return (
    <>
      <TreeList
        data={data1}
        rowRender={rowForTreeList1}
        columns={columns}
        style={{ maxHeight: '510px', overflow: 'auto' }}
        expandField={expandField}
        subItemsField={subItemsField}
      />
      <p />
      <hr />
      <p />
      <TreeList
        data={data2}
        rowRender={rowForTreeList2}
        columns={columns}
        style={{ maxHeight: '510px', overflow: 'auto' }}
        expandField={expandField}
        subItemsField={subItemsField}
      />
    </>
  );
};

export default App;
