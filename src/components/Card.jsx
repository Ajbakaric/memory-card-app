import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ card, onClick }) => (
    <div className="card" onClick={onClick}>
        <img src={card.image} alt={card.name} />
        <p>{card.name}</p>
    </div>
);

Card.propTypes = {
    card: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
    }).isRequired,
    onClick: PropTypes.func.isRequired,
};

export default Card;
