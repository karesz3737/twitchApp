import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions/index";

class StreamEdit extends Component {
  componentDidMount() {
    const { id, dispatch } = this.props;
    this.props.fetchStream(id);
  }
  render() {
    const { stream } = this.props;
    console.log(stream);
    return <div></div>;
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

export default connect(mapStateToProps, { fetchStream })(StreamEdit);
