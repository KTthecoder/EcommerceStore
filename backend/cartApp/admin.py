from django.contrib import admin
from .models import *

# Register your models here.
admin.site.register(OrderModel)
admin.site.register(OrderItemModel)
admin.site.register(ShippingAddressModel)