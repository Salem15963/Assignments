from django.shortcuts import render, redirect
from . models import  User
from django.contrib import messages
import bcrypt

def index(request):
    print('its working!!')
    context = {
        'users' : User.objects.all(),
    }
    return render(request, 'login.html', context)

def register(request):

    password_from_form = request.POST['password']
    pw_hash = bcrypt.hashpw(password_from_form.encode(), bcrypt.gensalt()).decode()
    print("this is the password", pw_hash)
    errors = User.objects.basic_validator(request.POST)

    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        return redirect('/')

    else:
        User.objects.create(
            first_name = request.POST['first_name'], 
            last_name = request.POST['last_name'],
            birthday = request.POST['birthday'],
            email = request.POST['email'],
            password = pw_hash
        )
        return redirect('/success')

# def register(request):
#     print('its working!!')
#     User.objects.create(
#         first_name = request.POST['first_name'],
#         last_name = request.POST['last_name'],
#         email = request.POST['email'],
#         birthday = request.POST['birthday'],
#         password = request.POST['password'],
#     )

        # user = User.objects.filter(email=request.POST['email'])
        # if user:
        #     logged_user = user[0]
        #     request.session['user_first_name'] = logged_user.first_name
        #     request.session['userid'] = logged_user.id
        #     request.session['status'] = "Registered"
#     return redirect('/')

def login(request):
    print('its working!!')
    user = User.objects.filter(email = request.POST['email'])
    if user[0].password == request.POST['password']:
        request.session['id1']=user[0].first_name
        return redirect('/success')
    else:
        return redirect('/')
    

def success(request):
    context={
        'user_name': request.session['id1'],
    }
    return render(request, 'success.html',context)

    
def delete(request):

    del request.session['user_first_name']
    del request.session['userid']

    return redirect('/')
