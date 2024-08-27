import React, { useState } from 'react';
import './App.css';
import PokemonList from './components/PokemonList/PokemonList';
import PokemonDetail from './components/PokemonDetail/PokemonDetail';
import Search from './components/Search/Search';

const App = () => {
    const [selectedPokemon, setSelectedPokemon] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    // Menangani Seleksi Pokémon untuk Detail Page
    const handlePokemonSelect = (name) => {
        setSelectedPokemon(name);
    };

    // Menangani Pencarian Pokémon berdasarkan nama
    const handleSearch = (query) => {
        setSearchQuery(query);
        setSelectedPokemon(query);
    };

    return (
        <div className="container">
            <h1>Pokémon</h1>
            <div className="search-container">
              <Search onSearch={handleSearch} /> 
            </div>            
            {selectedPokemon ? (
                <PokemonDetail pokemonName={selectedPokemon} />
            ) : (
                <PokemonList onPokemonSelect={handlePokemonSelect} />
            )}
            
        </div>
    );
};

export default App;
