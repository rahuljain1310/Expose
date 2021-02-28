import json
import datetime
from django.db import IntegrityError
from django.contrib.auth.models import User
from django.views.decorators.http import require_POST, require_GET
from django.http import HttpResponse, HttpResponseBadRequest
from rest_framework.decorators import permission_classes, authentication_classes
from rest_framework_jwt.authentication import JSONWebTokenAuthentication
from .models import Profile

# Create your views here.

@require_POST
def register_view(request):
    try:
        request_data = json.loads(request.body)
        new_user = User.objects.create_user(
            username=request_data["username"],
            password=request_data["password"],
            email=request_data["email"],
            first_name=request_data["first_name"],
            last_name=request_data["last_name"])
        profile_user = Profile(
            user=new_user,
            sex=request_data["sex"]["value"],
            dob=datetime.datetime.strptime(request_data["dob"], '%d-%m-%Y').date(),)
        profile_user.save()
    except IntegrityError as execption:
        print(str(execption))
        return HttpResponseBadRequest("User Already Exists With Same ID")
    except Exception as exception:
        print(str(exception))
        return HttpResponseBadRequest("Failed to create user: Try Again")
    
    return HttpResponse("User Created")