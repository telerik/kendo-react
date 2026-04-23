import * as React from 'react';
import {
  Grid,
  GridColumn as Column,
  GridDetailRowProps,
  GridDetailExpandChangeEvent
} from '@progress/kendo-react-grid';
import { DetailExpandDescriptor } from '@progress/kendo-react-data-tools';
import { Button } from '@progress/kendo-react-buttons';
import { arrowDownIcon, arrowUpIcon } from '@progress/kendo-svg-icons';

const DetailComponent = (props: GridDetailRowProps) => {
  const dataItem = props.dataItem as any;
  return (
    <section>
      <p>
        <strong>Description:</strong> {dataItem.Description}
      </p>
    </section>
  );
};

const App = () => {
  const baseUrl = 'https://demos.telerik.com/service/v2/odata/';
  const init = {
    method: 'GET',
    accept: 'application/json',
    headers: {},
  };

  const [categories, setCategories] = React.useState<any[]>([]);
  const [detailExpand, setDetailExpand] = React.useState<DetailExpandDescriptor>(
    {}
  );

  React.useEffect(() => {
    fetch(baseUrl + `Categories`, init)
      .then((response) => response.json())
      .then((json) => setCategories(json.value));
  }, []);

  const handleDetailExpandChange = React.useCallback(
    (event: GridDetailExpandChangeEvent) => {
      setDetailExpand(event.detailExpand);
    },
    []
  );

  const HierarchyMyDataCustomCell = React.useCallback(
    (props: any) => {
      const dataItem = props.dataItem;
      const id = dataItem.CategoryID as number;

      const hasDescription =
        dataItem.Description && String(dataItem.Description).trim() !== '';

      if (!hasDescription) {
        return <td {...props.tdProps} />;
      }

      const expanded = !!(detailExpand as any)[id];

      return (
        <td {...props.tdProps} colSpan={1}>
          <Button
            onClick={() =>
              setDetailExpand((prev) => ({
                ...prev,
                [id]: !prev[id],
              }))
            }
            svgIcon={expanded ? arrowDownIcon : arrowUpIcon}
          />
        </td>
      );
    },
    [detailExpand]
  );

  return (
    <div>
      <Grid
        data={categories}
        dataItemKey="CategoryID"
        detail={DetailComponent}
        detailExpand={detailExpand}
        onDetailExpandChange={handleDetailExpandChange}
        cells={{
          hierarchy: {
            data: HierarchyMyDataCustomCell,
          },
        }}
      >
        <Column field="CategoryID" title="ID" />
        <Column field="CategoryName" title="Category Name" />
      </Grid>
    </div>
  );
};

export default App;
