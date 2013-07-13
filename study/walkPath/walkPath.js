/**
 * Created with JetBrains WebStorm.
 * User: yelin
 * Date: 13-3-21
 * Time: 下午11:29
 * To change this template use File | Settings | File Templates.
 */


var fs = require('fs'),
    fileList = [];

function walk(path){
var dirList = fs.readdirSync(path);

console.log(dirList);
dirList.forEach(function(item){
    if(fs.statSync(path + '/' + item).isDirectory()){
        walk(path + '/' + item);
    }else{
        fileList.push(path + '/' + item);
    }
});
}

walk('F:/TDDOWNLOAD/仁心');

console.log(fileList);