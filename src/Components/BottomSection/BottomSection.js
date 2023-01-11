import React from 'react';
import './BottomSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faCalendar, faPlusCircle, faGear, faClipboard , faMultiply } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';




const BottomSection = () => {
    // react hook form
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
    };

    //this function will be triggered when 'Plus icon' is clicked
    function addTask() {
        document.querySelector('.popup-parent').classList.add('active');
        
    document.addEventListener('click',(e)=>{
        // console.log(e.target.className);
        if(e.target.classList.contains('popup-parent')){
            document.querySelector('.popup-parent').classList.remove('active');
            console.log('ok');
        }
    })
    }
    return (
        <div className="">
            <div className="bottom-div">
                <span draggable><FontAwesomeIcon className="single-icon" icon={faHouse} /> </span>
                <span draggable><FontAwesomeIcon className="single-icon" icon={faCalendar} /> </span>
                <span onClick={addTask} draggable><FontAwesomeIcon className="add-icon" icon={faPlusCircle} /> </span>
                <span draggable><FontAwesomeIcon className="single-icon" icon={faClipboard} /> </span>
                <span draggable><FontAwesomeIcon className="single-icon" icon={faGear} /> </span>
            </div>
            <div className="popup-parent">
                <div className="popup-model">
                    <h2 className='text-center my-4 fw-bold'>Add a New Task</h2>
                    <form className='submit-form' onSubmit={handleSubmit(onSubmit)}>
                        <p className='label-for-task'>Task Name</p>
                        <input {...register("firstName", { required: true, maxLength: 20 })} />
                        <p className='label-for-task'>Start Time</p>
                        <input placeholder='Start Time' type="time" {...register("age", { min: 18, max: 99 })} />
                        <input className='submit-task-button' type="submit" />
                    </form>
                    <span className='popup-close-button'><FontAwesomeIcon className="" icon={faMultiply} /></span>
                </div>
            </div>
        </div>
    );
};

export default BottomSection;