# Generated by Django 4.1.7 on 2023-03-06 10:36

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('mainApp', '0003_productmodel_shortdescription'),
        ('accountApp', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='favoriteproducts',
            name='product',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='products', to='mainApp.productmodel'),
        ),
    ]
