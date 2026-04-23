import * as React from 'react';
import {
    ListBox,
    ListBoxToolbar,
    processListBoxData,
    ListBoxToolbarClickEvent,
    ListBoxItemClickEvent
} from '@progress/kendo-react-listbox';
import { data } from './shared-lb-data';

const SELECTED_FIELD = 'selected';

const App = () => {
    const [state, setState] = React.useState({
        employees: data,
        developers: []
    });

    const handleItemClick = (event, data, connectedData) => {
        setState({
            ...state,
            [data]: state[data].map((item) => {
                if (item.name === event.dataItem.name) {
                    item[SELECTED_FIELD] = !item[SELECTED_FIELD];
                } else if (!event.nativeEvent.ctrlKey) {
                    item[SELECTED_FIELD] = false;
                }
                return item;
            }),
            [connectedData]: state[connectedData].map((item) => {
                item[SELECTED_FIELD] = false;
                return item;
            })
        });
    };

    const handleToolBarClick = (e: ListBoxToolbarClickEvent) => {
        let toolName: string = e.toolName || '';
        let result: any = processListBoxData(state.employees, state.developers, toolName, SELECTED_FIELD);
        setState({
            ...state,
            employees: result.listBoxOneData,
            developers: result.listBoxTwoData
        });
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col k-pr-2">
                    <h6>Employees</h6>
                    <ListBox
                        style={{ height: 400, width: '100%' }}
                        data={state.employees}
                        textField="name"
                        selectedField={SELECTED_FIELD}
                        onItemClick={(e: ListBoxItemClickEvent) => handleItemClick(e, 'employees', 'developers')}
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
                                        'remove'
                                    ]}
                                    data={state.employees}
                                    dataConnected={state.developers}
                                    onToolClick={handleToolBarClick}
                                />
                            );
                        }}
                    />
                </div>
                <div className="col k-pl-0">
                    <h6>Developers</h6>
                    <ListBox
                        style={{ height: 400, width: '100%' }}
                        data={state.developers}
                        textField="name"
                        selectedField={SELECTED_FIELD}
                        onItemClick={(e: ListBoxItemClickEvent) => handleItemClick(e, 'developers', 'employees')}
                    />
                </div>
            </div>
        </div>
    );
};

export default App;
