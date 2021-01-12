import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { form } from "../reducers/formReducer";
// import StreamCreate from "../components/streams/StreamCreate";
import { AuthReducer } from "../reducers/AuthReducer";

export default combineReducers({ auth: AuthReducer, form });
