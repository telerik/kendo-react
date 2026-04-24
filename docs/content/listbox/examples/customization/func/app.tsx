import * as React from 'react';
import {
    ListBox,
    ListBoxToolbar,
    processListBoxData,
    processListBoxDragAndDrop,
    ListBoxItemClickEvent,
    ListBoxToolbarClickEvent,
    ListBoxDragEvent
} from '@progress/kendo-react-listbox';

import products from './shared-lb-products';

const parsedProducts = products.map((product) => {
    product.selected = false;
    return product;
});

const MyCustomItem = (props) => {
    let { dataItem, selected, ...others } = props;
    return (
        <li {...others}>
            <div>
                <span style={{ fontWeight: 'bold' }}>{props.dataItem.ProductName}</span>
                <br />
                <span>Price: {props.dataItem.UnitPrice}$</span>
            </div>
        </li>
    );
};

const SELECTED_FIELD = 'selected';

const App = () => {
    const [state, setState] = React.useState<any>({
        notDiscontinued: parsedProducts.filter((product) => !product.Discontinued),
        discontinued: parsedProducts.filter((product) => product.Discontinued),
        draggedItem: {}
    });

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
            })
        });
    };

    const handleToolBarClick = (e: ListBoxToolbarClickEvent) => {
        let toolName = e.toolName || '';
        let result = processListBoxData(state.notDiscontinued, state.discontinued, toolName, SELECTED_FIELD);
        setState({
            ...state,
            notDiscontinued: result.listBoxOneData,
            discontinued: result.listBoxTwoData
        });
    };

    const handleDragStart = (e: ListBoxDragEvent) => {
        setState({
            ...state,
            draggedItem: e.dataItem
        });
    };

    const handleDrop = (e: ListBoxDragEvent) => {
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
            discontinued: result.listBoxTwoData
        });
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
                        onItemClick={(e: ListBoxItemClickEvent) =>
                            handleItemClick(e, 'notDiscontinued', 'discontinued')
                        }
                        onDragStart={handleDragStart}
                        onDrop={handleDrop}
                        item={MyCustomItem}
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
                        onItemClick={(e: ListBoxItemClickEvent) =>
                            handleItemClick(e, 'discontinued', 'notDiscontinued')
                        }
                        onDragStart={handleDragStart}
                        onDrop={handleDrop}
                        item={MyCustomItem}
                    />
                </div>
            </div>
        </div>
    );
};

export default App;
