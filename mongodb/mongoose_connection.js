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

var user = {
    name: String,
    gender: String,
    contact: contact
}

var user_schema = new mongoose.Schema(user);

var USERCLASS = mongoose.model('')