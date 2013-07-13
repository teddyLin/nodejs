/**
 * Created with JetBrains WebStorm.
 * User: yelin
 * Date: 13-3-18
 * Time: 下午11:25
 * To change this template use File | Settings | File Templates.
 */

var Person = require("./Person").Person,
    Student = require("./Student").Student;

var person = new Person(),
    stu = new Student();

person.hello();
stu.hello();
stu.say();