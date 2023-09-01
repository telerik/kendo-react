import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { TreeView } from '@progress/kendo-react-treeview';

const MyContext = React.createContext({
  deleteItem: null,
});

const tree = [
  {
    text: 'My Documents',
    expanded: true,
    id: 1,
    items: [
      {
        text: 'KendoReact Project',
        expanded: true,
        id: 2,
        items: [
          {
            text: 'about.html',
            id: 3,
          },
          {
            text: 'index.html',
            id: 4,
          },
          {
            text: 'logo.png',
            id: 5,
          },
        ],
      },
    ],
  },
];

const MyItem = (props) => {
  const currentContext = React.useContext(MyContext);
  return (
    <>
      <span>{props.item.text}</span>
      <span
        className="k-icon k-i-close"
        onClick={() => currentContext.deleteItem(props)}
      ></span>
    </>
  );
};

const App = () => {
  const [treeData, setTreeData] = React.useState(tree);
  const searchRecursivly = (id, items) => {
    let newItems = [];

    items.forEach((item) => {
      if (item.id != id) {
        if (item.items && item.items.length > 0) {
          item.items = searchRecursivly(id, item.items);
        }
        newItems.push(item);
      }
    });
    return newItems;
  };

  const deleteItem = (props) => {
    let newItems = [];

    treeData.forEach((item) => {
      if (item.id != props.item.id) {
        if (item.items && item.items.length > 0) {
          item.items = searchRecursivly(props.item.id, item.items);
        }
        newItems.push(item);
      }
    });

    console.log(newItems);
    setTreeData(newItems);
  };
  return (
    <MyContext.Provider
      value={{
        deleteItem: deleteItem,
      }}
    >
      {' '}
      <TreeView data={treeData} item={MyItem} />
    </MyContext.Provider>
  );
};

ReactDOM.render(<App />, document.querySelector('my-app'));
