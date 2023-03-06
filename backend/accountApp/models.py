from django.db import models
from django.contrib.auth.models import User
from mainApp.models import ProductModel

class FavoriteProducts(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ForeignKey(ProductModel, related_name='products', on_delete=models.CASCADE)

    def __str__(self):
        return self.user.username + " - " + self.product.title