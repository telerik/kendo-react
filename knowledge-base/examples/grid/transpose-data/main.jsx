import React from "react";
import ReactDOM from "react-dom";
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";

const data = {
  phaseMinimumGreen: [10, 15, 10, 15, 10, 15, 10, 15, 0, 0, 0, 0, 0, 0, 0, 0],
  phasePassage: [40, 50, 40, 50, 40, 50, 40, 50, 0, 0, 0, 0, 0, 0, 0, 0],
  phaseMaximum1: [25, 35, 25, 35, 25, 35, 25, 35, 0, 0, 0, 0, 0, 0, 0, 0],
  phaseMaximum2: [30, 50, 30, 50, 30, 50, 30, 50, 0, 0, 0, 0, 0, 0, 0, 0],
  phaseYellowChange: [40, 40, 40, 40, 40, 40, 40, 40, 0, 0, 0, 0, 0, 0, 0, 0],
  phaseRedClear: [20, 20, 20, 20, 20, 20, 20, 20, 0, 0, 0, 0, 0, 0, 0, 0]
};

const transformData = data => {
  let transposeData = [];
  for (let item in data) {
    let itemArray = data[item];
    let newItem = {
      item
    };
    for (let i = 0; i < itemArray.length; i++) {
      newItem[i] = itemArray[i];
    }
    transposeData.push(newItem);
  }
  return transposeData;
};

class App extends React.Component {
  render() {
    let parsedData = transformData(data);
    return (
      <Grid data={parsedData}>
        <Column field="item" title="Phase" width="200px" />
        <Column field="1" width="50px" />
        <Column field="2" width="50px" />
        <Column field="3" width="50px" />
        <Column field="4" width="50px" />
        <Column field="5" width="50px" />
        <Column field="6" width="50px" />
        <Column field="7" width="50px" />
        <Column field="8" width="50px" />
        <Column field="9" width="50px" />
        <Column field="10" width="50px" />
        <Column field="11" width="50px" />
        <Column field="12" width="50px" />
        <Column field="13" width="50px" />
        <Column field="14" width="50px" />
        <Column field="15" width="50px" />
      </Grid>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("my-app"));
