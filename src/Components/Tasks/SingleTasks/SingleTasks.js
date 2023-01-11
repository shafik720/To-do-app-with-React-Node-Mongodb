import React from 'react';
import './SingleTasks.css'; import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash , faPen } from '@fortawesome/free-solid-svg-icons';

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
                            <FontAwesomeIcon className="" icon={faPen} />
                        </div>
                        <div className="delete-task-button">
                            <FontAwesomeIcon className="" icon={faTrash} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleTasks;