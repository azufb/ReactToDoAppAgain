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
          id: '0',
          title: 'パン買う'
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
      title: title
    });

    this.setState({ todos })
    this.setState({ countTodo: countTodo + 1})

    // タスク追加後、入力欄は空欄にする。
    event.target.title.value='';
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

  handleEdit(title, id) {
    let todos = this.state.todos;
    todos.map(todo => {      
      if (todo.id === id){
        todo.title = title;
      }
    })
    this.setState({
      todos: todos
    })
  }

  render() {
    return (
      <div>
        <Form handleSubmit={this.handleSubmit.bind(this)} />
        <ToDoList
        todos={this.state.todos}
        handleEdit={this.handleEdit.bind(this)}
        deleteTodo={this.deleteTodo.bind(this)}
        />
        </div>
    );
  }
  
}

export default App;
