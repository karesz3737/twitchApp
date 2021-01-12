import { ADD_FORM_DATA } from "../actions/index";

export const form = (state = {}, action) => {
  switch (action.type) {
    case ADD_FORM_DATA:
      const { id, title, description } = action;
      return {
        ...state,
        [id]: {
          ...state[id],
          title,
          description,
        },
      };
    default:
      return state;
  }
};
