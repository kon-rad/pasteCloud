from django.http import HttpResponse
from django.views.generic import View
from rest_framework import status
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.conf import settings
from rest_framework.decorators import api_view
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.csrf import csrf_exempt
import os
from pasteCloudApp.models import Paste
from pasteCloudApp.serializers import PasteSerializer
from rest_framework import generics

# @api_view(['POST'])
# @csrf_exempt
# def pasteApi(request):
#     print('got post')

# def index(request):
#     return HttpResponse("Hello, world. You're at the index.")

def user(request, user_name):
    return HttpResponse("You're looking at user %s." % user_name)

def post(request, user_name, post_name):
    response = "You're looking at post_name %s by user_name"
    return HttpResponse(response % post_name)

class PasteListCreate(generics.ListCreateAPIView):
    queryset = Paste.objects.all()
    serializer_class = PasteSerializer

class ReactAppView(View):

    def get(self, request):
        try:
            print(os.path.join(settings.REACT_APP, 'build', 'index.html'))
            
            with open(os.path.join(settings.REACT_APP, 'build', 'index.html')) as file:
                return HttpResponse(file.read())

        except :
            return HttpResponse(
                """
                This page is currently unavailable. Please try again later. React needs to build.
                """,
                status=501,
            )
