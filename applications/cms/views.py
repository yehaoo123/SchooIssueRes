from django.shortcuts import render
from django.shortcuts import HttpResponse

# Create your views here.

def homepage_demo(request):
    return HttpResponse("这是一个首页~")



