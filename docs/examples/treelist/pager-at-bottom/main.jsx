import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  TreeList,
  mapTreeItem,
  extendDataItem
} from "@progress/kendo-react-treelist";

import { TreeListPager } from "./pager.jsx";

import { generateData } from "./treelist-data";

const numberOfColumns = 4;
const columnWidth = 200;
const numberOfRows = 5000;
const subItemsField = "subItems";
const expandField = "expanded";

const { columns, data } = generateData(
  numberOfColumns,
  columnWidth,
  numberOfRows,
  subItemsField
);

class App extends React.Component {
  state = {
    data: [...data],
    expanded: [],
    skip: 0,
    take: 20
  };

  onExpandChange = event => {
    const expanded = !event.value;
    const tree = [...this.state.data];

    mapTreeItem(tree, event.level, subItemsField, item =>
      extendDataItem(item, subItemsField, { [expandField]: expanded })
    );

    this.setState({
      data: tree,
      expanded: event.value
        ? this.state.expanded.filter(id => id !== event.dataItem.id)
        : [...this.state.expanded, event.dataItem.id]
    });
  };

  onPageChange = event => {
    const { skip, take } = event;
    this.setState({ skip, take });
  };

  getTotal = () => {
    let total = numberOfRows;
    this.state.data.map(i => {
      if (i.expanded == true) {
        total = total + i.subItems.length;
      }
    });
    return total;
  };

  render() {
    return (
      <>
        <TreeList
          style={{ height: 500, overflow: "auto" }}
          onPageChange={this.onPageChange}
          skip={this.state.skip}
          take={this.state.take}
          data={this.state.data}
          expandField={expandField}
          subItemsField={subItemsField}
          onExpandChange={this.onExpandChange}
          columns={columns}
        />
        <TreeListPager
          skip={this.state.skip}
          take={this.state.take}
          className={"k-grid-pager"}
          onPageChange={this.onPageChange}
          total={this.getTotal()}
        />
      </>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("my-app"));
