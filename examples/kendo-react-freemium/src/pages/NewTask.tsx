import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import { priorities, projectManagers, projectsData, tasksData, taskTags } from "./data";
import { Button } from "@progress/kendo-react-buttons";
import { Avatar, Breadcrumb, BreadcrumbLinkMouseEvent, ExpansionPanel, ExpansionPanelContent } from "@progress/kendo-react-layout";
import { homeIcon, folderIcon, trashIcon, checkIcon } from "@progress/kendo-svg-icons";
import { SvgIcon } from "@progress/kendo-react-common";
import { Reveal } from '@progress/kendo-react-animation';
import React, { ReactElement } from "react";
import { TextArea } from "@progress/kendo-react-inputs";
import { DropDownList, ListItemProps, MultiSelect, TagData } from "@progress/kendo-react-dropdowns";
import { DateInput } from "@progress/kendo-react-dateinputs";
import { FloatingLabel } from "@progress/kendo-react-labels";
import { Badge } from "@progress/kendo-react-indicators";

interface DataModel {
  id: string;
  text?: string;
  icon?: React.ReactNode;
}

export default function Task() {
  let params = useParams();
  const navigate = useNavigate();
  const [projExpanded, setProjExpanded] = React.useState(true);
  const [dateExpanded, setDateExpanded] = React.useState(true);
  const [assigneeExpanded, setAssigneeExpanded] = React.useState(true);
  const [priorityExpanded, setPriorityExpanded] = React.useState(true);
  const [statusExpanded, setStatusExpanded] = React.useState(true);
  const [tagsExpanded, setTagsExpanded] = React.useState(true);
  const [project, setProject] = React.useState<string>();
  const [assignee, setAssignee] = React.useState<string[]>();
  const [dueDate, setDueDate] = React.useState<Date>();
  const [priority, setPriority] = React.useState<string>();
  const [status, setStatus] = React.useState<string>();
  const [tag, setTag] = React.useState<string[]>();
  const projects = projectsData.map(proj => { return proj.ProjectName }).slice(0, 10);
  const assignees = tasksData.map(task => { return task.assignedTo });
  const statuses = tasksData.map(task => { return task.status });

  const breadcrumbItems: DataModel[] = [
    {
        id: "home",
        icon: <SvgIcon icon={homeIcon} />,
    },
    {
        id: "tasks",
        text: "Tasks",
    },
    {
        id: `${params.taskId}`,
        text: `New Task`,
    }
  ];

  const handleItemSelect = (e: BreadcrumbLinkMouseEvent) => {
    if (e.id === 'home') {
      navigate('/');
    } else if (e.id === 'tasks') {
      navigate('/tasks');
    }
  }

  const tagRender = (tagData: TagData, li: ReactElement<any>) => React.cloneElement(li, li.props, [
    <span key={assignees.indexOf(tagData.data[0])} className="k-chip-label">
    <Avatar rounded="full" type="image" size="small" className="k-chip-avatar mr-1">
      <img src={projectManagers.map(manager => manager.name === tagData.data[0] ? manager.avatarSrc : "").filter(src => src !== "")[0]} alt="user-image" />
    </Avatar>
    {tagData.data[0]}
    </span>, li.props.children]);

  const itemRender = (li: React.ReactElement<HTMLLIElement>, itemProps: ListItemProps) => {
    const index = itemProps.index;
    console.log(itemProps);
    const itemChildren = (
      <span key={index}>
        <Avatar rounded="full" type="image" size="small" className="mr-1">
            <img src={projectManagers.map(manager => manager.name === itemProps.dataItem ? manager.avatarSrc : "").filter(src => src !== "")[0]} alt="user-image" />
          </Avatar>
            {li.props.children as any} {index}
        </span>
    );

    return React.cloneElement(li, li.props, itemChildren);
};

  const priorityValueRender = (element: React.ReactElement<HTMLSpanElement>, value: any) => {
    if (!value) {
        return element;
    }

    const children = [
      <Badge
          key={value}
          rounded="full"
          position="inside"
          className="!relative !z-0"
          themeColor={
            value === "Urgent"
              ? "error"
              : value === "Medium priority"
              ? "warning"
              : value === "Low priority"
              ? "success"
              : value === "Routine"
              ? "tertiary"
              : "primary"
          }
        >
          {element.props.children as any}
        </Badge>
    ];

    return React.cloneElement(element, { ...element.props }, children);
  };

  const priorityItemRender = (li: React.ReactElement<HTMLLIElement>, itemProps: ListItemProps) => {
    const itemChildren = (
      <Badge
      rounded="full"
      position="inside"
      className="!relative !z-0"
      themeColor={
        itemProps.dataItem === "Urgent"
          ? "error"
          : itemProps.dataItem === "Medium priority"
          ? "warning"
          : itemProps.dataItem === "Low priority"
          ? "success"
          : itemProps.dataItem === "Routine"
          ? "tertiary"
          : "primary"
      }
    >
      {li.props.children as any}
    </Badge>
    );

    return React.cloneElement(li, li.props, itemChildren);
};

  return (
      <>
          <div style={{minHeight: 'calc(100vh - 106px)'}} className="flex flex-col p-10 gap-6">
            <Breadcrumb data={breadcrumbItems} onItemSelect={handleItemSelect} className="!bg-app-surface" />

            <h1 className="text-4xl">New Task</h1>

            <div className="grid grid-cols-12 gap-6">
                  <div className="col-span-6 lg:col-span-8">
                      <TextArea rows={30} className="rounded-t-2xl"/>
                      <div className="bg-surface-alt border-1 border-t-0 border-border rounded-b-2xl px-4 py-2">
                          <div className="hidden lg:flex gap-1">
                              <Button svgIcon={checkIcon} themeColor="primary" size="large">Save changes</Button>
                              <Button svgIcon={folderIcon} fillMode="flat" size="large" className="ml-auto">Archive Task</Button>
                              <Button svgIcon={trashIcon} fillMode="flat" themeColor="error" size="large">Delete task</Button>
                          </div>
                          <div className="flex lg:hidden gap-1">
                              <Button svgIcon={checkIcon} themeColor="primary" size="large">Save changes</Button>
                              <Button svgIcon={folderIcon} fillMode="flat" size="large" className="ml-auto">Archive Task</Button>
                              <Button svgIcon={trashIcon} fillMode="flat" themeColor="error" size="large">Delete task</Button>
                          </div>
                      </div>
                  </div>

                  <div className="col-span-6 lg:col-span-4 flex flex-col gap-2">
                      <ExpansionPanel title="Project" expanded={projExpanded} onAction={() => setProjExpanded(!projExpanded)} className="rounded-2xl">
                          <Reveal>
                            {projExpanded && <ExpansionPanelContent>
                              <FloatingLabel label="Choose project" editorId={'project'} editorValue={project} className="flex">
                                  <DropDownList size="large" value={project} onChange={e => setProject(e.value as string)} data={projects} />
                                </FloatingLabel>
                              </ExpansionPanelContent>}
                          </Reveal>
                        </ExpansionPanel>
                        <ExpansionPanel title="Assigned to" expanded={assigneeExpanded} onAction={() => setAssigneeExpanded(!assigneeExpanded)} className="rounded-2xl">
                          <Reveal>
                              {assigneeExpanded && <ExpansionPanelContent>
                                <FloatingLabel label="Select assignee(s)" editorId={'assignee'} editorValue={assigneeExpanded} className="flex">
                                    <MultiSelect size="large" data={assignees} value={assignee} onChange={e => setAssignee([...e.value] as string[])} tagRender={tagRender} itemRender={itemRender} />
                                </FloatingLabel>
                              </ExpansionPanelContent>}
                          </Reveal>
                      </ExpansionPanel>
                      <ExpansionPanel title="Due Date" expanded={dateExpanded} onAction={() => setDateExpanded(!dateExpanded)} className="rounded-2xl">
                          <Reveal>
                              {dateExpanded && <ExpansionPanelContent>
                                <FloatingLabel label="Set due date" editorId={'due-date'} editorValue={dateExpanded} className="flex">
                                    <DateInput size="large" value={dueDate} onChange={e => setDueDate(e.value as Date)} />
                                </FloatingLabel>
                              </ExpansionPanelContent>}
                          </Reveal>
                      </ExpansionPanel>
                      <ExpansionPanel title="Priority" expanded={priorityExpanded} onAction={() => setPriorityExpanded(!priorityExpanded)} className="rounded-2xl">
                          <Reveal>
                            {priorityExpanded && <ExpansionPanelContent>
                                <FloatingLabel label="Choose project" editorId={'priority'} editorValue={priority} className="flex">
                                  <DropDownList size="large" value={priority} onChange={e => setPriority(e.value as string)} data={priorities} valueRender={priorityValueRender} itemRender={priorityItemRender} />
                                </FloatingLabel>
                              </ExpansionPanelContent>}
                          </Reveal>
                        </ExpansionPanel>
                      <ExpansionPanel title="Status" expanded={statusExpanded} onAction={() => setStatusExpanded(!statusExpanded)} className="rounded-2xl">
                          <Reveal>
                              {statusExpanded && <ExpansionPanelContent>
                                <FloatingLabel label="Select status" editorId={'status'} editorValue={statusExpanded} className="flex">
                                    <DropDownList size="large" data={statuses} value={status} onChange={e => setStatus(e.value as string)} />
                                </FloatingLabel>
                              </ExpansionPanelContent>}
                          </Reveal>
                      </ExpansionPanel>
                      <ExpansionPanel title="Tags" expanded={tagsExpanded} onAction={() => setTagsExpanded(!tagsExpanded)} className="rounded-2xl">
                          <Reveal>
                              {tagsExpanded && <ExpansionPanelContent>
                                <FloatingLabel label="Select tags" editorId={'tags'} editorValue={tagsExpanded} className="flex">
                                    <MultiSelect size="large" data={taskTags} value={tag} onChange={e => setTag([...e.value] as string[])} />
                                </FloatingLabel>
                              </ExpansionPanelContent>}
                          </Reveal>
                      </ExpansionPanel>
                  </div>
              </div>

          </div>
           <div className="bg-surface-alt color-subtle p-2 text-center">
               <span>Copyright &#169; 2025 Progress Software. All rights reserved.</span>
           </div>
       </>
  )
}