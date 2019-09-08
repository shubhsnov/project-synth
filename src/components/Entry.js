import React, { Component } from "react";
//Move to other file
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { connectToServer } from "../actions/connectToServer";

class Entry extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    this.props.connect();
  }

  render() {
    return (
      <div>
        <span>connected: {this.props.connected} </span>
        <button onClick={this.onClick}>Connect</button>
      </div>
    );
  }
}

Entry.propTypes = {
  connected: PropTypes.string.isRequired,
  connect: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  connected: state.serverState.connected
});

const mapDispatchToProps = dispatch => ({
  connect: () => dispatch(connectToServer())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Entry);
