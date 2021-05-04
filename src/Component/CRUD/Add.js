import React ,{useState}from 'react';
import Custom from "./Custom";
import axios from "axios";
import {useHistory} from "react-router-dom"


const Add = () => {

    let history = useHistory()
    const [user,setUser] = useState({
        s_id:"",
        name:"",
        batch:"",
        dep:""
    })

    const onChangeHandle =(e)=>{
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const SubmitHandler =(e)=>{
        e.preventDefault()
        axios.post("http://localhost:8000/api/",user)
            .then((res)=>{
                history.push("/")
            })
            .catch((res)=>{console.log(res.error)})
    }

    return (
        <div className='container'>
            <div className='w-75 mx-auto shadow p-5'>
                <h2 className="text-center"> Add Student</h2>
                <form onSubmit={(e)=>{SubmitHandler(e)}}>
                    <Custom
                        placeholder="Enter your Student ID"
                        name = "s_id"
                        value = {user.s_id}
                        onChangeHandle = {(e)=>{onChangeHandle(e)}}
                    />
                    <Custom
                        placeholder="Enter your Name"
                        name = "name"
                        value = {user.name}
                        onChangeHandle = {(e)=>{onChangeHandle(e)}}
                    />
                    <Custom
                        placeholder="Enter your Batch"
                        name = "batch"
                        value = {user.batch}
                        onChangeHandle = {(e)=>{onChangeHandle(e)}}
                    />
                    <Custom
                        placeholder="Enter your Department"
                        name = "dep"
                        value = {user.dep}
                        onChangeHandle = {(e)=>{onChangeHandle(e)}}
                    />
                    <button className="btn btn-primary btn-block">Add User</button>
                </form>
            </div>
        </div>
    );
};

export default Add;