import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteTodo } from './Store';

class Todo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todo: []
        }
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(event) {
        event.preventDefault();
        let action = deleteTodo(this.state.title);
        this.props.dispatch(action);
        this.setState({
            title: ''
        })
    }

    render() {
        return (
            <div>
                { this.props.value.title }
                <input type='button' value='delete'
                onClick={ this.handleDelete } />
            </div>
        )
    }
}

export default connect((state) => state)(Todo);