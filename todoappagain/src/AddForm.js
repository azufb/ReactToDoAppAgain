import React, { Component } from 'react';
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';

class AddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        }
    }

    render() {
        return (
            <form>
                <input type='text'  required/>
                <input type='submit' value='ADD' />
            </form>
        )
    }
}

export default AddForm;