import React from 'react';
import './BottomSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faCalendar, faPlusCircle, faGear, faClipboard } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';




const BottomSection = () => {
    // react hook form
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
    };

    //this function will be triggered when 'Plus icon' is clicked
    function addTask() {
        console.log('clicked');
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
                    <h2>Pop Up Here</h2>
                    <form className='submit-form' onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("firstName", { required: true, maxLength: 20 })} />
                        <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
                        <input type="number" {...register("age", { min: 18, max: 99 })} />
                        <input type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BottomSection;