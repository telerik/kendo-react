import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppBarComponent from "./components/AppBarComponent";
import DrawerComponent from "./components/DrawerComponent";
import TeamManagement from "./pages/TeamManagement";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Tasks from "./pages/Tasks";
import Settings from "./pages/Settings";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <AppBarComponent />
        <DrawerComponent>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/tasks" element={<Tasks />} />
                <Route path="/team-management" element={<TeamManagement />} />
                <Route path="/settings" element={<Settings />} />
            </Routes>
        </DrawerComponent>
      </BrowserRouter>
    </>
  )
}
