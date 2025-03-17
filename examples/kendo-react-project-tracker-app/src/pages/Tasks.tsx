import { filterBy } from "@progress/kendo-data-query";
import { Button } from "@progress/kendo-react-buttons";
import { GridFilterChangeEvent, GridItemChangeEvent, Grid, GridToolbar, GridSearchBox, GridColumn } from "@progress/kendo-react-grid";
import { BreadcrumbLinkMouseEvent, Breadcrumb } from "@progress/kendo-react-layout";
import { exportIcon, homeIcon, plusIcon, printIcon } from "@progress/kendo-svg-icons";
import React from "react";
import { CSVLink } from "react-csv";
import { useNavigate } from "react-router-dom";
import { tasksData } from "./data";
import { SvgIcon } from "@progress/kendo-react-common";

interface DataModel {
  id: string;
  text?: string;
  icon?: React.ReactNode;
}

const breadcrumbItems: DataModel[] = [
  { id: "home", icon: <SvgIcon icon={homeIcon} /> },
  { id: "tasks", text: "Tasks" },
];

export default function Tasks() {
  const navigate = useNavigate();

  const [data, setData] = React.useState<any>(tasksData);
  const [filter, setFilter] = React.useState<any>();

  const handleItemSelect = (e: BreadcrumbLinkMouseEvent) => {
    if (e.id === "home") {
      navigate("/");
    }
  };

  const addNewTask = () => {
    navigate("/tasks/new");
  };

  const filterChange = (event: GridFilterChangeEvent) => {
    setFilter(event.filter);
    setData(filterBy(tasksData, event.filter));
  };

  const itemChange = (event: GridItemChangeEvent) => {
    const newData = data.map((item: any) =>
        item.taskId === event.dataItem.taskId
            ? {
                  ...item,
                  [event.field || '']: event.value
              }
            : item
    );
    setData(newData);
  };

  const handleRowDoubleClick = (event: any) => {
    navigate(`/tasks/${event.dataItem.taskId}`);
  };

  return (
    <div
      style={{ minHeight: "calc(100vh - 106px)" }}
      className="flex flex-col p-10 gap-6"
    >
      <Breadcrumb
        data={breadcrumbItems}
        onItemSelect={handleItemSelect}
        className="!bg-app-surface"
      />

      <div className="flex flex-wrap items-center justify-between">
        <h1 className="text-4xl">Tasks</h1>
        <Button themeColor="primary" fillMode="outline" svgIcon={plusIcon} onClick={addNewTask} title="Add new task">Add new task</Button>
      </div>

      <Grid
        className="k-grid-no-scrollbar"
        data={data}
        autoProcessData={{
          filter: false,
          search: true,
          page: true,
        }}
        // FILTER
        filter={filter}
        filterable={true}
        onFilterChange={filterChange}
        // PAGER
        pageable={
          {
            buttonCount: 6,
            pageSizes: [5, 10, 15, 'All'],

          }
        }
        onItemChange={itemChange}
        defaultTake={10}
        defaultSkip={0}

        // EDITING
        dataItemKey={"ProjectID"}
        editable={true}

        onRowDoubleClick={handleRowDoubleClick}

      >
        <GridToolbar>
          <GridSearchBox />
          <span className="k-toolbar-spacer" />

          <Button svgIcon={exportIcon} fillMode="flat" title="Export to CSV button">
            <CSVLink data={data}>Export to CSV</CSVLink>
          </Button>
          <Button svgIcon={printIcon} fillMode="flat" onClick={print} title="Print button">
            Print
          </Button>
        </GridToolbar>
        <GridColumn field="taskName" title="Task Name" editable={false} />
        <GridColumn
          field="assignedTo"
          title="Assigned To"
          editable={false}
        />
        <GridColumn
          field="dueDate"
          title="Due Date"
          format="{0:d}"
          filter="date"
          editable={false}
        />
        <GridColumn
          field="status"
          title="Status"
          editable={false}
        />
      </Grid>
    </div>
  );
}