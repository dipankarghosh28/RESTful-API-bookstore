var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json());
mongoose.connect('mongodb://localhost/bookstore',{useMongoClient:true});

var db = mongoose.connection;
Genre = require('./models/genre');
Book = require('./models/book');

app.get('/', function(req,res){
    res.send('use1 api/books or api');
});
app.get('/api/genres', function(req,res){
Genre.getGenres(function(err, genres){
    if(err){
        throw err;
    }
    res.json(genres);
  });
});

app.get('/api/books', function(req,res){
    Book.getBooks(function(err, books){
        if(err){
            throw err;
        }
        res.json(books);
      });
    });

    app.post('/api/genres', function(req,res){
        var genre = req.body;
        Genre.addGenre(genre, function(err, genre){
            if(err){
                throw err;
            }
            res.json(genre);
          });
        });
    app.get('/api/books/:_id', function(req,res){
        Book.getBookById(req.params._id,function(err, book){
            if(err){
                throw err;
            }
            res.json(book);
          });
        });
app.listen(3000);
console.log('running on port 3000....');
