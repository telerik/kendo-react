import * as React from 'react';
import {
    ListBox, ListBoxToolbar, processListBoxData,
    ListBoxToolbarClickEvent, ListBoxItemClickEvent
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
    const lastSelectedIndex = React.useRef<number>(0);
    const [state, setState] = React.useState({
        employees: data,
        developers: []
    });

    const handleItemClick = (event, data, connectedData) => {
        let last = lastSelectedIndex.current;
        const newData = [...state[data]];
        const current = newData.findIndex(dataItem => dataItem === event.dataItem);
    
        if (!event.nativeEvent.shiftKey) {
            lastSelectedIndex.current = last = current;
        }

        if (!event.nativeEvent.ctrlKey) {
            newData.forEach(item => (item.selected = false));
        }
        const select = !event.dataItem.selected;
        if (last <= newData.length - 1) {
            for (let i = Math.min(last, current); i <= Math.max(last, current); i++) {
                newData[i].selected = select;
            }
        }
        setState({
            ...state,
            [data]: newData,
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
            employees: result.listBoxOneData.map(item => {
                item.selected = false;
                return item;
            }),
            developers: result.listBoxTwoData.map(item => {
                item.selected = false;
                return item;
            })
        });
    }

    return (
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col'>
          <h6>Employees</h6>
          <ListBox
            style={{ height: 350, width: '100%' }}
            data={state.employees}
            textField="name"
            selectedField={SELECTED_FIELD}
            onItemClick={(e: ListBoxItemClickEvent) => handleItemClick(e, 'employees', 'developers')}
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
          <h6>Developers</h6>
          <ListBox
            style={{ height: 350, width: '100%' }}
            data={state.developers}
            textField="name"
            selectedField={SELECTED_FIELD}
            onItemClick={(e: ListBoxItemClickEvent) => handleItemClick(e, 'developers', 'employees')}
                  />
        </div>
      </div>
    </div>
    );
}

export default App;
