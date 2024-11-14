import * as React from 'react';
import { getter } from '@progress/kendo-react-common';
import {
  Grid,
  GridColumn,
  GridSelectionChangeEvent,
  GridHandle,
  getSelectedState,
  GridKeyDownEvent,
  getSelectedStateFromKeyDown,
  GridSortChangeEvent,
} from '@progress/kendo-react-grid';
import {
  ChartWizard,
  getWizardDataFromGridSelection,
} from '@progress/kendo-react-chart-wizard';
import { Button } from '@progress/kendo-react-buttons';
import { orderBy, groupBy } from '@progress/kendo-data-query';
import { chartAreaStackedIcon } from '@progress/kendo-svg-icons';
import { sampleData, SampleDataItem } from '../data/shared-gd-sampleChartData';
import { Pager, PageChangeEvent } from '@progress/kendo-react-data-tools';

const DATA_ITEM_KEY = 'ID';
const SELECTED_FIELD = 'selected';
const idGetter = getter(DATA_ITEM_KEY);

interface SelectedState {
  [id: string]: boolean | number[];
}

interface PageState {
  skip: number;
  take: number;
}

const AdminView: React.FC = () => {
  const gridRef = React.useRef<GridHandle>(null);
  const [selectedState, setSelectedState] = React.useState<SelectedState>({});
  const [sort, setSort] = React.useState<{ field: string; dir: 'asc' | 'desc' }[]>([
    { field: 'Sales', dir: 'desc' },
  ]);
  const [showChartWizard, setShowChartWizard] = React.useState<boolean>(false);
  const [chartData, setChartData] = React.useState<SampleDataItem[]>([]);
  const [top3SalesData, setTop3SalesData] = React.useState<SampleDataItem[]>([]);
  const [top3Visible, setTop3Visible] = React.useState<boolean>(false);
  const [page, setPage] = React.useState<PageState>({ skip: 0, take: 4 });

  const pageChange = (event: PageChangeEvent) => {
    setPage(event.page);
  };

  const data = sampleData.map((item) => ({
    ...item,
    [SELECTED_FIELD]: selectedState[idGetter(item)],
  }));

  const pagedData = orderBy(data, sort).slice(page.skip, page.skip + page.take);

  const onSelectionChange = (event: GridSelectionChangeEvent) => {
    const newSelectedState = getSelectedState({
      event,
      selectedState,
      dataItemKey: DATA_ITEM_KEY,
    });
    setSelectedState(newSelectedState);
  };

  const onKeyDown = (event: GridKeyDownEvent) => {
    const newSelectedState = getSelectedStateFromKeyDown({
      event,
      selectedState,
      dataItemKey: DATA_ITEM_KEY,
    });
    setSelectedState(newSelectedState);
  };

  const disabled = Object.keys(selectedState).length === 0;

  const handleSelectedChart = React.useCallback(() => {
    if (gridRef.current) {
      const chartWizardData = getWizardDataFromGridSelection({
        grid: gridRef.current,
        data: sampleData,
        selectedState,
        dataItemKey: DATA_ITEM_KEY,
      });

      setChartData(chartWizardData);
      setShowChartWizard(true);
    } else {
      console.error('Grid reference is not available.');
    }
  }, [selectedState]);

  const handleTop3Sales = React.useCallback(() => {
    const selectedData = getWizardDataFromGridSelection({
      grid: gridRef.current,
      data: sampleData,
      selectedState,
      dataItemKey: DATA_ITEM_KEY,
    });

    const sortedTop3Sales = selectedData
      .sort(
        (a, b) =>
          b.find((field) => field.field === 'Total Sales').value -
          a.find((field) => field.field === 'Total Sales').value
      )
      .slice(0, 3);

    setTop3SalesData(sortedTop3Sales);
    setTop3Visible(true);
  }, [selectedState]);

  const URLImageCell: React.FC<{ dataItem: SampleDataItem; field?: string }> = ({
    dataItem,
    field,
  }) => {
    const imageUrl = dataItem[field || 'URL'];
    return (
      <td>
        <img src={imageUrl} alt="Product" style={{ width: '100px', height: 'auto' }} />
      </td>
    );
  };

  const MyPager: React.FC<{
    skip: number;
    take: number;
    total: number;
    onPageChange: (event: PageChangeEvent) => void;
  }> = (props) => {
    return (
      <div style={{ overflow: 'hidden', padding: '10px' }}>
        <Pager
          responsive={true}
          skip={props.skip}
          take={props.take}
          total={props.total}
          onPageChange={props.onPageChange}
          buttonCount={5}
          info={true}
          previousNext={true}
          type="numeric"
          pageSizes={[4, 10, 15, 20]}
          pageSizeValue={props.take}
        />
      </div>
    );
  };

  return (
    <>
      <div style={{ marginBottom: '10px' }}>
        <Button
          svgIcon={chartAreaStackedIcon}
          onClick={handleSelectedChart}
          disabled={disabled}
          style={{ marginRight: '10px' }}
        >
          Chart of Selected Data
        </Button>
        <Button svgIcon={chartAreaStackedIcon} onClick={handleTop3Sales}>
          Top 3 Sales per Category
        </Button>
      </div>
      <Grid
        ref={gridRef}
        style={{ height: '500px' }}
        data={pagedData}
        dataItemKey={DATA_ITEM_KEY}
        selectedField={SELECTED_FIELD}
        skip={page.skip}
        take={page.take}
        total={data.length}
        pageable={true}
        onPageChange={pageChange}
        pager={(pagerProps) => <MyPager {...pagerProps} />}
        selectable={{
          enabled: true,
          drag: true,
          mode: 'multiple',
        }}
        navigatable={true}
        onSelectionChange={onSelectionChange}
        onKeyDown={onKeyDown}
        sortable={true}
        sort={sort}
        onSortChange={(e: GridSortChangeEvent) => {
          setSort(e.sort);
        }}
      >
        <GridColumn field="URL" title="Product" cell={URLImageCell} />
        <GridColumn field="Product" title="Name" />
        <GridColumn field="SKU" title="SKU" />
        <GridColumn field="Category" title="Category" />
        <GridColumn field="Price" title="Price" />
        <GridColumn field="Quantity" title="Quantity" />
        <GridColumn field="Sales" title="Total Sales" />
      </Grid>

      {showChartWizard && (
        <ChartWizard
          data={chartData}
          series={[
            {
              field: 'value',
              categoryField: 'category',
            },
          ]}
          onClose={() => setShowChartWizard(false)}
        />
      )}

      {top3Visible && (
        <ChartWizard
          data={top3SalesData}
          series={[
            {
              field: 1,
              categoryField: 0,
            },
          ]}
          onClose={() => setTop3Visible(false)}
        />
      )}
    </>
  );
};

export default AdminView;
