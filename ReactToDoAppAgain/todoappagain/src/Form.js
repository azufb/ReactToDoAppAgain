import React, { Component } from 'react';
import './App.css';

class Form extends Component {
    render() {
        return (
            <div className="form">
                <form onSubmit={this.props.handleSubmit}>
                    <input name="title" type="text" className="input"/>
                    <button type="submit" className="formBtn">ADD</button>
                </form>
            </div>
        )
    }
}

export default Form;
