from django.http import HttpResponse
from django.shortcuts import render

def pruebas_view(request):
        html = """<!doctype html>
<html lang="es">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <title>Pruebas</title>
    </head>
    <body>
        <h1>Bienvenido a Django desde unitecnar</h1>
    </body>
</html>
"""
        return HttpResponse(html)


def template_view(request):
        return render(request, 'pruebas/index.html')
