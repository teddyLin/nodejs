/**
 * Created with JetBrains WebStorm.
 * User: tlin
 * Date: 13-3-20
 * Time: 下午1:12
 * To change this template use File | Settings | File Templates.
 */

var fs = require("fs");

fs.openSync("D:/Coding/nodejs/study/begin/fileoperation/testDir/dd.js", "a+");
fs.appendFileSync("D:/Coding/nodejs/study/begin/fileoperation/testDir/dd.js", "first fs\n");
fs.appendFileSync("D:/Coding/nodejs/study/begin/fileoperation/testDir/dd.js", "second fs\n");