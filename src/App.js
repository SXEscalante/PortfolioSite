//Components
import Header from "./Components/Header/Header"

//Pages
import HomePage from "./Pages/HomePage/HomePage";
import ContactPage from "./Pages/ContactPage/ContactPage";
import AboutMePage from "./Pages/AboutMePage/AboutMePage";
import ProjectsPage from "./Pages/ProjectsPage/ProjectsPage";

//Styling
import './App.css';

//General Imports
import { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom"

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="App">
      <Header setDarkMode={setDarkMode} darkMode={darkMode}/>
        <Routes>       
          <Route path="/" element={<HomePage darkMode={darkMode}/>} />
          <Route path="/contacts" element={<ContactPage darkMode={darkMode}/>} />
          <Route path="/about-me" element={<AboutMePage />}/>
          <Route path="/projects" element={<ProjectsPage />}/>
        </Routes>
    </div>
  );
}

export default App;
