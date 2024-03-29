import React, { Component, createContext } from "react";

export const ThemeContext = createContext();

export default class ThemeContextProvider extends Component {
  state = {
    isLightTheme: true,
    light: {},
    dark: {}
  };

  componentDidMount() {
    this.setState({
      isLightTheme: true,
      light: { syntax: "#555", ui: "#ddd", bg: "#eee", btnBorderColor: "#eee", btnColor: "#555" },
      dark: { syntax: "#ddd", ui: "#333", bg: "#555", btnBorderColor: "#333", btnColor: "#ddd" }
    });
  }

  handleClick = () => {
    this.setState(prevState => ({
      isLightTheme: !prevState.isLightTheme
    }));
  };

  render() {
    return (
      <ThemeContext.Provider
        value={{ ...this.state, handleClick: this.handleClick }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
