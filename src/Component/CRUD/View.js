import React ,{useState,useEffect} from 'react';
import {Link,useParams} from "react-router-dom";
import axios from "axios";


const View = () => {

    const {id}=useParams()
    const [user,setUser] = useState({
        id:"",
        s_id:"",
        name:"",
        batch:"",
        dep:""
    })



    useEffect(()=>{
        axios.get(`http://localhost:8000/api/${id}`)
            .then((res)=>{setUser(res.data)})
    },[])
    return (
        <div className='container'>
            <div className='w-75 mx-auto shadow p-5'>
                <h2 className="text-center"> View Student</h2>
                <Link className="btn btn-primary" to="/">
                    back to Home
                </Link>
                <hr />
                <ul className="list-group w-50">
                    <li className="list-group-item">Student ID: {user.s_id}</li>
                    <li className="list-group-item">user name: {user.name}</li>
                    <li className="list-group-item">Batch: {user.batch}</li>
                    <li className="list-group-item">Department: {user.dep}</li>
                </ul>
            </div>
        </div>
    );
};

export default View;