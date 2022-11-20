from django.urls import path     
from . import views

urlpatterns = [
    path('', views.index),
    path('register.php/', views.register),
    path('login/', views.login),
    path('success/', views.success),

]
