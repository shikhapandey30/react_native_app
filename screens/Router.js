import React, { Component } from 'react'
import { Scene, Router, Stack, Actions } from 'react-native-router-flux';
import Home from './Home';
import Settings from './Settings';
import Forgot from './Forgot';
import Login from './Login';
import Registration from './Registration';
import Welcome from './Welcome';


const RouterStack = () => (
    <Router>
        <Stack key="root">
            <Scene key="home" component={Home}  />
            <Scene key="setting" component={Settings}  />
            <Scene key="forgot" component={Forgot}  />
            <Scene key="login" component={Login}  />
            <Scene key="register" component={Registration}  />
            <Scene key="welcome" component={Welcome}  />
        </Stack>
    </Router>
);

export default RouterStack
