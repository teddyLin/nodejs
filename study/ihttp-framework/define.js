//---Global requirements
require('./core/iutil');

//---Global initialize
route = require('./core/route'),
config = require('./config/config');
Controller = require('./core/controller').class; //����ȫ�ֶ���

//---Config
var path = require('path');
ROOT_PATH = __dirname; //��վ��Ŀ¼
CONTROLLER_PATH = path.join(ROOT_PATH, 'controller');
VIEW_PATH = path.join(ROOT_PATH, 'view');