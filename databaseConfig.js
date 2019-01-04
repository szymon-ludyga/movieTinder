const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

require('dotenv').config();

mongoose.connect(process.env.DB_URL);

const movieSchema = new mongoose.Schema({
	title: { type: String, required: true, unique: true },
	summary: String,
	img_url: String,
	rating: String,
	votes: Number
});

movieSchema.plugin(uniqueValidator);

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;