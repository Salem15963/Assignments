from turtle import title
from django.shortcuts import redirect, render
from . models import Book
from app_users.models import User

def book(request):
    print("its working G!!")
    context = {
        'users' : User.objects.all(),
        'books' : Book.objects.all()
    }

    return render(request, 'book.html', context)

def register(request):
    User.objects.create(
        first_name = request.POST['first_name'],
        last_name = request.POST['last_name'],
        email = request.POST['email'],
        birthday = request.POST['birthday'],
        password = request.POST['password'],
    )
    return redirect('/')

def add_book (request):
    Book.objects.create(
        title = request.post['title'],
        description = request.post['description'],
    )
    return redirect('/')