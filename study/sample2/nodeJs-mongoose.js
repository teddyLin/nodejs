// ����mongooseģ��
var express = require('express'),
    mongoose = require('mongoose'); 

// ����mongodb���ݿ� nodejsΪ���ݿ�����
mongoose.connect('mongodb://localhost/nodejs');
 
// ��ȡSchema �Լ� ObjectId ����
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
 
// ����һ������Schema(�ṹ���ܹ�) �����൱��mongodb�е�collection(����)
var commentsShema = new Schema({
    name:String,
    content:String
});
// ����һ�����ڲ���comments���collection�ģ�odel���� ��һ������Ϊmongodb�е�collection���ƣ���Ҫ�ȴ�����
var CommentModel = mongoose.model('comments', commentsShema);
 
// ����Schema
var newsSchema = new Schema({
    title : String,
    source : String,
    content : String,
    comments :{type:[commentsShema], default:[]} // ���ŵ����ۣ�������һ���Ӽ���(collection),�ǵ�һ��Ҫ�������Ű�����(type:[commentsShema])��Ĭ��Ϊһ��������(default:[])
});
// �������ŵ�Model
var NewsModel = mongoose.model('news', newsSchema);
 
// �½�һ������
var news = new NewsModel();
news.title = '����˰���ܾ֣��ڼ��ռӰ๤����ɸ�˰';
news.source = 'http://finance.qq.com/a/20120221/001221.htm';
news.content = '���գ���˰�ܾ���˰����˾����˰��ѯ�ȵ������������....';
news.save(function(err){
    console.log(err);
});
 
// ��ѯ����
NewsModel.find({}, function(err,docs){
    if(!err){
        if(docs[0]){
            // ���һ������
            var comment = new CommentModel();
            comment.name = 'iblue';
            comment.content = '��������!';
            docs[0].comments.push(comment);
            NewsModel.update({_id:docs[0]._id}, {comments:docs[0].comments}, function(err){
                console.log(err);
            });
        }
    }
});