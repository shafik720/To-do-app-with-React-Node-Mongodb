import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SingleTasks from './SingleTasks/SingleTasks';
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMultiply } from '@fortawesome/free-solid-svg-icons';

import './Tasks.css';
import { useNavigate } from 'react-router';
import EditTask from './EditTask/EditTask';

const Tasks = () => {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/alltasks')
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [tasks]);

    //---------------------- this function will delete individual task
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

    //-------------------- this function will edit task
    const navigate = useNavigate();
    function editTask(id){
        navigate(`/editTask/${id}`);
        // console.log(id);
        // const url = `http://localhost:5000/alltasks/${id}`;
        // fetch(url, {
        //     method : "PUT",
        //     headers : {"content-type" : "application/json"},
        //     // body : JSON
        // })


        document.querySelector('.popup-parent').classList.add('active');
        
        // closing the popup when user click the close button at the top right corner of the modal
        document.querySelector('.popup-close-button').addEventListener('click',()=>{
            document.querySelector('.popup-parent').classList.remove('active');
            navigate(`/`);
        });

    }
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    // -------------------- task selection function
    const [taskId, setTaskId] = useState([]);
    let arr = [];
    function selectManyId(id, e) {

        const existedId = taskId.find(index => index == id);
        if (!existedId) {
            arr = [...taskId, id];
            setTaskId(arr);
        }

        if (e.target.classList.contains('selected')) {
            e.target.classList.remove('selected');
            e.target.parentNode.classList.remove('selected');

            // to remove the id when it's selected
            let remainingId = taskId.filter(index=> index != id);
            setTaskId(remainingId);

        } else {
            e.target.classList.add('selected');
            e.target.parentNode.classList.add('selected');
        }
    }

    
        
    //----------------- delete selected data 
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
                    setTaskId([]);
                })
                .catch((error) => { console.error('Error:', error) });
        }
    }

    //----------- this will count the total number of incomplete task
    let freshArr = [];
    tasks.forEach(index=>{
        if(index.action == 'incomplete'){
            freshArr.push(index);
        }
    })
    let freshArr2 = [];
    tasks.forEach(index=>{
        if(index.action == 'complete'){
            freshArr2.push(index);
        }
    })
    return (
        <div className="task-div">
            <h3>You have <span className="text-secondary fw-bold">{freshArr.length}</span>  tasks to complete</h3>
            {taskId.length > 0 ? <div className="text-center selection-text">
                <p>Total {taskId.length} task selected </p>
                <button onClick={deleteMany}>Delete Selected Tasks</button>
            </div> : <></>}

            <div className="all-task">
                {/* ------ all incomplete task will show here ------ */}
                {
                    tasks.map(index => index.action == 'incomplete' && <SingleTasks
                        index={index}
                        key={index._id}
                        deleteSingleTask={deleteSingleTask}
                        selectManyId={selectManyId}
                        editTask={editTask}
                    ></SingleTasks>)
                }
                {freshArr2.length>0 && <span className="complete-task-label"><p>Completed :</p></span>}
                {
                    tasks.map(index => index.action == 'complete' && <SingleTasks
                        index={index}
                        key={index._id}
                        deleteSingleTask={deleteSingleTask}
                        selectManyId={selectManyId}
                    ></SingleTasks>)
                }
            </div>

            <div className="popup-parent">
                <div className="popup-model">
                    <h2 className='text-center my-4 fw-bold'>Add a New Task</h2>
                    <form className='submit-form' >
                        <p className='label-for-task'>Task Name</p>
                        <input {...register("taskName", { required: true, maxLength: 20 })} />
                        <p className='label-for-task'>Start Time</p>
                        <input  type="time" {...register("startTime", { min: 18, max: 99 })} />
                        <input className='submit-task-button' type="submit" />
                    </form>
                    <span className='popup-close-button'><FontAwesomeIcon className="" icon={faMultiply} /></span>
                    <EditTask></EditTask>
                </div>
            </div>
        </div>
    );
};

export default Tasks;