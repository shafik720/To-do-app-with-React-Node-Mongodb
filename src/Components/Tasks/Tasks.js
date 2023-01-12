import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SingleTasks from './SingleTasks/SingleTasks';
import './Tasks.css';

const Tasks = () => {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/alltasks')
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [tasks]);

    const deleteSingleTask = (id) => {
        const proceed = window.confirm('Do you want to delete this task ? ');
        if (proceed) {
            const url = `http://localhost:5000/alltasks/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remainingTasks = tasks.filter(index => index._id != id);
                        setTasks(remainingTasks);
                    }
                })
        }
    }

    const [taskId, setTaskId] = useState([]);
    let arr = [];
    function selectManyId(id, e) {

        const existedId = taskId.find(index => index == id);
        if (!existedId) {
            arr = [...taskId, id];
            setTaskId(arr);
        }else{
            
        }

        if (e.target.classList.contains('selected')) {
            e.target.classList.remove('selected');
            e.target.parentNode.classList.remove('selected');
        } else {
            e.target.classList.add('selected');
            e.target.parentNode.classList.add('selected');
        }
    }
    function deleteMany() {
        const proceed = window.confirm('Do you want to delete this task ? ');
        const ids = taskId;
        if (proceed) {
            const url = `http://localhost:5000/alltasks`;
            fetch('http://localhost:5000/alltasks', {
                method: 'DELETE',
                body: JSON.stringify({ ids }),
                headers: {
                    'Content-type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })
                .catch((error) => { console.error('Error:', error) });
        }
    }
    return (
        <div className="task-div">
            <h3>You have <span className="text-secondary fw-bold">{tasks.length}</span>  tasks to complete</h3>
            {taskId.length > 0 ? <div className="text-center">
                <p>Total {taskId.length} task selected </p>
                <button onClick={deleteMany}>Delete Many</button>
            </div> : <></>}

            <div className="all-task">
                {
                    tasks.map(index => <SingleTasks
                        index={index}
                        key={index._id}
                        deleteSingleTask={deleteSingleTask}
                        selectManyId={selectManyId}
                    ></SingleTasks>)
                }
            </div>
        </div>
    );
};

export default Tasks;