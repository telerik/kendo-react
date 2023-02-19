import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  TreeList,
  filterBy,
  orderBy,
  extendDataItem,
  mapTree
} from "@progress/kendo-react-treelist";

import { ColumnMenuCustomDateColumn } from "./dateColumnMenu.jsx";

import employees from "./treeListData";

const subItemsField = "employees";
const expandField = "expanded";

const columns = [
  {
    field: "name",
    title: "Name",
    width: 320,
    expandable: true
  },
  {
    field: "hireDate",
    title: "Hire Date",
    width: 280,
    format: "{0:d}",
    columnMenu: ColumnMenuCustomDateColumn
  },
  {
    field: "timeInPosition",
    title: "Year(s) in Position",
    width: 280
  },
  {
    field: "fullTime",
    title: "Full Time",
    width: 190
  }
];

class App extends React.Component {
  state = {
    data: [...employees],
    filter: [],
    sort: [],
    expanded: [1, 2, 32]
  };

  onExpandChange = e => {
    this.setState({
      expanded: e.value
        ? this.state.expanded.filter(id => id !== e.dataItem.id)
        : [...this.state.expanded, e.dataItem.id]
    });
  };

  onSortChange = event => {
    this.setState({
      sort: event.sort
    });
  };

  handleFilterChange = event => {
    this.setState({
      filter: event.filter
    });
  };

  addExpandField = dataTree => {
    const expanded = this.state.expanded;
    return mapTree(dataTree, subItemsField, item =>
      extendDataItem(item, subItemsField, {
        [expandField]: expanded.includes(item.id)
      })
    );
  };

  processData = () => {
    const { data, filter, sort } = this.state;

    const dataTree = orderBy(
      filterBy(data, filter, subItemsField),
      sort,
      subItemsField
    );
    return this.addExpandField(dataTree);
  };

  render() {
    return (
      <TreeList
        style={{ maxHeight: "590px", overflow: "auto" }}
        expandField={expandField}
        subItemsField={subItemsField}
        onExpandChange={this.onExpandChange}
        data={this.processData()}
        columns={columns}
        columnMenuFilter={this.state.filter}
        onColumnMenuFilterChange={this.handleFilterChange}
        onSortChange={this.onSortChange}
        sort={this.state.sort}
      />
    );
  }
}

ReactDOM.render(<App />, document.querySelector("my-app"));
