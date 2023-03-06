
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { Popup } from '@progress/kendo-react-popup';
import { Menu, MenuItem } from '@progress/kendo-react-layout';

import products from './products.json';

class App extends React.Component {
    state = {
        gridData: products,
        open: false
    };

    blurTimeoutRef;
    menuWrapperRef;

    rowRender = (trElement, dataItem) => {
        const trProps = {
            ...trElement.props,
            onContextMenu: (e) => {
                e.preventDefault();
                this.handleContextMenuOpen(e, dataItem.dataItem);
            }
        };
        return React.cloneElement(trElement, { ...trProps }, trElement.props.children);
    }

    handleContextMenuOpen = (e, dataItem) => {
        this.dataItem = dataItem;
        this.dataItemIndex = this.state.gridData.findIndex(p => (p.ProductID === this.dataItem.ProductID));
        this.offset = { left: e.clientX, top: e.clientY };
        this.setState({
            open: true
        });
    }

    handleMoveUp = () => {
        let data = [...this.state.gridData];
        if (this.dataItemIndex !== 0) {
            data.splice(this.dataItemIndex, 1);
            data.splice(this.dataItemIndex - 1, 0, this.dataItem);
            this.setState({ gridData: data });
        }
    }

    handleMoveDown = () => {
        let data = [...this.state.gridData];
        if (this.dataItemIndex < this.state.gridData.length) {
            data.splice(this.dataItemIndex, 1);
            data.splice(this.dataItemIndex + 1, 0, this.dataItem);
            this.setState({ gridData: data });
        }
    }

    handleDelete = () => {
        let data = [...this.state.gridData];
        data.splice(this.dataItemIndex, 1);
        this.setState({
            gridData: data
        });
    }

    handleOnSelect = (e) => {
        switch (e.item.text) {
            case "Move Up":
                this.handleMoveUp();
                break;
            case "Move Down":
                this.handleMoveDown();
                break;
            case "Delete":
                this.handleDelete();
                break;
            default:
        }
        this.setState({
            open: false
        })
    }

    onFocusHandler = () => {
        clearTimeout(this.blurTimeoutRef);
        this.blurTimeoutRef = undefined;
    };

    onBlurTimeout = () => {
        this.setState({
            open: false
        });

        this.blurTimeoutRef = undefined;
    };

    onBlurHandler = event => {
        clearTimeout(this.blurTimeoutRef);
        this.blurTimeoutRef = setTimeout(this.onBlurTimeout);
    };

    onPopupOpen = () => {
        this.menuWrapperRef.querySelector('[tabindex]').focus();
    };

    render() {
        return (
            <div>
                <Popup
                    offset={this.offset}
                    show={this.state.open}
                    open={this.onPopupOpen}
                    popupClass={'popup-content'}
                >
                    <div
                        onFocus={this.onFocusHandler}
                        onBlur={this.onBlurHandler}
                        tabIndex={-1}
                        ref={el => (this.menuWrapperRef = el)}
                    >
                    <Menu vertical={true} style={{ display: 'inline-block' }} onSelect={this.handleOnSelect}>
                        <MenuItem text="Move Up" />
                        <MenuItem text="Move Down" />
                        <MenuItem text="Delete" />
                    </Menu>
                    </div>
                </Popup>
            <Grid
                style={{ height: '400px' }}
                data={this.state.gridData}
                rowRender={this.rowRender}
            >
                <Column field="ProductID" title="ID" width="40px" />
                <Column field="ProductName" title="Name" width="250px" />
                <Column field="Category.CategoryName" title="CategoryName" />
                <Column field="UnitPrice" title="Price" width="80px" />
                <Column field="UnitsInStock" title="In stock" width="80px" />
            </Grid>
            </div >
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('my-app')
);

