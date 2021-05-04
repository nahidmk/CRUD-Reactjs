import React, {useState,useEffect}from 'react';
import {useParams,useHistory} from 'react-router-dom'
import axios from "axios";
import Custom from "./Custom";

const Update = () => {

    let history = useHistory()
    const [user,setUser] = useState({
        s_id:"",
        name:"",
        batch:"",
        dep:""
    })

    const {id}=useParams()

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/${id}`)
            .then((res)=>{
                setUser(res.data)
            })
    },[])

    const onChangeHandle =(e)=>{
        setUser({ ...user, [e.target.name]: e.target.value });
    }
    const SubmitHandler =(e)=>{
        e.preventDefault()
        console.log(user)
        axios.post("http://localhost:8000/api/",user)
            .then((res)=>{
                history.push("/")
            })
            .catch((res)=>{console.log(res.error)})
    }
    return (
        <div className='container'>
            <div className='w-75 mx-auto shadow p-5'>
                <h2 className="text-center"> Update Student</h2>
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
                    <button className="btn btn-warning btn-block">Update</button>
                </form>
            </div>
        </div>
    );
};

export default Update;