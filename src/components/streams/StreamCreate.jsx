import { connect } from "react-redux";
import React, { Component } from "react";
import { ctreateStream } from "../../actions/index";
import StreamForm from "./StreamForm";
class StreamCreate extends Component {
  onSubmit = (formValues) => {
    this.props.ctreateStream(formValues);
  };
  render() {
    return (
      <div>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}
export default connect(null, { ctreateStream })(StreamCreate);
