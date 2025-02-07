import PropTypes from 'prop-types';
import { useState } from "react";

const TaskCreator = ({createNewTask}) => {
    const [newTaskName, setNewTaskName] = useState()
    
    const handleSubmit = (e) => {
        e.preventDefault() //cancela el comportamiento por defecto del formulario para que no refresque la pagina
        createNewTask(newTaskName)
        setNewTaskName('')
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className='my-2 row'>
                <div className='col-9'>
                    <input type="text" placeholder="Enter a new task"
                    value={newTaskName} onChange={(e) => setNewTaskName(e.target.value)}
                    className='form-control'></input>
                </div>
                <div className='col-3'>
                    <button className='btn btn-primary btn-sm'>Save Task</button>
                </div>
            </form>
        </div>
        );
    };
    TaskCreator.propTypes = {
        createNewTask: PropTypes.func.isRequired,
    };

    export default TaskCreator;
