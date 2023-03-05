from rest_framework import serializers
from .models import *

class AllSubCategoriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductCategories
        fields = ['id', 'name', 'slug']

class AllCategoriesSerilizer(serializers.ModelSerializer):
    subcategories = AllSubCategoriesSerializer(many = True, read_only = True)
    class Meta:
        model = ProductCategories
        fields = ['id', 'name', 'slug', 'iconImg', 'iconImgAlt', 'subcategories']

