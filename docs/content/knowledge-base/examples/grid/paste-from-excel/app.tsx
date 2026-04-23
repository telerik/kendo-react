import React, { useState, useCallback } from "react";
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";

const App = () => {
  const [data, setData] = useState<any[]>([]);

  const handlePaste = useCallback((e: React.ClipboardEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.tagName && /(input|textarea)/i.test(target.tagName)) return;
    const text = e.clipboardData.getData("text");
    const rows = text.split("\n").filter((r) => r.trim().length > 0);
    const result = rows.map((row) => {
      const cells = row.split("\t");
      return {
        ProductID: cells[0],
        ProductName: cells[1],
        Category: { CategoryName: cells[2] },
        UnitPrice: cells[3],
        UnitsInStock: cells[4],
      };
    });
    setData(result);
  }, []);

  return (
    <>
      <ol>
        <li>
          Select the sample TSV snippet below:
          <pre>{`1\tChai\tBeverages\t18\t39
2\tChang\tBeverages\t19\t17
3\tAniseed Syrup\tCondiments\t10\t13
4\tChef Anton's Cajun Seasoning\tCondiments\t22\t53
5\tChef Anton's Gumbo Mix\tCondiments\t21.35\t0
6\tGrandma's Boysenberry Spread\tCondiments\t25\t120
7\tUncle Bob's Organic Dried Pears\tProduce\t30\t15
`}</pre>
        </li>
        <li>Click on the Grid and paste it with Ctrl+V or ⌘+V</li>
      </ol>
      <div onPaste={handlePaste}>
        <Grid style={{ height: "400px" }} data={data}>
          <Column field="ProductID" title="ID" width="40px" />
          <Column field="ProductName" title="Name" width="250px" />
          <Column field="Category.CategoryName" title="CategoryName" />
          <Column field="UnitPrice" title="Price" />
          <Column field="UnitsInStock" title="In stock" />
        </Grid>
      </div>
    </>
  );
};

export default App;
