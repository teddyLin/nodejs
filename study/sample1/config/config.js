var mongoose = require(¡®mongoose¡¯);

exports.config = function(basedir) {
var datasource = JSON.parse(require(¡®fs¡¯).readFileSync(basedir + ¡®/config/datasource.json¡¯, ¡®utf-8¡ä))['development'];
var mongodbUrl = ¡®mongodb:// ¡¯ + datasource.host + ¡®/¡¯ + datasource.database;
console.log(mongodbUrl);
mongoose.connect(mongodbUrl);
return mongoose;
}