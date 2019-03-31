from django.http import HttpResponse

def index(request):
    return HttpResponse("Hello, world. You're at the index.")

def user(request, user_name):
    return HttpResponse("You're looking at user %s." % user_name)

def post(request, user_name, post_name):
    response = "You're looking at post_name %s by user_name"
    return HttpResponse(response % post_name)
