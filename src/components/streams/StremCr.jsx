import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class StremCr extends Component {
  renderInput({ input, label }) {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />
      </div>
    );
  }
  onSubmit(values) {
    console.log(values);
  }
  render() {
    return (
      <form
        className="ui form"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field name="title" component={this.renderInput} label="Enter title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter description"
        />
        <button className="ui button primary fluid">Send</button>
      </form>
    );
  }
}

export default reduxForm({
  form: "StremCr",
})(StremCr);
