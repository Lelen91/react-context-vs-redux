import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import ThemeSwitcher from "./ThemeSwitcher";

export default class Navbar extends Component {
  static contextType = ThemeContext;
  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          const { isLightTheme, light, dark, handleClick } = context;
          const theme = isLightTheme ? light : dark;
          return (
            <nav style={{ background: theme.ui, color: theme.syntax }}>
              <div className='header'>
                <h1>Context App</h1>
                <ThemeSwitcher
                  isLightTheme={isLightTheme}
                  handleClick={handleClick}
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
    );
  }
}
