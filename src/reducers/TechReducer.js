import uuid from "uuid/v4";

export const techReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TECH":
      return [
        ...state,
        {
          name: action.tech.name,
          id: uuid(),
        },
      ];

    case "REMOVE_TECH":
      return state.filter(tech => tech.id !== action.id);

    default:
      return state;
  }
};
