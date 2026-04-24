import React, { useCallback, useState } from 'react';
import { TreeView } from '@progress/kendo-react-treeview';
import { TextBox } from '@progress/kendo-react-inputs';
import '@progress/kendo-react-animation';

type TreeItem = {
  text: string;
  expanded?: boolean;
  edit?: boolean;
  items?: TreeItem[];
};

const initialTree: TreeItem[] = [
  {
    text: 'Furniture',
    expanded: true,
    items: [{ text: 'Tables & Chairs' }, { text: 'Sofas' }, { text: 'Occasional Furniture' }]
  },
  {
    text: 'Decor',
    items: [{ text: 'Bed Linen' }, { text: 'Curtains & Blinds' }, { text: 'Carpets' }]
  }
];

const App = () => {
  const [data, setData] = useState<TreeItem[]>(initialTree);

  const rerender = useCallback(() => setData(d => [...d]), []);

  const handleChange = useCallback((e: any, item: TreeItem) => {
    const val = e?.value ?? e?.target?.value ?? '';
    item.text = val;
    rerender();
  }, [rerender]);

  const handleBlur = useCallback((_e: any, item: TreeItem) => {
    item.edit = false;
    rerender();
  }, [rerender]);

  const itemKeyDown = useCallback((e: any) => {
    if (e.keyCode === 32) {
      e.stopPropagation();
    }
  }, []);

  const itemRender = useCallback((props: any) => {
    if (props.item.edit) {
      return (
        <TextBox
          autoFocus
          value={props.item.text}
          onKeyDown={itemKeyDown}
          onChange={(e) => handleChange(e, props.item)}
          onBlur={(e) => handleBlur(e, props.item)}
        />
      );
    }
    return <span>{props.item.text}</span>;
  }, [handleChange, handleBlur, itemKeyDown]);

  const onItemClick = useCallback((event: any) => {
    event.item.edit = true;
    rerender();
  }, [rerender]);

  const onExpandChange = useCallback((event: any) => {
    event.item.expanded = !event.item.expanded;
    rerender();
  }, [rerender]);

  return (
    <TreeView
      data={data}
      expandIcons={true}
      item={itemRender}
      onExpandChange={onExpandChange}
      onItemClick={onItemClick}
    />
  );
};

export default App;
