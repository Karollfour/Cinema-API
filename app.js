const express = require('express');
const app = express();
const port = 3000;

const movieRoutes = require('./src/routes/movieRoutes'); 
const showtimeRoutes = require('./src/routes/showtimeRoutes'); 

app.use(express.json());

app.use('/api/movies', movieRoutes);
app.use('/api/showtimes', showtimeRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

