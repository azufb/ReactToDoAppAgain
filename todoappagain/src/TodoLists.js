import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';

class TodoLists extends Component {
    render() {
        let todos;
        let n = 0;
        switch (this.props.mode) {
            case 'default':
                todos = this.props.todos.map((value) => (
                    <Todo key={ value.title } value={ value } index={ n++ } />
                ));
            break;
            case 'delete':
                todos = this.props.todos.map((value) => (
                    <Todo key={ value.title } value={ value } index={ n++ } />
                ));
            break;
            default:
                todos = this.props.todos.map((value) => (
                    <Todo key={ value.title } value={ value } index={ n++ } />
                ));
        }
        return (
            <div>{ todos }</div>
        )
    }
}

export default connect((state) => state)(TodoLists);

