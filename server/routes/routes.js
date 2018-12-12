const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const urlencodedParser = bodyParser.urlencoded({extended: true});



router.delete('/movies/:id', function(req, res, next) {

    // delete the movie from mongodb
    console.log(req.params.id);

    // if(req.params.id)
    // {
    //     Movie.findByIdAndDelete(req.params.id, null, function(error, data){
    //         try 
    //         {
    //             if (error) throw error;
    //             res.json(data);
    //         }
    //         catch(error)
    //         {
    //             error.status = 500;
    //             next(error);
    //         }
    //     });
    // }
    // else
    // {
    //     error = new Error('Unprocessable Entity');
    //     error.status = 422;
    //     next(error);
    // }
    
});

module.exports = router;