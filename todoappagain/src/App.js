import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';
import './App.css';
import AddForm from './AddForm';

function mappingState(state) {
  return state;
}

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Task List</h1>
        <AddForm />
      </div>
    )
  }
}

App = connect()(App);

export default App;
