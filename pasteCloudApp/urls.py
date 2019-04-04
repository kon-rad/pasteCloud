from django.urls import path
from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^', views.ReactAppView.as_view()),
    path('<str:user_name>/', views.user, name='user'),
    path('<str:user_name>/<str:post_name>/', views.post, name='post'),
]