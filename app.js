const express = require('express');
const app = express();
const port = 3000;

// Importar Rotas
const movieRoutes = require('./src/routes/movieRoutes'); // Certifique-se de que o caminho está correto
const showtimeRoutes = require('./src/routes/showtimeRoutes'); // Certifique-se de que o caminho está correto

app.use(express.json());
// Usar Rotas
app.use('/api/movies', movieRoutes);
app.use('/api/showtimes', showtimeRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

