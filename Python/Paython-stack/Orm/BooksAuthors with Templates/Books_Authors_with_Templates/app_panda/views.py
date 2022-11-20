from django.shortcuts import render, redirect
from app_panda.models import Book, Publisher

def index(request):
    context = {
    "book": Book.objects.all(), 
    "publisher": Publisher.objects.all(),
    }
    return render(request, "index.html", context)


def author(request):
    Publisher.objects.create(
        id=request.POST["id"],
        name=request.POST["name"],
        view=request.POST["view"],
    )
    return redirect("/author")