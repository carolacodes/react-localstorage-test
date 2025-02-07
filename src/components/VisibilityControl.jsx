import PropTypes from 'prop-types';

export const VisibilityControl = ({isChecked, setShowCompleted, cleanTask}) => {
    const handleDelete = () => {
        if(window.confirm('Are you sure you want to delete all tasks?')){
            cleanTask()
        }
    }

    return(
        <div className='d-flex justify-content-between bg-secondary text-white text-center p-2 border-secundary'>
            <div className='form-check form-switch'>
                <input type="checkbox"
                className='form-check-input'
                checked={isChecked}
                onChange={e => setShowCompleted(e.target.checked)} />
                <label htmlFor="">Show Tasks Done</label>
            </div>
            <button onClick={handleDelete} className='btn btn-danger btn-sm'>
                Clear
            </button>
        </div>
    )
}

VisibilityControl.propTypes = {
    isChecked: PropTypes.bool.isRequired,
    setShowCompleted: PropTypes.func.isRequired,
    cleanTask: PropTypes.func.isRequired
}