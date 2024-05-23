import * as React from 'react';
import {
  ListBox,
  ListBoxToolbar,
  processListBoxData,
  processListBoxDragAndDrop,
} from '@progress/kendo-react-listbox';
const data = [
  {
    name: 'Steven White',
    selected: true,
  },
  {
    name: 'Nancy King',
    selected: false,
  },
  {
    name: 'Nancy Davolio',
    selected: false,
  },
  {
    name: 'Robert Davolio',
    selected: false,
  },
  {
    name: 'Michael Leverling',
    selected: false,
  },
  {
    name: 'Andrew Callahan',
    selected: false,
  },
  {
    name: 'Michael Suyama',
    selected: false,
  },
];
const SELECTED_FIELD = 'selected';
const App = () => {
  const [state, setState] = React.useState({
    employees: data,
    developers: [],
    draggedItem: {},
  });
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const updateState = (selectedIndex, newData) => {
    setSelectedIndex(selectedIndex);
    setState({ ...state, employees: newData });
  };
  const keyChange = (e) => {
    let newSelectedIndex;
    const newData = state.employees;
    if (e.key === 'ArrowDown') {
      newSelectedIndex = selectedIndex + 1;
      if (newSelectedIndex < newData.length) {
        newData[newSelectedIndex - 1].selected = false;
        newData[newSelectedIndex].selected = true;
        updateState(newSelectedIndex, newData);
      }
    }
    if (e.key === 'ArrowUp') {
      newSelectedIndex = selectedIndex - 1;
      if (newSelectedIndex >= 0) {
        if (newSelectedIndex + 1 < newData.length) {
          newData[newSelectedIndex + 1].selected = false;
        }
        newData[newSelectedIndex].selected = true;
        updateState(newSelectedIndex, newData);
      }
    }
    if (e.key === 'Enter') {
      handleToolBarClick('', 'transferTo');
      newData[selectedIndex].selected = false;
    }
  };

  const handleItemClick = (event, data, connectedData) => {
    setState({
      ...state,
      [data]: state[data].map((item, index) => {
        if (item.name === event.dataItem.name) {
          setSelectedIndex(index);
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
  const handleToolBarClick = (e, tool) => {
    let toolName = e.toolName || tool;
    let result = processListBoxData(
      state.employees,
      state.developers,
      toolName,
      SELECTED_FIELD
    );
    setState({
      ...state,
      employees: result.listBoxOneData,
      developers: result.listBoxTwoData,
    });
  };
  const handleDragStart = (e) => {
    setState({
      ...state,
      draggedItem: e.dataItem,
    });
  };
  const handleDrop = (e) => {
    let result = processListBoxDragAndDrop(
      state.employees,
      state.developers,
      state.draggedItem,
      e.dataItem,
      'name'
    );
    setState({
      ...state,
      employees: result.listBoxOneData,
      developers: result.listBoxTwoData,
    });
  };
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col k-pr-2">
          <h6>Employees</h6>
          <div onKeyDown={keyChange}>
            <ListBox
              style={{
                height: 400,
                width: '100%',
              }}
              data={state.employees}
              textField="name"
              selectedField={SELECTED_FIELD}
              onItemClick={(e) => handleItemClick(e, 'employees', 'developers')}
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
                    data={state.employees}
                    dataConnected={state.developers}
                    onToolClick={handleToolBarClick}
                  />
                );
              }}
            />
          </div>
        </div>
        <div className="col k-pl-0">
          <h6>Developers</h6>
          <ListBox
            style={{
              height: 400,
              width: '100%',
            }}
            data={state.developers}
            textField="name"
            selectedField={SELECTED_FIELD}
            onItemClick={(e) => handleItemClick(e, 'developers', 'employees')}
            onDragStart={handleDragStart}
            onDrop={handleDrop}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
