var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/tutorialkart');
 
var db = mongoose.connection;
 
db.on('error', console.error.bind(console, 'connection error:'));
 
db.once('open', function() {
    console.log("Connection Successful!");
  
    var UserSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  address: {
    type: String,
    unique: true,
    required: true,
  },
  contact : {
    type: Number,
    required: true,
  }
});
var User = mongoose.model('User', UserSchema);
 
    var data = [{ name: 'Rahul', Address: 'JP Nagar', Contact: 8989898989 },
                    { name: 'Ram', Address: 'Jayanagar', Contact: 7897989899 },
                    { name: 'Richie', Address: 'MG Road', Contact: 8989897798}];
 
    User.collection.insert(data, function (err, docs) {
      if (err){ 
          return console.error(err);
      } else {
        console.log("Multiple documents inserted to Collection");
      }
    });
    
});