from django.shortcuts import render
from django.shortcuts import HttpResponse
from django.shortcuts import redirect
from applications.cms.models import Question
from applications.webstatistics.models import SearchStatistics
from applications.userzone.models import UserInfo
from django.db.models import Q
import json
import datetime



def homepage(request):
    # print(request.session.get('isLogin'))

    if not request.session.get('isLogin', False):   # 游客
        return render(request, 'index1.html')
    else:                                            # 用户
        return render(request, 'index.html')

def question_recommend(request):
    if request.method == 'POST':
        return HttpResponse('请使用GET请求')

    if not request.session.get('isLogin', False):
        # 推荐游客数据
        count = int( request.GET.get('count', 10) )

        data_list = []
        question_query = Question.objects.filter(~Q(answer_num=0))[:count]
        for question in question_query:
            answer = question.answer_set.order_by('-like_num').first()
            data = {'qid': question.qid, 'question_title': question.title,
                   'answer': {'aid': answer.aid, 'user':{'uid': answer.user_id, 'nickname': answer.user.nickname},
                              'like': answer.like_num, 'dislike': answer.dislike_num, 'comment': answer.comment_num,
                              'answer_content': answer.content}
                    }
            data_list.append(data)
        return HttpResponse(json.dumps(data_list))
    else:
        # 推荐用户数据
        count = int( request.GET.get('count', 10) )

        data_list = []
        question_query = Question.objects.filter(~Q(answer_num=0))[:count]
        for question in question_query:
            answer = question.answer_set.order_by('-like_num').first()
            data = {'qid': question.qid, 'question_title': question.title,
                    'answer': {'aid': answer.aid, 'user': {'uid': answer.user_id, 'nickname': answer.user.nickname},
                               'like': answer.like_num, 'dislike': answer.dislike_num, 'comment': answer.comment_num,
                               'answer_content': answer.content}
                    }
            data_list.append(data)
        return HttpResponse(json.dumps(data_list))

# 热搜 --- 一段时间搜索最多的记录
def top_search(request):
    if request.method == 'POST':
        return HttpResponse('请使用GET请求')

    if not request.session.get('isLogin', False):
        # 游客
        # 按搜索记录的热度取前n个返回
        count = int(request.GET.get('count', 10))

        data_list = []
        search_query = SearchStatistics.objects.order_by('-count')[:count]
        for search in search_query:
            data = {'sid': search.sid, 'search_content': search.search_content, 'count': search.count}
            data_list.append(data)

        return HttpResponse(json.dumps(data_list))
    else:
        # 用户
        # 按搜索记录的热度取前n个返回【最好由推荐系统为每个用户推荐最适合的热搜】
        count = int(request.GET.get('count', 10))

        data_list = []
        search_query = SearchStatistics.objects.order_by('-count')[:count]
        for search in search_query:
            data = {'sid': search.sid, 'search_content': search.search_content, 'count': search.count}
            data_list.append(data)

        return HttpResponse(json.dumps(data_list))


def auth_login(func):
    def wrapper(request, *args, **kwargs):
        if request.session.get('isLogin', False):
            if request.method == 'GET':
                res = func(request, *args, **kwargs)
                return res
            else:
                return HttpResponse('请发送GET请求')
        else:
            # return HttpResponse('请登录后查看~')
            return redirect('/userzone/login')
    return wrapper

@auth_login   # creator_statistics = auth_login(creator_statistics)
def creator_statistics(request):
    uid = request.session.get('user')

    # 查昨日浏览量 --- 拿到用户的所有问题 -> 拿每个问题的浏览记录（昨日的） -> 每个问题的浏览记录量求和
    user = UserInfo.objects.filter(uid=uid).first()
    answer_list = user.answer_set.all()
    total_answer_browse_num = 0
    today = datetime.datetime.now().date()
    yesterday = today - datetime.timedelta(days=1)

    for answer in answer_list:
        answer_browse_num = answer.userbrowse_set.filter(browse_time__range=(yesterday, today)).count()  # 昨天一整天的每个问题的浏览量
        total_answer_browse_num += answer_browse_num

    # 查昨日点赞数 --- 拿到用户的所有问题 -> 拿每个问题的点赞记录（昨日的） -> 每个问题的点赞量求和
    total_answer_like_num = 0
    for answer in answer_list:
        answer_like_num = answer.userlike_set.filter(time__range=(yesterday, today), attitude=1).count()  # 昨天一整天的每个问题的浏览量
        print(answer_like_num)
        total_answer_like_num += answer_like_num

    res = {
        'yesterday_browse_num': total_answer_browse_num,
        'yesterday_like_num': total_answer_like_num
    }

    return HttpResponse(json.dumps(res))


def question_detail_page(request, qid):
    # print(request.session.get('isLogin'))

    if request.session.get('isLogin', False):  # 用户
        return render(request, 'question_detail.html')         # 返回问题详情页面
    else:
        return render(request, 'question_detail1.html')

def question_detail(request):
    # print(request.session.get('isLogin'))

    qid = request.GET.get('qid', 1)

    if request.session.get('isLogin', False):   # 用户
        page = int(request.GET.get('page', 1))
        offset = int(request.GET.get('offset', 5))
    else:    # 游客
        page = 1
        offset = 5

    # page - 1, offset - 5 --------> [0, 5]
    # page - 2, offset - 5 --------> [5, 10]
    # page -  , offset -   --------> [(page-1)*offset, page*offset]
    question = Question.objects.filter(qid=qid).first()
    answer_list = question.answer_set.order_by('-like_num')[(page-1)*offset: page*offset]

    res = { 'qid': question.qid, 'user': { 'uid': question.user_id, 'nickname': question.user.nickname },
            'title': question.title, 'describe': question.describe, 'time': question.time, 'answer_num': question.answer_num,
            'follower_num': question.follower_num, 'browse_view': question.browse_view, 'answer_list': []}
    for answer in answer_list:
        answer_item = {'aid': answer.aid, 'user': { 'uid': answer.user_id, 'nickname': answer.user.nickname },
                       'like_num': answer.like_num, 'dislike_num': answer.dislike_num, 'comment_num': answer.comment_num,
                       'content': answer.content, 'time': answer.time}
        res['answer_list'].append(answer_item)

    return HttpResponse(json.dumps(res))



def ask_question(request):
    if not request.session.get('isLogin', False):
        return redirect('/userzone/login')
    if request.method == 'GET':
        return HttpResponse('请发送POST请求')

    status = {'state': '200'}

    uid = request.session.get('user', 1)
    title = request.POST.get('title', '')
    describe = request.POST.get('describe', '')

    if len(title) <= 3:
        status['state'] = '401'
        return HttpResponse(json.dumps(status))

    Question.objects.create(
        user_id=uid,
        title=title,
        describe=describe
    )

    return HttpResponse(json.dumps(status))

def user_answer(request):
    pass



