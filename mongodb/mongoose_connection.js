var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var url = 'mongodb://localhost/people';
mongoose.connect(url,{useMongoClient: true});

var contact= {
    email: String,
    cell: String,
    home: String
}
var contact_schema = new mongoose.Schema(contact);

