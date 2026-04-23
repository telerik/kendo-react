import * as React from 'react';
import { ListBox, ListBoxToolbar, processListBoxData,
    processListBoxDragAndDrop, ListBoxDragEvent,
    ListBoxItemClickEvent, ListBoxToolbarClickEvent
} from '@progress/kendo-react-listbox';

const toDo = [
    { name: 'SpreadSheet', selected: false },
    { name: 'PivotGrid', selected: false }
];

const inDevelopment = [
    { name: 'TileLayout', selected: false },
    { name: 'MultiColumnComboBox', selected: false }
];

const shipped = [
    { name: 'Grid', selected: false },
    { name: 'Scheduler', selected: false }
];

const SELECTED_FIELD = 'selected';

const toolbarTools = ['moveUp', 'moveDown', 'transferTo', 'transferFrom', 'transferAllTo', 'transferAllFrom', 'remove']

const App = () => {
    const [state, setState] = React.useState<any>({
        toDo,
        inDevelopment,
        shipped,
        draggedItem: {}
    });

    const handleItemClick = (event, data, connectedData, secondConnectedData) => {
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
            }),
            [secondConnectedData]: state[secondConnectedData].map(item => {
                item[SELECTED_FIELD] = false;
                return item;
            })
        });
    }

    const handleToolBarClick = (e, data, connectedData) => {
        let result = processListBoxData(state[data], state[connectedData], e.toolName, SELECTED_FIELD);
        setState({
            ...state,
            [data]: result.listBoxOneData,
            [connectedData]: result.listBoxTwoData
        });
    }

    const handleDragStart = (e: ListBoxDragEvent) => {
        let target: any = e.target;
        e.dataItem.dataCollection = target.props.name || '';
        setState({
            ...state,
            draggedItem: e.dataItem
        });
    }

    const handleDrop = (e: ListBoxDragEvent) => {
        let target: any = e.target;
        let dragItemData = state.draggedItem.dataCollection;
        let dropItemData = target.props.name;
        let result = processListBoxDragAndDrop(state[dragItemData], state[dropItemData], state.draggedItem, e.dataItem, 'name');
        setState({
            ...state,
            [dragItemData]: result.listBoxOneData,
            [dropItemData]: result.listBoxTwoData
        });
    }
    return (
      <div className='container'>
        <div className='row justify-content-between'>
          <div className='col'>
            <h6>To Do </h6>
            <ListBox
              style={{ height: 350, width: '100%' }}
              data={state.toDo}
              textField="name"
              selectedField={SELECTED_FIELD}
              onItemClick={(e: ListBoxItemClickEvent) => handleItemClick(e, 'toDo', 'inDevelopment', 'shipped')}
              onDragStart={handleDragStart}
              onDrop={handleDrop}
              // @ts-ignore: for specific use
              name='toDo'
              toolbar={() => {
                              return (
                                <ListBoxToolbar
                                  tools={toolbarTools}
                                  data={state.toDo}
                                  dataConnected={state.inDevelopment}
                                  onToolClick={(e: ListBoxToolbarClickEvent) => handleToolBarClick(e, 'toDo', 'inDevelopment')}
                                  />
                              );
                          }}
                      />
          </div>
          <div className='col'>
            <h6>In Development</h6>
            <ListBox
              style={{ height: 350, width: '100%' }}
              data={state.inDevelopment}
              textField="name"
              selectedField={SELECTED_FIELD}
              onItemClick={(e: ListBoxItemClickEvent) => handleItemClick(e, 'inDevelopment', 'toDo', 'shipped')}
              onDragStart={handleDragStart}
              onDrop={handleDrop}
              // @ts-ignore: for specific use
              name='inDevelopment'
              toolbar={() => {
                              return (
                                <ListBoxToolbar
                                  tools={toolbarTools}
                                  data={state.inDevelopment}
                                  dataConnected={state.shipped}
                                  onToolClick={(e: ListBoxToolbarClickEvent) => handleToolBarClick(e, 'inDevelopment', 'shipped')}
                                  />
                              );
                          }}
                      />
          </div>
          <div className='col'>
            <h6>Shipped</h6>
            <ListBox
              style={{ height: 350, width: '100%' }}
              data={state.shipped}
              textField="name"
              selectedField={SELECTED_FIELD}
              onItemClick={(e: ListBoxItemClickEvent) => handleItemClick(e, 'shipped', 'inDevelopment', 'toDo')}
              onDragStart={handleDragStart}
              onDrop={handleDrop}
              // @ts-ignore: for specific use
              name='shipped'
                      />
          </div>
        </div>
      </div>
    );
}

export default App;
