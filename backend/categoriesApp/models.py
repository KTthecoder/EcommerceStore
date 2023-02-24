from django.db import models
from django_resized import ResizedImageField

# Create your models here.
class ProductCategories(models.Model):
    name = models.CharField(max_length=70)
    slug = models.SlugField(unique=True)
    frontImg = ResizedImageField(force_format="WEBP", quality=80, upload_to="categoryFrontImage/")

    def __str__(self):
        return self.name