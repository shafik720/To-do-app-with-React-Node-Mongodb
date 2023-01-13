import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMultiply } from '@fortawesome/free-solid-svg-icons';

const EditTask = () => {
    const { id } = useParams();
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
    };
    const navigate = useNavigate();

 
    
    // this will take the user to home page when the pop model will be closed
    function backToApp(){
        navigate(`/`);
        
        document.querySelector('.main-div').classList.remove('active');
    }

    let[singleTask, setSingleTask] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/alltasks/${id}`)
        .then(res=>res.json())
        .then(data=>setSingleTask(data))
    },[])
    return (
        <div>
            <div className="popup-parent active">
                <div className="popup-model">
                    <h2 className='text-center my-4 fw-bold'>Edit your task </h2>
                    <form className='submit-form' >
                        <p className='label-for-task'>Task Name</p>
                        <input value={singleTask.taskName} {...register("taskName", { required: true, maxLength: 20 })} />
                        <p className='label-for-task'>Start Time</p>
                        <input value={singleTask.startTime} type="time" {...register("startTime", { min: 18, max: 99 })} />
                        <input className='submit-task-button' type="submit" />
                    </form>
                    <span onClick={backToApp} className='popup-close-button'><FontAwesomeIcon className="" icon={faMultiply} /></span>
                </div>
            </div>
        </div>
    );
};

export default EditTask;