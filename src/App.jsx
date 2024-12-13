import { useState, useEffect } from 'react';
import './styles/App.css';
import Header from './components/Header';
import Scoreboard from './components/Scoreboard';
import Gameboard from './components/Gameboard';
import { fetchPokemon } from './services/api';

const App = () => {
    const [cards, setCards] = useState([]);
    const [currentScore, setCurrentScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [clickedCards, setClickedCards] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const cardData = await fetchPokemon(12); // Fetch 12 cards
            setCards(cardData);
        };
        fetchData();
    }, []);

    const shuffleCards = () => {
        setCards(prevCards => [...prevCards].sort(() => Math.random() - 0.5));
    };

    const handleCardClick = (id) => {
        if (clickedCards.includes(id)) {
            setCurrentScore(0);
            setClickedCards([]);
        } else {
            setClickedCards([...clickedCards, id]);
            setCurrentScore(currentScore + 1);
            if (currentScore + 1 > bestScore) setBestScore(currentScore + 1);
        }
        shuffleCards();
    };

    return (
        <div className="App">
            <Header />
            <Scoreboard currentScore={currentScore} bestScore={bestScore} />
            <Gameboard cards={cards} onCardClick={handleCardClick} />
        </div>
    );
};

export default App;
