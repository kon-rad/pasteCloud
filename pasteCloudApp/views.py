from django.http import HttpResponse
from django.views.generic import View
from rest_framework import status
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.conf import settings
from rest_framework.decorators import api_view
from django.views.decorators.csrf import csrf_exempt
import os


@api_view(['POST'])
@csrf_exempt
def pasteApi(request):
    print('got post')

def index(request):
    return HttpResponse("Hello, world. You're at the index.")

def user(request, user_name):
    return HttpResponse("You're looking at user %s." % user_name)

def post(request, user_name, post_name):
    response = "You're looking at post_name %s by user_name"
    return HttpResponse(response % post_name)

class ReactAppView(View):

    def get(self, request):
        try:
            with open(os.path.join(settings.REACT_APP, 'build', 'index.html')) as file:
                return HttpResponse(file.read())

        except :
            return HttpResponse(
                """
                This page is currently unavailable. Please try again later.
                """,
                status=501,
            )
