
import PropTypes from 'prop-types';

function Header({ bgColor, textColor, text }) {
    const headerInStyles = { backgroundColor: bgColor, color: textColor };

    return (
        <header style={headerInStyles}>
            <div className='container'>
                <h1>{text}</h1>
            </div>
        </header>
    );
}

Header.defaultProps = {
    text: 'Movie Review👯🔢',
    bgColor: '#B10DC9',
    textColor: '#111111',
};

Header.propTypes = {
    text: PropTypes.string.isRequired,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
};

export default Header;
