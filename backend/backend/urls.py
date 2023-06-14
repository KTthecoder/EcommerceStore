from django.contrib import admin
from django.urls import path
from django.conf.urls.static import static
from django.conf import settings
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView
)
from accountApp.views import *
from categoriesApp.views import *
from mainApp.views import *
from cartApp.views import *

urlpatterns = [
    path('admin/', admin.site.urls),

    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/token/verify/', TokenVerifyView.as_view(), name='token_verify'),
    path('api/register', RegisterPage, name='RegisterPage'),
    path('api/favorite', AllFavoriteProducts, name='AllFavoriteProducts'),
    path('api/favorite/add', AddFavoriteProducts, name='AddFavoriteProducts'),
    path('api/favorite/delete/<int:productId>', DeleteFavoriteProducts, name='DeleteFavoriteProducts'),
    path('api/orders', MyOrders, name='MyOrders'),

    #categoriesApp
    path('api/all-categories', AllCategories, name='AllCategories'),

    #mainApp
    path('api/home', HomePage, name='HomePage'),
    path('api/category/<slug:slug>', ProductsByCategory, name='ProductsByCategory'),
    path('api/bestsellers', BestsellersProducts, name='BestsellersProducts'),
    path('api/products/<str:search>', FoundProducts, name='FoundProducts'),
    path('api/product/<slug:slug>', ProductDetails, name='ProductDetails'),
    path('api/store/<slug:slug>', ProductsByStore, name='ProductsByStore'),

    #cartApp
    path('api/cart', CartPage, name='CartPage'),
    path('api/cart/add/<int:productId>/<int:quantity>', AddProduct, name='AddProduct'),
    path('api/cart/remove/<int:orderItemId>', RemoveProduct, name='RemoveProduct'),
    path('api/shipping-address', ShippingAddressScreen, name='ShippingAddressScreen'),
    path('api/shipping-address/add', AddShippingAddress, name='AddShippingAddress'),
    path('api/shipping-address/edit/<int:orderId>', EditShippingAddress, name='EditShippingAddress'),
    path('api/order/remove/<int:orderId>', RemoveOrder, name='RemoveOrder'),
    path('api/order/<int:orderId>', OrderInfo, name='OrderInfo'),
    path('api/stripe/create-checkout-session', StripeCheckout, name='StripeCheckout'),
    path('api/confirm/order/<int:orderId>', ConfirmOrder, name='ConfirmOrder'),

    path('api/payment', PaymentPage, name='PaymentPage'),
]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
