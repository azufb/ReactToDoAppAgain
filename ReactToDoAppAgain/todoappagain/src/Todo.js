import React, { Component } from 'react';

class Todo extends Component {
    render() {
        return (
            <div>
                <span>{this.props.id}</span>
                <span>{this.props.title}</span>
            </div>
        )
    }
}
export default Todo;