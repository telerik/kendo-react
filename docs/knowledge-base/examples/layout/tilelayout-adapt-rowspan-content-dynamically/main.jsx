import * as React from "react";
import * as ReactDOM from "react-dom";
import { TileLayout } from "@progress/kendo-react-layout";
import { Grid } from "@progress/kendo-react-grid";
import products from "./products.json";
const initialDataState = {
  skip: 0,
  take: 10,
};
const App = () => {
  const [data, setData] = React.useState([
    {
      col: 1,
      colSpan: 3,
      rowSpan: 3,
    },
  ]);

  const rowHeight = 200;

  const calculateRowSpan = (contentHeight) => {
    const minHeight = Math.max(contentHeight, rowHeight);
    return Math.ceil(minHeight / rowHeight);
  };

  const adjustRowSpanBasedOnContent = () => {
    const gridElement = document.querySelector(".k-grid");
    const contentHeight = gridElement ? gridElement.clientHeight : 0;
    const newRowSpan = calculateRowSpan(contentHeight);

    setData((prevData) =>
      prevData.map((item, index) =>
        index === 0 ? { ...item, rowSpan: newRowSpan } : item
      )
    );
  };

  React.useEffect(() => {
    adjustRowSpanBasedOnContent();
  }, [products]);

  const [page, setPage] = React.useState(initialDataState);
  const [pageSizeValue, setPageSizeValue] = React.useState();
  const pageChange = (event) => {
    const targetEvent = event.targetEvent;
    const take =
      targetEvent.value === "All" ? products.length : event.page.take;
    if (targetEvent.value) {
      setPageSizeValue(targetEvent.value);
    }
    setPage({
      ...event.page,
      take,
    });
  };
  const tiles = [
    {
      header: "Page Views",
      body: (
        <Grid
          maxHeight={500}
          data={products.slice(page.skip, page.take + page.skip)}
        />
      ),
    },
  ];
  const handleReposition = (e) => {
    setData(e.value);
    console.log(e.value);
  };
  return (
    <TileLayout
      columns={4}
      rowHeight={200}
      positions={data}
      gap={{
        rows: 10,
        columns: 10,
      }}
      items={tiles}
      onReposition={handleReposition}
    />
  );
};
export default App;
ReactDOM.render(<App />, document.querySelector("my-app"));
