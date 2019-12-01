import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import ThemeSwitcher from "./ThemeSwitcher";
import { AuthContext } from "../contexts/AuthContext";

const Navbar = () => {
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);
  const { isLightTheme, light, dark, handleClick } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <nav style={{ background: theme.ui, color: theme.syntax }}>
      <div onClick={toggleAuth}>
        {isAuthenticated ? "Logged in" : "Logged out"}
      </div>
      <div className="header">
        <h1>Context App</h1>
        <ThemeSwitcher
          isLightTheme={isLightTheme}
          handleClick={handleClick}
          theme={theme}
        />
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
