
from django.urls import path     
from . import views

urlpatterns = [
    path('', views.index),
    path('collect/', views.gold_counter),
    path('retry/', views.reset),
]