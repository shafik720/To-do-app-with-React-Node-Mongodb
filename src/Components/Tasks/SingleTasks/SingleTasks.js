import React, { useState } from 'react';
import './SingleTasks.css'; import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPen, faCheck } from '@fortawesome/free-solid-svg-icons';

const SingleTasks = (props) => {
    const { taskName, startTime, _id ,action } = props.index;

    const [checked,setChecked] = useState(false);
    function checkingCheckbox(id, actions){
        console.log(actions);
        let action = '';
        // const action = checked ? 'complete' : 'incomplete';
        if(actions == 'incomplete' ){
            action = 'complete';
        }else{
            action = 'incomplete';
        }
        
        const url = `http://localhost:5000/alltasks/${id}`;
        fetch(url,{
            method : 'PUT',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify({action})
        })
        .then(res=>res.json())
        .then(data=>{
            // console.log('successfully updated !');
        })
    }

    return (
        <div>
            <div className="single-task">
                <div className="single-task-left w-100">
                    <label  className={checked || action=='complete' ? "containers active" : "containers"}>{taskName}
                        <input onClick={()=>{setChecked(!checked);checkingCheckbox(_id, action);}} type="checkbox" name="" id=""/>
                        <span className="checkmark"></span>
                    </label>
                </div>

                <div className="single-task-right">
                    <p>{startTime}</p>
                </div>
                <div className="hover-content">
                    <div className="hover-content-second">
                        <div className="delete-task-button">
                            <FontAwesomeIcon className="task-edit-button" icon={faPen} />
                        </div>
                        <div onClick={() => props.deleteSingleTask(_id)} draggable className="delete-task-button">
                            <FontAwesomeIcon className="" icon={faTrash} />
                        </div>
                    </div>
                </div>
                
                <div draggable onClick={(e)=>props.selectManyId(_id, e)} className="selection-icon">
                        <FontAwesomeIcon className="check-icon" icon={faCheck} />
                    </div>
            </div>
        </div>
    );
};

export default SingleTasks;