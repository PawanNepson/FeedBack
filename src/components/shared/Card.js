import PropTypes from 'prop-types';

function Card({ children, reverse }) {
  return (
    <div
      className='card'
      style={{
        backgroundColor: reverse ? '#00ABE1' : '#B10DC9',
        color: reverse ? '#fff' : 'white',
      }}
    >
      {children}

    </div>
  );
}

Card.defaultProps = {
  reverse: false,
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};

export default Card;