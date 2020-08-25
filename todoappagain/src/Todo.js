import React, { Component } from 'react';
import { connect } from 'react-redux';

class Todo extends Component {
    render() {
        return (
            <div>
                { this.props.value.title }
            </div>
        )
    }
}

export default connect()(Todo);