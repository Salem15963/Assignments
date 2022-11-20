from django.shortcuts import render, redirect
from . models import User
from app_books.models import Book

def index(request):
    print('its working!!')
    context = {
        'users' : User.objects.all(),
        'books' : Book.objects.all()
    }
    return render(request, 'login.html', context)

def register(request):
    print('its working!!')

    User.objects.create(
        first_name = request.POST['first_name'],
        last_name = request.POST['last_name'],
        email = request.POST['email'],
        birthday = request.POST['birthday'],
        password = request.POST['password'],
    )
    return redirect('/')

def login(request):
    print('its working!!')
    user = User.objects.get(email = request.POST['email'])
    if user.password == request.POST['password']:
        return redirect ('/books')
    else:
        return redirect('/')