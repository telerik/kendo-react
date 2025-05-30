import * as React from "react";
import {
  Grid,
  GridColumn,
  GridSelectionChangeEvent,
  GridHandle,
  getSelectedState,
  GridKeyDownEvent,
  getSelectedStateFromKeyDown,
  GridSortChangeEvent
} from "@progress/kendo-react-grid";
import {
  ChartWizard,
  ChartWizardDataRow,
  getWizardDataFromGridSelection,
} from "@progress/kendo-react-chart-wizard";
import { Button } from "@progress/kendo-react-buttons";
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

interface SelectedState {
  [id: string]: boolean | number[];
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
          (b["Total Sales"]?.value || 0) - (a["Total Sales"]?.value || 0)
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
        data={sampleData}
        dataItemKey={DATA_ITEM_KEY}
        autoProcessData={true}
        defaultSkip={0}
        defaultTake={4}
        total={sampleData.length}
        pageable={true}
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
        <GridColumn field="URL" title={t.grid.productTitle} cells={{ data: URLImageCell }} />
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
