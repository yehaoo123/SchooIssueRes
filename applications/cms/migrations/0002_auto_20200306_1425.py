# Generated by Django 2.0.2 on 2020-03-06 14:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cms', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='question',
            old_name='content',
            new_name='describe',
        ),
        migrations.AddField(
            model_name='question',
            name='title',
            field=models.CharField(default=123, max_length=50),
            preserve_default=False,
        ),
    ]
