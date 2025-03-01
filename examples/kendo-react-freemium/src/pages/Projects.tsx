import {
  Avatar,
  Breadcrumb,
  BreadcrumbLinkMouseEvent,
} from "@progress/kendo-react-layout";
import { Button } from "@progress/kendo-react-buttons";
import {
  Grid,
  GridColumn,
  GridCustomCellProps,
  GridFilterChangeEvent,
  GridItemChangeEvent,
  GridSearchBox,
  GridToolbar,
} from "@progress/kendo-react-grid";
import {
  exportIcon,
  filterClearIcon,
  filterIcon,
  homeIcon,
  plusIcon,
  printIcon,
} from "@progress/kendo-svg-icons";
import { SvgIcon } from "@progress/kendo-react-common";
import { Badge } from "@progress/kendo-react-indicators";
import {
  filterBy,
} from "@progress/kendo-data-query";
import React from "react";
import { projectsData } from "./data";
import { CSVLink } from "react-csv";
import {
  HeaderTdElement,
} from "@progress/kendo-react-data-tools";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import { useNavigate } from "react-router-dom";

interface DataModel {
  id: string;
  text?: string;
  icon?: React.ReactNode;
}

const breadcrumbItems: DataModel[] = [
  { id: "home", icon: <SvgIcon icon={homeIcon} /> },
  { id: "projects", text: "Projects" },
];

const ProjectManagerCell = (props: GridCustomCellProps) => {
  return (
    <td {...props.tdProps}>
      <div className="flex gap-1 items-center">
        <Avatar type="image" rounded="full" size="small">
          <img src={props.dataItem.AvatarSrc} alt="user-image" />
        </Avatar>
        <span>{props.dataItem.ProjectManager}</span>
      </div>
    </td>
  );
};

const StakeholderCell = (props: GridCustomCellProps) => {
  return (
    <td {...props.tdProps}>
      <div className="flex gap-1 items-center">
        <Avatar type="image" rounded="full" size="small">
          <img src={props.dataItem.AvatarSrc} alt="user-image" />
        </Avatar>
        <span>{props.dataItem.Stakeholders}</span>
      </div>
    </td>
  );
};

const PriorityCell = (props: GridCustomCellProps) => {
  return (
    <td {...props.tdProps}>
      <Badge
        rounded="full"
        position="inside"
        className="!relative !z-0"
        themeColor={
          props.dataItem.Priority === "Urgent"
            ? "error"
            : props.dataItem.Priority === "Medium priority"
            ? "warning"
            : props.dataItem.Priority === "Low priority"
            ? "success"
            : props.dataItem.Priority === "Routine"
            ? "tertiary"
            : "primary"
        }
      >
        {props.dataItem.Priority}
      </Badge>
    </td>
  );
};

export const DropdownFilterCell = (props: any) => {
  const hasValue = (value: any) =>
    Boolean(value && value !== props.defaultItem);

  const onChange = (event: any) => {
    const valueHasValue = hasValue(event.value);

    props.onChange({
      value: valueHasValue ? event.value : "",
      operator: valueHasValue ? "eq" : "",
      syntheticEvent: event.syntheticEvent,
    });
  };

  const onClearButtonClick = (event: any) => {
    event.preventDefault();

    props.onChange({
      value: "",
      operator: "",
      syntheticEvent: event,
    });
  };

  return (
    <div className="k-filtercell gap-1">
      <DropDownList
        data={props.data}
        onChange={onChange}
        value={props.value || props.defaultItem}
        defaultItem={props.defaultItem}
      />
      <Button title="Filter" onClick={onChange} svgIcon={filterIcon} />
      <Button
        title="Clear"
        disabled={!hasValue(props.value)}
        onClick={onClearButtonClick}
        svgIcon={filterClearIcon}
      />
    </div>
  );
};

const PriorityFilterCell = (props: any) => {
  const priority = [...new Set(projectsData.map((item) => item.Priority))];

  return (
    <HeaderTdElement
      columnId={props.thProps?.columnId || ""}
      {...props.thProps}
    >
      <DropdownFilterCell defaultItem={"-Select-"} {...props} data={priority} />
    </HeaderTdElement>
  );
};

const ProjectManagerFilterCell = (props: any) => {
  const managers = [
    ...new Set(projectsData.map((item) => item.ProjectManager)),
  ];

  return (
    <HeaderTdElement
      columnId={props.thProps?.columnId || ""}
      {...props.thProps}
    >
      <DropdownFilterCell defaultItem={"-Select-"} {...props} data={managers} />
    </HeaderTdElement>
  );
};

const StakeholderFilterCell = (props: any) => {
  const stakeholders = [
    ...new Set(projectsData.map((item) => item.Stakeholders)),
  ];

  return (
    <HeaderTdElement
      columnId={props.thProps?.columnId || ""}
      {...props.thProps}
    >
      <DropdownFilterCell
        defaultItem={"-Select-"}
        {...props}
        data={stakeholders}
      />
    </HeaderTdElement>
  );
};

export default function Projects() {
  const navigate = useNavigate();

  const [data, setData] = React.useState<any>(projectsData);
  const [filter, setFilter] = React.useState<any>();

  const handleItemSelect = (e: BreadcrumbLinkMouseEvent) => {
    if (e.id === "home") {
      navigate("/");
    }
  };

  const addNew = () => {
    const newDataItem = {
      ProjectID: data.length + 1,
    };
    setData([newDataItem as any, ...data]);
  };

  const filterChange = (event: GridFilterChangeEvent) => {
    setFilter(event.filter);

    setData(filterBy(projectsData, event.filter));
  };

  const itemChange = (event: GridItemChangeEvent) => {
    const newData = data.map((item: any) =>
        item.ProjectID === event.dataItem.ProjectID
            ? {
                  ...item,
                  [event.field || '']: event.value
              }
            : item
    );

    setData(newData);
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
        <h1 className="text-4xl">Projects</h1>
        <Button
          themeColor="primary"
          fillMode="outline"
          svgIcon={plusIcon}
          onClick={addNew}
        >
          Add new project
        </Button>
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

      >
        <GridToolbar>
          <GridSearchBox />
          <span className="k-toolbar-spacer" />

          <Button svgIcon={exportIcon} fillMode="flat">
            <CSVLink data={data}>Export to CSV</CSVLink>
          </Button>
          <Button svgIcon={printIcon} fillMode="flat" onClick={print}>
            Print
          </Button>
        </GridToolbar>
        <GridColumn field="ProjectName" title="Project Name" width={440} />
        <GridColumn
          field="ProjectManager"
          title="Project Manager"
          editable={false}

          width={245}
          cells={{
            data: ProjectManagerCell,
            filterCell: ProjectManagerFilterCell,
          }}
        />
        <GridColumn
          field="Stakeholders"
          title="Stakeholder(s)"
          editable={false}
          width={245}
          cells={{ data: StakeholderCell, filterCell: StakeholderFilterCell }}
        />
        <GridColumn
          field="DueDate"
          title="Due Date"
          width={245}
          format="{0:d}"


          filter="date"
        />
        <GridColumn
          field="Priority"
          title="Priority"
          width={230}
          cells={{ data: PriorityCell, filterCell: PriorityFilterCell }}
        />
      </Grid>
    </div>
  );
}
