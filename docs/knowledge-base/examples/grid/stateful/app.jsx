import React from "react";
import { withState } from "./with-state";
import { GridColumn, Grid } from "@progress/kendo-react-grid";
import products from "./shared-products.json";

const StatefulGrid = withState(Grid);

const App = () => {
  const sampleData = [
    { field1: "Chai" },
    { field1: "Chang" },
    { field1: "Aniseed Syrup" },
    { field1: "Longlife Tofu" },
  ];

  return (
    <div>
      <StatefulGrid data={products} style={{ height: "260px" }}>
        <GridColumn field="ProductID" title="Product Id" filter="numeric" />
        <GridColumn field="ProductName" title="Product Name" />
        <GridColumn
          field="UnitsInStock"
          title="Units In Stock"
          filter="numeric"
        />
      </StatefulGrid>
      <br />
      <StatefulGrid data={sampleData} pageable={false}>
        <GridColumn field="field1" title="Product Name" />
      </StatefulGrid>
    </div>
  );
};

export default App;
