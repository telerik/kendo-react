import * as React from 'react';
import {
  ListBox,
  ListBoxToolbar,
  processListBoxData,
  processListBoxDragAndDrop,
} from '@progress/kendo-react-listbox';
import products from './products.json';

const parsedProducts = products.map((product) => {
  product.selected = false;
  return product;
});

const SELECTED_FIELD = 'selected';

const App = () => {
  const [state, setState] = React.useState({
    notDiscontinued: parsedProducts.filter((product) => !product.Discontinued),
    discontinued: parsedProducts.filter((product) => product.Discontinued),
    draggedItem: {},
  });

  const discontinuedListRef = React.useRef(null);

  const handleItemClick = (event, data, connectedData) => {
    setState({
      ...state,
      [data]: state[data].map((item) => {
        if (item.ProductID === event.dataItem.ProductID) {
          item[SELECTED_FIELD] = !item[SELECTED_FIELD];
        } else if (!event.nativeEvent.ctrlKey) {
          item[SELECTED_FIELD] = false;
        }
        return item;
      }),
      [connectedData]: state[connectedData].map((item) => {
        item[SELECTED_FIELD] = false;
        return item;
      }),
    });
  };

  const handleToolBarClick = (e) => {
    let toolName = e.toolName || '';
    let result = processListBoxData(
      state.notDiscontinued,
      state.discontinued,
      toolName,
      SELECTED_FIELD
    );

    setState({
      ...state,
      notDiscontinued: result.listBoxOneData,
      discontinued: result.listBoxTwoData,
    });

    setTimeout(() => {
      if (discontinuedListRef.current) {
        const listBoxElement = discontinuedListRef.current.element;
        const listItems = listBoxElement.querySelectorAll('.k-list-item');
        if (listItems.length > 0) {
          listItems[listItems.length - 1].scrollIntoView({
            behavior: 'smooth',
          });
        }
      }
    }, 0);
  };

  const handleDragStart = (e) => {
    setState({
      ...state,
      draggedItem: e.dataItem,
    });
  };

  const handleDrop = (e) => {
    let result = processListBoxDragAndDrop(
      state.notDiscontinued,
      state.discontinued,
      state.draggedItem,
      e.dataItem,
      'ProductID'
    );

    setState({
      ...state,
      notDiscontinued: result.listBoxOneData,
      discontinued: result.listBoxTwoData,
    });

    setTimeout(() => {
      if (discontinuedListRef.current) {
        const listBoxElement = discontinuedListRef.current.element;
        const listItems = listBoxElement.querySelectorAll('.k-list-item');
        if (listItems.length > 0) {
          listItems[listItems.length - 1].scrollIntoView({
            behavior: 'smooth',
          });
        }
      }
    }, 0);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col">
          <h6>Not Discontinued</h6>
          <ListBox
            textField="ProductName"
            style={{ height: 350, width: '100%' }}
            data={state.notDiscontinued}
            selectedField={SELECTED_FIELD}
            onItemClick={(e) =>
              handleItemClick(e, 'notDiscontinued', 'discontinued')
            }
            onDragStart={handleDragStart}
            onDrop={handleDrop}
            toolbar={() => {
              return (
                <ListBoxToolbar
                  tools={[
                    'moveUp',
                    'moveDown',
                    'transferTo',
                    'transferFrom',
                    'transferAllTo',
                    'transferAllFrom',
                    'remove',
                  ]}
                  data={state.notDiscontinued}
                  dataConnected={state.discontinued}
                  onToolClick={handleToolBarClick}
                />
              );
            }}
          />
        </div>
        <div className="col">
          <h6>Discontinued</h6>
          <ListBox
            textField="ProductName"
            style={{ height: 350, width: '100%' }}
            data={state.discontinued}
            selectedField={SELECTED_FIELD}
            onItemClick={(e) =>
              handleItemClick(e, 'discontinued', 'notDiscontinued')
            }
            onDragStart={handleDragStart}
            onDrop={handleDrop}
            ref={discontinuedListRef} 
          />
        </div>
      </div>
    </div>
  );
};

export default App;
