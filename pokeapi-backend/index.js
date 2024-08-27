const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

// Endpoint untuk mendapatkan data Pokemon
app.get('/api/pokemon', async (req, res) => {
    try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100');
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Server Error');
    }
});

// Endpoint untuk mendapatkan detail Pokemon berdasarkan ID atau nama
app.get('/api/pokemon/:id', async (req, res) => {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${req.params.id}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Server Error');
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
