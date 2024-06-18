const express = require('express');
const sequelize = require('./config/database');
const movieRoutes = require('./routes/movieRoutes');
const showtimeRoutes = require('./routes/showtimeRoutes');

const app = express();

app.use(express.json());

app.use('/movies', movieRoutes);
app.use('/showtimes', showtimeRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
