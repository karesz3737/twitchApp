import React, { Component } from "react";
import { fetchStreams } from "../../actions/index";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
class StreamList extends Component {
  componentDidMount = () => {
    const { dispatch } = this.props;
    dispatch(fetchStreams());
  };
  renderAdminButton(str) {
    if (str.userId === this.props.authedId) {
      return (
        <div className="right floated content">
          <Link to={`/streams/edit/${str.id}`} className="ui button primary">
            Edit
          </Link>
          <Link to={`streams/delete/${str.id}`} className="ui button negative">
            Delete
          </Link>
        </div>
      );
    }
  }
  renderlist() {
    const { streams } = this.props;
    return streams.map((str) => (
      <div className="ui item" key={str.id}>
        {this.renderAdminButton(str)}
        <i className="large middle aligned icon camera" />
        <div className="content">
          <Link to={`/streams/show/${str.id}`} className="header ">
            {str.title}
          </Link>
          <div className="ui description">{str.description}</div>
        </div>
      </div>
    ));
  }
  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: "right" }}>
          <Link className="ui button primary" to="/streams/new">
            Create Stream
          </Link>
        </div>
      );
    }
  }
  render() {
    const { history } = this.props;
    console.log(history);
    return (
      <div>
        <h2 className="ui header">Streams</h2>
        <div className="ui celled list">{this.renderlist()}</div>
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps = ({ streams, auth }) => {
  return {
    streams: Object.values(streams),
    authedId: auth.userId,
    isSignedIn: auth.isSignedIn,
  };
};
export default connect(mapStateToProps)(StreamList);
