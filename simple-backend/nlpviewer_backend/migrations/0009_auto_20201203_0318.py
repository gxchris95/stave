# Generated by Django 3.0.7 on 2020-12-03 08:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('nlpviewer_backend', '0008_auto_20201203_0317'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='config',
            field=models.TextField(blank=True, default='', null=True),
        ),
    ]
