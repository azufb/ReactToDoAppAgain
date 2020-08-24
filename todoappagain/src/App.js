import React from 'react';
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';
import './App.css';
import AddForm from './AddForm';

function App() {
  return (
    <div className="App">
      <h1>Task List</h1>
      <AddForm />
    </div>
  );
}

export default App;
