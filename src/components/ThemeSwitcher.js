import React, { Component } from "react";
import PropTypes from "prop-types";

export default class ThemeSwitcher extends Component {
  render() {
    const { isLightTheme, handleClick } = this.props;
    const themeName = isLightTheme ? "Dark" : "Light";
    return (
      <button className='theme-switcher' onClick={() => handleClick()}>
        {themeName}
      </button>
    );
  }
}

ThemeSwitcher.propTypes = {
  isLightTheme: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired
};
