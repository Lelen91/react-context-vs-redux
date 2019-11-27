import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import ThemeSwitcher from "./ThemeSwitcher";
import { AuthContext } from "../contexts/AuthContext";

export default class Navbar extends Component {
  render() {
    return (
      <AuthContext.Consumer>
        {authContext => (
          <ThemeContext.Consumer>
            {themeContext => {
              const { isAuthenticated, toggleAuth } = authContext;
              const { isLightTheme, light, dark, handleClick } = themeContext;
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
            }}
          </ThemeContext.Consumer>
        )}
      </AuthContext.Consumer>
    );
  }
}
