from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('<str:user_name>/', views.user, name='user'),
    path('<str:user_name>/<str:post_name>/', views.post, name='post'),
]