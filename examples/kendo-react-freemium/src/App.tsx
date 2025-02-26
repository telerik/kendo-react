import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppBarComponent from "./components/AppBarComponent";
import DrawerComponent from "./components/DrawerComponent";
import TeamManagement from "./pages/TeamManagement";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Tasks from "./pages/Tasks";

export default function App() {
  return (
    <>
      <AppBarComponent />
      <BrowserRouter>
        <DrawerComponent>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/tasks" element={<Tasks />} />
                <Route path="/team-management" element={<TeamManagement />} />
            </Routes>
        </DrawerComponent>
      </BrowserRouter>
    </>
  )
}
