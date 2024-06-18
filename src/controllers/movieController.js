// src/controllers/movieController.js

const Movie = require('../models/Movie');

exports.getAllMovies = async (req, res) => {
  const movies = await Movie.findAll();
  res.json(movies);
};

exports.getMovieById = async (req, res) => {
  const movie = await Movie.findByPk(req.params.id);
  if (movie) {
    res.json(movie);
  } else {
    res.status(404).send('Movie not found');
  }
};

exports.createMovie = async (req, res) => {
  try {
    const movie = await Movie.create(req.body);
    res.status(201).json(movie);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateMovie = async (req, res) => {
  try {
    const [updated] = await Movie.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated) {
      const updatedMovie = await Movie.findByPk(req.params.id);
      res.status(200).json(updatedMovie);
    } else {
      res.status(404).send('Movie not found');
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteMovie = async (req, res) => {
  try {
    const deleted = await Movie.destroy({
      where: { id: req.params.id },
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).send('Movie not found');
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
