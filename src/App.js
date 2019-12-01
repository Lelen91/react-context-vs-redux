import React from "react";
import Navbar from "./components/Navbar";
import TechList from "./components/TechList";
import NewTechForm from "./components/NewTechForm";
import ThemeContextProvider from "./contexts/ThemeContext";
import AuthContextProvider from "./contexts/AuthContext";
import TechContextProvider from "./contexts/TechContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <TechContextProvider>
            <TechList />
            <NewTechForm />
          </TechContextProvider>
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
