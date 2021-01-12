export const ADD_FORM_DATA = "ADD_FORM_DATA";

export const signIn = (userId) => {
  return {
    type: "SIGN_IN",
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: "SIGN_OUT",
  };
};

export const addFormInput = ({ id, title, description }) => {
  return {
    type: ADD_FORM_DATA,
    id,
    title,
    description,
  };
};

export const handleFormData = (id, title, description) => {
  return function (dispatch) {
    return dispatch(addFormInput({ id, title, description }));
  };
};
