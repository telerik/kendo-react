import { Button } from "@progress/kendo-react-buttons";
import { Grid, GridColumn } from "@progress/kendo-react-grid";
import { PanelBar, PanelBarItem } from "@progress/kendo-react-layout";
import { useNavigate, useParams } from "react-router-dom";
import { projectsData, tasksData } from "./data";

const pageClassName = "flex min-h-[calc(100vh-106px)] flex-col gap-6 p-6 md:p-10";

export function ProjectDetail() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = projectsData.find((item) => item.ProjectID === Number(projectId));
  const tasks = tasksData.filter((item) => item.projectId === project?.ProjectID);

  if (!project) {
    return <NotFound />;
  }

  return (
    <main className={pageClassName}>
      <Button fillMode="flat" onClick={() => navigate("/projects")}>Back to projects</Button>
      <header className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-semibold">{project.ProjectName}</h1>
          <p className="mt-2 text-subtle">Led by {project.ProjectManager} · Due {project.DueDate}</p>
        </div>
        <Button themeColor="primary" onClick={() => navigate("/tasks/new")}>Add task</Button>
      </header>
      <section aria-labelledby="project-tasks">
        <h2 id="project-tasks" className="mb-4 text-xl font-semibold">Project tasks</h2>
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
      <header className="flex items-center justify-between gap-4">
        <div><h1 className="text-4xl font-semibold">Notifications</h1><p className="mt-2 text-subtle">Project updates and task reminders.</p></div>
        <Button fillMode="outline">Mark all as read</Button>
      </header>
      <section className="max-w-3xl divide-y divide-border rounded-md border border-border bg-surface-alt" aria-label="Notification feed">
        {notifications.map(([group, message, action], index) => (
          <div className="flex flex-wrap items-center justify-between gap-4 p-4" key={message}>
            <div><p className="text-xs font-medium text-subtle">{group}</p><p className="mt-1">{message}</p></div>
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
      <header><h1 className="text-4xl font-semibold">Help &amp; Support</h1><p className="mt-2 text-subtle">Find guidance for common project-tracking workflows.</p></header>
      <PanelBar className="max-w-3xl">
        <PanelBarItem title="How do I update a task status?"><p className="p-4">Open a task from the task list, choose the Status panel, and select the new state.</p></PanelBarItem>
        <PanelBarItem title="How do I manage project members?"><p className="p-4">Open Team Management to browse teams and view individual member details.</p></PanelBarItem>
        <PanelBarItem title="How do I receive due-date reminders?"><p className="p-4">Use Settings to choose email, SMS, or push notifications for project updates.</p></PanelBarItem>
      </PanelBar>
    </main>
  );
}

export function NotFound() {
  const navigate = useNavigate();
  return (
    <main className={`${pageClassName} items-center justify-center text-center`}>
      <div className="max-w-md">
        <p className="text-lg font-medium text-subtle">404</p>
        <h1 className="mt-2 text-4xl font-semibold">Page not found</h1>
        <p className="mt-4 text-subtle">The page may have moved, or the link may be incomplete.</p>
        <div className="mt-6 flex justify-center gap-3">
          <Button themeColor="primary" onClick={() => navigate("/")}>Return to dashboard</Button>
          <Button fillMode="outline" onClick={() => navigate("/projects")}>Browse projects</Button>
        </div>
      </div>
    </main>
  );
}
