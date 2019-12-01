import React, { Component } from "react";
import PropTypes from "prop-types";

export default class ThemeSwitcher extends Component {
  render() {
    const { isLightTheme, handleClick, theme } = this.props;
    const themeName = isLightTheme ? "Dark" : "Light";
    return (
      <button
        className="theme-switcher"
        onClick={handleClick}
        style={{ borderColor: theme.btnBorderColor, color: theme.btnColor }}
      >
        {themeName}
      </button>
    );
  }
}

ThemeSwitcher.propTypes = {
  isLightTheme: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};
