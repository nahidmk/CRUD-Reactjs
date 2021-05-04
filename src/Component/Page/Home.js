import React,{useState,useEffect} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import Nav from "../Layout/Nav";

const Home = () => {
    const [user,setUser] = useState([]);


    useEffect(()=>{
        loaduser()
    },[])

    const loaduser=()=>{
        axios.get("http://localhost:8000/api")
            .then((res)=>{
                setUser(res.data.reverse())
            }).catch((res)=>{console.log(res.error)})
    }

    const DeleteItem=(id)=>{
        axios.delete(`http://localhost:8000/api/${id}`)
            .then((res)=>{loaduser()})
    }

    return (
        <><Nav/>
        <div className="container">
            <div className="py-5">
                <h1>Home page</h1>

                <table className="table table-hover shadow border">
                    <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Batch</th>
                        <th scope="col">Department</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>

                    {
                        user.map((u,i)=>(

                            <tr>
                                <th scope="row">{i+1}</th>
                                <td>{u.s_id}</td>
                                <td>{u.name}</td>
                                <td>{u.batch}</td>
                                <td>{u.dep}</td>
                                <td>
                                    <Link className='btn btn-primary mr-2' to={`/view/${u.id}`}>View</Link>
                                    <Link className = 'btn btn-outline-primary mr-2' to={`/update/${u.id}`}>Update</Link>
                                    <Link className ='btn btn-danger' onClick={()=>{DeleteItem(u.id)}} >Delete</Link>
                                </td>

                            </tr>

                        ))
                    }

                    </tbody>
                </table>

            </div>

        </div>
        </>
    );
};

export default Home;