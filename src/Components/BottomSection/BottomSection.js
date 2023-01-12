import React from 'react';
import './BottomSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faCalendar, faPlusCircle, faGear, faClipboard, faMultiply } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';




const BottomSection = () => {
    // react hook form functionality
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        //---------- adding data to mongodb
        fetch('http://localhost:5000/addTask',{
            method:'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                document.querySelector('.popup-parent').classList.remove('active');
            }
        })

    };

    //---------------------------------this function will be triggered when 'Plus icon' is clicked--------------------------------
    function addTask() {
        document.querySelector('.popup-parent').classList.add('active');

        // closing the popup when user click outside the popup model
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('popup-parent')) {
                document.querySelector('.popup-parent').classList.remove('active');
            }
        })

        // closing the popup when user click the close button at the top right corner of the modal
        document.querySelector('.popup-close-button').addEventListener('click',()=>{
            document.querySelector('.popup-parent').classList.remove('active');
        });
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
                        <input {...register("taskName", { required: true, maxLength: 20 })} />
                        <p className='label-for-task'>Start Time</p>
                        <input  type="time" {...register("startTime", { min: 18, max: 99 })} />
                        <input className='submit-task-button' type="submit" />
                    </form>
                    <span className='popup-close-button'><FontAwesomeIcon className="" icon={faMultiply} /></span>
                </div>
            </div>
        </div>
    );
};

export default BottomSection;