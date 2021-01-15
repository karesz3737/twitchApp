import React, { Fragment, Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteStream, fetchStream } from "../../actions/index";

import Modal from "../../components/Modal";
import history from "../../history";

class StreamDelete extends Component {
  componentDidMount() {
    fetchStream(this.props.match.params.id);
  }

  renderactions() {
    const { id, deleteStream } = this.props;

    return (
      <Fragment>
        <button className="ui button negative" onClick={() => deleteStream(id)}>
          Delete
        </button>
        <Link className="ui button" to="/">
          Cancel
        </Link>
      </Fragment>
    );
  }
  renderContent() {
    if (!this.props.stream) {
      return "Are you sure you want to delete this stream";
    }
    return `Are you sure you want to delete the title :   ${this.props.stream.title}`;
  }
  render() {
    return (
      <Modal
        title="Delete Stream"
        message={this.renderContent()}
        actions={this.renderactions()}
        onClick={() => history.push("/")}
      />
    );
  }
}
const mapStateToProps = ({ streams }, ownProps) => {
  const id = ownProps.match.params.id;
  return {
    stream: streams ? streams[id] : null,
    id,
  };
};
export default connect(mapStateToProps, { deleteStream, fetchStream })(
  StreamDelete
);
