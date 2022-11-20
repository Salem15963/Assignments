from contextlib import redirect_stderr
from django.shortcuts import render, redirect

def count(request):
    if 'Counter' not in  request.session:
        request.session['Counter'] = 0
    request.session['Counter'] += 1
    return render(request,'index.html')

def destroy(request):
    del request.session['Counter']
    return redirect('/')