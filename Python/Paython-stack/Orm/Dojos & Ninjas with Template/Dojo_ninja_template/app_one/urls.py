from django.urls import path   
from . import views

urlpatterns = [
    path('', views.index),#localhost:8000/
    path('add_dojo', views.add_dojo),#localhost:8000/add_dojo
    path('add_ninja/', views.add_ninja),#localhost:8000/add_ninja
]
