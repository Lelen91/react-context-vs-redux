import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default class TechsList extends Component {
  static contextType = ThemeContext;
  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    return (
      <div
        className='techs-list'
        style={{ background: theme.bg, color: theme.syntax }}
      >
        <ul>
          <li style={{ background: theme.ui }}>React</li>
          <li style={{ background: theme.ui }}>Context API</li>
          <li style={{ background: theme.ui }}>Hooks</li>
          <li style={{ background: theme.ui }}>Redux</li>
        </ul>
      </div>
    );
  }
}
