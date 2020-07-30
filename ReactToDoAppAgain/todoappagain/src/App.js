import React, { Component } from 'react';
import './App.css';
import ToDoList from './list';
import Form from './Form';

class App extends Component {

  // stateの初期化処理
  constructor(props) {
    // constructorの後に必須。ないと、Component継承できない。
    super(props);
    let todos = [
      // 出力用配列
        {
          id: 0,
          title: 'サンプル',
          done: false
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
      done: false
    });

    this.setState({ todos })
    this.setState({ countTodo: countTodo + 1})

    // タスク追加後、入力欄は空欄にする。
    event.target.title.value='';
  }

  handleEdit(title, id) {
    let todos = this.state.todos;
    todos.map(todo => {      
      if (todo.id === id) {
        todo.title = title;
      }
    })
    this.setState({
      todos: todos
    })
  }

  handleDone(clickTodo) {
    let todos = this.state.todos.slice();
    let todo = todos[clickTodo.id];
    todo.done = !todo.done;
    todos[clickTodo.id] = todo;
    
    this.setState({ todos });


  }

  /* 
  filterメソッドで、クリックされた要素がもつidと異なるidをもつ要素のみを
  絞り込み、それらで新しく配列を作成する。そしてその新しい配列をsetStateする
  ことで、反映される。
  spliceやpop等のように、インデックス番号を指定する必要はないため、
  クリックイベントで使うことが可能。
  */
  deleteTodo(id) {
    let filteredTodos = this.state.todos.filter(todo =>
      todo.id !== id);
      this.setState({
        todos: filteredTodos
      })
  }

  render() {
    return (
      <div>
        <h1>タスク管理</h1>
        <p>タスクをクリックすると編集可能です。削除は、最後に一気に！</p>
        <Form handleSubmit={ this.handleSubmit.bind(this) } />
        <ToDoList
          todos={ this.state.todos }
          handleEdit={ this.handleEdit.bind(this) }
          handleDone={ this.handleDone.bind(this) }
          deleteTodo={ this.deleteTodo.bind(this) }
        />
        </div>
    );
  }
  
}

export default App;
