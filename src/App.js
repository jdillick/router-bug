import React, { Component, Fragment } from 'react';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import CounterContainer from './CounterContainer';

const reducer = (state, {type}) => ({
    count: type === 'INCREMENT' ? state.count + 1 : state.count
});

const store = createStore(reducer, { count: 0 });

const routes = [
    {
        exact: true,
        path: '/',
        component: CounterContainer,
    },
    {
        exact: true,
        path: '/path2',
        component: CounterContainer,
    },
];


class App extends Component {
  render() {
    return (
        <Provider store={store} >
            <BrowserRouter>
                <Switch>
                    {

                        // uncomment to cause problem
                        renderRoutes(routes)

                        // uncomment to fix problem
                        // routes.map((route, index) => <Route key="route" {...route} />)
                    }
                </Switch>
            </BrowserRouter>
        </Provider>
    );
  }
}

export default App;
