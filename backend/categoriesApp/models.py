from django.db import models
from django_resized import ResizedImageField

# Create your models here.
class ProductCategories(models.Model):
    name = models.CharField(max_length=70)
    slug = models.SlugField(unique=True)
    frontImg = ResizedImageField(force_format="WEBP", quality=80, upload_to="categoryFrontImage/")
    frontImgAlt = models.CharField(max_length=150)
    iconImg = ResizedImageField(force_format="WEBP", quality=80, upload_to="categoryIconImage/")
    iconImgAlt = models.CharField(max_length=150)

    def __str__(self):
        return self.name
    
class ProductSubCategories(models.Model):
    name = models.CharField(max_length=70)
    slug = models.SlugField(unique=True)
    frontImg = ResizedImageField(force_format="WEBP", quality=80, upload_to="categoryFrontImage/")
    frontImgAlt = models.CharField(max_length=150)
    productCategory = models.ForeignKey(ProductCategories, related_name='subcategories', on_delete=models.CASCADE, null=True, blank=True)

    def __str__(self):
        return self.productCategory.name + " - " + self.name