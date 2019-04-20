from django.http import HttpResponse
from django.views.generic import View
from rest_framework import status
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.conf import settings
from rest_framework.decorators import api_view
from pasteCloudApp.models import Paste
from pasteCloudApp.serializers import PasteSerializer
from rest_framework import generics
from rest_framework.response import Response
import os

@api_view(['GET', 'PUT', 'DELETE'])
def pastes_detail(request, pk):
    """
    Retrieve, update or delete a paste by id/pk. (pk = primary key)
    """
    
    try:
        paste = Paste.objects.get(pk=pk)
    except paste.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = PasteSerializer(paste, context={'request': request})
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = PasteSerializer(paste, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        paste.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['GET', 'POST'])
def pastes_list(request):
    """
    List  Pastes, or create a new Paste.
    """
    if request.method == 'GET':
        pastes = Paste.objects.all()
        serializer = PasteSerializer(pastes,context={'request': request} ,many=True)
        return Response({'data': serializer.data})


    elif request.method == 'POST':
        serializer = PasteSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ReactAppView(View):

    def get(self, request):
        try:
            
            with open(os.path.join(settings.REACT_APP, 'build', 'index.html')) as file:
                return HttpResponse(file.read())

        except :
            return HttpResponse(
                """
                This page is currently unavailable. Please try again later. React needs to build.
                """,
                status=501,
            )
