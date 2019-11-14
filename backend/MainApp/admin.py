from django.contrib import admin
from .models import *
# Register your models here.

class ArticleAdmin(admin.ModelAdmin):
    list_display = ("title", "full", "category")
    list_display_links = ("title", "full", "category")
    search_fields = ("title", "full", "category")


admin.site.register(Category)
admin.site.register(Article, ArticleAdmin)
