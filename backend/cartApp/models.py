from django.db import models
from django.contrib.auth.models import User
from mainApp.models import ProductModel

class OrderModel(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    ordered = models.BooleanField(blank=False, null=False)
    dataOrdered = models.DateTimeField(auto_now=False, auto_now_add=True)

    def __str__(self):
        return str(self.id) + " - " + self.user.username

    @property
    def order_total(self):
        items = self.orderItem.all()
        total = sum(item.item_total for item in items)
        return round(total, 2)
    
class OrderItemModel(models.Model):
    quantity = models.IntegerField(default=0, null=True, blank=True)
    order = models.ForeignKey(OrderModel, related_name='orderItem', null=True, blank=True, on_delete=models.CASCADE)
    product = models.ForeignKey(ProductModel, related_name='product', on_delete=models.CASCADE, blank=False, null=True)

    def __str__(self):
        return "Order " + str(self.order.id) + ", " + str(self.product.title)
    
    @property
    def item_total(self):
        if self.product.discountPrice:
            value = float(self.product.discountPrice) * float(self.quantity)
            return round(value, 2)
        else:
            value = float(self.product.normalPrice) * float(self.quantity)
            return round(value, 2)
        
class ShippingAddressModel(models.Model):
    name = models.CharField(max_length=150, blank=False, null=True)
    lastName = models.CharField(max_length=150, blank=False, null=True)
    address = models.CharField(max_length=200, blank=False, null=True)
    city = models.CharField(max_length=200, blank=False, null=True)
    zipcode = models.CharField(max_length=200, blank=False, null=True)
    order = models.ForeignKey(OrderModel, null=True, blank=True, related_name='shippingAddress', on_delete=models.CASCADE)
   
    def __str__(self):
        return str(self.name) + " " + str(self.lastName)