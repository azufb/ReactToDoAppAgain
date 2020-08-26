import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Header from './Todo/Header';
import Form from './Todo/Form';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <Form />
      </div>
    )
  }
}

export default App;
