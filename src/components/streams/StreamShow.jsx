import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions/index";
import flv from "flv.js";

class StreamShow extends Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchStream(id);
  }
  componentDidUpdate() {
    this.buildPlayer();
  }
  componentWillUnmount() {
    this.player.destroy();
  }

  buildPlayer() {
    const { id } = this.props.match.params;
    if (this.player || !this.props.stream) {
      return;
    }
    this.player = flv.createPlayer({
      type: "flv",
      url: `http://localhost:8000/live/${id}.flv`,
    });
    this.player.attachMediaElement(this.videoRef.current);
    this.player.load();
  }
  render() {
    const { stream } = this.props;
    if (!stream) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <video ref={this.videoRef} style={{ width: "100%" }} controls={true} />
        <h1>{stream.title}</h1>
        <h2>{stream.description}</h2>
      </div>
    );
  }
}
const mapStateToProps = ({ streams }, props) => {
  const stream = streams[props.match.params.id];
  return {
    stream: stream ? stream : null,
  };
};
export default connect(mapStateToProps, { fetchStream })(StreamShow);
