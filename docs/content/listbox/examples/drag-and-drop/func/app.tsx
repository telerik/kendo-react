import * as React from 'react';
import { ListBox, processListBoxDragAndDrop, ListBoxDragEvent } from '@progress/kendo-react-listbox';
import products from './shared-lb-products';

const App = () => {
    const [state, setState] = React.useState({
        notDiscontinued: products.filter((product) => !product.Discontinued),
        discontinued: products.filter((product) => product.Discontinued),
        draggedItem: {}
    });

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
        <>
            <div className="example">
                <div className="demo-section k-content wide">
                    <div>
                        <img
                            src="https://demos.telerik.com/kendo-ui/content/web/listbox/arrow-left2right.png"
                            alt="KendoReact ListBox Left Arrow Image"
                            className="arrow"
                        />
                        <br />
                        <ListBox
                            data={state.notDiscontinued}
                            textField="ProductName"
                            onDragStart={handleDragStart}
                            onDrop={handleDrop}
                        />
                        <ListBox
                            data={state.discontinued}
                            textField="ProductName"
                            style={{ marginLeft: '12px' }}
                            onDragStart={handleDragStart}
                            onDrop={handleDrop}
                        />
                        <img
                            src="https://demos.telerik.com/kendo-ui/content/web/listbox/arrow-right2left.png"
                            alt="KendoReact ListBox Right Arrow Image"
                            className="arrow"
                        />
                    </div>
                </div>
            </div>
            <style>
                {`.arrow {
                        padding: 8px 0 5px 238px;
                    }
                    .example .demo-section {
                        max-width: none;
                        width: 640px;
                    }

                    .example .k-listbox {
                        width: 275px;
                        height: 310px;
                    }`}
            </style>
        </>
    );
};

export default App;
