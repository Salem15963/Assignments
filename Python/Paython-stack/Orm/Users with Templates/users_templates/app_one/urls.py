from django.urls import path     
from . import views

urlpatterns = [
    path('Do/', views.process),
    path('', views.index),
]
