import React, { Component } from 'react';

class Todo extends Component {
    render() {
        return (
            <div id="list">
                <span>{this.props.id}</span>
                <span id="task">{this.props.title}</span>
            </div>
        )
    }
}
export default Todo;