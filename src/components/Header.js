
import PropTypes from 'prop-types';

function Header({ bgColor, textColor, text }) {
    const headerInStyles = { backgroundColor: bgColor, color: textColor };

    return (
        <header style={headerInStyles}>
            <div className='container'>
                <h2>{text}</h2>
            </div>
        </header>
    );
}

Header.defaultProps = {
    text: 'Feedback👯🔢',
    bgColor: '#B10DC9',
    textColor: '#111111',
};

Header.propTypes = {
    text: PropTypes.string.isRequired,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
};

export default Header;
