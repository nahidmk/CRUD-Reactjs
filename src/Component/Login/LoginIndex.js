import React from 'react';
import Login from "./Login";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

import {BrowserRouter as Router,Link,Switch,Route} from "react-router-dom"
import Register from "./Register";

const LoginIndex = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/register" component={Register}/>
                </Switch>

            </div>

        </Router>
    );
};

export default LoginIndex;