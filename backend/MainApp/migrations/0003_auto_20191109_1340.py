# Generated by Django 2.2.1 on 2019-11-09 10:40

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('MainApp', '0002_auto_20191101_1515'),
    ]

    operations = [
        migrations.RenameField(
            model_name='article',
            old_name='desription',
            new_name='description',
        ),
    ]
