import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SingleTasks from './SingleTasks/SingleTasks';
import './Tasks.css';

const Tasks = () => {
    const [tasks, setTasks] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/alltasks')
        .then(res=>res.json())
        .then(data=>setTasks(data))
    },[tasks]);
    
    return (
        <div className="task-div">
            <h3>You have {tasks.length} tasks to complete</h3>
            <div className="all-task">
                {
                    tasks.map(index=><SingleTasks 
                        index={index}
                        key = {index._id}
                        ></SingleTasks>)
                }
            </div>
        </div>
    );
};

export default Tasks;