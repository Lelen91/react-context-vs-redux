import React, { useContext } from "react";
import { TechContext } from "../contexts/TechContext";

const TechDetails = ({ tech, background }) => {
  const { dispatch } = useContext(TechContext);
  return (
    <li
      style={{ background: background }}
      onClick={() => dispatch({ type: "REMOVE_TECH", id: tech.id })}
    >
      <div className="name">{tech.name}</div>
    </li>
  );
};

export default TechDetails;
