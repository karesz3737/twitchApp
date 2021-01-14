import { Form, Field } from "react-final-form";
import React, { Component } from "react";

class StreamForm extends Component {
  render() {
    return (
      <div>
        <Form
          initialValues={this.props.initialValues}
          onSubmit={(values) => {
            this.props.onSubmit(values);
          }}
          validate={({ title, description }) => validate(title, description)}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit} className="ui form error">
              <Field name="title">
                {({ input, meta }) => (
                  <div
                    className={`field ${
                      meta.error && meta.touched ? "error" : ""
                    }`}
                  >
                    <label>title</label>
                    <input {...input} type="text" autoComplete="off" />
                    {meta.error && meta.touched && (
                      <span className="ui error message head">
                        {meta.error}
                      </span>
                    )}
                  </div>
                )}
              </Field>

              <Field name="description">
                {({ input, meta }) => (
                  <div
                    className={`field ${
                      meta.error && meta.touched ? "error" : ""
                    }`}
                  >
                    <label>Description</label>
                    <input {...input} type="text" autoComplete="off" />
                    {meta.error && meta.touched && (
                      <span className="ui error message head">
                        {meta.error}
                      </span>
                    )}
                  </div>
                )}
              </Field>
              <button type="submit" className="ui button primary">
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
  if (!title) {
    errors.title = "You must enter a title ";
  }
  if (Number(title)) {
    errors.title = "Needs to be a string";
  }
  if (Number(description)) {
    errors.description = "Needs to be a string";
  }
  return errors;
};

export default StreamForm;
