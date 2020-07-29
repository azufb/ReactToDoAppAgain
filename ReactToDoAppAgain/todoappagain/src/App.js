import React, { Component } from 'react';
import './App.css';
import TodoList from './list';
import Form from './Form';

class App extends Component {

  // stateの初期化処理
  constructor(props) {
    // constructorの後に必須。ないと、Component継承できない。
    super(props);
    let todos = [
      // 出力用配列
        {
          id: '0',
          title: 'パン買う',
          // delete: 'false'
        }
      ]
    // 最初に呼び出される状態
    this.state = {
      todos: todos,
      countTodo: todos.length
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    let title = event.target.title.value;
    let todos = this.state.todos.slice();
    let countTodo = this.state.countTodo;

    todos.push({
      id: countTodo,
      title: title,
      // delte: false
    });

    this.setState({ todos })
    this.setState({ countTodo: countTodo + 1})

    // タスク追加後、入力欄は空欄にする。
    event.target.title.value='';
  }

  render() {
    return (
      <div>
        <Form handleSubmit={this.handleSubmit.bind(this)} />
        <TodoList
        todos={this.state.todos}
        />
        </div>
    );
  }
  
}

export default App;
