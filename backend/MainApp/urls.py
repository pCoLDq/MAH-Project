from django.urls import path, include
from .views import *

urlpatterns = [
    path('<str:category_name>/', GetNews),
]