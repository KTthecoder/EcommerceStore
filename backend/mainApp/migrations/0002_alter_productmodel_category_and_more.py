# Generated by Django 4.1.7 on 2023-03-05 23:58

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('categoriesApp', '0001_initial'),
        ('mainApp', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='productmodel',
            name='category',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='products', to='categoriesApp.productcategories'),
        ),
        migrations.AlterField(
            model_name='productmodel',
            name='discountPrice',
            field=models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True),
        ),
    ]
