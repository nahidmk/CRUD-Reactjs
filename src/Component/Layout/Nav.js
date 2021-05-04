import React from 'react';

import {NavLink, Link,useHistory} from "react-router-dom";

const Nav = () => {

    let history = useHistory()

    const onClickEvent=()=>{
        localStorage.clear()
        history.push("/login")
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/home">CRUD</Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <Link className="btn btn-outline-light" to='/add'>Add user</Link>
                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <Link className="nav-link" exact aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" exact to="/about">About</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" exact to="/contact">Contact</Link>
                            </li>

                        </ul>



                    </div>
                    <button className="btn btn-outline-light" onClick={onClickEvent}>Log out</button>
                </div>
            </nav>
        </div>
    );
};

export default Nav;