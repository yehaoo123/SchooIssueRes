from django.shortcuts import render
from django.shortcuts import HttpResponse
from django.shortcuts import redirect
from io import BytesIO
from applications.userzone.utils import validation_img
import json
from applications.userzone.models import UserAuth
from applications.userzone.models import AdminInfo

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


        request.session['user'] = auth_obj.user_id
        request.session['isLogin'] = True

        status['state'] = '200'
        status['data'] = "/"

        nosign = request.POST.get('nosign', 'no')
        if nosign == 'yes':
            request.session.set_expiry(604800)   # 7天

        return HttpResponse(json.dumps(status))


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
    return render(request, 'login.html')



'''  ----------------- 管理员登录代码 -----------------
def admin_auth_login(func):
    def wrapper(request, *args, **kwargs):
        if request.session.get('isLogin', False):
            return redirect('/xxx')   # 管理员页面
        else:
            res = func(request, *args, **kwargs)
            return res
    return wrapper

@admin_auth_login
def admin_login(request):
    if request.method == 'GET':
        return render(request, 'login.html')     # 管理员登陆页面
    elif request.method == 'POST':
        status = {'state': '200', 'data': None}

        # 检查用户名、密码
        username = request.POST.get('username', None)
        password = request.POST.get('password', None)
        admin_obj = AdminInfo.objects.filter(username=username, password=password).first()
        if not admin_obj:
            status['state'] = '505'
            return HttpResponse(json.dumps(status))

        request.session['admin'] = admin_obj.aid
        request.session['aisLogin'] = True

        status['state'] = '200'
        status['data'] = "/xxx"          # 管理员页面

        request.session.set_expiry(0)  # 关闭页面即失效

        return HttpResponse(json.dumps(status))
'''


