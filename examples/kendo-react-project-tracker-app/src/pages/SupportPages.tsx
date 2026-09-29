import { Button } from "@progress/kendo-react-buttons";
import { Grid, GridColumn } from "@progress/kendo-react-grid";
import { PanelBar, PanelBarItem } from "@progress/kendo-react-layout";
import { useNavigate, useParams } from "react-router-dom";
import { projectsData, tasksData } from "./data";

const pageClassName = "tracker-page";

export function ProjectDetail() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = projectsData.find((item) => item.ProjectID === Number(projectId));
  const tasks = tasksData.filter((item) => item.projectId === project?.ProjectID);

  if (!project) {
    return <NotFound />;
  }

  return (
    <main className={`${pageClassName} tracker-project-detail`}>
      <Button fillMode="flat" onClick={() => navigate("/projects")}>Back to projects</Button>
      <header className="tracker-page__header">
        <div>
          <h1 className="tracker-page__heading">{project.ProjectName}</h1>
          <p className="tracker-page__subtitle">Led by {project.ProjectManager} · Due {project.DueDate}</p>
        </div>
        <Button themeColor="primary" onClick={() => navigate("/tasks/new")}>Add task</Button>
      </header>
      <section aria-labelledby="project-tasks">
        <h2 id="project-tasks" className="tracker-section-title">Project tasks</h2>
        <Grid data={tasks} onRowDoubleClick={(event) => navigate(`/tasks/${event.dataItem.taskId}`)}>
          <GridColumn field="taskName" title="Task" />
          <GridColumn field="assignedTo" title="Assignee" />
          <GridColumn field="status" title="Status" />
          <GridColumn field="dueDate" title="Due date" />
        </Grid>
      </section>
    </main>
  );
}

export function Notifications() {
  const navigate = useNavigate();
  const notifications = [
    ["Today", "Marlon assigned you to review the sprint scope.", "Open task"],
    ["Today", "The LMS research task is due in two days.", "View task"],
    ["Earlier", "Alden moved Budget planning to On Hold.", "Open project"],
  ];

  return (
    <main className={pageClassName}>
      <header className="tracker-page__header">
        <div><h1 className="tracker-page__heading">Notifications</h1><p className="tracker-page__subtitle">Project updates and task reminders.</p></div>
        <Button fillMode="outline">Mark all as read</Button>
      </header>
      <section className="support-feed" aria-label="Notification feed">
        {notifications.map(([group, message, action], index) => (
          <div className="support-feed__item" key={message}>
            <div><p className="support-feed__group">{group}</p><p className="support-feed__message">{message}</p></div>
            <Button fillMode="flat" themeColor="primary" onClick={() => navigate(index === 2 ? "/projects/8" : "/tasks/2214")}>{action}</Button>
          </div>
        ))}
      </section>
    </main>
  );
}

export function Help() {
  return (
    <main className={pageClassName}>
      <header><h1 className="tracker-page__heading">Help &amp; Support</h1><p className="tracker-page__subtitle">Find guidance for common project-tracking workflows.</p></header>
      <PanelBar className="support-panel">
        <PanelBarItem title="How do I update a task status?"><p className="support-panel__content">Open a task from the task list, choose the Status panel, and select the new state.</p></PanelBarItem>
        <PanelBarItem title="How do I manage project members?"><p className="support-panel__content">Open Team Management to browse teams and view individual member details.</p></PanelBarItem>
        <PanelBarItem title="How do I receive due-date reminders?"><p className="support-panel__content">Use Settings to choose email, SMS, or push notifications for project updates.</p></PanelBarItem>
      </PanelBar>
    </main>
  );
}

export function NotFound() {
  const navigate = useNavigate();
  return (
    <main className={`${pageClassName} not-found`}>
      <div className="not-found__content">
        <p className="tracker-page__subtitle">404</p>
        <h1 className="tracker-page__heading">Page not found</h1>
        <p className="tracker-page__subtitle">The page may have moved, or the link may be incomplete.</p>
        <div className="not-found__actions">
          <Button themeColor="primary" onClick={() => navigate("/")}>Return to dashboard</Button>
          <Button fillMode="outline" onClick={() => navigate("/projects")}>Browse projects</Button>
        </div>
      </div>
    </main>
  );
}
