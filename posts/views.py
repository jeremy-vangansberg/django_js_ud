from django.shortcuts import render
from .models import Post
from django.http import JsonResponse

def post_list_and_create(request):
    qs = Post.objects.all()
    return render(request, 'posts/main.html', {'qs': qs})


def hello_world(request):
    return JsonResponse({'text': 'hello world'})

def load_post_data_view(request):
    qs = Post.objects.all()
    data = []
    for obj in qs:
        item = {
            'id': obj.id,
            'title': obj.title,
            'body': obj.body,
            'author': obj.author.user.username,
        }
        data.append(item)
    return JsonResponse({'data' : data})    
