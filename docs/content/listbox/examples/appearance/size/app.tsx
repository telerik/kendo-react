import * as React from 'react';
import {
    ListBox,
    ListBoxToolbar,
    processListBoxData,
    ListBoxToolbarClickEvent,
    ListBoxItemClickEvent
} from '@progress/kendo-react-listbox';
import { Label } from '@progress/kendo-react-labels';

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
    // Small ListBox state
    const [stateSmall, setStateSmall] = React.useState(data.map((item) => ({ ...item })));

    // Medium ListBox state
    const [stateMedium, setStateMedium] = React.useState(data.map((item) => ({ ...item })));

    // Large ListBox state
    const [stateLarge, setStateLarge] = React.useState(data.map((item) => ({ ...item })));

    const handleItemClick = (event, state, setState) => {
        setState(
            state.map((item) => {
                if (item.name === event.dataItem.name) {
                    item[SELECTED_FIELD] = !item[SELECTED_FIELD];
                } else if (!event.nativeEvent.ctrlKey) {
                    item[SELECTED_FIELD] = false;
                }
                return item;
            })
        );
    };

    const handleToolBarClick = (state, setState) => (e: ListBoxToolbarClickEvent) => {
        const toolName: string = e.toolName || '';
        const result: any = processListBoxData(state, [], toolName, SELECTED_FIELD);
        setState(result.listBoxOneData);
    };

    return (
        <div className="row">
            {/* Small Size */}
            <div className="col-12 col-md-4 mb-4">
                <Label>Small</Label>
                <ListBox
                    style={{ height: 300, width: '100%' }}
                    size="small"
                    data={stateSmall}
                    textField="name"
                    selectedField={SELECTED_FIELD}
                    onItemClick={(e: ListBoxItemClickEvent) => handleItemClick(e, stateSmall, setStateSmall)}
                    toolbar={() => {
                        return (
                            <ListBoxToolbar
                                size="small"
                                tools={['moveUp', 'moveDown', 'remove']}
                                data={stateSmall}
                                dataConnected={[]}
                                onToolClick={handleToolBarClick(stateSmall, setStateSmall)}
                            />
                        );
                    }}
                />
            </div>

            {/* Medium Size */}
            <div className="col-12 col-md-4 mb-4">
                <Label>Medium</Label>
                <ListBox
                    style={{ height: 300, width: '100%' }}
                    size="medium"
                    data={stateMedium}
                    textField="name"
                    selectedField={SELECTED_FIELD}
                    onItemClick={(e: ListBoxItemClickEvent) => handleItemClick(e, stateMedium, setStateMedium)}
                    toolbar={() => {
                        return (
                            <ListBoxToolbar
                                size="medium"
                                tools={['moveUp', 'moveDown', 'remove']}
                                data={stateMedium}
                                dataConnected={[]}
                                onToolClick={handleToolBarClick(stateMedium, setStateMedium)}
                            />
                        );
                    }}
                />
            </div>

            {/* Large Size */}
            <div className="col-12 col-md-4 mb-4">
                <Label>Large</Label>
                <ListBox
                    style={{ height: 300, width: '100%' }}
                    size="large"
                    data={stateLarge}
                    textField="name"
                    selectedField={SELECTED_FIELD}
                    onItemClick={(e: ListBoxItemClickEvent) => handleItemClick(e, stateLarge, setStateLarge)}
                    toolbar={() => {
                        return (
                            <ListBoxToolbar
                                size="large"
                                tools={['moveUp', 'moveDown', 'remove']}
                                data={stateLarge}
                                dataConnected={[]}
                                onToolClick={handleToolBarClick(stateLarge, setStateLarge)}
                            />
                        );
                    }}
                />
            </div>
        </div>
    );
};

export default App;
