import React, { Component } from 'react';


class Todo extends Component {
    render() {
        let {deleteTodo, handleEdit} = this.props;
        return (
            <p>
                <input key={this.props.id} value={this.props.title}
                 onChange={handleEdit}/>
                <span onClick={deleteTodo}>削除</span>
            </p>
        )
    }
}
export default Todo;