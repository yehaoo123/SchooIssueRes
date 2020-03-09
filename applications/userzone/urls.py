"""SchooIssueRes URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.urls import path
from applications.userzone import views

urlpatterns = [
    path('login/', views.user_login),
    path('check_code/', views.check_code),
    path('logout/', views.user_logout),

    path('admin_login/', views.admin_login),
    path('admin_logout/', views.admin_logout),

    # path('admin_login/', views.admin_login),
]
