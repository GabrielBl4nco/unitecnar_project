from django.urls import path
from . import views

urlpatterns = [
    path('', views.pruebas_view, name='pruebas'),
]
