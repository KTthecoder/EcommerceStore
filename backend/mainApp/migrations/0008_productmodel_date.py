# Generated by Django 4.1.7 on 2023-03-08 20:08

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('mainApp', '0007_productdescimages'),
    ]

    operations = [
        migrations.AddField(
            model_name='productmodel',
            name='date',
            field=models.DateField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
    ]
