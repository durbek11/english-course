from django.urls import path
from .views import *

app_name = "my_name"

urlpatterns = [
    path('home/', home, name='home'), 
]