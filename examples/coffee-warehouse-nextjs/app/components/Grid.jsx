"use client";
import React from "react";
import * as PropTypes from "prop-types";

import {
  Grid as KendoGrid,
  GridColumn,
  GridColumnMenuSort,
  GridColumnMenuFilter,
  GridToolbar,
} from "@progress/kendo-react-grid";
import { Button } from "@progress/kendo-react-buttons";
import { GridPDFExport } from "@progress/kendo-react-pdf";
import { ExcelExport } from "@progress/kendo-react-excel-export";
import { process } from "@progress/kendo-data-query";
import { Input } from "@progress/kendo-react-inputs";
import { useLocalization } from "@progress/kendo-react-intl";
import { filePdfIcon, fileExcelIcon } from "@progress/kendo-svg-icons";
const noMessage = "message not defined";

export const Column = GridColumn;

export const ColumnMenu = (props) => {
  return (
    <div>
      <GridColumnMenuSort {...props} />
      <GridColumnMenuFilter {...props} />
    </div>
  );
};

export const Grid = (props) => {
  const { data, onDataChange, ...others } = props;

  const excelExportRef = React.useRef(null);
  const pdfExportRef = React.useRef(null);

  const [isPdfExporting, setIsPdfExporting] = React.useState(false);
  const [take, setTake] = React.useState(10);
  const [skip, setSkip] = React.useState(0);
  const [sort, setSort] = React.useState([]);
  const [group, setGroup] = React.useState([]);
  const [filter, setFilter] = React.useState(null);
  const lastSelectedIndexRef = React.useRef(0);
  const [allColumnFilter, setAllColumnFilter] = React.useState("");
  const localizationService = useLocalization();

  const dataState = {
    take,
    skip,
    sort,
    group,
    filter,
  };

  const onDataStateChange = React.useCallback(
    (event) => {
      setTake(event.dataState.take);
      setSkip(event.dataState.skip);
      setSort(event.dataState.sort);
      setGroup(event.dataState.group);
      setFilter(event.dataState.filter);
    },
    [setTake, setSkip, setSort, setGroup]
  );

  const onExcelExport = React.useCallback(() => {
    if (excelExportRef.current) {
      excelExportRef.current.save();
    }
  }, []);

  const onPdfExportDone = React.useCallback(() => {
    setIsPdfExporting(false);
  }, []);

  const onAllColumnFilterChange = React.useCallback(
    (event) => {
      setAllColumnFilter(event.value);
    },
    [setAllColumnFilter]
  );

  const onSelectionChange = React.useCallback(
    (event) => {
      let last = lastSelectedIndexRef.current;
      const updatedData = data.map((dataItem) => {
        return { ...dataItem };
      });
      const current = data.findIndex((dataItem) => dataItem === event.dataItem);

      if (!event.nativeEvent.shiftKey) {
        lastSelectedIndexRef.current = last = current;
      }

      if (!event.nativeEvent.ctrlKey) {
        updatedData.forEach((item) => (item.selected = false));
      }
      const select = !event.dataItem.selected;
      for (let i = Math.min(last, current); i <= Math.max(last, current); i++) {
        updatedData[i].selected = select;
      }

      onDataChange(updatedData);
    },
    [data, onDataChange]
  );

  const onHeaderSelectionChange = React.useCallback(
    (event) => {
      const checked = event.syntheticEvent.target.checked;
      const updatedData = data.map((item) => {
        return {
          ...item,
          selected: checked,
        };
      });

      onDataChange(updatedData);
    },
    [data, onDataChange]
  );

  const textColumns = props.children
    .map((col) => {
      if (col.props.children) {
        return col.props.children.map((child) => {
          if (!child.props.filter || child.props.filter === "text") {
            return child.props.field;
          }
          return null;
        });
      } else if (col.props.field) {
        if (!col.props.filter || col.props.filter === "text") {
          return col.props.field;
        }
      }
      return null;
    })
    .flat()
    .filter((field) => field);

  const allColumnsFilters = textColumns.map((column) => ({
    field: column,
    operator: "contains",
    value: allColumnFilter,
  }));

  const allColumnFilteredData = allColumnFilter
    ? process(data, { filter: { logic: "or", filters: allColumnsFilters } })
        .data
    : data;

  const processedData = process(allColumnFilteredData, dataState);

  React.useEffect(() => {
    if (!processedData.data.length) {
      setSkip(0);
    }
  }, [processedData]);

  const onPdfExport = React.useCallback(() => {
    if (pdfExportRef.current) {
      setIsPdfExporting(true);
      pdfExportRef.current.save(processedData.data, onPdfExportDone);
    }
  }, [processedData, onPdfExportDone]);

  const GridElement = (
    <KendoGrid
      {...dataState}
      {...others}
      rowHeight={40}
      pageable={true}
      sortable={true}
      groupable={true}
      selectedField={"selected"}
      data={processedData}
      onDataStateChange={onDataStateChange}
      onSelectionChange={onSelectionChange}
      onHeaderSelectionChange={onHeaderSelectionChange}
    >
      <GridToolbar>
        <Input
          value={allColumnFilter}
          onChange={onAllColumnFilterChange}
          placeholder={localizationService.toLanguageString(
            "custom.gridSearch",
            noMessage
          )}
        />
        <Button svgIcon={fileExcelIcon} onClick={onExcelExport}>
          {localizationService.toLanguageString(
            "custom.exportExcel",
            noMessage
          )}
        </Button>
        <Button
          svgIcon={filePdfIcon}
          onClick={onPdfExport}
          disabled={isPdfExporting}
        >
          {localizationService.toLanguageString("custom.exportPdf", noMessage)}
        </Button>
      </GridToolbar>
      <Column
        field={"selected"}
        width={50}
        title={" "}
        headerSelectionValue={
          data.findIndex((dataItem) => dataItem.selected === false) === -1
        }
      />
      {props.children}
    </KendoGrid>
  );

  return (
    <>
      <ExcelExport data={data} ref={excelExportRef}>
        {GridElement}
      </ExcelExport>
      <GridPDFExport ref={pdfExportRef}>{GridElement}</GridPDFExport>
    </>
  );
};

Grid.displayName = "Grid";
Grid.propTypes = {
  data: PropTypes.array,
  onDataChange: PropTypes.func,
  style: PropTypes.object,
};
