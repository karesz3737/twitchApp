import { combineReducers } from "redux";
import { form } from "../reducers/formReducer";
// import StreamCreate from "../components/streams/StreamCreate";
import { AuthReducer } from "../reducers/AuthReducer";
import streamReducer from "../reducers/StreamReducer";

export default combineReducers({
  auth: AuthReducer,
  form,
  streams: streamReducer,
});
