var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var url = 'mongodb://localhost/people';
mongoose.connect(url,{useMongoClient: true});

var contact= {
    
}