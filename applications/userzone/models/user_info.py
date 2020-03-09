from django.db import models
from applications.userzone.models import UserInfo
from applications.cms.models import Answer



auth_type = (
    ('01', '用户名'),
    ('02', '手机'),
    ('03', '邮箱'),
)
class UserAuth(models.Model):
    aid = models.AutoField(primary_key=True, null=False)    # 主键
    user = models.ForeignKey(to=UserInfo, to_field='uid', on_delete=models.CASCADE, null=False)
    auth = models.CharField(max_length=2, choices=auth_type, null=False)    # 认证类型
    identifier = models.CharField(max_length=50,null=False)                 # 标识【用户名...】
    credential = models.CharField(max_length=256,null=False)                # 密码

class InterestItem(models.Model):
    id = models.AutoField(primary_key=True, null=False)  # 主键
    interest_item = models.CharField(max_length=10, null=False)
    count = models.IntegerField(default=0, null=True)
    interest_to_user = models.ManyToManyField(to=UserInfo)

class FieldItem(models.Model):
    fid = models.AutoField(primary_key=True, null=False)  # 主键
    field_item = models.CharField(max_length=10, null=False)
    count = models.IntegerField(default=0, null=True)
    field_to_user = models.ManyToManyField(to=UserInfo)


class UserBrowse(models.Model):
    rid = models.AutoField(primary_key=True, null=False)    # 主键
    user = models.ForeignKey(to=UserInfo, to_field='uid', on_delete=models.CASCADE, null=False)
    answer = models.ForeignKey(to=Answer, to_field='aid', on_delete=models.CASCADE, null=False)
    browse_time = models.DateTimeField(auto_now_add=True, null=True)

class UserLike(models.Model):
    id = models.AutoField(primary_key=True, null=False)    # 主键
    user = models.ForeignKey(to=UserInfo, to_field='uid', on_delete=models.CASCADE, null=False)
    answer = models.ForeignKey(to=Answer, to_field='aid', on_delete=models.CASCADE, null=False)
    attitude = models.BooleanField(null=False)      # 1(True)表示赞同，0(False)表示反对
    time = models.DateTimeField(auto_now_add=True, null=True)

class UserSearch(models.Model):
    id = models.AutoField(primary_key=True, null=False)  # 主键
    user = models.ForeignKey(to=UserInfo, to_field='uid', on_delete=models.CASCADE, null=False)
    search_content = models.CharField(max_length=50, null=False)
    search_time = models.DateTimeField(auto_now_add=True, null=True)







