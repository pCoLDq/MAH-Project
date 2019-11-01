from django.shortcuts import render
from rest_framework.response import Response
from .models import *
from .serializers import *
# Create your views here.

def GetAllNews(request):
    serializer_block_1 = ArticleSerializer(Article.objects.filter(full=False)[:2], many=True)
    serializer_block_2 = ArticleSerializer(Article.objects.filter(full=False)[2:4], many=True)
    serializer_block_3 = ArticleSerializer(Article.objects.filter(full=False)[4:6], many=True)
    full_serializer = ArticleSerializer(Article.objects.filter(full=True))
    return Response(full_serializer.data, serializer_block_1.data, serializer_block_2.data, serializer_block_3.data)

def GetCultureNews(request):
    culture_news = Category.objects.get(name='Культура')
    serializer = ArticleSerializer(Article.objects.filter(category=culture_news, many=True))
    return Response(serializer.data)