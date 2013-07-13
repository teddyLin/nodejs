var dnode = require(¡®dnode¡¯);

dnode.connect(5000, function (remote) {
remote.saveUser(¡®tujiao¡¯, ¡®tujiao.com¡¯, ¡¯123456¡ä, 1, function (result) {
console.log(¡®id = ¡® + result.id + ¡®,user = ¡® + result.name + ¡®,username = ¡® + result.username);
});

remote.listUsers(function (users){
console.log(users);
for (var i = 0; i < users.length; i++)
{
console.log(users[i].username);
}
});
});