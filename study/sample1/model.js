exports.bootModels = function(basedir, mongoose) {
// ID������
var idGenerator = require(basedir + ��/models/idgenerator��);
idGenerator.model(mongoose);

// �û�����ģ��
var user = require(basedir + ��/models/user��);
user.model(mongoose);
}