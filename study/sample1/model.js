exports.bootModels = function(basedir, mongoose) {
// ID生成器
var idGenerator = require(basedir + ‘/models/idgenerator’);
idGenerator.model(mongoose);

// 用户数据模型
var user = require(basedir + ‘/models/user’);
user.model(mongoose);
}