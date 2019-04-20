from django.urls import path
from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^api/paste/$', views.pastes_list),
    url(r'^api/paste/(?P<pk>[0-9]+)$', views.pastes_detail),
    url(r'^', views.ReactAppView.as_view()),
]