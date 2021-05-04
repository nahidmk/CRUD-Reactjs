import React from 'react';
import {Route,Redirect} from "react-router-dom"

const ProtectedRoute = ({component:Cmp,...rest}) => (
    <Route
        {...rest}
        render={(props)=>
            localStorage.getItem("user")?<Cmp {...props}/>:<Redirect to="/login"/>
        }
    />
)

export default ProtectedRoute;