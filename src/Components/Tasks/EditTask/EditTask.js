import React from 'react';
import { useParams } from 'react-router';

const EditTask = () => {
    const {id} = useParams();
    return (
        <div>
            <h2 className="text-danger">Edit your task here : {id} </h2>
        </div>
    );
};

export default EditTask;