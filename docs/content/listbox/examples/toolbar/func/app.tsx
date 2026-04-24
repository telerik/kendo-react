import * as React from 'react';
import {
    ListBox,
    ListBoxToolbar,
    processListBoxData,
    ListBoxToolbarClickEvent,
    ListBoxItemClickEvent
} from '@progress/kendo-react-listbox';

const SELECTED_FIELD = 'selected';

const data = [
    { name: 'Steven White', selected: true },
    { name: 'Nancy King', selected: false },
    { name: 'Nancy Davolio', selected: false },
    { name: 'Robert Davolio', selected: false },
    { name: 'Michael Leverling', selected: false },
    { name: 'Andrew Callahan', selected: false },
    { name: 'Michael Suyama', selected: false }
];

const App = () => {
    const [employees, setEmployees] = React.useState(data);

    const handleItemClick = (event) => {
        setEmployees(
            employees.map((item) => {
                if (item.name === event.dataItem.name) {
                    item[SELECTED_FIELD] = !item[SELECTED_FIELD];
                } else if (!event.nativeEvent.ctrlKey) {
                    item[SELECTED_FIELD] = false;
                }
                return item;
            })
        );
    };

    const handleToolBarClick = (e: ListBoxToolbarClickEvent) => {
        let toolName: string = e.toolName || '';
        let result: any = processListBoxData(employees, [], toolName, SELECTED_FIELD);
        setEmployees(result.listBoxOneData);
    };

    return (
        <div className="container d-flex justify-content-center align-items-center">
            <div className="col-6 text-center">
                <h6>Employees</h6>
                <ListBox
                    style={{ height: 400, width: '100%' }}
                    data={employees}
                    textField="name"
                    selectedField={SELECTED_FIELD}
                    onItemClick={(e: ListBoxItemClickEvent) => handleItemClick(e)}
                    toolbar={() => (
                        <ListBoxToolbar
                            tools={['moveUp', 'moveDown', 'remove']}
                            data={employees}
                            dataConnected={[]}
                            onToolClick={handleToolBarClick}
                        />
                    )}
                />
            </div>
        </div>
    );
};

export default App;
