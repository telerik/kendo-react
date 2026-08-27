import { useParams } from "react-router";
import { Navigate, useNavigate } from "react-router-dom";
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
import PageFooter from "../components/PageFooter";

interface DataModel {
  id: string;
  text?: string;
  icon?: React.ReactNode;
}

export default function Task() {
  let params = useParams();
  const task = tasksData.find((item) => item.taskId === params.taskId);
  const navigate = useNavigate();
  if (!task) {
    return <Navigate to="/not-found" replace />;
  }
  const [projExpanded, setProjExpanded] = React.useState(true);
  const [dateExpanded, setDateExpanded] = React.useState(true);
  const [assigneeExpanded, setAssigneeExpanded] = React.useState(true);
  const [priorityExpanded, setPriorityExpanded] = React.useState(true);
  const [statusExpanded, setStatusExpanded] = React.useState(true);
  const [tagsExpanded, setTagsExpanded] = React.useState(true);
  const projectId = task.projectId;
  const [project, setProject] = React.useState(projectsData.filter(proj => proj.ProjectID === projectId)[0].ProjectName);
  const [assignee, setAssignee] = React.useState([tasksData.filter(task => task.taskId === params.taskId)[0].assignedTo] as string[]);
  const [dueDate, setDueDate] = React.useState(new Date(tasksData.filter(task => task.taskId === params.taskId)[0].dueDate));
  const [priority, setPriority] = React.useState(tasksData.filter(task => task.taskId === params.taskId)[0].priority);
  const [status, setStatus] = React.useState(tasksData.filter(task => task.taskId === params.taskId)[0].status);
  const [tag, setTag] = React.useState(tasksData.filter(task => task.taskId === params.taskId)[0].tags as string[]);
  const projects = projectsData.map(proj => { return proj.ProjectName }).slice(0, 10);
  const assignees = tasksData.map(task => { return task.assignedTo });
  const statuses = tasksData.map(task => { return task.status });;

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
        text: `${tasksData.filter(task => task.taskId === params.taskId)[0].taskName}`,
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
    <Avatar rounded="full" type="image" size="small" className="k-chip-avatar tracker-chip-avatar">
      <img src={projectManagers.map(manager => manager.name === tagData.data[0] ? manager.avatarSrc : "").filter(src => src !== "")[0]} alt="user-image" />
    </Avatar>
    {tagData.data[0]}
    </span>, li.props.children]);

  const itemRender = (li: React.ReactElement<HTMLLIElement>, itemProps: ListItemProps) => {
    const index = itemProps.index;
    console.log(itemProps);
    const itemChildren = (
      <span key={index}>
        <Avatar rounded="full" type="image" size="small" className="tracker-chip-avatar">
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
          className="tracker-badge"
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
      className="tracker-badge"
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
          <main className="tracker-page">
            <Breadcrumb data={breadcrumbItems} onItemSelect={handleItemSelect} className="tracker-page__breadcrumb" />

            <h1 className="tracker-page__heading">{tasksData.map(task => { return task.taskId === params.taskId ? task.taskName : '' })}</h1>

            <div className="task-layout">
                  <div className="task-editor">
                      <div className="task-description">
                      <TextArea className="task-description__input" value='As part of a learning management system, we need to implement content management features that enable instructors to easily create, manage, and organize their course materials.
Objectives:
1. Enhance User Experience: Streamline the process for instructors to create, manage, and distribute course content effectively.
2. Facilitate Content Accessibility: Ensure that all content management features are user-friendly and accessible to instructors with varying levels of technical expertise.
3. Boost Engagement: Provide tools that enable instructors to create more engaging and interactive content for students.

Key Responsibilities:
1. Requirements Gathering: Collaborate with instructors to understand their needs and pain points regarding current content management practices.
2. Feature Development: Design and implement features such as modular content creation, media embedding, version control, and scheduling for content release.
3. User Testing: Conduct thorough testing sessions with instructors to ensure the new features meet their expectations and are easy to use.
4. Documentation and Training: Develop user manuals and training materials to assist instructors in utilizing the new content management features.
5. Feedback Incorporation: Set up a process for collecting user feedback post-implementation to make adjustments and improvements as necessary.

Deliverables:
1. Feature Specifications Document: A comprehensive document outlining the requirements, features, and functionalities based on instructor feedback.
2. Developed Features: A functioning implementation of content management features that includes:
3. Course content creation tools (text, video, quizzes)
4. Media upload and embedding options
5. Version control and history tracking for content changes
6. Scheduling and automation for content release
7. User Acceptance Testing (UAT) Report: Document summarizing feedback from testing sessions and any identified issues or suggestions for improvement.
8. Training Materials: User guides, video tutorials, and training sessions scheduled for instructors to familiarize them with the new features.
9. Feedback Mechanism: An established method for instructors to provide ongoing feedback on the content management system.

Comments/Notes:
It’s important to involve a diverse group of instructors in the testing phase to capture a wide range of feedback.
Consider accessibility best practices to ensure all instructors, including those with disabilities, can effectively utilize the new features.
Regular check-ins with stakeholders should be scheduled to ensure continued alignment with instructional goals and user needs.
Monitor key metrics post-launch to evaluate the effectiveness of the content management features in enhancing instructor performance and student engagement.
                      '/>
                      <div className="task-actions">
                          <Button svgIcon={checkIcon} themeColor="primary" size="large" title="Save changes">Save changes</Button>
                              <Button svgIcon={folderIcon} fillMode="flat" size="large" className="task-actions__secondary" title="Archive task">Archive Task</Button>
                              <Button svgIcon={trashIcon} fillMode="flat" themeColor="error" size="large" title="Delete task">Delete task</Button>
                      </div>
                      </div>
                  </div>

                  <div className="task-panels">
                      <ExpansionPanel title="Project" expanded={projExpanded} onAction={() => setProjExpanded(!projExpanded)} className="task-panel">
                          <Reveal>
                            {projExpanded && <ExpansionPanelContent>
                              <FloatingLabel label="Choose project" editorId={'project'} editorValue={project} className="task-panel__field">
                                  <DropDownList ariaLabel="Choose project" size="large" value={project} onChange={e => setProject(e.value as string)} data={projects} />
                                </FloatingLabel>
                              </ExpansionPanelContent>}
                          </Reveal>
                        </ExpansionPanel>
                        <ExpansionPanel title="Assigned to" expanded={assigneeExpanded} onAction={() => setAssigneeExpanded(!assigneeExpanded)} className="task-panel">
                          <Reveal>
                              {assigneeExpanded && <ExpansionPanelContent>
                                <FloatingLabel label="Select assignee(s)" editorId={'assignee'} editorValue={assigneeExpanded} className="task-panel__field">
                                    <MultiSelect ariaLabel="Select assignee(s)" size="large" data={assignees} value={assignee} onChange={e => setAssignee([...e.value] as string[])} tagRender={tagRender} itemRender={itemRender} />
                                </FloatingLabel>
                              </ExpansionPanelContent>}
                          </Reveal>
                      </ExpansionPanel>
                      <ExpansionPanel title="Due Date" expanded={dateExpanded} onAction={() => setDateExpanded(!dateExpanded)} className="task-panel">
                          <Reveal>
                              {dateExpanded && <ExpansionPanelContent>
                                <FloatingLabel label="Set due date" editorId={'due-date'} editorValue={dateExpanded} className="task-panel__field">
                                    <DateInput ariaLabel="Set Due Date" size="large" value={dueDate} onChange={e => setDueDate(e.value as Date)} />
                                </FloatingLabel>
                              </ExpansionPanelContent>}
                          </Reveal>
                      </ExpansionPanel>
                      <ExpansionPanel title="Priority" expanded={priorityExpanded} onAction={() => setPriorityExpanded(!priorityExpanded)} className="task-panel">
                          <Reveal>
                            {priorityExpanded && <ExpansionPanelContent>
                                <FloatingLabel label="Choose project" editorId={'priority'} editorValue={priority} className="task-panel__field">
                                  <DropDownList ariaLabel="Choose Project" size="large" value={priority} onChange={e => setPriority(e.value as string)} data={priorities} valueRender={priorityValueRender} itemRender={priorityItemRender} />
                                </FloatingLabel>
                              </ExpansionPanelContent>}
                          </Reveal>
                        </ExpansionPanel>
                      <ExpansionPanel title="Status" expanded={statusExpanded} onAction={() => setStatusExpanded(!statusExpanded)} className="task-panel">
                          <Reveal>
                              {statusExpanded && <ExpansionPanelContent>
                                <FloatingLabel label="Select status" editorId={'status'} editorValue={statusExpanded} className="task-panel__field">
                                    <DropDownList ariaLabel="Select status" size="large" data={statuses} value={status} onChange={e => setStatus(e.value as string)} />
                                </FloatingLabel>
                              </ExpansionPanelContent>}
                          </Reveal>
                      </ExpansionPanel>
                      <ExpansionPanel title="Tags" expanded={tagsExpanded} onAction={() => setTagsExpanded(!tagsExpanded)} className="task-panel">
                          <Reveal>
                              {tagsExpanded && <ExpansionPanelContent>
                                <FloatingLabel label="Select tags" editorId={'tags'} editorValue={tagsExpanded} className="task-panel__field">
                                    <MultiSelect ariaLabel="Select tags" size="large" data={taskTags} value={tag} onChange={e => setTag([...e.value] as string[])} />
                                </FloatingLabel>
                              </ExpansionPanelContent>}
                          </Reveal>
                      </ExpansionPanel>
                  </div>
              </div>

          </main>
          <PageFooter />
       </>
  )
}