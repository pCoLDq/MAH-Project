from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import *
from .serializers import *
# Create your views here.

@api_view(['GET'])
def GetAllNews(request):
    serializer_block_1 = ArticleSerializer(Article.objects.filter(full=False)[:2], many=True)
    serializer_block_2 = ArticleSerializer(Article.objects.filter(full=False)[2:4], many=True)
    serializer_block_3 = ArticleSerializer(Article.objects.filter(full=False)[4:6], many=True)
    full_serializer = ArticleSerializer(Article.objects.get(full=True))
    data = {
        'full': [full_serializer.data,],
        'not-full-1': serializer_block_1.data,
        'not-full-2': serializer_block_2.data,
        'not-full-3': serializer_block_3.data,
    }
    return Response(data)

@api_view(['GET'])
def GetCultureNews(request):
    category = Category.objects.get(name='Культура')
    serializer_block_1 = ArticleSerializer(Article.objects.filter(category=category)[:2], many=True)
    serializer_block_2 = ArticleSerializer(Article.objects.filter(category=category)[2:4], many=True)
    serializer_block_3 = ArticleSerializer(Article.objects.filter(category=category)[4:6], many=True)
    serializer_block_4 = ArticleSerializer(Article.objects.filter(category=category)[6:8], many=True)
    serializer_block_5 = ArticleSerializer(Article.objects.filter(category=category)[8:10], many=True)
    data = {
        'block-1': serializer_block_1.data,
        'block-2': serializer_block_2.data,
        'block-3': serializer_block_3.data,
        'block-4': serializer_block_4.data,
        'block-5': serializer_block_5.data,
    }
    return Response(data)

@api_view(['GET'])
def GetSocialNews(request):
    category = Category.objects.get(name='Общество')
    serializer_block_1 = ArticleSerializer(Article.objects.filter(category=category)[:2], many=True)
    serializer_block_2 = ArticleSerializer(Article.objects.filter(category=category)[2:4], many=True)
    serializer_block_3 = ArticleSerializer(Article.objects.filter(category=category)[4:6], many=True)
    serializer_block_4 = ArticleSerializer(Article.objects.filter(category=category)[6:8], many=True)
    serializer_block_5 = ArticleSerializer(Article.objects.filter(category=category)[8:10], many=True)
    data = {
        'block-1': serializer_block_1.data,
        'block-2': serializer_block_2.data,
        'block-3': serializer_block_3.data,
        'block-4': serializer_block_4.data,
        'block-5': serializer_block_5.data,
    }
    return Response(data)

@api_view(['GET'])
def GetPoliticNews(request):
    category = Category.objects.get(name='Политика')
    serializer_block_1 = ArticleSerializer(Article.objects.filter(category=category)[:2], many=True)
    serializer_block_2 = ArticleSerializer(Article.objects.filter(category=category)[2:4], many=True)
    serializer_block_3 = ArticleSerializer(Article.objects.filter(category=category)[4:6], many=True)
    serializer_block_4 = ArticleSerializer(Article.objects.filter(category=category)[6:8], many=True)
    serializer_block_5 = ArticleSerializer(Article.objects.filter(category=category)[8:10], many=True)
    data = {
        'block-1': serializer_block_1.data,
        'block-2': serializer_block_2.data,
        'block-3': serializer_block_3.data,
        'block-4': serializer_block_4.data,
        'block-5': serializer_block_5.data,
    }
    return Response(data)
    
@api_view(['GET'])
def GetSportNews(request):
    category = Category.objects.get(name='Спорт')
    serializer_block_1 = ArticleSerializer(Article.objects.filter(category=category)[:2], many=True)
    serializer_block_2 = ArticleSerializer(Article.objects.filter(category=category)[2:4], many=True)
    serializer_block_3 = ArticleSerializer(Article.objects.filter(category=category)[4:6], many=True)
    serializer_block_4 = ArticleSerializer(Article.objects.filter(category=category)[6:8], many=True)
    serializer_block_5 = ArticleSerializer(Article.objects.filter(category=category)[8:10], many=True)
    data = {
        'block-1': serializer_block_1.data,
        'block-2': serializer_block_2.data,
        'block-3': serializer_block_3.data,
        'block-4': serializer_block_4.data,
        'block-5': serializer_block_5.data,
    }
    return Response(data)

@api_view(['GET'])
def GetScienceNews(request):
    category = Category.objects.get(name='Наука')
    serializer_block_1 = ArticleSerializer(Article.objects.filter(category=category)[:2], many=True)
    serializer_block_2 = ArticleSerializer(Article.objects.filter(category=category)[2:4], many=True)
    serializer_block_3 = ArticleSerializer(Article.objects.filter(category=category)[4:6], many=True)
    serializer_block_4 = ArticleSerializer(Article.objects.filter(category=category)[6:8], many=True)
    serializer_block_5 = ArticleSerializer(Article.objects.filter(category=category)[8:10], many=True)
    data = {
        'block-1': serializer_block_1.data,
        'block-2': serializer_block_2.data,
        'block-3': serializer_block_3.data,
        'block-4': serializer_block_4.data,
        'block-5': serializer_block_5.data,
    }
    return Response(data)

@api_view(['GET'])
def GetTechNews(request):
    category = Category.objects.get(name='Технологии')
    serializer_block_1 = ArticleSerializer(Article.objects.filter(category=category)[:2], many=True)
    serializer_block_2 = ArticleSerializer(Article.objects.filter(category=category)[2:4], many=True)
    serializer_block_3 = ArticleSerializer(Article.objects.filter(category=category)[4:6], many=True)
    serializer_block_4 = ArticleSerializer(Article.objects.filter(category=category)[6:8], many=True)
    serializer_block_5 = ArticleSerializer(Article.objects.filter(category=category)[8:10], many=True)
    data = {
        'block-1': serializer_block_1.data,
        'block-2': serializer_block_2.data,
        'block-3': serializer_block_3.data,
        'block-4': serializer_block_4.data,
        'block-5': serializer_block_5.data,
    }
    return Response(data)


