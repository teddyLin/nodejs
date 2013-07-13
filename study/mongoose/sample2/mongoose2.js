var util = require('util');

var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	ObjectId = Schema.ObjectId;

var UserSchema = new Schema({
	userid: ObjectId,
	name: {type : String, required: true, unique : true, index : true},
	age: Number
});

var db = mongoose.connect('mongodb://127.0.0.1/test');
mongoose.model('user', UserSchema);
var User  = db.model('user');
var record = new User();
record.name  = "bombworm";
record.age = 27;

record.save(function(err) {
	  if (err) {
	      console.log('save failed');
	  }else{
		  console.log('save success');
	  }
});
// 查找数据
User.find({},function(err, records) {
	if(!err){
		records.forEach(function (record) {
		console.log('name: '+record.name+'\t age: '+record.age);
		});
		db.connection.close(); // 使用完最后要关闭，不然nodejs不能退出程序
	}
});
