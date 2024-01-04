import React, { useState } from 'react';
import './App.scss';
import { Header } from './components/Header'
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import Home from './components/Home';
import GridPage from './components/GridPage';
import ChartPage from './components/ChartPage';
import FormsPage from './components/FormsPage';
import Footer from './components/Footer';

const App = () => {
  const [theme, setTheme] = useState("https://unpkg.com/@progress/kendo-theme-default@latest/dist/all.css");

  const changeTheme = (theme) => {
    setTheme(theme);
  }

  return (
    <Router>
        <link rel="stylesheet" href={theme}></link>
        <div className="content">
          <Header projectName={'Project Name'} />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/grid" element={<GridPage changeTheme={changeTheme} theme={theme}/>}/>
            <Route path="/chart" element={<ChartPage changeTheme={changeTheme} theme={theme}/>}/>
            <Route path="/forms" element={<FormsPage changeTheme={changeTheme} theme={theme}/>}/>
          </Routes>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </Router>
  );
}

export default App;
