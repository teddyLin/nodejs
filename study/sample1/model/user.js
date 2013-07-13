// 用户数据模型
exports.model = function(mongoose) {
var Schema = mongoose.Schema;
var User = new Schema({
id : { type: Number },
name : {type: String},
username : { type: String },
password : { type: String},
status : {type: Number}
});
// 保存前获得一个新ID
User.pre(‘save’, function(next, done){
var user = this;
var idGenerator = mongoose.model(‘IdGenerator’);
// 获得一个新ID
idGenerator.getNewId(‘User’,function(newid){
if(newid){
user.id = newid;
done(); // 必须的，否则不会保存到mongo哦！
}
});
});
mongoose.model(‘User’, User);
}