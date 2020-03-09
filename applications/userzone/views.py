from django.shortcuts import render
from django.shortcuts import HttpResponse
from django.shortcuts import redirect
from io import BytesIO
from applications.userzone.utils import validation_img
import json
from applications.userzone.models import UserAuth
from applications.userzone.models import UserInfo
from applications.userzone.models import AdminInfo
import datetime



# ----------------- 用户登录代码 -----------------
def auth_login(func):
    def wrapper(request, *args, **kwargs):
        if request.session.get('isLogin', False):
            return redirect('/')
        else:
            res = func(request, *args, **kwargs)
            return res
    return wrapper

@auth_login
def user_login(request):
    if request.method == 'GET':
        return render(request, 'login.html')
    elif request.method == 'POST':
        status = {'state': '200', 'data': None}

        # 检查验证码
        identify_code = request.POST.get('identify_code', None)
        if request.session.get('CheckCode', 'emmmmmmmmmm').lower() != identify_code.lower():
            status['state'] = '303'
            return HttpResponse(json.dumps(status) )

        # 检查用户名、密码
        username = request.POST.get('username', None)
        password = request.POST.get('password', None)
        auth_obj =  UserAuth.objects.filter(auth='01',identifier=username, credential=password).first()
        if not auth_obj:
            status['state'] = '505'
            return HttpResponse(json.dumps(status))

        # 用户登录成功

        # 刷新最后登录时间
        user_id = auth_obj.user_id
        UserInfo.objects.filter(uid=user_id).update(last_login_time=datetime.datetime.now())

        # 保存用户的 session 状态
        request.session['user'] = auth_obj.user_id
        request.session['isLogin'] = True

        status['state'] = '200'
        status['data'] = "/"

        max_age = 86400
        nosign = request.POST.get('nosign', 'no')
        if nosign == 'yes':
            max_age = 604800
            request.session.set_expiry(604800)   # 7天

        res = HttpResponse(json.dumps(status))
        res.set_cookie(key='isLogin', value=True, max_age=max_age)
        return res

def check_code(request):
    if request.method == 'GET':
        img = validation_img.check_code()
        check_img, check_code = img.create_img()
        stream = BytesIO()
        check_img.save(stream, 'JPEG')
        request.session['CheckCode'] = check_code
        return HttpResponse(stream.getvalue())

def user_logout(request):
    request.session.delete(request.session.session_key)

    res = redirect('/userzone/login')
    res.delete_cookie(key='isLogin')
    return res




# ----------------- 管理员登录代码 -----------------
def admin_auth_login(func):
    def wrapper(request, *args, **kwargs):
        if request.session.get('aisLogin', False):
            return redirect('/xxx')   # 管理员页面
        else:
            res = func(request, *args, **kwargs)
            return res
    return wrapper

@admin_auth_login
def admin_login(request):
    if request.method == 'GET':
        return render(request, 'admin_login.html')     # 管理员登陆页面
    elif request.method == 'POST':
        status = {'state': '200', 'data': None}

        # 检查验证码
        identify_code = request.POST.get('identify_code', None)
        if request.session.get('CheckCode', 'emmmmmmmmmm').lower() != identify_code.lower():
            status['state'] = '303'
            return HttpResponse(json.dumps(status))

        # 检查用户名、密码
        username = request.POST.get('username', None)
        password = request.POST.get('password', None)
        admin_obj = AdminInfo.objects.filter(username=username, password=password).first()
        if not admin_obj:
            status['state'] = '505'
            return HttpResponse(json.dumps(status))

        # 管理员登录成功

        # 刷新最后登录时间
        admin_obj.last_login_time = datetime.datetime.now()
        admin_obj.save()

        request.session['admin'] = admin_obj.aid
        request.session['aisLogin'] = True

        status['state'] = '200'
        status['data'] = "/xxx"          # 管理员页面

        request.session.set_expiry(0)  # 关闭页面即失效

        return HttpResponse(json.dumps(status))

def admin_logout(request):
    request.session.delete(request.session.session_key)
    return redirect('/userzone/admin_login')

