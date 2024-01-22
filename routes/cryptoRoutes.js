const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const response = await axios.get('https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD');
    res.json(response.data);
  } catch (error) {
    console.error('Error en la solicitud a la API:', error.message);
    res.status(500).json({ error: 'Error en la solicitud a la API' });
  }
});

module.exports = router;
