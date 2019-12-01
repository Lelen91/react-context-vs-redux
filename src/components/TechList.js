import React, { useContext } from "react";
import TechDetails from "./TechDetails";
import { ThemeContext } from "../contexts/ThemeContext";
import { TechContext } from "../contexts/TechContext";

const TechList = () => {
  const { techs } = useContext(TechContext);
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div
      className="techs-list"
      style={{ background: theme.bg, color: theme.syntax }}
    >
      {techs.length ? (
        <ul>
          {techs.map(tech => {
            return (
              <TechDetails tech={tech} background={theme.ui} key={tech.id} />
            );
          })}
        </ul>
      ) : (
        <p>No tech found! Please add your favourite techs.</p>
      )}
    </div>
  );
};

export default TechList;
