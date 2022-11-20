from django.shortcuts import render, redirect
from app_one.models import Dojo, Ninja

def index(request):
    context = {
    "dojos": Dojo.objects.all(), #models.find_dojo()
    "ninjas": Ninja.objects.all(),
    }
    return render(request, "index.html", context)

def add_dojo(request):
    Dojo.objects.create(
        name=request.POST["name"],
        city=request.POST["city"],
        state=request.POST["state"],
    )
    return redirect("/") #redrect localhost:8000

def add_ninja(request):
    Ninja.objects.create(
        first_name=request.POST["firstname"],
        last_name=request.POST["lastname"],
        Dojo=Dojo.objects.get(id=request.POST["select"]),
    )
    print(request.POST["select"])
    return redirect("/")

