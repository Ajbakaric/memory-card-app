import axios from 'axios';

const fetchPokemon = async (count = 10) => {
    const promises = [];
    for (let i = 1; i <= count; i++) {
        promises.push(axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`));
    }
    const results = await Promise.all(promises);
    return results.map(res => ({
        id: res.data.id,
        name: res.data.name.toUpperCase(), // Uppercase for Nintendo style
        image: res.data.sprites.other['official-artwork'].front_default,
    }));
};

export { fetchPokemon };
