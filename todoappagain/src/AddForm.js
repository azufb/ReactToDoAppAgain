import React, { Component } from 'react';
import { connect　} from 'react-redux';
import { addTodo } from './Store';

class AddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            title: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        let action = addTodo(this.state.title);
        this.props.dispatch(action);
        this.setState({
            title: ''
        });
    }

    render() {
        return (
            <form onClick={ this.handleSubmit } >
                <input type='text' onChange={ this.handleChange } 
                value={ this.state.title } required />
                <input type='submit' value='ADD' />
            </form>
        )
    }
}

export default connect((state) => state)(AddForm);