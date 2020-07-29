import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
            <div className="form">
                <form onSubmit={this.props.handleSubmit}>
                    <input name="title" type="text" />
                    <button type="submit">ADD</button>
                </form>
            </div>
        )
    }
}

export default Form;
