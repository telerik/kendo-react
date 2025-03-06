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

export default function App() {
  return (
    <>
      <BrowserRouter basename="/kendo-react/kendo-react-freemium">
        <AppBarComponent />
        <DrawerComponent>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/tasks" element={<Tasks />} />
                <Route path="/tasks/:taskId" element={<Task />} />
                <Route path="/tasks/new" element={<NewTask />} />
                <Route path="/team-management" element={<TeamManagement />} />
                <Route path="/team-management/:teamId" element={<Team />} />
                <Route path="/settings" element={<Settings />} />
            </Routes>
        </DrawerComponent>
      </BrowserRouter>
    </>
  )
}
