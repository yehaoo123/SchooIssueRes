from django.db import models
from applications.userzone.models import SchoolItem
from applications.userzone.models import CollegeItem
from applications.userzone.models import SpecialtyItem
import os

account_status = (
    ('1', '正常'),
    ('2', '冻结'),
    ('3', '注销'),
)
user_identity = (
    ('1', '在校生'),
    ('2', '毕业生'),
    ('3', '老师'),
)
user_qualification = (
    ('11', '专科'),
    ('12', '本科'),
    ('13', '硕士'),
    ('14', '博士'),
    ('15', '博士后'),
    ('21', '讲师'),
    ('22', '副教授'),
    ('23', '教授'),
)
class UserInfo(models.Model):
    uid = models.AutoField(primary_key=True, null=False)    # 主键
    nickname = models.CharField(max_length=20, null=False)    # 昵称
    image_path = models.ImageField(upload_to='avatar'+os.path.sep, null=False)     # 头像图片的存储路径
    sex = models.BooleanField(null=False)          # 1-男 0-女
    email = models.EmailField(max_length=30, null=True)
    phone = models.CharField(max_length=11, null=True)
    question1 = models.CharField(max_length=30, null=False)
    answer1 = models.CharField(max_length=30, null=False)
    question2 = models.CharField(max_length=30, null=False)
    answer2 = models.CharField(max_length=30, null=False)
    status = models.CharField(max_length=1, choices=account_status, null=False)    # 账户状态
    identity = models.CharField(max_length=1, choices=user_identity, null=False)   # 身份
    school = models.ForeignKey(to=SchoolItem, to_field='sid', on_delete=models.DO_NOTHING, null=False)
    collage = models.ForeignKey(to=CollegeItem, to_field='cid', on_delete=models.DO_NOTHING, null=False)
    specialty = models.ForeignKey(to=SpecialtyItem, to_field='sid', on_delete=models.DO_NOTHING, null=False)
    qualification = models.CharField(max_length=2, choices=user_qualification, null=False)   # 学历/职称
    register_time = models.DateTimeField(auto_now_add=True, null=True)
    last_login_time = models.DateTimeField(null=True)
