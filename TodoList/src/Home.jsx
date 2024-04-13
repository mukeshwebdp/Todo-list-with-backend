import React, { useEffect, useState } from "react";
import {  FaRegDotCircle } from 'react-icons/fa'
import { MdDeleteOutline } from "react-icons/md";
import Create from "./create";
import axios from "axios";
function Home(){
    const [todos, setTodos] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:3001/get')
        .then(result => setTodos(result.data))
        .catch(err => console.log(err))
    },[])
    const handleDelete = (id)=>{
        axios.delete('http://localhost:3001/delete/'+id)
        .then(result =>{
            location.reload()
        })
        .catch((err) =>{
            console.log(err);
        })
    }
    return (
        <div className="home">
            <h1>Todo List</h1>
            <Create />
            
            {
                // array check data list on the print browser
                todos.length === 0 
                ? <div><h2>No Record</h2></div>
                : todos.map((todo)=> (
                    
                    <div className="task">
                        <div className="checkbox">
                        <FaRegDotCircle />
                        <p>{todo.task}</p>
                        <div className="icon">
                            <span><MdDeleteOutline className="icon" 
                            onClick={()=> handleDelete(todo._id)}/></span>
                        </div>
                        </div>
                        
                    </div>
                ))
            }
        </div>
    )
}

export default Home;