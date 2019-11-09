from django.urls import path, include
from .views import *

urlpatterns = [
    path('all/', GetAllNews),
    path('culture/', GetCultureNews),
    path('social/', GetSocialNews),
    path('politic/', GetPoliticNews),
    path('sport/', GetSportNews),
    path('science/', GetScienceNews),
    path('tech/', GetTechNews),
]