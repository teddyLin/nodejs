exports.bootService = function(basedir, dnode, mongoose) {
var UserService = require(basedir + ��/services/user_service��);
var userService = new UserService(mongoose);
var server = dnode({
saveUser : userService.saveUser(),  // �Կͻ��˱�¶saveUser�û����淽��
listUsers : userService.listUsers() // �Կͻ��˱�¶listUsers�û��б���
});
return server;
}