from django.db import models
from applications.userzone.models import UserInfo



class Question(models.Model):
    qid = models.AutoField(primary_key=True, null=False)
    user = models.ForeignKey(to=UserInfo, to_field='uid',on_delete=models.DO_NOTHING, null=False)
    follower_num = models.IntegerField(default=0, null=True)
    answer_num = models.IntegerField(default=0, null=True)
    browse_view = models.IntegerField(default=0, null=True)
    popularity = models.IntegerField(default=0, null=True)
    title = models.CharField(max_length=50, null=False)
    describe = models.TextField(null=False)
    time = models.DateTimeField(auto_now_add=True, null=True)

class Tag(models.Model):
    tid = models.AutoField(primary_key=True, null=False)
    tag_name = models.CharField(max_length=10, null=False)
    tag_to_question = models.ManyToManyField(to=Question)

class Answer(models.Model):
    aid = models.AutoField(primary_key=True, null=False)
    question = models.ForeignKey(to=Question, to_field='qid', on_delete=models.CASCADE, null=False)
    user =models.ForeignKey(to=UserInfo, to_field='uid', on_delete=models.DO_NOTHING, null=False)
    like_num = models.IntegerField(default=0, null=True)
    dislike_num = models.IntegerField(default=0, null=True)
    comment_num = models.IntegerField(default=0, null=True)
    content = models.TextField(null=False)
    time = models.DateTimeField(auto_now_add=True, null=True)

class Comment(models.Model):
    cid = models.AutoField(primary_key=True, null=False)
    answer = models.ForeignKey(to=Answer, to_field='aid', on_delete=models.CASCADE, null=False)
    user = models.ForeignKey(to=UserInfo, to_field='uid', on_delete=models.DO_NOTHING, null=False)
    point = models.IntegerField(null=False)
    like_num = models.IntegerField(default=0, null=True)
    dislike_num = models.IntegerField(default=0, null=True)
    content = models.CharField(max_length=300, null=False)
    time = models.DateTimeField(auto_now_add=True)

class Favorites(models.Model):
    fid = models.AutoField(primary_key=True, null=False)
    user =models.ForeignKey(to=UserInfo, to_field='uid', on_delete=models.CASCADE, null=False)
    answer = models.ForeignKey(to=Answer, to_field='aid', on_delete=models.CASCADE, null=False)
    time = models.DateTimeField(auto_now_add=True)


notice_status = (
    ('1', '显示'),
    ('2', '隐藏')
)
class Notice(models.Model):
    nid = models.AutoField(primary_key=True, null=False)
    content = models.TextField(null=False)
    status = models.CharField(max_length=1, choices=notice_status, null=False)
    priority = models.IntegerField(default=1, null=True)
    time = models.DateTimeField(auto_now_add=True, null=True)

