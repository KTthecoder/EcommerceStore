from .serializers import *
from .models import *
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework import status
from rest_framework.permissions import IsAuthenticated

# Create your views here.
@permission_classes([IsAuthenticated])
@api_view(['GET'])
def CartPage(request):
    data = {
        'order' : None
    }

    user = request.user
    order, created = OrderModel.objects.get_or_create(user = user, ordered = False)
    orderItems = OrderItemModel.objects.filter(order = order)

    if not orderItems.exists():
        data = {'Response' : 'Your Shopping Cart is Empty'}
        return Response(data, status=status.HTTP_200_OK)

    orderItemSerializer = CartOrderItemSerializer(orderItems, many = True)
    data['order'] = orderItemSerializer.data
    return Response(data, status=status.HTTP_200_OK)
       