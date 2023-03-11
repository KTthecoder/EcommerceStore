from .models import *
from .serializers import *
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from cartApp.models import OrderModel
from cartApp.serializers import CartOrderSerializer

# Create your views here.
@api_view(['POST'])
def RegisterPage(request):
    if request.method == "POST":
        account = AccountSerializer(data = request.data, context={'user': request.user})
        if account.is_valid():
            data = {}
            username = account.data["username"]
            password = account.data["password"]
            email = account.data["email"]

            user = User.objects.create_user(username, email, password)
            user.save()
            data = {'Response' : 'User created Succesfully'}
            return Response(data)
        else:
            data = {'Response' : 'Username or email is already taken!'} 
            return Response(data)
    else:
        data = {'Error' : 'Bad Request'}
        return Response(data, status=status.HTTP_400_BAD_REQUEST)
    
@permission_classes([IsAuthenticated])
@api_view(['GET'])
def AllFavoriteProducts(request):
    data = {
        'favoriteProducts' : None
    }

    favoriteProducts = FavoriteProducts.objects.filter(user = request.user)

    if not favoriteProducts.exists():
        data['favoriteProducts'] = 'No Favorite Products'
        return Response(data, status=status.HTTP_200_OK)
    else:
        favoriteProductsSerailizer = FavoriteProductSerializer(favoriteProducts, many = True)
        data['favoriteProducts'] = favoriteProductsSerailizer.data
        return Response(data, status=status.HTTP_200_OK)
    
@permission_classes([IsAuthenticated])
@api_view(['POST'])
def AddFavoriteProducts(request):
    favoriteSerializer = ActionFavoriteSerializer(data = request.data)
    if favoriteSerializer.is_valid():
        favoriteSerializer.save()
        data = {'Response' : 'Product Added To Favorite'}
        return Response(data, status=status.HTTP_201_CREATED)
    else:
        data = {'Response' : 'Error While Adding To Favorite'}
        return Response(data, status=status.HTTP_200_OK)
        
@permission_classes([IsAuthenticated])
@api_view(['DELETE'])
def DeleteFavoriteProducts(request, productId):
    try:
        favorite = FavoriteProducts.objects.get(user = 1, product = productId)
        favorite.delete()

        data = {'Response' : 'Product Deleted From Favorite Successfully'}
        return Response(data, status=status.HTTP_200_OK)
    except FavoriteProducts.DoesNotExist:
        data = {'Response' : 'Product does not exists'}
        return Response(data, status=status.HTTP_200_OK)
    
@permission_classes([IsAuthenticated])
@api_view(['GET'])
def MyOrders(request):
    data = {
        'orders' : None
    }

    orders = OrderModel.objects.filter(user = request.user, ordered = True).order_by('-id')

    if not orders.exists():
        data['orders'] = 'No Orders'
        return Response(data, status=status.HTTP_200_OK)
    else:
        ordersSerializer = CartOrderSerializer(orders, many = True)
        data['orders'] = ordersSerializer.data
        return Response(data, status=status.HTTP_200_OK)  

    