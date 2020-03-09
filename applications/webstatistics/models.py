from django.db import models


# 每天0点清空，记录一天的搜索情况
class SearchStatistics(models.Model):
    sid = models.AutoField(primary_key=True, null=False)
    search_content = models.CharField(max_length=50, null=False)
    count = models.IntegerField(default=1, null=False)
