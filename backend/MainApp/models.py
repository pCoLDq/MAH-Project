from django.db import models

# Create your models here.
class Article(models.Model):

    title = models.CharField(max_length=1000)
    preview = models.CharField(max_length=1000)
    full = models.BooleanField(default=None)
    category = models.ForeignKey('Category', on_delete=models.PROTECT)
    link = models.CharField(max_length=10000)
    description = models.TextField()

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Article'
        verbose_name_plural = 'Articles'

class Category(models.Model):

    name = models.CharField(max_length=100) 

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'