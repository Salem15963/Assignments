from django.shortcuts import render, redirect
import random
from time import strftime, localtime

def index(request):
    request.session['get_random1'] = random.randint(10, 20)
    request.session['get_random2'] = random.randint(-50, 50)

    print("my random number is:", request.session['get_random1'])
    print("my random number is:", request.session['get_random2'])

    return render(request, 'index.html')


def gold_counter(request):
    time = strftime("%Y-%m-%d %H:%M %p", localtime())
    final = request.session.get('gold_counter',0)
    find_gold123 = request.session.get('get_random1')
    find_gold4 = request.session.get('get_random2')

    if 'find_gold1' in request.POST:
        request.session['gold_counter'] = final + find_gold123
        log = (f'You have entered a Farm and earned {find_gold123} gold. ({time})')

    if 'find_gold2' in request.POST:
        request.session['gold_counter'] = final + find_gold123
        log = (f"You have entered a Cave and earned {find_gold123} gold. ({time})")
        

    if 'find_gold3' in request.POST:
        request.session['gold_counter'] = final + find_gold123
        log = (f"You have entered a House and earned {find_gold123} gold. ({time})")
        

    if 'find_gold4' in request.POST:
        request.session['gold_counter'] = final + find_gold4
        log = (f"You have entered a Quest and earned {find_gold4} gold. ({time})")
    
    request.session['activities'] = [log, request.session.get('activities')]
    
    return redirect('/')


def retry(request):
    del request.session['gold_counter']
    del request.session['activities']
    return redirect('/')