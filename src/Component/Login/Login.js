import React,{useState,useEffect} from 'react';
import {useHistory} from "react-router-dom";
import axios from "axios";
import Custom from "../CRUD/Custom";

const Login = () => {
    let history = useHistory()
    const [isLogin,setisLogin] = useState(false)
    const [user,setUser] = useState({
        name:"",
        password:"",
    })
    const [check,setCheck] = useState({
        msg:""
    })



    const onChangeHandle =(e)=>{
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const SubmitHandler =(e)=>{
        e.preventDefault()
        if(user.name !=="" && user.password!=="") {
            axios.post("http://localhost:8000/info/", user)
                .then((res) => {
                    if (res.data.name) {
                        localStorage.setItem('user',JSON.stringify(user));
                        history.push("/home")

                    } else {
                        setCheck({msg: "Sorry bad credential"})
                        setUser({name: "", password: ""})
                    }
                })
                .catch((res) => {
                    console.log(res.error)
                })
        }else {
            setCheck({msg:"Complete the form"})
        }

    }

    return (


            <div className='container '>
            {console.log("check 1=>"+localStorage.getItem('check'))}
            <div className='w-50 mx-auto shadow p-5 mt-5 '>
                <h2 className="text-center"> Login</h2>
                <small className="mx-auto mb-3 text-danger">{check.msg}</small>
                <form onSubmit={(e)=>{SubmitHandler(e)}}>
                    <Custom
                        placeholder="Enter your User Name"
                        name = "name"
                        value = {user.name}
                        onChangeHandle = {(e)=>{onChangeHandle(e)}}
                    />
                    <Custom
                        placeholder="Enter your Password"
                        name = "password"
                        value = {user.password}
                        onChangeHandle = {(e)=>{onChangeHandle(e)}}
                    />

                    <button className="btn btn-primary btn-block ">Login</button>

                </form>
                <button className="btn btn-warning btn-block mt-2" onClick={()=>{history.push("/register")}}>Signup</button>

            </div>


        </div>

    );
};

export default Login;