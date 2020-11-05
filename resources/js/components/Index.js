import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import Main from './Main';
import Manage from './Manage';
import PrivateRoute from './PrivateRoute';
import Nav from './Nav';
import LoginMenu from './LoginMenu';
import NewPost from './NewPost';

function Index() {
    return (
        <div>
            <LoginMenu />
            <Nav />
            <BrowserRouter>
                <Route exact path="/" component={Main} />
                <Route exact path="/login" render={() => {window.location.href="login"}} />
                <PrivateRoute path="/manage" component={Manage} />
                <PrivateRoute path="/new-post" component={NewPost} />
            </BrowserRouter>
        </div>
    );
}

export default Index;

if (document.getElementById('index')) {
    ReactDOM.render(<Index />, document.getElementById('index'));
}
