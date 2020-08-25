import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoLists from './TodoLists';
import './App.css';
import AddForm from './AddForm';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Task List</h1>
        <AddForm />
        <TodoLists />
      </div>
    )
  }
}

App = connect()(App);

export default App;
