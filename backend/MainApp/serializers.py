from rest_framework import serializers
from .models import *

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('name',)

class ArticleSerializer(serializers.ModelSerializer):
    category = serializers.CharField(max_length=1000)
    class Meta:
        model = Article
        exclude = ('id',)