import React, { useCallback, useMemo, useState } from 'react';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import productsSrc from './shared-kb-products';

type Prod = {
  ProductID: number;
  ProductName: string;
  Category: { CategoryName: string };
  UnitPrice: number;
  UnitsInStock: number;
  Discontinued: boolean;
  discontinuedCellRowSpan?: number;
  discontinuedClassName?: string;
  className?: string;
};

const buildInitialData = (arr: Prod[]) => {
  const data = arr.map((p) => ({ ...p }));
  let looped;
  for (let i = 0; i < data.length; i += looped) {
    let rowSpan = 1;
    looped = 1;
    for (let j = i + 1; j < data.length; j++) {
      if (data[i].Discontinued === data[j].Discontinued) {
        looped++;
        rowSpan++;
      } else {
        break;
      }
    }
    data[i].discontinuedCellRowSpan = rowSpan === 1 ? (looped === 1 ? 1 : undefined) : rowSpan;
  }
  return data;
};

const App = () => {
  const initial = useMemo(() => buildInitialData(productsSrc as unknown as Prod[]), []);
  const [gridData, setGridData] = useState<Prod[]>(initial);

  const getItemIndex = useCallback(
    (dataItem: Prod) => gridData.findIndex((r) => r.ProductID === dataItem.ProductID),
    [gridData]
  );

  const updateItem = useCallback(
    (item: Partial<Prod> & { ProductID: number }) => {
      setGridData((prev) => {
        const idx = prev.findIndex((r) => r.ProductID === item.ProductID);
        if (idx === -1) return prev;
        const next = [...prev];
        next[idx] = { ...next[idx], ...item };
        return next;
      });
    },
    []
  );

  const hoverMergedCellByIndex = useCallback(
    (index: number, hover: boolean) => {
      let currentIndex = index;
      let current = gridData[currentIndex];
      while (current && !current.discontinuedCellRowSpan) {
        currentIndex--;
        current = gridData[currentIndex];
      }
      if (current) {
        updateItem({ ProductID: current.ProductID, discontinuedClassName: hover ? 'k-hover' : undefined });
      }
    },
    [gridData, updateItem]
  );

  const updateNextItems = useCallback(
    (index: number, count: number, hover: boolean) => {
      setGridData((prev) => {
        const next = [...prev];
        for (let i = index; i < index + count; i++) {
          if (!next[i]) continue;
          next[i] = { ...next[i], className: hover ? 'k-hover' : undefined };
        }
        return next;
      });
    },
    []
  );

  const handleMergedHover = useCallback(
    (dataItem: Prod, rowSpanNumber: number, hover: boolean) => {
      const index = getItemIndex(dataItem);
      updateNextItems(index, rowSpanNumber, hover);
    },
    [getItemIndex, updateNextItems]
  );

  const handleCellHover = useCallback(
    (dataItem: Prod, hover: boolean) => {
      if (dataItem.discontinuedCellRowSpan) return;
      const index = getItemIndex(dataItem);
      hoverMergedCellByIndex(index, hover);
    },
    [getItemIndex, hoverMergedCellByIndex]
  );

  const customCell = useCallback(
    (props: any) => {
      const { dataItem, field } = props;
      if (field === 'Discontinued') {
        if (dataItem.discontinuedCellRowSpan) {
          return (
            <td
              {...props.tdProps}
              rowSpan={dataItem.discontinuedCellRowSpan}
              className={dataItem.className || dataItem.discontinuedClassName}
              onMouseOver={() => handleMergedHover(dataItem, dataItem.discontinuedCellRowSpan, true)}
              onMouseOut={() => handleMergedHover(dataItem, dataItem.discontinuedCellRowSpan, false)}
            >
              {props.children}
            </td>
          );
        } else if (dataItem.discontinuedCellRowSpan === 1) {
          return <td {...props.tdProps}>{props.children}</td>;
        } else {
          return null;
        }
      }
      return (
        <td
          {...props.tdProps}
          className={dataItem.className}
          colSpan={props.colSpan}
          onMouseOver={() => handleCellHover(props.dataItem, true)}
          onMouseOut={() => handleCellHover(props.dataItem, false)}
        >
          {props.children}
        </td>
      );
    },
    [handleMergedHover, handleCellHover]
  );

  return (
    <div>
      <Grid
        style={{ height: '700px' }}
        data={gridData}
        cells={{ data: customCell }}
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
};

export default App;
