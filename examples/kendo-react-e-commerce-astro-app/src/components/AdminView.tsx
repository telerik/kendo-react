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
import { useStore } from "@nanostores/react";
import { selectedLanguage } from "../helpers/languageStore";
import enMessages from "../data/messages/en";
import frMessages from "../data/messages/fr";
import esMessages from "../data/messages/es";

const translations = {
  en: enMessages,
  fr: frMessages,
  es: esMessages,
};

const DATA_ITEM_KEY = "ID";
const SELECTED_FIELD = "selected";
const idGetter = getter(DATA_ITEM_KEY);

interface SelectedState {
  [id: string]: boolean | number[];
}

interface PageState {
  skip: number;
  take: number;
}

const AdminView: React.FC = () => {
  const language = useStore(selectedLanguage); 
  const t = translations[language]; 
  const gridRef = React.useRef<GridHandle>(null);
  const [selectedState, setSelectedState] = React.useState<SelectedState>({});
  const [sort, setSort] = React.useState<{ field: string; dir: "asc" | "desc" }[]>([
    { field: "Sales", dir: "desc" },
  ]);
  const [showChartWizard, setShowChartWizard] = React.useState<boolean>(false);
  const [chartData, setChartData] = React.useState<ChartWizardDataRow[]>([]);
  const [top3SalesData, setTop3SalesData] = React.useState<ChartWizardDataRow[]>([]);
  const [top3Visible, setTop3Visible] = React.useState<boolean>(false);
  const [page, setPage] = React.useState<PageState>({ skip: 0, take: 4 });

  const pageChange = (event: GridPageChangeEvent) => {
    setPage({
      skip: event.page.skip,
      take: event.page.take,
    });
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

  const URLImageCell: React.FC<{ dataItem: any; field?: string }> = ({ dataItem, field }) => {
    const imageUrl = dataItem[field || "URL"];
    return (
      <td>
        <img src={imageUrl} alt="Product" style={{ width: "100px", height: "auto" }} />
      </td>
    );
  };

  return (
    <>
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
        ref={gridRef}
        style={{ height: "500px" }}
        data={pagedData}
        dataItemKey={DATA_ITEM_KEY}
        selectedField={SELECTED_FIELD}
        skip={page.skip}
        take={page.take}
        total={data.length}
        pageable={true}
        onPageChange={pageChange}
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
    </>
  );
};

export default AdminView;
