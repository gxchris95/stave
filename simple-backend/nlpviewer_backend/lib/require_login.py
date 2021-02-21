from django.http import HttpResponse
from django.forms import model_to_dict
from ..models import User
<<<<<<< HEAD
from django.contrib.auth import authenticate
=======
>>>>>>> 6fe7a7deb55bd77f5f91c4e387bc7ec9e2da9486


def require_login(func):
    def wrapper(*args, **kwargs):
        request = args[0]
<<<<<<< HEAD
        if not request.user.is_authenticated:
            return HttpResponse('unauthenticated', status=401)
=======

        try:
            userJson = model_to_dict(
                User.objects.get(pk=request.session['user_id']))
        except:
            return HttpResponse('no access', status=401)

>>>>>>> 6fe7a7deb55bd77f5f91c4e387bc7ec9e2da9486
        return func(*args, **kwargs)
    return wrapper

def require_admin(func):
<<<<<<< HEAD
    """
    accessible by superusers defined in django.
    """
    def wrapper(*args, **kwargs):
        request = args[0]
        if not request.user.is_superuser:
            return HttpResponse('forbidden', status=403)
=======
    def wrapper(*args, **kwargs):
        request = args[0]

        try:
            userJson = model_to_dict(
                User.objects.get(pk=request.session['user_id']))
        except:
            return HttpResponse('no access', status=401)

>>>>>>> 6fe7a7deb55bd77f5f91c4e387bc7ec9e2da9486
        return func(*args, **kwargs)
    return wrapper
