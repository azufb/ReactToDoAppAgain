import React, { Component } from 'react';


class Todo extends Component {
    render() {
        let {deleteItem} = this.props;
        return (
            <div>
                <span>{this.props.id}</span>
                <span>{this.props.title}</span>
                <span onClick={deleteItem}>削除</span>
            </div>
        )
    }
}
export default Todo;