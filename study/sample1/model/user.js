// �û�����ģ��
exports.model = function(mongoose) {
var Schema = mongoose.Schema;
var User = new Schema({
id : { type: Number },
name : {type: String},
username : { type: String },
password : { type: String},
status : {type: Number}
});
// ����ǰ���һ����ID
User.pre(��save��, function(next, done){
var user = this;
var idGenerator = mongoose.model(��IdGenerator��);
// ���һ����ID
idGenerator.getNewId(��User��,function(newid){
if(newid){
user.id = newid;
done(); // ����ģ����򲻻ᱣ�浽mongoŶ��
}
});
});
mongoose.model(��User��, User);
}