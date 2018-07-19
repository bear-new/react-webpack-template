import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import Home from '../pages/Home/index.jsx';
import Login from '../pages/Login/index.jsx';

export default () => (
    <Router>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/login" component={Login} />
        </Switch>
    </Router>
);
