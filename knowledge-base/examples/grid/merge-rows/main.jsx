import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';

import products from './products.json';

const updateItem = (item) => {
  let index = products.findIndex(
    (record) => record.ProductID === item.ProductID
  );
  products[index] = item;
  return products;
};

// dummy test with even odd merged cells
// products.forEach((p) => {
//   p.discontinuedCellRowSpan = p.ProductID % 2 !== 0 ? 2 : undefined;
// });

// merge cells with the same value in the 'Discontinued' column
let looped = 1;
for (let i = 0; i < products.length; i += looped) {
  let rowSpan = 1;
  looped = 1;
  for (let j = i + 1; j < products.length; j++) {
    if (products[i].Discontinued === products[j].Discontinued) {
      looped++;
      rowSpan++;
    } else {
      break;
    }
  }

  // add special property for the 'Discontinued' column cells rowSpan
  products[i].discontinuedCellRowSpan =
    rowSpan === 1 ? (looped === 1 ? 1 : undefined) : rowSpan;
}

class App extends React.Component {
  state = {
    gridData: products,
  };

  getItemIndex = (dataItem) => {
    return this.state.gridData.findIndex(
      (record) => record.ProductID === dataItem.ProductID
    );
  };

  hoverMergedCellByIndex = (index, hover) => {
    let currentIndex = index;
    let currentDataItem = this.state.gridData[currentIndex];
    while (!currentDataItem.discontinuedCellRowSpan) {
      currentIndex--;
      currentDataItem = this.state.gridData[currentIndex];
    }
    // add special property for the 'Discontinued' column cells hover
    currentDataItem.discontinuedClassName = hover ? 'k-hover' : undefined;
    this.update(currentDataItem);
  };

  updateNextItems = (index, count, hover) => {
    for (let i = index; i < index + count; i++) {
      const dataItem = this.state.gridData[i];
      dataItem.className = hover ? 'k-hover' : undefined;
      this.update(dataItem);
    }
  };

  handleMergedHover = (dataItem, rowSpanNumber, hover) => {
    const index = this.getItemIndex(dataItem);
    this.updateNextItems(index, rowSpanNumber, hover);
  };

  handleCellHover = (dataItem, hover) => {
    if (dataItem.discontinuedCellRowSpan) {
      return;
    }
    let index = this.getItemIndex(dataItem);
    this.hoverMergedCellByIndex(index, hover);
  };

  update = (dataItem) => {
    const gridData = updateItem(dataItem);
    this.setState({ gridData });
  };

  cellRender = (cell, props) => {
    const { dataItem, field } = props;

    if (field === 'Discontinued') {
      if (dataItem.discontinuedCellRowSpan) {
        return (
          <td
            {...cell.props}
            rowSpan={dataItem.discontinuedCellRowSpan}
            class={dataItem.className || dataItem.discontinuedClassName}
            onMouseOver={() => {
              this.handleMergedHover(
                dataItem,
                dataItem.discontinuedCellRowSpan,
                true
              );
            }}
            onMouseOut={() => {
              this.handleMergedHover(
                dataItem,
                dataItem.discontinuedCellRowSpan,
                false
              );
            }}
          >
            {cell.props.children}
          </td>
        );
      } else if (dataItem.discontinuedCellRowSpan === 1) {
        return <td {...cell.props}>{cell.props.children}</td>;
      } else {
        return null;
      }
    }
    return (
      <td
        {...cell.props}
        className={dataItem.className}
        colSpan={props.colSpan}
        onMouseOver={() => {
          this.handleCellHover(props.dataItem, true);
        }}
        onMouseOut={() => {
          this.handleCellHover(props.dataItem, false);
        }}
      >
        {cell.props.children}
      </td>
    );
  };

  render() {
    return (
      <div>
        <Grid
          style={{ height: '700px' }}
          data={this.state.gridData}
          cellRender={this.cellRender}
        >
          <Column field="ProductID" title="ID" width="60px" />
          <Column field="ProductName" title="Name" width="250px" />
          <Column field="Category.CategoryName" title="CategoryName" />
          <Column field="UnitPrice" title="Price" width="80px" />
          <Column field="UnitsInStock" title="In stock" width="80px" />
          <Column field="Discontinued" width="120px" />
        </Grid>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('my-app'));
