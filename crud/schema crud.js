var mongoose = require('mongoose');
var router = express.Router();
var bodyParser=require('body-parser');

var schema = mongoose.schema;

var movieSchema = schema({
  moviename:String,
  movieDuration:Number,
  movieYear:Number,
  moviecategory:String,
});

var Movie = mongoose.model('Movie', movieSchema, 'movie');

router.get('/movie', function (req, res) {
    console.log("REACHED GET FUNCTION ON SERVER");
    Movie.find({}, function (err, docs) {
         res.json(docs);

    });
});

router.get('/movie/:id', function (req, res) {
    console.log("REACHED GET ID FUNCTION ON SERVER");
     Movie.find({_id: req.params.id}, function (err, docs) {
         res.json(docs);

    });
});

router.post('/movie', function(req, res){
  console.log(req.body);
  var name = req.body.movieName;
  var duration = req.body.movieDuration;
  var year = req.body.movieYear;
  var category = req.body.movieCategory;
  var movie = new Movie({
    movieName:name,
    movieDuration:dur,
    movieYear:year,
    movieCategory:cat,
  });

  movie.save(function(err, docs){
    if ( err ) throw err;
    console.log("Book Saved Successfully");
    res.json(docs);
  });

  })
router.delete('/movie/:id', function(req, res){
   console.log("REACHED Delete FUNCTION ON SERVER");
      Movie.remove({_id:req.params.id}, function(err, docs){
        res.json(docs);
    });
})
router.put('/movie/:id', function(req, res){
    console.log("REACHED PUT");
    console.log(req.body);
    Movie.findOneAndUpdate({_id:req.params.id}, req.body, function (err, data) {
      res.json(data);
    });
})
router.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = router;
