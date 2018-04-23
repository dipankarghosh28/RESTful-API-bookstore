var mongoose = require('mongoose');

//Genre Schema
var bookSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    genre:{
        type: String,
        required: true
    },
    description:{
        type: String
    },
    author:{
        type: String,
        required: true

    },
    publisher:{
        type: String
    },
    pages:{
        type: String
    },
    create_date:{
        type: Date,
        default: Date.now
    }
});

var bookSchema= module.exports = mongoose.model('Book', bookSchema);
//get Genres
module.exports.getBooks = function(callback, limit){
    Book.find(callback).limit(limit);
}

module.exports.getBookById = function(id,callback){
    Book.findById(id,callback);
}
