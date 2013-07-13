exports.bootService = function(basedir, dnode, mongoose) {
var UserService = require(basedir + ‘/services/user_service’);
var userService = new UserService(mongoose);
var server = dnode({
saveUser : userService.saveUser(),  // 对客户端暴露saveUser用户保存方法
listUsers : userService.listUsers() // 对客户端暴露listUsers用户列表方法
});
return server;
}