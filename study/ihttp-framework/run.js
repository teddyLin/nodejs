var Server = require('./server').class,
	MyApplication = require('./application').class;

//---New one server to run a application
(new Server(8080)).runApplication(MyApplication); //Ϊ�Ժ����չ������application,����ֱ�ӽ�����Ϊ��������server