import React, { Component } from 'react';

export default class Counter extends Component {
    componentDidMount() {
        console.log('Counter mounted')
    }

    render() {
        return (
            <div>
                {this.props.count}
            </div>
        );
    }
}

Counter.defaultProps = {
    count: 0
}
