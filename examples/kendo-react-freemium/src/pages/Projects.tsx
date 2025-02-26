import { Avatar, Breadcrumb } from "@progress/kendo-react-layout";
import { Button } from "@progress/kendo-react-buttons";
import { Grid, GridColumn, GridCustomCellProps, GridToolbar } from "@progress/kendo-react-grid";
import { exportIcon, homeIcon, plusIcon, printIcon, searchIcon } from "@progress/kendo-svg-icons";
import { SvgIcon } from "@progress/kendo-react-common";
import { InputPrefix, TextBox } from "@progress/kendo-react-inputs";
import { Badge } from "@progress/kendo-react-indicators";
import { process } from "@progress/kendo-data-query";
import React from "react";
import { projectsData } from "./data";

interface DataModel {
  id: string;
  text?: string;
  icon?: React.ReactNode;
  iconClass?: string;
}

const breadcrumbItems: DataModel[] = [
  {
      id: "home",
      icon: <SvgIcon icon={homeIcon} />,
  },
  {
      id: "projects",
      text: "Projects"
  },
  // {
  //     id: "project1",
  //     text: "Online Learning Management System (LMS)"
  // }
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
    <Badge rounded="full" position="inside" className="!relative" themeColor={
      props.dataItem.Priority === "Urgent" ? "error"
        : props.dataItem.Priority === "Medium priority" ? "warning"
          : props.dataItem.Priority === "Low priority" ? "success"
            : props.dataItem.Priority === "Routine" ? "tertiary" : "primary"}>
      {props.dataItem.Priority}
    </Badge>
  </td>;
};

const initialDataState = {
  skip: 0,
  take: 10
};

export default function Projects() {
  const [page, setPage] = React.useState(initialDataState);
  const [pageSizeValue, setPageSizeValue] = React.useState();
  const data = process(projectsData, {
    skip: page.skip,
    take: page.take
  });
  const pageChange = (event: any) => {
    const targetEvent = event.targetEvent;
    const take = targetEvent.value === 'All' ? projectsData.length : event.page.take;
    if (targetEvent.value) {
      setPageSizeValue(targetEvent.value);
    }
    setPage({
      ...event.page,
      take
    });
  };

  return (
    <div style={{minHeight: 'calc(100vh - 106px)'}} className="flex flex-col p-10 gap-6">
      <Breadcrumb data={breadcrumbItems} className="!bg-app-surface" />

      <div className="flex flex-wrap items-center justify-between">
          <h1 className="!text-4xl">Projects</h1>
          <Button themeColor="primary" fillMode="outline" svgIcon={plusIcon}>Add new project</Button>
      </div>

      <Grid className="k-grid-no-scrollbar"
          data={data}
          skip={page.skip}
          take={page.take}
          total={projectsData.length}
          pageable={{
              buttonCount: 6,
              pageSizes: true,
              pageSizeValue: pageSizeValue
            }} onPageChange={pageChange}
      >
        <GridToolbar>
            <TextBox
              // value={filterValue}
            // onChange={onFilterChange}
              className="k-grid-search"
              placeholder="Search..."
              prefix={() => (
                <InputPrefix>
                  <SvgIcon icon={searchIcon} />
                </InputPrefix>
              )}
            />
            <span className="k-spacer"></span>
            <Button svgIcon={exportIcon} fillMode="flat">Export to CSV</Button>
            <Button svgIcon={printIcon} fillMode="flat">Print</Button>
        </GridToolbar>
        <GridColumn field="ProjectName" title="Project Name" />
        <GridColumn field="ProjectManager" title="Project Manager" width={245} cells={{ data: ProjectManagerCell }} />
        <GridColumn field="Stakeholders" title="Stakeholder(s)" width={245} cells={{ data: StakeholderCell }} />
        <GridColumn field="DueDate" title="Due Date" width={245} />
        <GridColumn field="Priority" title="Priority" width={225} cells={{ data: PriorityCell }}/>
      </Grid>
    </div>
  )
}
