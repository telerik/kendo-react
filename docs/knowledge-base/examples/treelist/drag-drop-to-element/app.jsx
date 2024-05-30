import * as React from 'react';
import { Grid, GridColumn } from '@progress/kendo-react-grid';
import { TreeList } from '@progress/kendo-react-treelist';
import gridData from './data.js';
const columns = [
  {
    field: 'taskID',
    title: 'taskID',
    width: '250px',
    expandable: true,
  },
  {
    field: 'title',
    title: 'Title',
  },
];
const App = () => {
  const div1Ref = React.createRef();
  const [DropedItem, setDropedItem] = React.useState([]);
  const [dragItem, setDragItem] = React.useState('');

  React.useEffect(() => {
    let divEl = div1Ref.current;
    const preventDragover = (event) => {
      event.preventDefault();
    };

    const handleDropItem = (event) => {
      setDropedItem(dragItem);
    };

    divEl.addEventListener('drop', handleDropItem);
    divEl.addEventListener('dragover', preventDragover);

    return () => {
      divEl.removeEventListener('drop', handleDropItem);
      divEl.removeEventListener('dragover', preventDragover);
    };
  }, [dragItem]);

  const GridRowRender = (tr, props) => {
    const trProps = {
      draggable: true,
      onDragStart: (e) => {
        setDragItem(props.dataItem);
      },
    };
    return React.cloneElement(tr, { ...trProps }, tr.props.children);
  };
  return (
    <>
      <div
        style={{
          width: '300px',
          height: '300px',
          backgroundColor: '#434',
          display: 'inline-block',
          color: '#fff',
        }}
        ref={div1Ref}
      >
        {DropedItem.title}
      </div>
      <hr />
      <TreeList
        data={gridData}
        rowRender={GridRowRender}
        columns={columns}
      ></TreeList>
    </>
  );
};

export default App;
