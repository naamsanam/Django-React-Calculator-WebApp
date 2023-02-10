# urls.py
# myapp/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('api/calculate/', views.calculate, name='calculate'),
]
