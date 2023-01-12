import React from 'react';
import './SingleTasks.css'; import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPen, faCheck } from '@fortawesome/free-solid-svg-icons';

const SingleTasks = (props) => {
    const { taskName, startTime, _id } = props.index;



    return (
        <div>
            <div className="single-task">
                <div className="single-task-left">
                    <input type="radio" name="" id="" />
                    <p>{taskName}</p>
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