import React, { Component } from 'react';
import Home from './HomeComponent';
import Profile from "./ProfileComponent";
import Skills from './SkillComponent';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import Head from "./HeaderComponent";

export default class Main extends Component {
    render() {
        return (
            <div>
            <div className="navbar-dark">
                <Head />
            </div>
                <div className="home">
                <Switch>
                    <Route path="/home" component={() => <Home />} />
                    <Route path="/profiles" component={() => <Profile />} />
                    <Route path="/skills" component={() => <Skills />} />
                    <Redirect to="/home" />
                </Switch>
                </div>
            </div>
        )
    }
}
