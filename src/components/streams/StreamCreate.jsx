import { Form, Field } from "react-final-form";
import { connect } from "react-redux";

import { handleFormData } from "../../actions/index";
import React, { Component } from "react";

class StreamCreate extends Component {
  render() {
    const { dispatch, id } = this.props;
    console.log(id);
    return (
      <div>
        <Form
          // initialValues={{ title: "", description: "" }}
          onSubmit={({ title, description }) => {
            dispatch(handleFormData(id, title, description));
          }}
          validate={({})}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit} className="ui form">
              <label>title</label>
              <Field name="title" component="input" type="text" />
              <label>Description</label>

              <Field name="description" component="input" type="text" />
              <button type="submit" className="ui button">
                Submit
              </button>
            </form>
          )}
        ></Form>
      </div>
    );
  }
}
const validate = (title, description) => {
  const errors = {};
  if (!description) {
    errors.description = "You must enter a description";
  }
  return errors;
};
const mapStateToProps = ({ auth }) => {
  return {
    id: auth ? auth.userId : null,
  };
};
export default connect(mapStateToProps)(StreamCreate);
