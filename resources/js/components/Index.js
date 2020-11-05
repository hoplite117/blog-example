import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import Main from './Main';
import Manage from './Manage';
import PrivateRoute from './PrivateRoute';

function Index() {
    return (
        <BrowserRouter>
            <Route path="/" component={Main} />
            <PrivateRoute path="/manage" component={Manage} />
        </BrowserRouter>
    );
}

export default Index;

if (document.getElementById('index')) {
    ReactDOM.render(<Index />, document.getElementById('index'));
}
