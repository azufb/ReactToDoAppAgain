import React, { Component } from 'react';


class Todo extends Component {
    render() {
        let {handleEdit, handleDone, deleteTodo} = this.props;
        let action = this.props.done ?  'Done' :　'完了'

        return (
            <p>
                <input key={this.props.id} value={this.props.title}
                 onChange={handleEdit} />
                 <button 
                 onClick={(e) => {
                     e.preventDefault();
                     handleDone(this.props)}}>
                         {action}</button>
                <button onClick={deleteTodo}>削除</button>
            </p>
        )
    }
}
export default Todo;