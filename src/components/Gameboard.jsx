import PropTypes from 'prop-types';
import Card from './Card';
import './Gameboard.css';

const Gameboard = ({ cards, onCardClick }) => (
    <div className="gameboard">
        {cards.map(card => (
            <Card key={card.id} card={card} onClick={() => onCardClick(card.id)} />
        ))}
    </div>
);

Gameboard.propTypes = {
    cards: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
        })
    ).isRequired,
    onCardClick: PropTypes.func.isRequired,
};

export default Gameboard;
