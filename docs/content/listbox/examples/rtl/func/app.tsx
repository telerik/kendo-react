import * as React from 'react';
import { 
    ListBox, ListBoxToolbar, processListBoxData,
    processListBoxDragAndDrop, ListBoxItemClickEvent,
    ListBoxDragEvent, ListBoxToolbarClickEvent
} from '@progress/kendo-react-listbox';

const data = [
    { name: 'Steven White', selected: true },
    { name: 'Nancy King', selected: false },
    { name: 'Nancy Davolio', selected: false },
    { name: 'Robert Davolio', selected: false },
    { name: 'Michael Leverling', selected: false },
    { name: 'Andrew Callahan', selected: false },
    { name: 'Michael Suyama', selected: false }
];

const SELECTED_FIELD = 'selected';

const App = () => {
    const [state, setState] = React.useState({
        employees: data,
        developers: [],
        draggedItem: {}
    });
    const handleItemClick = (event, data, connectedData) => {
        setState({
            ...state,
            [data]: state[data].map(item => {
                if (item.name === event.dataItem.name) {
                    item[SELECTED_FIELD] = !item[SELECTED_FIELD];
                } else if (!event.nativeEvent.ctrlKey) {
                    item[SELECTED_FIELD] = false;
                }
                return item;
            }),
            [connectedData]: state[connectedData].map(item => {
                item[SELECTED_FIELD] = false;
                return item;
            })
        });
    }

    const handleToolBarClick = (e: ListBoxToolbarClickEvent) => {
        let toolName: string = e.toolName || '';
        let result: any = processListBoxData(state.employees, state.developers, toolName, SELECTED_FIELD);
        setState({
            ...state,
            employees: result.listBoxOneData,
            developers: result.listBoxTwoData
        });
    }

    const handleDragStart = (e: ListBoxDragEvent) => {
        setState({
            ...state,
            draggedItem: e.dataItem
        });
    }

    const handleDrop = (e: ListBoxDragEvent) => {
        let result: any = processListBoxDragAndDrop(state.employees, state.developers, state.draggedItem, e.dataItem, 'name');
        setState({
            ...state,
            employees: result.listBoxOneData,
            developers: result.listBoxTwoData
        });
    }

    return (
    <div className='k-rtl'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col'>
            <h6 style={{textAlign: 'start'}}>Employees</h6>
            <ListBox
              style={{ height: 350, width: '100%' }}
              data={state.employees}
              textField="name"
              selectedField={SELECTED_FIELD}
              onItemClick={(e: ListBoxItemClickEvent) => handleItemClick(e, 'employees', 'developers')}
              onDragStart={handleDragStart}
              onDrop={handleDrop}
              toolbar={() => {
                              return (
                                <ListBoxToolbar
                                  tools={['moveUp', 'moveDown', 'transferTo', 'transferFrom', 'transferAllTo', 'transferAllFrom', 'remove']}
                                  data={state.employees}
                                  dataConnected={state.developers}
                                  onToolClick={handleToolBarClick}
                                  />
                              );
                          }}
                      />
          </div>
          <div className='col'>
            <h6 style={{textAlign: 'start'}}>Developers</h6>
            <ListBox
              style={{ height: 350, width: '100%' }}
              data={state.developers}
              textField="name"
              selectedField={SELECTED_FIELD}
              onItemClick={(e: ListBoxItemClickEvent) => handleItemClick(e, 'developers', 'employees')}
              onDragStart={handleDragStart}
              onDrop={handleDrop}
                      />
          </div>
        </div>
      </div>
    </div>
    );
}


export default App;
