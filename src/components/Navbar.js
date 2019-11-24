import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import ThemeSwitcher from "./ThemeSwitcher";

export default class Navbar extends Component {
  static contextType = ThemeContext;
  render() {
    const { isLightTheme, light, dark, handleClick } = this.context;
    const theme = isLightTheme ? light : dark;
    return (
      <nav style={{ background: theme.ui, color: theme.syntax }}>
        <ThemeSwitcher isLightTheme={isLightTheme} handleClick={handleClick} />
        <h1>Context App</h1>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    );
  }
}
