# Generated by Django 2.0.2 on 2020-03-06 18:21

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='SearchStatistics',
            fields=[
                ('sid', models.AutoField(primary_key=True, serialize=False)),
                ('search_content', models.CharField(max_length=50)),
                ('count', models.IntegerField(default=1)),
            ],
        ),
    ]
