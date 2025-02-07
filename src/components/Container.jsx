
import PropTypes from 'prop-types';

export const Container = ({children}) => {
    return (
        <div className="container p-4">
            <div className=' col-md-4 offset-md-4'>
            {children}
            </div>
        </div>
    )
}

Container.propTypes = {
    children: PropTypes.node.isRequired
}