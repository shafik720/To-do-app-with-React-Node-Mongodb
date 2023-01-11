import React from 'react';
import './Tasks.css';

const Tasks = () => {
    return (
        <div className="task-div">
            <h3>You have 10 tasks to complete</h3>
            <div className="all-task">
                <div className="single-task">
                    <div className="single-task-left">
                        <input type="radio" name="" id="" />
                        <p>Coding for 6 hours</p>
                    </div>
                    <div className="single-task-right">
                        <p>9 am</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tasks;