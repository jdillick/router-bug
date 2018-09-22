import React, { Component, Fragment } from 'react';
import Counter from '../Counter';
import IncrementButton from '../IncrementButton';
import { Link } from 'react-router-dom';

export default class CounterContainer extends Component {
    componentDidMount() {
        console.log('CounterContainer mounted')
    }
    render() {
        return (
            <Fragment>
                <div><Link to={'/'}>Link 1</Link></div>
                <div><Link to={'/path2'}>Link 2</Link></div>

                <div>Counter:</div>
                <Counter />
                <IncrementButton />
            </Fragment>
        );
    }
}
