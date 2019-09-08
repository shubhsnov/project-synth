import React, { Component } from 'react';
import './App.css';
import Entry from './components/Entry';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
          <Entry />
      </div>
      </Provider>
    );
  }
}

export default App;
