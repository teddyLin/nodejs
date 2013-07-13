var mongoose = require('mongoose');
var db = mongoose.createConnection('127.0.0.1', 'test');

var schema = mongoose.Schema({ name: 'string' });
var Cat = db.model('Cat', schema);

var kitty = new Cat({ name: 'Zildjian' });
kitty.save(function (err) {
  if (err) // ...
  res.end('meow');
});
//db.Connection.close(); 