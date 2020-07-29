
import React, { Component } from 'react';
import Todo from './Todo';

class ToDoList extends Component {
    render() {
        let todos = this.props.todos.map(todo => 
            <Todo 
            /* 複数の要素ができる時には、keyでそれぞれを区別する！ */
            key={todo.id}
            {...todo}
            handleDelete={this.props.handleDelete}
            />
        )
        return (
                <p>
                    {todos}
                </p>
        )
    }
}

export default ToDoList;