from django.db import models
from django_resized import ResizedImageField
from categoriesApp.models import ProductSubCategories, ProductCategories
from django.contrib.auth.models import User

# Create your models here.
class StoreModel(models.Model):
    name = models.CharField(max_length=200)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    slug = models.SlugField(unique=True)
    storeBanner = ResizedImageField(force_format="WEBP", quality=80, upload_to="storeBanner/")
    storeBannerAlt = models.CharField(max_length=250)

    def __str__(self):
        return self.name

class BannersModel(models.Model):
    frontImg = ResizedImageField(force_format="WEBP", quality=80, upload_to="homeBannerImg/")
    frontImgAlt = models.CharField(max_length=250)
    slug = models.SlugField(unique=True)

    def __str__(self):
        return self.frontImg.url
    
class ProductDescImages(models.Model):
    image = ResizedImageField(force_format="WEBP", quality=80, upload_to="productImages/")
    imageAlt = models.CharField(max_length=250)

    def __str__(self):
        return self.image.url

class ProductModel(models.Model):
    frontImg = ResizedImageField(force_format="WEBP", quality=80, upload_to="productFrontImg/")
    frontImgAlt = models.CharField(max_length=250)
    title = models.CharField(max_length=350)
    normalPrice = models.DecimalField(max_digits=10, decimal_places=2)
    discountPrice = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    rating = models.DecimalField(max_digits=3, decimal_places=1)
    description = models.TextField()
    shortDescription = models.TextField()
    slug = models.SlugField(unique=True)
    boughtBy = models.IntegerField()
    category = models.ForeignKey(ProductCategories, related_name='products', on_delete=models.CASCADE)
    subCategory = models.ForeignKey(ProductSubCategories, on_delete=models.CASCADE)
    store = models.ForeignKey(StoreModel, on_delete=models.CASCADE)
    date = models.DateField(auto_now=False, auto_now_add=True)

    def __str__(self):
        return self.title

class ProductImagesModel(models.Model):
    image = ResizedImageField(force_format="WEBP", quality=80, upload_to="productImages/")
    imageAlt = models.CharField(max_length=250)
    product = models.ForeignKey(ProductModel, on_delete=models.CASCADE)

    def __str__(self):
        return self.product.title + " - " + self.image.url
