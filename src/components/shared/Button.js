import PropTypes from 'prop-types';

function Button({ children, isDisabled, type, version }) {
    return (
        <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
            {children}
        </button>
    );
}

Button.defaultProps = {
    version: 'primary',
    type: 'button',
    isDisabled: false,
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    isDisabled: PropTypes.bool,
    version: PropTypes.string,
    type: PropTypes.string,
};

export default Button;