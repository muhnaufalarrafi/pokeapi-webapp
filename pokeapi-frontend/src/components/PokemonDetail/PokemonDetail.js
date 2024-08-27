import React, { useState, useEffect } from 'react';
import './PokemonDetail.css';
import axios from 'axios';

const PokemonDetail = ({ pokemonName }) => {
    const [details, setDetails] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(`http://localhost:5000/api/pokemon/${pokemonName}`);
            setDetails(result.data);
        };
        fetchData();
    }, [pokemonName]);

    if (!details) return <div>Loading...</div>;

    return (
        <div className="pokemon-detail">
            <h2>{details.name}</h2>
            <img src={details.sprites.front_default} alt={details.name} />
            <p>Height: {details.height}</p>
            <p>Weight: {details.weight}</p>
            {/* Display other details as necessary */}
        </div>
    );
};

export default PokemonDetail;
