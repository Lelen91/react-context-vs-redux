import React from "react";
import Navbar from "./components/Navbar";
import TechsList from "./components/TechsList";
import ThemeContextProvider from "./contexts/ThemeContext";

function App() {
  return (
    <div className='App'>
      <ThemeContextProvider>
        <Navbar />
        <TechsList />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
