import { Avatar, Breadcrumb, BreadcrumbLinkMouseEvent } from "@progress/kendo-react-layout";
import { Button } from "@progress/kendo-react-buttons";
import { Grid, GridColumn, GridCustomCellProps, GridPageChangeEvent, GridToolbar } from "@progress/kendo-react-grid";
import { exportIcon, filterClearIcon, filterIcon, homeIcon, plusIcon, printIcon, searchIcon } from "@progress/kendo-svg-icons";
import { SvgIcon } from "@progress/kendo-react-common";
import { InputPrefix, TextBox } from "@progress/kendo-react-inputs";
import { Badge } from "@progress/kendo-react-indicators";
import { process, filterBy, CompositeFilterDescriptor } from "@progress/kendo-data-query";
import React from "react";
import { priorities, projectManagers, projectsData } from "./data";
import { CSVLink } from 'react-csv';
import { HeaderTdElement, PagerTargetEvent } from "@progress/kendo-react-data-tools";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import { useNavigate } from "react-router-dom";

interface DataModel {
  id: string;
  text?: string;
  icon?: React.ReactNode;
}

const breadcrumbItems: DataModel[] = [
  {
      id: "home",
      icon: <SvgIcon icon={homeIcon} />,
  },
  {
      id: "projects",
      text: "Projects"
  }
];

const ProjectManagerCell = (props: GridCustomCellProps) => {
  return <td {...props.tdProps}>
    <div className="flex gap-1 items-center">
      <Avatar type="image" rounded="full" size="small">
        <img src={props.dataItem.AvatarSrc} alt="user-image" />
      </Avatar>
      <span>{props.dataItem.ProjectManager}</span>
    </div>
  </td>;
};

const StakeholderCell = (props: GridCustomCellProps) => {
  return <td {...props.tdProps}>
    <div className="flex gap-1 items-center">
      <Avatar type="image" rounded="full" size="small">
        <img src={props.dataItem.AvatarSrc} alt="user-image" />
      </Avatar>
      <span>{props.dataItem.Stakeholders}</span>
    </div>
  </td>;
};

const PriorityCell = (props: GridCustomCellProps) => {
  return <td {...props.tdProps}>
    <Badge rounded="full" position="inside" className="!relative !z-0" themeColor={
      props.dataItem.Priority === "Urgent" ? "error"
        : props.dataItem.Priority === "Medium priority" ? "warning"
          : props.dataItem.Priority === "Low priority" ? "success"
            : props.dataItem.Priority === "Routine" ? "tertiary" : "primary"}>
      {props.dataItem.Priority}
    </Badge>
  </td>;
};

export const DropdownFilterCell = (props: any) => {
  const hasValue = (value: any) => Boolean(value && value !== props.defaultItem);
  const onChange = (event: any) => {
    const valueHasValue = hasValue(event.target.value);
    props.onChange({
      value: valueHasValue ? event.target.value : '',
      operator: valueHasValue ? 'eq' : '',
      syntheticEvent: event.syntheticEvent
    });
  };
  const onClearButtonClick = (event: any) => {
    event.preventDefault();
    props.onChange({
      value: '',
      operator: '',
      syntheticEvent: event
    });
  };
  return <div className="k-filtercell gap-1">
        <DropDownList data={props.data} onChange={onChange} value={props.value || props.defaultItem} defaultItem={props.defaultItem} defaultValue={'-Select-'}/>
        <Button title="Filter" onClick={onChange} svgIcon={filterIcon} />
        <Button title="Clear" disabled={!hasValue(props.value)} onClick={onClearButtonClick} svgIcon={filterClearIcon} />
      </div>;
};

const PriorityFilterCell = (props: any) => {
  return <HeaderTdElement columnId={props.thProps?.columnId || ''} {...props.thProps}>
    <DropdownFilterCell {...props} data={priorities} />
  </HeaderTdElement>;
};

const ProjectManagerFilterCell = (props: any) => {
  return <HeaderTdElement columnId={props.thProps?.columnId || ''} {...props.thProps}>
    <DropdownFilterCell {...props} data={projectManagers} />
  </HeaderTdElement>;
};

const StakeholderFilterCell = (props: any) => {
  return <HeaderTdElement columnId={props.thProps?.columnId || ''} {...props.thProps}>
    <DropdownFilterCell {...props} data={projectManagers} />
  </HeaderTdElement>;
};

