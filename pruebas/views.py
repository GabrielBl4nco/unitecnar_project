from django.shortcuts import render
from django.http import HttpResponse


def pruebas_view(request):
        """Return an HTML response with the welcome message for /pruebas/."""
        html = """
        <!doctype html>
        <html lang="es">
            <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <title>Pruebas - unitecnar</title>
            </head>
            <body>
                <h1>Bienvenido a Django desde unitecnar</h1>
            </body>
        </html>
        """
        return HttpResponse(html)


def template_view(request):
    return render(request, 'pruebas/index.html')
