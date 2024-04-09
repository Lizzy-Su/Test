from django.shortcuts import render

# Create your views here.
def Canvas(request):
    return render(request, "canvas.html")

