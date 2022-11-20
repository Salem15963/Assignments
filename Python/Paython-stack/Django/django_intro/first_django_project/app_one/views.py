
from django.shortcuts import render, HttpResponse, redirect
from django.http import JsonResponse


def root(request):
    return redirect("/blogs")

def index(request):
    return HttpResponse ("placeholder to later display a list of all blogs")

def new(request):
    return HttpResponse ("String response from root_method")

def create(request):
    return redirect ("/")

def show(request,number):
    return HttpResponse ("placeholder to display blog number:"+ number)

def edit(request,number):
    return HttpResponse ("placeholder to edit blog number:"+ number)

def destroy(request):
    return redirect ("/blogs")