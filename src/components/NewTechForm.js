import React, { useContext, useState } from "react";
import { TechContext } from "../contexts/TechContext";
import { ThemeContext } from "../contexts/ThemeContext";

const NewTechForm = () => {
  const { dispatch } = useContext(TechContext);
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  const [name, setName] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: "ADD_TECH", tech: { name } });
    setName("");
  };

  return (
    <form
      style={{ background: theme.ui, color: theme.syntax }}
      onSubmit={handleSubmit}
    >
      <input
        style={{ background: theme.bg, color: theme.syntax }}
        type="text"
        placeholder="Tech name"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />
      <input
        style={{ borderColor: theme.btnBorderColor, color: theme.btnColor }}
        type="submit"
        value="Add New Tech"
      />
    </form>
  );
};

export default NewTechForm;
