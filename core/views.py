from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.viewsets import ModelViewSet
from .models import Article
from .serializers import ArticleSerializer

def home(request):
    context = {"name": "Arthur"}
    return render(request, "core/home.html", context)

class ArticleViewSet(ModelViewSet):
    queryset = Article.objects.all().order_by("-created_at")
    serializer_class = ArticleSerializer