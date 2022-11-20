from django.shortcuts import render, redirect

def index(request):

    return render (request, 'index.html')


def submitted_info(request):
    request.session['name']=request.POST['name']
    request.session['location']=request.POST['location']
    request.session['language']=request.POST['language']
    request.session['comment']=request.POST['comment']

    return render(request, 'display.html')


