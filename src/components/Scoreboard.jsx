import PropTypes from 'prop-types';
import './Scoreboard.css';

const Scoreboard = ({ currentScore, bestScore }) => (
    <div className="scoreboard">
        <p>Current Score: {currentScore}</p>
        <p>Best Score: {bestScore}</p>
    </div>
);

Scoreboard.propTypes = {
    currentScore: PropTypes.number.isRequired,
    bestScore: PropTypes.number.isRequired,
};


export default Scoreboard;
