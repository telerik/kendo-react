import * as React from 'react';

import {
    ListBox,
    ListBoxToolbar,
    processListBoxData,
    ListBoxToolbarClickEvent,
    ListBoxItemClickEvent,
    ListBoxItemNavigateEvent,
    ListBoxItemSelectEvent,
} from '@progress/kendo-react-listbox';

const data = [
    {
        name: 'Steven White',
        selected: false
    },
    {
        name: 'Nancy King',
        selected: false
    },
    {
        name: 'Nancy Davolio',
        selected: false
    },
    {
        name: 'Robert Davolio',
        selected: false
    },
    {
        name: 'Michael Leverling',
        selected: false
    },
    {
        name: 'Andrew Callahan',
        selected: false
    },
    {
        name: 'Michael Suyama',
        selected: false
    }
];

const developers = [
    {
        name: 'Gosho',
        selected: false
    },
    {
        name: 'Tosho',
        selected: false
    },
]

const SELECTED_FIELD = 'selected';

const App = () => {
    const [state, setState] = React.useState({
        employees: data,
        developers: developers,
    });

    const handleItemClick = (event, d, connectedData) => {
        setState({
            ...state,
            [d]: state[d].map(item => {
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
    };

    const handleToolBarClick = (e: ListBoxToolbarClickEvent) => {
        const toolName: string = e.toolName || '';
        const result: any = processListBoxData(state.employees, state.developers, toolName, SELECTED_FIELD);
        setState({
            ...state,
            employees: result.listBoxOneData,
            developers: result.listBoxTwoData
        });
    };

    const handleItemNavigate = (e: ListBoxItemNavigateEvent) => {
        const actionName: string = e.actionName || '';
        const result: any = processListBoxData(state.employees, state.developers, actionName, SELECTED_FIELD);
        setState({
            ...state,
            employees: result.listBoxOneData,
            developers: result.listBoxTwoData
        });
    };

    return (
            <div className='container'>
                <div className='row justify-content-center' style={{display: 'flex', justifyContent: 'center'}}>
                    <div className='k-pr-2' style={{ minWidth: '400px' }}>
                        <h6>Employees</h6>
                        <ListBox
                            style={{ height: 400, width: '100%' }}
                            data={state.employees}
                            textField="name"
                            selectedField={SELECTED_FIELD}
                            onItemClick={(e: ListBoxItemClickEvent) => handleItemClick(e, 'employees', 'developers')}
                            onItemSelect={(e: ListBoxItemSelectEvent) => handleItemClick(e, 'employees', 'developers')}
                            onKeyboardNavigate={(e: ListBoxItemNavigateEvent) => handleItemNavigate(e)}
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
                    <div className='k-pl-0' style={{ minWidth: '400px' }}>
                        <h6>Developers</h6>
                        <ListBox
                            style={{ height: 400, width: '100%' }}
                            data={state.developers}
                            textField="name"
                            selectedField={SELECTED_FIELD}
                            onItemClick={(e: ListBoxItemClickEvent) => handleItemClick(e, 'developers', 'employees')}
                            onItemSelect={(e: ListBoxItemSelectEvent) => handleItemClick(e, 'developers', 'employees')}
                            onKeyboardNavigate={(e: ListBoxItemNavigateEvent) => handleItemNavigate(e)}
                        />
                    </div>
                </div>
            </div>
    );
};

export default App;
