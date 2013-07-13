module.exports = function(mongoose) {
this.saveUser = function() {
return function(name, username, password, status, callback) {
var User = mongoose.model(‘User’);
var user = new User();
user.name = name;
user.username = username;
user.password = password;
user.status = status;
user.save(function (error) {
if (error) {
console.log(‘用户保存失败’);
} else {
console.log(‘用户保存成功’);
}
});
User.findOne({name: name}, function (err, user) {
console.log(“user.name:” + user.name);
var id = user.id;
var name = user.name;
var username = user.username;
var password = user.password;
var status = user.status;
var json = toJSON(user);
// 回调方法，将user对象传回给调用者
// callback(json);
user.save = user.save.bind(user);
callback(user);
});
}
}

this.listUsers = function() {
return function(callback) {
var User = mongoose.model(‘User’);
var users = User.find({status: 1});
users.each(function(err,user){
if(user) {
console.log(user.username);
}
});
callback(users);
}
}
}

function toJSON(user) {
var id = ” + user.id;
var name = user.name;
var username = user.username;
var password = user.password;
var status = ” + user.status;
return {id:10000,name:name,username:username,password:password,status:status};
}