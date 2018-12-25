const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

require('dotenv').config();

// connect to database

mongoose.connect(process.env.DB_URL);

// defining a schema

const movieSchema = new mongoose.Schema({
	title: { type: String, required: true, unique: true },
	summary: String,
	img_url: String,
	rating: String,
	votes: Number
});

// preventing from adding the same movie

movieSchema.plugin(uniqueValidator);

// defining a model

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;