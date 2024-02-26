//Components
import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer/Footer";

//Pages
import HomePage from "./Pages/HomePage/HomePage";
import ContactPage from "./Pages/ContactPage/ContactPage";
import AboutMePage from "./Pages/AboutMePage/AboutMePage";
import ProjectsPage from "./Pages/ProjectsPage/ProjectsPage";
import TestPage from "./Pages/TestPage/TestPage";

//Styling
import './App.css';

//General Imports
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Navbar />
        <Routes>       
          <Route path="/" element={<HomePage />} />
          <Route path="/contacts" element={<ContactPage />} />
          <Route path="/about-me" element={<AboutMePage />}/>
          <Route path="/projects" element={<ProjectsPage />}/>
          <Route path="/test" element={<TestPage />}/>
        </Routes>
      <Footer />

    </div>
  );
}

export default App;