const DATA_ITEM_KEY = 'ProjectID';

const initialFilter: CompositeFilterDescriptor = {
  logic: 'and',
  filters: [{
    field: 'ProductName',
    operator: 'contains',
    value: 'Chef'
  }]
};
interface PageState {
  skip: number;
  take: number;
}

const initialDataState: PageState = { skip: 0, take: 10 };

export const getItems = () => {
  return projectsData;
};

export default function Projects() {
   const navigate = useNavigate();
  const [page, setPage] = React.useState<PageState>(initialDataState);
  const [pageSizeValue, setPageSizeValue] = React.useState<number | string | undefined>();
  const [data, setData] = React.useState<any>({ data: [], total: 0 });
  const [edit, setEdit] = React.useState({});
  const [filter, setFilter] = React.useState(initialFilter);

  const handleItemSelect = (e: BreadcrumbLinkMouseEvent) => {
    if (e.id === 'home') {
      navigate('/');
    }
  }

  React.useEffect(() => {
    let newItems = getItems();
    filterBy(newItems, filter);
    setData(process(newItems, { skip: page.skip, take: page.take }));
  }, []);

  const handleFilterChange = (event: any) => {
    setFilter(event.filter);
  };

  const handlePageChange = (event: GridPageChangeEvent) => {
    const targetEvent = event.targetEvent as PagerTargetEvent;
    const take = targetEvent.value === 'All' ? projectsData.length : event.page.take;

    if (targetEvent.value) {
        setPageSizeValue(targetEvent.value);
    }
    setPage({
        ...event.page,
        take
    });
};

  const itemChange = (event: any) => {
    const newData = data.map((item: any) =>
      item.ProjectID === event.dataItem.ProjectID
        ? {
            ...item,
            [event.field || '']: event.value,
          }
        : item
    );
    setData(newData);
  };
  const addNew = () => {
    const newDataItem = {
      ProjectID: data.length + 1,
    };
    setData([newDataItem as any, ...data]);
    setEdit((edit) => ({
      ...edit,
      [newDataItem.ProjectID]: true,
    }));
  };

  return (
    <div style={{minHeight: 'calc(100vh - 106px)'}} className="flex flex-col p-10 gap-6">
      <Breadcrumb data={breadcrumbItems} onItemSelect={handleItemSelect} className="!bg-app-surface" />

      <div className="flex flex-wrap items-center justify-between">
          <h1 className="text-4xl">Projects</h1>
          <Button themeColor="primary" fillMode="outline" svgIcon={plusIcon} onClick={addNew}>Add new project</Button>
      </div>

      <Grid className="k-grid-no-scrollbar"
          data={data}
          dataItemKey={DATA_ITEM_KEY}
          edit={edit}
          editable={true}
          filterable={true}
          filter={filter}
          skip={page.skip}
          take={page.take}
          total={projectsData.length}
          pageable={{
              buttonCount: 6,
              pageSizes: [5, 10, 15, 'All'],
              pageSizeValue: pageSizeValue
          }}
          onPageChange={handlePageChange}
          onFilterChange={handleFilterChange}
          onItemChange={itemChange}
      >
        <GridToolbar>
            <TextBox
              className="k-grid-search"
              placeholder="Search..."
              prefix={() => (
                <InputPrefix>
                  <SvgIcon icon={searchIcon} />
                </InputPrefix>
              )}
            />
          <span className="k-spacer"></span>
          <Button svgIcon={exportIcon} fillMode="flat">
            <CSVLink
              data={data.data}
          >
              Export to CSV
          </CSVLink>
          </Button>
            <Button svgIcon={printIcon} fillMode="flat" onClick={print}>Print</Button>
        </GridToolbar>
        <GridColumn field="ProjectName" title="Project Name" width={440} />
        <GridColumn field="ProjectManager" title="Project Manager" width={245} cells={{ data: ProjectManagerCell, filterCell: ProjectManagerFilterCell }} />
        <GridColumn field="Stakeholders" title="Stakeholder(s)" width={245} cells={{ data: StakeholderCell, filterCell: StakeholderFilterCell }} />
        <GridColumn field="DueDate" title="Due Date" width={245} format="{0:d}" filter="date" />
        <GridColumn field="Priority" title="Priority" width={230} cells={{ data: PriorityCell, filterCell: PriorityFilterCell }} />
      </Grid>
    </div>
  )
}
