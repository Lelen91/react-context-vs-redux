import React, { createContext, useReducer, useEffect } from "react";
import { techReducer } from "../reducers/TechReducer";

export const TechContext = createContext();

/* props attached as parameter */
const TechContextProvider = props => {
  const [techs, dispatch] = useReducer(techReducer, [], () => {
    const localData = localStorage.getItem("techs");
    return localData ? JSON.parse(localData) : [];
  });
  useEffect(() => {
    localStorage.setItem("techs", JSON.stringify(techs));
  }, [techs]);
  return (
    <TechContext.Provider value={{ techs, dispatch }}>
      {props.children}
    </TechContext.Provider>
  );
};

export default TechContextProvider;
