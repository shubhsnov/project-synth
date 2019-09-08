import React, { Component } from 'react';
//Move to other file
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { connectToServer } from  '../actions/connectToServer';

class Entry extends Component {
  componentDidMount() {
    this.props.connectToServer();
  }

  render() {
    return (
        <span>connected: {this.props.connected.toString()} </span>
    );
  }
}

Entry.propTypes = {
  connected : PropTypes.bool.isRequired,
  connectToServer : PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  connected: state.connectToServer.connected
});

const mapDispatchToProps = dispatch => ({
  connectToServer: connectToServer
})


export default connect(mapStateToProps, mapDispatchToProps)(Entry);
