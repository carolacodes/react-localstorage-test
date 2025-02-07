import PropTypes from 'prop-types';
import { TaskRow } from './TaskRow';
export const TaskTable = ({tasks, toggleTask, showCompleted = false}) => {
    
    const taskTableRows = (doneValue) => {
        console.log(doneValue)
        return (
            tasks
            .filter(task => task.done === doneValue)
            .map(task => (
                <TaskRow task={task} toggleTask={toggleTask} key={task.name}></TaskRow>
            ))
        )
    }

    return (
        <table className='table table-striped table-bordered border-secundary table-dark'>
            <thead>
            <tr className='table-primary'>
                <th>Task</th>
            </tr>
            </thead>
            <tbody>
                {
                    taskTableRows(showCompleted)
                }
            </tbody>
        </table>
    )
}

TaskTable.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired
    })).isRequired,
    toggleTask: PropTypes.func.isRequired,
    showCompleted: PropTypes.bool.isRequired
}