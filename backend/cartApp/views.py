from .serializers import *
from .models import *
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
import stripe
from decimal import Decimal
from django.conf import settings
from decimal import Decimal

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
        data['order'] = 'Your Shopping Cart is Empty'
        return Response(data, status=status.HTTP_200_OK)

    orderItemSerializer = CartOrderItemSerializer(orderItems, many = True)
    data['order'] = orderItemSerializer.data
    return Response(data, status=status.HTTP_200_OK)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def AddProduct(request, productId, quantity):
    try:
        product = ProductModel.objects.get(id = productId)
    except ProductModel.DoesNotExist:
        data = {'Error' : 'Product Does Not Exists'}
        return Response(data)

    user = request.user
    order, created = OrderModel.objects.get_or_create(user=user, ordered=False) 

    orderItem, created = OrderItemModel.objects.get_or_create(product=product, order=order)
    orderItem.quantity = (orderItem.quantity + quantity)
    orderItem.save()

    data = {'Response' : 'Product Added Successfully'}
    return Response(data, status=status.HTTP_201_CREATED)
       
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def RemoveProduct(request, orderItemId):
    try:
        orderItem = OrderItemModel.objects.get(id = orderItemId)
    except OrderItemModel.DoesNotExist:
        data = {'Error' : 'OrderItem Does Not Exists'}
        return Response(data)

    orderItem.quantity = (orderItem.quantity - 1)
    orderItem.save()

    if orderItem.quantity <= 0:
        orderItem.delete()

    data = {'Response' : 'Product Deleted Succesfully'}
    return Response(data, status=status.HTTP_200_OK)

@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def RemoveOrder(request, orderId):
    try:
        orderItem = OrderModel.objects.get(id = orderId)
    except OrderItemModel.DoesNotExist:
        data = {'Error' : 'OrderItem Does Not Exists'}
        return Response(data)

    orderItem.delete()
    orderItem.save()

    data = {'Response' : 'Order Deleted Succesfully'}
    return Response(data, status=status.HTTP_200_OK)

@permission_classes([IsAuthenticated])
@api_view(['GET'])
def ShippingAddressScreen(request):
    data = {
        'ShippingInfo' : None,
        'order' : None,
    }

    user = request.user
    order, created = OrderModel.objects.get_or_create(user = user, ordered = False)
    orderItems = OrderItemModel.objects.filter(order = order)

    try:
        shippingInfo = ShippingAddressModel.objects.get(order = order)
        shippingInfoSerializer = CartShippingAddressSerializer(shippingInfo, many = False)
        data['ShippingInfo'] = shippingInfoSerializer.data
    except ShippingAddressModel.DoesNotExist:
        data['ShippingInfo'] = 'No Shipping Info'

    if not orderItems.exists():
        data = {'Response' : 'Your Shopping Cart is Empty'}
        return Response(data, status=status.HTTP_200_OK)

    orderItemSerializer = CartOrderItemSerializer(orderItems, many = True)
    data['order'] = orderItemSerializer.data
    return Response(data, status=status.HTTP_200_OK)

@permission_classes([IsAuthenticated])
@api_view(['POST'])
def AddShippingAddress(request):
    shippingSerializer = CartShippingAddressSerializer(data = request.data)
    if shippingSerializer.is_valid():
        shippingSerializer.save()
        data = {'Response' : 'Shipping Address Added Succesfully'}
        return Response(data, status=status.HTTP_201_CREATED)
    else:
        data = {'Error' : 'Shipping Address Is Not Valid'}
        return Response(data, status=status.HTTP_200_OK)
    
@permission_classes([IsAuthenticated])
@api_view(['PUT'])
def EditShippingAddress(request, orderId):
    try:
        shippingInfo = ShippingAddressModel.objects.get(order = orderId)
    except ShippingAddressModel.DoesNotExist:
        data = {'Response' : 'This shipping info does not exists'}
        return Response(data, status=status.HTTP_200_OK)

    shippingSerializer = CartShippingAddressSerializer(data = request.data, instance = shippingInfo)
    
    if shippingSerializer.is_valid():
        shippingSerializer.save()
        data = {'Response' : 'Shipping Address Added Succesfully'}
        return Response(data, status=status.HTTP_201_CREATED)
    else:
        data = {'Error' : 'Shipping Address Is Not Valid'}
        return Response(data, status=status.HTTP_200_OK)
    
@permission_classes([IsAuthenticated])
@api_view(['GET'])
def PaymentPage(request):
    data = {
        'ShippingInfo' : None,
        'order' : None
    }
    
    user = request.user
    order, created = OrderModel.objects.get_or_create(user = user, ordered = False)
    orderItems = OrderItemModel.objects.filter(order = order)

    try:
        shippingInfo = ShippingAddressModel.objects.get(order = order)
        shippingInfoSerializer = CartShippingAddressSerializer(shippingInfo, many = False)
        data['ShippingInfo'] = shippingInfoSerializer.data
    except ShippingAddressModel.DoesNotExist:
        data['ShippingInfo'] = 'No Shipping Info'

    if not orderItems.exists():
        data = {'Response' : 'Your Shopping Cart is Empty'}
        return Response(data, status=status.HTTP_200_OK)

    orderItemSerializer = CartOrderItemSerializer(orderItems, many = True)
    data['order'] = orderItemSerializer.data
    return Response(data, status=status.HTTP_200_OK)

@permission_classes([IsAuthenticated])
@api_view(['GET'])
def OrderInfo(request, orderId):
    data = {
        'ShippingInfo' : None,
        'order' : None
    }

    user = request.user
    order = OrderModel.objects.get(user = user, ordered = True, id = orderId)
    orderItems = OrderItemModel.objects.filter(order = order)

    try:
        shippingInfo = ShippingAddressModel.objects.get(order = order)
        shippingInfoSerializer = CartShippingAddressSerializer(shippingInfo, many = False)
        data['ShippingInfo'] = shippingInfoSerializer.data
    except ShippingAddressModel.DoesNotExist:
        data['ShippingInfo'] = 'No Shipping Info'

    if not orderItems.exists():
        data = {'Response' : 'Your Shopping Cart is Empty'}
        return Response(data, status=status.HTTP_200_OK)

    orderItemSerializer = CartOrderItemSerializer(orderItems, many = True)
    data['order'] = orderItemSerializer.data
    return Response(data, status=status.HTTP_200_OK)

@permission_classes([IsAuthenticated])
@api_view(['POST'])
def StripeCheckout(request):  
    stripe.api_key = settings.STRIPE_SECERT_KEY
    try:
        try:
            paymentIntent = stripe.PaymentIntent.create(
                amount = int(Decimal(request.data['price']) * 100), 
                currency = 'usd', 
                payment_method_types = ['card'],
                receipt_email = request.data['email'],
            )
            return Response(status=status.HTTP_200_OK, data=paymentIntent.client_secret)
        except:
            return Response(status=status.HTTP_200_OK, data={'Error' : 'Error while creating payment intent'})
    except Exception as e:
        print(e)
        return Response({'error' : 'Something wet wrong when creating stripe checkout session'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    
@permission_classes([IsAuthenticated])
@api_view(['GET'])
def ConfirmOrder(request, orderId):
    data = {
        'order' : None,
    }
    try:
        user = request.user
        order = OrderModel.objects.get(user = user, id = orderId)
        order.ordered = True
        order.save()
        orderSerializer = CartOrderSerializer(order, many = False)
        data['order'] = orderSerializer.data

        return Response(data, status=status.HTTP_200_OK)
    except:
        return Response({'order' : 'No order'}, status=status.HTTP_200_OK)

   