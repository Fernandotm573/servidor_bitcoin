const express = require('express');
const app = express();
const PORT = 3001; 

// Configuración CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

//Se importa el enrutador
const crypRouter = require('./routes/cryptoRoutes');

//Se usa el enrutador para la ruta /cripto-api
app.use('/cripto-api', crypRouter);

app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});
