import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMultiply } from '@fortawesome/free-solid-svg-icons';

const EditTask = () => {
    const { id } = useParams();
    const { register, handleSubmit, setValue  } = useForm();
    const onSubmit = data => {
        data.action = 'incomplete';
        console.log(data);
        const url = `http://localhost:5000/singleTaskEdit/${id}`;
        fetch(url, {
            method : "PUT",
            headers : {'content-type' : 'application/json' },
            body : JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
            alert('Successfully Edited');
            navigate(`/`);
        })
    };
    const navigate = useNavigate();
    
    // this will take the user to home page when the pop model will be closed
    function backToApp(){
        navigate(`/`);
        document.querySelector('.main-div').classList.remove('active');
    }

    // fetching the data for task that need to be edited
    let[singleTask, setSingleTask] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/alltasks/${id}`)
        .then(res=>res.json())
        .then(data=>{
            setSingleTask(data);
            setValue("taskName", data.taskName);
            setValue("startTime", data.startTime);
        })
    },[setValue])
    return (
        <div>
            <div className="popup-parent active">
                <div className="popup-model">
                    <h2 className='text-center my-4 fw-bold'>Edit your task </h2>
                    <form className='submit-form'  onSubmit={handleSubmit(onSubmit)} >
                        <p className='label-for-task'>Task Name</p>
                        <input defaultValue={singleTask.taskName} {...register("taskName", { required: true, maxLength: 20 })} />
                        <p className='label-for-task'>Start Time</p>
                        <input defaultValue={singleTask.startTime} type="time" {...register("startTime", { min: 18, max: 99 })} />
                        <input value="Edit" className='submit-task-button' type="submit" />
                    </form>
                    <span onClick={backToApp} className='popup-close-button'><FontAwesomeIcon className="" icon={faMultiply} /></span>
                </div>
            </div>
        </div>
    );
};

export default EditTask;