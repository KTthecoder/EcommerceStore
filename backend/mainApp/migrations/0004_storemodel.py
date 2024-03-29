# Generated by Django 4.1.7 on 2023-03-07 16:16

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import django_resized.forms


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('mainApp', '0003_productmodel_shortdescription'),
    ]

    operations = [
        migrations.CreateModel(
            name='StoreModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('storeBanner', django_resized.forms.ResizedImageField(crop=None, force_format='WEBP', keep_meta=True, quality=80, scale=None, size=[1920, 1080], upload_to='storeBanner/')),
                ('storeBannerAlt', models.CharField(max_length=250)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
