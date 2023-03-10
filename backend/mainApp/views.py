from .serializers import *
from .models import *
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from categoriesApp.models import ProductCategories
from categoriesApp.serializers import HomeCategoriesSerializer
import random

# All Sections on HomePage
@api_view(['GET'])
def HomePage(request):
    data = {
        'banners' : None,
        'categories' : None,
        'newestProducts' : None,
        'technologyProducts' : None,
        'clothesProducts' : None,
        'sportProducts' : None,
        'bestsellersProducts' : None,
    }

    banners = BannersModel.objects.all()
    categories = ProductCategories.objects.all()
    newestProducts = ProductModel.objects.all().order_by('-id')[:10]
    bestsellersProducts = ProductModel.objects.all().order_by('boughtBy')[:10]

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
    
    try:
        sportProducts = ProductCategories.objects.get(name = 'Sport')
    except ProductCategories.DoesNotExist:
        data = {'Response' : 'This category does not exists'}
        return Response(data, status=status.HTTP_200_OK)

    if not banners.exists():
        data = {'Response' : 'No Banners'}
        return Response(data, status=status.HTTP_200_OK)
    
    if not categories.exists():
        data = {'Response' : 'No Categories'}
        return Response(data, status=status.HTTP_200_OK)
    
    if not newestProducts.exists():
        data = {'Response' : 'No Products'}
        return Response(data, status=status.HTTP_200_OK)

    bannersSerializer = HomeBannerSerializer(banners, many = True)
    categoriesSerializer = HomeCategoriesSerializer(categories, many = True)
    newestProductsSerializer = HomeProductSerializer(newestProducts, many = True)
    bestsellersProductsSerializer = HomeProductSerializer(bestsellersProducts, many = True)
    technolgyProductsSerializer = HomeCategoriesProductSerializer(technologyProducts, many = False)
    clothesProductsSerializer = HomeCategoriesProductSerializer(clothesProducts, many = False)
    sportProductsSerializer = HomeCategoriesProductSerializer(sportProducts, many = False)

    data['banners'] = bannersSerializer.data
    data['categories'] = categoriesSerializer.data
    data['technologyProducts'] = technolgyProductsSerializer.data
    data['clothesProducts'] = clothesProductsSerializer.data
    data['sportProducts'] = sportProductsSerializer.data
    data['newestProducts'] = newestProductsSerializer.data
    data['bestsellersProducts'] = bestsellersProductsSerializer.data

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

@api_view(['GET'])
def BestsellersProducts(request):
    data = {
        'categories' : None,
        'categoryProducts' : None,
    }

    categories = ProductCategories.objects.all()
    bestsellersProducts = ProductModel.objects.all().order_by('boughtBy')[:10]

    if not categories.exists():
        data = {'Response' : 'No Categories'}
        return Response(data, status=status.HTTP_200_OK)

    # try:
    #     categoryProducts = ProductModel.objects.get(slug = slug)
    # except ProductCategories.DoesNotExist:
    #     data = {'Response' : 'This category does not exists'}
    #     return Response(data, status=status.HTTP_200_OK)
    
    categoriesSerializer = HomeCategoriesSerializer(categories, many = True)
    bestsellersProductsSerializer = HomeProductSerializer(bestsellersProducts, many = True)
    # clothesProductsSerializer = ProductsByCategoriesSerializer(categoryProducts, many = False)
    
    data['categories'] = categoriesSerializer.data
    data['categoryProducts'] = bestsellersProductsSerializer.data

    return Response(data, status=status.HTTP_200_OK)

# Products found using searchbar
@api_view(['GET'])
def FoundProducts(request, search):
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

# Products Details Screen
@api_view(['GET'])
def ProductDetails(request, slug):
    data = {
        'sliderImages' : None,
        'product' : None,
        'seeAlso' : None
    }

    try:
        product = ProductModel.objects.get(slug = slug)
    except ProductModel.DoesNotExist:
        data = {'Response' : 'Product does not exists'}
        return Response(data, status=status.HTTP_200_OK)
    
    sliderImages = ProductImagesModel.objects.filter(product = product.id)

    productSerializer = DetailsProductsSerializer(product, many = False)

    if not sliderImages.exists:
        data['sliderImages'] = 'No Images'
    else:
        sliderImagesSerializer = DetailsSliderImagesSerializer(sliderImages, many = True)
        data['sliderImages'] = sliderImagesSerializer.data

    data['product'] = productSerializer.data

    seeAlsoList = list(ProductModel.objects.all())
    # Change to 10 after fill data
    seeAlso = random.sample(seeAlsoList, 8)

    seeAlsoSerializer = HomeProductsSerializer(seeAlso, many = True)
    data['seeAlso'] = seeAlsoSerializer.data

    return Response(data, status=status.HTTP_200_OK)

@api_view(['GET'])
def ProductsByStore(request, slug):
    data = {
        'store' : None,
        'storeProducts' : None,
    }

    try:
        store = StoreModel.objects.get(slug = slug)
    except: 
        data['store'] = 'Store not exists'

    try:
        storeProducts = ProductModel.objects.filter(store = store.id)
    except ProductCategories.DoesNotExist:
        data['storeProducts'] = 'Store has no products'
        return Response(data, status=status.HTTP_200_OK)
    
    storeSerializer = StoreModelSerializer(store, many = False)
    storeProductsSerializer = HomeProductsSerializer(storeProducts, many = True)
    
    data['store'] = storeSerializer.data
    data['storeProducts'] = storeProductsSerializer.data

    return Response(data, status=status.HTTP_200_OK)