import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

import {BrowserRouter as Router,Link,Switch,Route} from "react-router-dom"
import Nav from "../Layout/Nav";
import Home from "../Page/Home";
import About from "../Page/About";
import Contact from "../Page/Contact";
import NotFound from "../Page/NotFound";
import Add from "../CRUD/Add";
import View from "../CRUD/View";
import Update from "../CRUD/Update";
import Login from "../Login/Login";
import Register from "../Login/Register";
import ProtectedRoute from "../Login/ProtectedRoute";

const Index = () => {
    return (
        <Router>
            <div>

                <Switch>
                    <ProtectedRoute exact path="/home" component={Home}/>
                    <ProtectedRoute exact path="/about" component={About}/>
                    <ProtectedRoute exact path="/contact" component={Contact}/>
                    <ProtectedRoute exact path="/add" component={Add}/>
                    <ProtectedRoute exact path="/view/:id" component={View}/>
                    <ProtectedRoute exact path="/update/:id" component={Update}/>
                    <Route exact path="/login" component={Login}/>
                    <ProtectedRoute exact path="/" component={Home}/>
                    <Route exact path="/register" component={Register}/>
                    <Route component={NotFound}/>

                </Switch>

            </div>
        </Router>

    );
};

export default Index;