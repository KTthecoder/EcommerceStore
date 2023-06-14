from .serializers import *
from .models import *
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

# Show list of all categories with sub-categories on localhost:3000/all-categories
@api_view(['GET'])
def AllCategories(request):
    data = {
        'categories' : None
    }

    categories = ProductCategories.objects.all()

    if not categories.exists():
        data = {'Response' : 'No categories'}
        return Response(data, status=status.HTTP_200_OK)
    
    categoriesSerializer = AllCategoriesSerilizer(categories, many = True)
    data['categories'] = categoriesSerializer.data
    
    return Response(data, status=status.HTTP_200_OK)