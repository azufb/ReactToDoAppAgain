
import React, { Component } from 'react';
import Todo from './Todo';

class ToDoList extends Component {
    render() {
        let {handleEdit, handleDone, deleteTodo} = this.props;
        let todos = this.props.todos.map(todo => 
            <Todo 
            /* 複数の要素ができる時には、keyでそれぞれを区別する！ */
            key={todo.id}
            {...todo}
            handleEdit={(event) => 
                handleEdit(event.target.value, todo.id)}
            handleDone={handleDone}
            deleteTodo={() => deleteTodo(todo.id)}
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