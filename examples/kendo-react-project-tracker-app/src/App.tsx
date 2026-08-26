import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppBarComponent from "./components/AppBarComponent";
import DrawerComponent from "./components/DrawerComponent";
import TeamManagement from "./pages/TeamManagement";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Tasks from "./pages/Tasks";
import Settings from "./pages/Settings";
import Team from "./pages/Team";
import Task from "./pages/Task";
import NewTask from "./pages/NewTask";
import { Help, Notifications, NotFound, ProjectDetail } from "./pages/SupportPages";

export default function App() {
  return (
    <>
      <BrowserRouter basename="/kendo-react/kendo-react-project-tracker-app">
        <AppBarComponent />
        <DrawerComponent>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:projectId" element={<ProjectDetail />} />
                <Route path="/tasks" element={<Tasks />} />
                <Route path="/tasks/:taskId" element={<Task />} />
                <Route path="/tasks/new" element={<NewTask />} />
                <Route path="/team-management" element={<TeamManagement />} />
                <Route path="/team-management/:teamId" element={<Team />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/help" element={<Help />} />
                <Route path="/not-found" element={<NotFound />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </DrawerComponent>
      </BrowserRouter>
    </>
  )
}
