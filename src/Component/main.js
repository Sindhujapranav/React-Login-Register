import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Login';
import About from './about';
import Staff from './staff';
import Student from './student';
import Register from './Register';

const Main = () => (
    <Switch>

        <Route exact path="/" component={About} />
        <Route path="/Register" component={Register} />
        <Route path="/staff" component={Staff} />
        <Route path="/student" component={Student} />
        <Route path="/Login" component={Login} />

    </Switch>
)
export default Main;