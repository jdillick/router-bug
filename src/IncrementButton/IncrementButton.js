import React, { Component } from 'react';

export default class IncrementButton extends Component {
    componentDidMount() {
        console.log('IncrementButton mounted')
    }

    render() {
        return (
            <button onClick={() => this.props.onClick()}>Increment</button>
        );
    }
}
IncrementButton.defaultProps = {
    onClick: () => {},
}
