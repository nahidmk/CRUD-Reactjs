import React,{useState} from 'react';
import Custom from "../CRUD/Custom";
import {useHistory} from "react-router-dom";
import axios from "axios";

const Register = () => {

    let history = useHistory()
    const [user,setUser] = useState({

        name:"",
        email:"",
        password:""
    })

    const onChangeHandle =(e)=>{
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const SubmitHandler =(e)=>{
        e.preventDefault()
        axios.post("http://localhost:8000/reg/",user)
            .then((res)=>{
                history.push("/login")
            })
            .catch((res)=>{console.log(res.error)})
    }

    return (
        <div className='container'>
            <div className='w-50 mx-auto shadow p-5 mt-5 '>
                <h2 className="text-center"> Registration</h2>
                <form onSubmit={(e)=>{SubmitHandler(e)}}>
                    <Custom
                        placeholder="Enter your Name"
                        name = "name"
                        value = {user.name}
                        onChangeHandle = {(e)=>{onChangeHandle(e)}}
                    />
                    <Custom
                        placeholder="Enter your Email"
                        name = "email"
                        value = {user.email}
                        onChangeHandle = {(e)=>{onChangeHandle(e)}}
                    />
                    <Custom
                        placeholder="Enter your Password"
                        name = "password"
                        value = {user.password}
                        onChangeHandle = {(e)=>{onChangeHandle(e)}}
                    />
                    <button className="btn btn-primary btn-block">Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default Register;