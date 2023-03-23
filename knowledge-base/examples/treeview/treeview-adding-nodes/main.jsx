import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { TreeView } from '@progress/kendo-react-treeview';
import { Button } from '@progress/kendo-react-buttons';
import { Window } from '@progress/kendo-react-dialogs';
import { Input } from '@progress/kendo-react-inputs';
const tree = [
  {
    text: 'Furniture',
    expanded: true,
    items: [
      {
        text: 'Tables & Chairs',
      },
      {
        text: 'Sofas',
      },
      {
        text: 'Occasional Furniture',
      },
    ],
  },
  {
    text: 'Decor',
    expanded: true,
    items: [
      {
        text: 'Bed Linen',
      },
      {
        text: 'Curtains & Blinds',
      },
      {
        text: 'Carpets',
      },
    ],
  },
];
const App = () => {
  const [data, setData] = React.useState(tree);
  const [visible, setVisible] = React.useState(false);
  const [showButton, setShowButton] = React.useState(false);
  const [value, setValue] = React.useState('');
  const [parentName, setParentName] = React.useState('');

  const toggleDialog = () => {
    setVisible(!visible);
  };

  const handleSubmit = (e, parentName) => {
    const newTree = data;
    newTree.map((item) => {
      if (item.text === parentName) {
        item.items = [
          ...item.items,
          {
            text: value,
          },
        ];
      }
    });
    setData(newTree);
    toggleDialog();
  };

  const handleChange = (e) => {
    setTimeout(setValue(e.value), 3000);
  };

  const handleNodeClick = (e) => {
    if (e.item.items) {
      setParentName(e.item.text);
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };
  return (
    <>
      <TreeView data={tree} onItemClick={handleNodeClick} expandIcons={true} />
      <div>
        {showButton && <Button onClick={toggleDialog}>Add {parentName}</Button>}
        {visible && (
          <Window title={'Add Item'} onClose={toggleDialog} initialHeight={150}>
            <Input value={value} onChange={handleChange} />
            <Button
              onClick={(e) => {
                handleSubmit(e, parentName);
              }}
            >
              Submit
            </Button>
          </Window>
        )}
      </div>
    </>
  );
};
ReactDOM.render(<App />, document.querySelector('my-app'));
