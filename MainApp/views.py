from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import *
from .serializers import *
# Create your views here.

@api_view(['GET'])
def GetNews(request, category_name):
    if category_name == 'all':
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
    else:
        categories = {
            'culture': 'Культура',
            'social': 'Общество',
            'politic': 'Политика',
            'sport': 'Спорт',
            'science': 'Наука',
            'tech': 'Технологии',
        }
        category = Category.objects.get(name=categories[category_name])
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