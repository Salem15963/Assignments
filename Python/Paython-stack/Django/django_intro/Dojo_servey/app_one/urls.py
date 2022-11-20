from django.urls import path   
from . import views

urlpatterns = [
    path('', views.index),
    path('submitted_info/', views.submitted_info),
]
