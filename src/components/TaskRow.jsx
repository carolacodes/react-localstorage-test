import PropTypes from 'prop-types';

export const TaskRow = ({task, toggleTask}) => {
    return (
        <tr>
                <td className='d-flex justify-content-between'>
                    {task.name}
                    <input type="checkbox"
                    checked={task.done}
                    onChange={() => toggleTask(task)
                    }>
                    </input>
                </td>
        </tr>
    );
};

TaskRow.propTypes = {
    toggleTask: PropTypes.func.isRequired,
    task: PropTypes.shape({
        name: PropTypes.string.isRequired,
        done: PropTypes.bool.isRequired
    }).isRequired
};