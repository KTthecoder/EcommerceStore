"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.conf.urls.static import static
from django.conf import settings
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from accountApp.views import *
from categoriesApp.views import *
from mainApp.views import *
from cartApp.views import *

urlpatterns = [
    path('admin/', admin.site.urls),

    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
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
    path('api/products/<str:search>', FoundProducts, name='FoundProducts'),
    path('api/product/<slug:slug>', ProductDetails, name='ProductDetails'),

    #cartApp
    path('api/cart', CartPage, name='CartPage'),
    path('api/cart/add/<int:productId>/<int:quantity>', AddProduct, name='AddProduct'),
    path('api/cart/remove/<int:orderItemId>', RemoveProduct, name='RemoveProduct'),
    path('api/shipping-address', ShippingAddressScreen, name='ShippingAddressScreen'),
    path('api/shipping-address/add', AddShippingAddress, name='AddShippingAddress'),
    path('api/shipping-address/edit/<int:orderId>', EditShippingAddress, name='EditShippingAddress'),
    path('api/order/remove/<int:orderId>', RemoveOrder, name='RemoveOrder'),

    path('api/payment', PaymentPage, name='PaymentPage'),
]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
