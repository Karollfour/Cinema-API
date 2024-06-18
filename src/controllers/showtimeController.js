// src/controllers/showtimeController.js

const Showtime = require('../models/Showtime');

exports.getAllShowtimes = async (req, res) => {
  const showtimes = await Showtime.findAll();
  res.json(showtimes);
};

exports.getShowtimeById = async (req, res) => {
  const showtime = await Showtime.findByPk(req.params.id);
  if (showtime) {
    res.json(showtime);
  } else {
    res.status(404).send('Showtime not found');
  }
};

exports.createShowtime = async (req, res) => {
  try {
    const showtime = await Showtime.create(req.body);
    res.status(201).json(showtime);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateShowtime = async (req, res) => {
  try {
    const [updated] = await Showtime.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated) {
      const updatedShowtime = await Showtime.findByPk(req.params.id);
      res.status(200).json(updatedShowtime);
    } else {
      res.status(404).send('Showtime not found');
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteShowtime = async (req, res) => {
  try {
    const deleted = await Showtime.destroy({
      where: { id: req.params.id },
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).send('Showtime not found');
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

