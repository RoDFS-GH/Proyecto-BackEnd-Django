from django.shortcuts import render
from .models import Project

# Create your views here.
def portfolio(request):
    projects = Project.objects.all() 
    #creo una variable que le paso el nombre del proyecto y le adjudico todos los objetos
    return render(request, "portfolio/portfolio.html", {'projects':projects})