import React, { useState, useEffect } from 'react';
import './PokemonList.css';
import axios from 'axios';

const PokemonList = ({ onPokemonSelect }) => {
    const [pokemon, setPokemon] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pokemonPerPage] = useState(10);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios('http://localhost:5000/api/pokemon');
            setPokemon(result.data.results);
        };
        fetchData();
    }, []);

    // Pagination logic
    const indexOfLastPokemon = currentPage * pokemonPerPage;
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonPerPage;
    const currentPokemon = pokemon.slice(indexOfFirstPokemon, indexOfLastPokemon);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="pagination">
            <ul className="pokemon-list">
                {currentPokemon.map((p, index) => (
                    <li key={index} onClick={() => onPokemonSelect(p.name)}>
                        {p.name}
                    </li>
                ))}
            </ul>
            <div>
                {Array.from(Array(Math.ceil(pokemon.length / pokemonPerPage)).keys()).map(number => (
                    <button key={number} onClick={() => paginate(number + 1)}>
                        {number + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default PokemonList;
