from django.urls import path
from .views import *

app_name = "English"

urlpatterns = [
    path('home/', home, name='home'),