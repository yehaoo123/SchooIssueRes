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
from applications.cms import views

urlpatterns = [
    path('recommend/', views.question_recommend),
    path('top_search/', views.top_search),
    path('creator_statistics/', views.creator_statistics),
    path('question_detail/', views.question_detail),

    # path('userzone/', views.userzone)   # 返回用户中心页面的用户数据
    path('ask_question/', views.ask_question),   # 获得用户提问表单，进行验证、保存
    # path('answer/', views.user_answer)          # 获得用户回答表单，进行验证、保存

]
