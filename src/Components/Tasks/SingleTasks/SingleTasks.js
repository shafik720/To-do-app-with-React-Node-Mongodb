import React from 'react';

const SingleTasks = (props) => {
    const{taskName, startTime} = props.index;
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
                </div>
        </div>
    );
};

export default SingleTasks;