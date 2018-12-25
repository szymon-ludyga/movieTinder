const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const morgan = require('morgan');
const Movie = require('./databaseConfig');
const requisition = require('requisition');

let error;

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, 'dist')));

// Catch all other routes request and return it to the index

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.get('/recommendations', async (req, res, next) => {

    Movie.find({}, null, {sort: { 'votes': -1}}, function(error, data){
        try 
        {
            if(error) throw error;
            res.send(data);
        }
        catch(error)
        {
            error.status = 500;
            next(error);
        }
    });
    
});

app.get('/movies', function(req, res, next){

    Movie.find({}, null, {sort: { 'votes': -1}}, function(error, data){
        try 
        {
            if(error) throw error;
            res.send(data);
        }
        catch(error)
        {
            error.status = 500;
            next(error);
        }
    });
    
});

app.put('/recommendations', async function(req, res, next){

    console.log('req.body', req.body);

    if(req.body.id)
    {	
        Movie.findByIdAndUpdate(req.body.id, { $inc: { votes: req.body.vote }}, function(error, data) {
            try 
            {
                if (error) throw error;
                res.json(data);
            }
            catch(error)
            {
                error.status = 500;
                next(error);
            }
            
        });
    }
    else
    {
        error = new Error('Unprocessable Entity');
        error.status = 422;
        next(error);
    }

});

// 1. passing request body in post method (validating presence of req.body)
// 2. getting movie details from ombdApi based on request body
// 3. saving movie details to mongodb database

app.post('/movies', async function(req, res, next){

    console.log('req.body', req.body);

    if(req.body.title)
    {
        const subrequest = await requisition(`http://www.omdbapi.com/?t=${req.body.title}&apikey=${process.env.API_KEY}`);
        const movieObj = await subrequest.json();

        if(!movieObj.Error && movieObj.Poster != 'N/A')
        {
            Movie({
                title: movieObj.Title,
                summary: movieObj.Plot,
                img_url: movieObj.Poster,
                rating: movieObj.imdbRating,
                votes: 0
            }).save(function(error, data) {
                try 
                {
                    if (error) throw error;
                    res.json(data);
                }
                catch(error)
                {
                    error.status = 409;
                    next(error);
                }
            });
        }
        else
        {
            error = new Error('Not Found');
            error.status = 404;
            next(error);
        }
        
    }
    else
    {
        error = new Error('Unprocessable Entity');
        error.status = 422;
        next(error);
    }

});

app.delete('/movies/:id', function(req, res, next) {

    // delete the movie from mongodb

    if(req.params.id)
    {
        Movie.findByIdAndDelete(req.params.id, null, function(error, data){
            try 
            {
                if (error) throw error;
                res.json(data);
            }
            catch(error)
            {
                error.status = 500;
                next(error);
            }
        });
    }
    else
    {
        error = new Error('Unprocessable Entity');
        error.status = 422;
        next(error);
    }
    
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log('Running on port ' + port));