/**
 * Created with JetBrains WebStorm.
 * User: yelin
 * Date: 13-3-24
 * Time: 下午9:38
 * To change this template use File | Settings | File Templates.
 */

var fs = require("fs");

function walk(path) {
    var dirList = fs.readdirSync(path);
    console.log(dirList);
    return dirList;
}

function renameTvList(dirList, prePath) {
    var oldName,
        newName;
    var toDel = /好汉两个半\.Two\.and\.a\.Half\.Men\./g;
    for (var i = 0; i < dirList.length; ++i) {
        oldName = prePath + dirList[i];
        newName = prePath + dirList[i].replace(toDel, '');
        console.log(oldName);
        console.log(newName);
        fs.renameSync(oldName, newName);
    }
}


var nameList = walk('F:/TDDOWNLOAD/好汉/');
renameTvList(nameList, 'F:/TDDOWNLOAD/好汉/');
