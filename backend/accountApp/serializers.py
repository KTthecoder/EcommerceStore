from rest_framework import serializers
from django.contrib.auth.models import User
from .models import FavoriteProducts
from cartApp.models import OrderModel

class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'email', 'password']

class FavoriteProductSerializer(serializers.ModelSerializer):
    frontImg = serializers.SerializerMethodField('get_frontImg')
    frontImgAlt = serializers.SerializerMethodField('get_frontImgAlt')
    title = serializers.SerializerMethodField('get_title')
    normalPrice = serializers.SerializerMethodField('get_normalPrice')
    discountPrice = serializers.SerializerMethodField('get_discountPrice')
    shortDescription = serializers.SerializerMethodField('get_shortDescription')
    slug = serializers.SerializerMethodField('get_slug') 
    userId = serializers.SerializerMethodField('get_userId') 
    username = serializers.SerializerMethodField('get_username') 
    productId = serializers.SerializerMethodField('get_productId') 

    class Meta:
        model = FavoriteProducts
        fields = ['id', 'frontImg', 'frontImgAlt', 'title', 
        'normalPrice', 'discountPrice', 'shortDescription', 'slug', 'userId', 'username', 'productId']
    
    def get_frontImg(self, favorite):
        return favorite.product.frontImg.url
    
    def get_frontImgAlt(self, favorite):
        return favorite.product.frontImgAlt

    def get_title(self, favorite):
        return favorite.product.title
    
    def get_normalPrice(self, favorite):
        return favorite.product.normalPrice
    
    def get_discountPrice(self, favorite):
        return favorite.product.discountPrice
    
    def get_shortDescription(self, favorite):
        return favorite.product.shortDescription
    
    def get_slug(self, favorite):
        return favorite.product.slug
    
    def get_userId(self, favorite):
        return favorite.user.id
    
    def get_username(self, favorite):
        return favorite.user.username
    
    def get_productId(self, favorite):
        return favorite.product.id
    
class ActionFavoriteSerializer(serializers.ModelSerializer):
    class Meta:
        model = FavoriteProducts
        fields = '__all__'

