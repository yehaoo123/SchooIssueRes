from django.db import models



class SchoolItem(models.Model):
    sid = models.AutoField(primary_key=True, null=False)  # 主键
    school_name = models.CharField(max_length=50, null=False)
    province = models.CharField(max_length=5, null=False)
    city = models.CharField(max_length=8, null=False)
    is_211 = models.BooleanField(null=False)
    is_985 = models.BooleanField(null=False)
    hold_type = models.CharField(max_length=2, null=False)   # 院校举办类型  公办/民办
    type = models.CharField(max_length=3, null=False)        # 院校类型      综合类/工科类
    belong = models.CharField(max_length=20, null=False)     # 院校隶属
    edu_type = models.CharField(max_length=10, null=False)   # 办学类型      大学/独立学院/高等职业技术学校 ...

class CollegeItem(models.Model):
    cid = models.AutoField(primary_key=True, null=False)  # 主键
    school = models.ForeignKey(to=SchoolItem, to_field='sid', on_delete=models.CASCADE, null=False)
    college_name = models.CharField(max_length=20, null=False)

class SpecialtyItem(models.Model):
    sid = models.AutoField(primary_key=True, null=False)  # 主键
    specialty_name = models.CharField(max_length=20, null=False)




