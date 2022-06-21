import React, { useState } from 'react'
import App from './pages.js/App'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
// import { Redirect } from 'react-router';
import SignUp from './pages.js/SignUp';
import Login from './pages.js/login';
import Dashboard from './pages.js/dashboard';

function Routing() {

    const [isVerified, setIsVerified] = useState(true)
    return (
        <Router>
            <div>
                {
                    <Switch>
                        <Route exact path="/">
                            <Redirect to="/home/main" />
                        </Route>
                        <Route exact path="/home">
                            <Redirect to="/home/main" />
                        </Route>
                        <Route path="/home">
                            <App isVerified={isVerified} setIsVerified={setIsVerified} />
                        </Route>
                        <Route path="/signup">
                            <SignUp isVerified={isVerified} setIsVerified={setIsVerified} />
                        </Route>
                        <Route path="/login">
                            <Login isVerified={isVerified} setIsVerified={setIsVerified} />
                        </Route>
                        <Route path="/dashboard">
                            <Dashboard isVerified={isVerified} setIsVerified={setIsVerified} />
                        </Route>
                    </Switch>
                }
            </div>
        </Router>
    )
}

export default Routing