from rest_framework import serializers
from .models import *
from categoriesApp.serializers import AllCategoriesSerilizer

class HomeBannerSerializer(serializers.ModelSerializer):
    class Meta:
        model = BannersModel
        fields = ['id', 'frontImg', 'frontImgAlt', 'slug']

class HomeProductsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductModel
        fields = ['id', 'frontImg', 'frontImgAlt', 'title', 'normalPrice', 'discountPrice', 'rating', 'slug', 'boughtBy']

class HomeCategoriesProductSerializer(serializers.ModelSerializer):
    products = HomeProductsSerializer(many = True, read_only = True)
    class Meta:
        model = ProductCategories
        fields = ['id', 'name', 'slug', 'products']

class ProductsByCategoriesSerializer(serializers.ModelSerializer):
    products = HomeProductsSerializer(many = True, read_only = True)
    class Meta:
        model = ProductCategories
        fields = ['id', 'frontImg', 'frontImgAlt', 'name', 'products']

class DetailsSliderImagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductImagesModel
        fields = ['id', 'image', 'imageAlt']

class HomeProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductModel
        fields = '__all__'

class StoreModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = StoreModel
        fields = ['id', 'name', 'user', 'slug', 'storeBanner', 'storeBannerAlt']

class DetailsProductsSerializer(serializers.ModelSerializer):
    store = StoreModelSerializer(read_only = True)
    class Meta:
        model = ProductModel
        fields = ['id', 'frontImg', 'frontImgAlt', 'title', 'normalPrice', 'discountPrice', 'rating', 'description', 'slug', 'boughtBy', 'store']