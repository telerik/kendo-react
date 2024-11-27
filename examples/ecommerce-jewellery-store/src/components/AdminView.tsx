import * as React from "react";
import { getter } from "@progress/kendo-react-common";
import {
  Grid,
  GridColumn,
  GridSelectionChangeEvent,
  GridHandle,
  getSelectedState,
  GridKeyDownEvent,
  getSelectedStateFromKeyDown,
  GridSortChangeEvent,
  GridPageChangeEvent,
} from "@progress/kendo-react-grid";
import {
  ChartWizard,
  ChartWizardDataRow,
  getWizardDataFromGridSelection,
} from "@progress/kendo-react-chart-wizard";
import { Button } from "@progress/kendo-react-buttons";
import { orderBy } from "@progress/kendo-data-query";
import { chartAreaStackedIcon } from "@progress/kendo-svg-icons";
import { sampleData } from "../data/shared-gd-sampleChartData";
import { useLanguageContext } from "../helpers/LanguageContext";
import { LocalizationProvider, loadMessages } from "@progress/kendo-react-intl";
import esMessages from "../data/messages/es";
import frMessages from "../data/messages/fr";
import enMessages from "../data/messages/en";

interface SampleDataItem {
  ID: string;
  Product: string;
  SKU: string;
  Category: string;
  Price: number;
  Sales: number;
  Status: string;
  Quantity: number;
  URL: string;
}

const DATA_ITEM_KEY = "ID";
const SELECTED_FIELD = "selected";
const idGetter = getter(DATA_ITEM_KEY);

interface SelectedState {
  [id: string]: boolean | number[];
}

const AdminView: React.FC = () => {
  const gridRef = React.useRef<GridHandle>(null);
  const [selectedState, setSelectedState] = React.useState<SelectedState>({});
  const [sort, setSort] = React.useState<{ field: string; dir: "asc" | "desc" }[]>([
    { field: "Sales", dir: "desc" },
  ]);
  const [showChartWizard, setShowChartWizard] = React.useState<boolean>(false);
  const [chartData, setChartData] = React.useState<ChartWizardDataRow[]>([]);
  const [top3SalesData, setTop3SalesData] = React.useState<ChartWizardDataRow[]>([]);
  const [top3Visible, setTop3Visible] = React.useState<boolean>(false);
  const [page, setPage] = React.useState<{ skip: number; take: number }>({ skip: 0, take: 4 });

  const { t, language } = useLanguageContext();

  React.useEffect(() => {
    if (language === "es") {
      loadMessages(esMessages, "es");
    } else if (language === "fr") {
      loadMessages(frMessages, "fr");
    } else {
      loadMessages(enMessages, "en");
    }
  }, [language]);

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

  const onPageChange = (event: GridPageChangeEvent) => {
    setPage({ skip: event.page.skip, take: event.page.take });
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
      console.error("Grid reference is not available.");
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
          b.find((field) => field.field === "Total Sales")?.value -
          a.find((field) => field.field === "Total Sales")?.value
      )
      .slice(0, 3);

    setTop3SalesData(sortedTop3Sales);
    setTop3Visible(true);
  }, [selectedState]);

  const URLImageCell: React.FC<{ dataItem: SampleDataItem; field?: string }> = ({
    dataItem,
    field,
  }) => {
    const imageUrl = field && field in dataItem ? (dataItem as Record<string, any>)[field] : dataItem.URL;
    return (
      <td>
        <img src={imageUrl} alt="Product" style={{ width: "100px", height: "auto" }} />
      </td>
    );
  };

  return (
    <LocalizationProvider language={language}>
      <div style={{ marginBottom: "10px" }}>
        <Button
          svgIcon={chartAreaStackedIcon}
          onClick={handleSelectedChart}
          disabled={disabled}
          style={{ marginRight: "10px" }}
        >
          {t.chartSelectedDataButton}
        </Button>
        <Button svgIcon={chartAreaStackedIcon} onClick={handleTop3Sales}>
          {t.top3SalesButton}
        </Button>
      </div>
      <Grid
        key={language} 
        ref={gridRef}
        style={{ height: "500px" }}
        data={pagedData}
        dataItemKey={DATA_ITEM_KEY}
        selectedField={SELECTED_FIELD}
        skip={page.skip}
        take={page.take}
        total={data.length}
        pageable={true}
        onPageChange={onPageChange}
        selectable={{
          enabled: true,
          drag: true,
          mode: "multiple",
        }}
        navigatable={true}
        onSelectionChange={onSelectionChange}
        onKeyDown={onKeyDown}
        sortable={true}
        sort={sort}
        onSortChange={(e: GridSortChangeEvent) => {
          setSort(e.sort as { field: string; dir: "asc" | "desc" }[]);
        }}
      >
        <GridColumn field="URL" title={t.grid.productTitle} cell={URLImageCell} />
        <GridColumn field="Product" title={t.grid.nameTitle} />
        <GridColumn field="SKU" title={t.grid.skuTitle} />
        <GridColumn field="Category" title={t.grid.categoryTitle} />
        <GridColumn field="Price" title={t.grid.priceTitle} />
        <GridColumn field="Quantity" title={t.grid.quantityTitle} />
        <GridColumn field="Sales" title={t.grid.totalSalesTitle} />
      </Grid>

      {showChartWizard && (
        <ChartWizard
          data={chartData}
          onClose={() => setShowChartWizard(false)}
        />
      )}

      {top3Visible && (
        <ChartWizard
          data={top3SalesData}
          onClose={() => setTop3Visible(false)}
        />
      )}
    </LocalizationProvider>
  );
};

export default AdminView;
