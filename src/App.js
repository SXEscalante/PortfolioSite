import Header from "./Components/Header/Header"
import HomePage from "./Pages/HomePage/HomePage";
import './App.css';
import { useEffect, useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="App">
      <Header setDarkMode={setDarkMode} darkMode={darkMode}/>
      
      <HomePage darkMode={darkMode}/>
    </div>
  );
}

export default App;
