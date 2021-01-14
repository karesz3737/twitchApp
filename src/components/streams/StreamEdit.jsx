import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions/index";
import StreamForm from "./StreamForm";

class StreamEdit extends Component {
  componentDidMount() {
    const { id } = this.props;
    this.props.fetchStream(id);
  }
  onSubmit = (formValues) => {
    const { id, editStream } = this.props;
    editStream(id, formValues);
  };
  render() {
    const { stream } = this.props;
    return (
      <div>
        <h3>Edit a stream</h3>
        <StreamForm
          onSubmit={this.onSubmit}
          initialValues={_.pick(stream, "title", "description")}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ streams }, ownProps) => {
  const id = ownProps.match.params.id;
  const stream = streams[id];

  return {
    stream,
    id,
  };
};

export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);
