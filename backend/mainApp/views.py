from .serializers import *
from .models import *
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from categoriesApp.models import ProductCategories
from categoriesApp.serializers import HomeCategoriesSerializer

# All Sections on HomePage
@api_view(['GET'])
def HomePage(request):
    data = {
        'banners' : None,
        'categories' : None,
        'technologyProducts' : None,
        'clothesProducts' : None,
    }

    banners = BannersModel.objects.all()
    categories = ProductCategories.objects.all()

    try:
        technologyProducts = ProductCategories.objects.get(name = 'Technology')
    except ProductCategories.DoesNotExist:
        data = {'Response' : 'This category does not exists'}
        return Response(data, status=status.HTTP_200_OK)
    
    try:
        clothesProducts = ProductCategories.objects.get(name = 'Clothes')
    except ProductCategories.DoesNotExist:
        data = {'Response' : 'This category does not exists'}
        return Response(data, status=status.HTTP_200_OK)

    if not banners.exists():
        data = {'Response' : 'No Banners'}
        return Response(data, status=status.HTTP_200_OK)
    
    if not categories.exists():
        data = {'Response' : 'No Categories'}
        return Response(data, status=status.HTTP_200_OK)

    bannersSerializer = HomeBannerSerializer(banners, many = True)
    categoriesSerializer = HomeCategoriesSerializer(categories, many = True)
    technolgyProductsSerializer = HomeCategoriesProductSerializer(technologyProducts, many = False)
    clothesProductsSerializer = HomeCategoriesProductSerializer(clothesProducts, many = False)

    data['banners'] = bannersSerializer.data
    data['categories'] = categoriesSerializer.data
    data['technologyProducts'] = technolgyProductsSerializer.data
    data['clothesProducts'] = clothesProductsSerializer.data

    return Response(data, status=status.HTTP_200_OK)

# All Products in selected category
@api_view(['GET'])
def ProductsByCategory(request, slug):
    data = {
        'categories' : None,
        'categoryProducts' : None,
    }

    categories = ProductCategories.objects.all()

    if not categories.exists():
        data = {'Response' : 'No Categories'}
        return Response(data, status=status.HTTP_200_OK)

    try:
        categoryProducts = ProductCategories.objects.get(slug = slug)
    except ProductCategories.DoesNotExist:
        data = {'Response' : 'This category does not exists'}
        return Response(data, status=status.HTTP_200_OK)
    
    categoriesSerializer = HomeCategoriesSerializer(categories, many = True)
    clothesProductsSerializer = ProductsByCategoriesSerializer(categoryProducts, many = False)
    
    data['categories'] = categoriesSerializer.data
    data['categoryProducts'] = clothesProductsSerializer.data

    return Response(data, status=status.HTTP_200_OK)

# Products found using searchbar
@api_view(['GET'])
def ProductsByCategory(request, search):
    data = {
        'categories' : None,
        'foundProducts' : None,
    }

    categories = ProductCategories.objects.all()
    foundProducts = ProductModel.objects.filter(title__contains = search)

    if not categories.exists():
        data = {'Response' : 'No Categories'}
        return Response(data, status=status.HTTP_200_OK)
    
    if not foundProducts.exists():
        data['foundProducts'] = 'No Products'
        categoriesSerializer = HomeCategoriesSerializer(categories, many = True)
        data['categories'] = categoriesSerializer.data
        return Response(data, status=status.HTTP_200_OK)
    
    categoriesSerializer = HomeCategoriesSerializer(categories, many = True)
    foundProductsSerializer = HomeProductsSerializer(foundProducts, many = True)
    
    data['categories'] = categoriesSerializer.data
    data['foundProducts'] = foundProductsSerializer.data

    return Response(data, status=status.HTTP_200_OK)