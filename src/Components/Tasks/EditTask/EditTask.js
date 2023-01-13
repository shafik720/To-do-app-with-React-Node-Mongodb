import React from 'react';
import { useNavigate, useParams } from 'react-router';
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMultiply } from '@fortawesome/free-solid-svg-icons';

const EditTask = () => {
    const { id } = useParams();
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    const navigate = useNavigate();

    document.querySelector('.main-div').classList.add('active');
    
    function backToApp(){
        navigate(`/`);
        
        document.querySelector('.main-div').classList.remove('active');
    }
    return (
        <div>
            {/* <h2 className="text-danger">Edit your task here : {id} </h2> */}
            <div className="popup-parent active">
                <div className="popup-model">
                    <h2 className='text-center my-4 fw-bold'>Edit your task here : {id}</h2>
                    <form className='submit-form' >
                        <p className='label-for-task'>Task Name</p>
                        <input {...register("taskName", { required: true, maxLength: 20 })} />
                        <p className='label-for-task'>Start Time</p>
                        <input type="time" {...register("startTime", { min: 18, max: 99 })} />
                        <input className='submit-task-button' type="submit" />
                    </form>
                    <span onClick={backToApp} className='popup-close-button'><FontAwesomeIcon className="" icon={faMultiply} /></span>
                </div>
            </div>
        </div>
    );
};

export default EditTask;