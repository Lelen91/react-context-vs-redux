import React from "react";
import Navbar from "./components/Navbar";
import TechsList from "./components/TechsList";
import ThemeContextProvider from "./contexts/ThemeContext";
import AuthContextProvider from "./contexts/AuthContext";

function App() {
  return (
    <div className='App'>
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <TechsList />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
