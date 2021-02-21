from django.contrib import admin
from django.urls import include, path
from django.http import HttpResponse, JsonResponse
from django.forms import model_to_dict
<<<<<<< HEAD
from django.contrib import auth
=======
>>>>>>> 6fe7a7deb55bd77f5f91c4e387bc7ec9e2da9486
import json
from ..models import User


def login(request):
    received_json_data = json.loads(request.body)
<<<<<<< HEAD
    username = received_json_data.get('name')
    password = received_json_data.get('password')

    user = auth.authenticate(username=username, password=password)
    if user:
        auth.login(request, user=user)
        return HttpResponse("OK")
    else:
        return HttpResponse("authentication failed", status=401)


def logout(request):
    auth.logout(request)
=======
    name = received_json_data.get('name')
    password = received_json_data.get('password')

    try:
        user = User.objects.get(name=name, password=password)
        request.session['user_id'] = user.id
        return HttpResponse("OK")
    except:
        return HttpResponse("Failed", status=400)


def logout(request):
    try:
        del request.session['user_id']
    except:
        1  # do nothing

>>>>>>> 6fe7a7deb55bd77f5f91c4e387bc7ec9e2da9486
    return HttpResponse("OK")

def signup(request):
    received_json_data = json.loads(request.body)
    new_name = received_json_data.get('name')
    new_password = received_json_data.get('password')
