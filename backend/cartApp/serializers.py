from rest_framework import serializers
from .models import *
from mainApp.serializers import StoreModelSerializer

class CartOrderSerializer(serializers.ModelSerializer):
    order_total = serializers.SerializerMethodField('get_order_total')
    username = serializers.SerializerMethodField('get_username')
    
    class Meta:
        model = OrderModel
        fields = ['id', 'user', 'username', 'ordered', 'dataOrdered', 'order_total']

    def get_order_total(self, order):
        return order.order_total
    
    def get_username(self, order):
        return order.user.username
    
class CartProductsSerializer(serializers.ModelSerializer):
    store = StoreModelSerializer(many = False, read_only = True)
    class Meta:
        model = ProductModel
        fields = ['id', 'frontImg', 'frontImgAlt', 'title', 'normalPrice', 'discountPrice', 'rating', 'slug', 'boughtBy', 'shortDescription', 'store']

class CartOrderItemSerializer(serializers.ModelSerializer):
    product = CartProductsSerializer(many = False, read_only = True)
    order = CartOrderSerializer(many = False, read_only = True)
    item_total = serializers.SerializerMethodField('get_item_total')

    class Meta:
        model = OrderItemModel
        fields = ['id', 'quantity', 'order', 'product', 'item_total']

    def get_item_total(self, orderItem):
        return orderItem.item_total
    
class CartShippingAddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShippingAddressModel
        fields = '__all__'
