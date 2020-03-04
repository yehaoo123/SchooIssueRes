from django.db import models



admin_department = (
    ('11', '运维部'),
    ('12', '开发部'),
    ('12', '运营部'),
    ('12', '产品部'),
)
admin_identity = (
    ('1', '工程师'),
    ('1', '主管'),
    ('1', '总监'),
)
admin_account_status = (
    ('1', '正常'),
    ('2', '冻结'),
    ('3', '注销'),
)

class AdminInfo(models.Model):
    aid = models.AutoField(primary_key=True, null=False)    # 主键
    username = models.CharField(max_length=50,null=False)
    password = models.CharField(max_length=256,null=False)
    real_name = models.CharField(max_length=10, null=False)
    email = models.EmailField(max_length=30, null=False)
    phone = models.CharField(max_length=11, null=False)
    wechat = models.CharField(max_length=30, null=False)
    dept = models.CharField(max_length=2, choices=admin_department, null=False)
    role = models.CharField(max_length=2, choices=admin_identity, null=False)
    status = models.CharField(max_length=1, choices=admin_account_status, null=False)
    register_time = models.DateTimeField(auto_now_add=True, null=True)
    last_login_time = models.DateTimeField(null=True)

'''
class AdminAuth(models.Model):
    aid = models.AutoField(primary_key=True, null=False)    # 主键
    authority = models.CharField(max_length=30, null=False)
    auth_to_admin = models.ManyToManyField(to=AdminInfo)
'''

