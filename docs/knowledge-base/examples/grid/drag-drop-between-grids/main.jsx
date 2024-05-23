
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';

import products from './products.json';

const RowRender = (properties) => {
  const {row, props, onDrop, onDragStart } = {...properties}
  const additionalProps = {
    onDragStart: (e) => onDragStart(e, props.dataItem),
    onDragOver: (e) => { e.preventDefault(); },
    onDrop: (e) => onDrop(e),
    draggable: true
  };
  return React.cloneElement(row,{...row.props, ...additionalProps}, row.props.children)
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gridData: products.slice(0, 30),
            gridDataTwo: products.slice(31, 60),
            dragFrom: '',
            dragDataItem: null
        };
    }

    handleOnDropOne = (e) => {
      if(this.state.dragFrom === 'second'){
        let newDataSecond = this.state.gridDataTwo.filter(item => item.ProductID !== this.state.dragDataItem.ProductID);
        let newDataFirst = [this.state.dragDataItem, ...this.state.gridData];
        this.setState({
          gridData: newDataFirst,
          gridDataTwo: newDataSecond
        });
      }
    }
    handleDragStartOne = (e, dataItem) => {
      this.setState({
        dragFrom: "first",
        dragDataItem: dataItem
      });
    }

    handleOnDropTwo = (e) => {
      if(this.state.dragFrom === 'first'){
        let newDataFirst = this.state.gridData.filter(item => item.ProductID !== this.state.dragDataItem.ProductID);
        let newDataSecond = [this.state.dragDataItem, ...this.state.gridDataTwo];
        this.setState({
          gridData: newDataFirst,
          gridDataTwo: newDataSecond
        });
      }
    }
    handleDragStartTwo = (e, dataItem) => {
      this.setState({
        dragFrom: "second",
        dragDataItem: dataItem
      });
    }

    rowForGridOne = (row, props) => {
      return <RowRender props={props} row={row} onDrop={this.handleOnDropOne} onDragStart={this.handleDragStartOne}/>
    }

    rowForGridTwo = (row, props) => {
      return <RowRender props={props} row={row} onDrop={this.handleOnDropTwo} onDragStart={this.handleDragStartTwo}/>
    }

    render() {
        return (
          <>
            <Grid
                style={{ height: '400px' }}
                data={this.state.gridData}
                rowRender={this.rowForGridOne}
            >
                <Column field="ProductID" title="ID" width="60px" />
                <Column field="ProductName" title="Name" width="250px" />
                <Column field="Category.CategoryName" title="CategoryName" />
                <Column field="UnitPrice" title="Price" width="80px" />
                <Column field="UnitsInStock" title="In stock" width="80px" />
            </Grid>
            <hr/>
            <Grid
                style={{ height: '400px' }}
                data={this.state.gridDataTwo}
                rowRender={this.rowForGridTwo}
            >
                <Column field="ProductID" title="ID" width="60px" />
                <Column field="ProductName" title="Name" width="250px" />
                <Column field="Category.CategoryName" title="CategoryName" />
                <Column field="UnitPrice" title="Price" width="80px" />
                <Column field="UnitsInStock" title="In stock" width="80px" />
            </Grid>
          </>
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('my-app')
);

