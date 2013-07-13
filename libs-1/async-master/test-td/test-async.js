/**
 * Created with JetBrains WebStorm.
 * User: tlin
 * Date: 13-3-29
 * Time: 下午12:57
 * To change this template use File | Settings | File Templates.
 */

var async = require("../lib/async.js"),
    fs = require("fs");


async.map(['1.txt', '2.txt', '3.txt'], fs.stat, function (err, results) {
    console.log(results);
});


async.series([
    function (callback) {
        // do some stuff ...
        callback(null, 'one');
    },
    function (callback) {
        // do some more stuff ...
        callback(null, 'two');
    }
],
// optional callback
    function (err, results) {
        // results is now equal to ['one', 'two']
    });


// an example using an object instead of an array
async.series({
        one: function (callback) {
            setTimeout(function () {
                callback(null, 1);
            }, 200);
        },
        two: function (callback) {
            setTimeout(function () {
                callback(null, 2);
            }, 100);
        }
    },
    function (err, results) {
        // results is now equal to: {one: 1, two: 2}
        console.log(results);
    });

