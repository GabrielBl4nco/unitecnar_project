from django.shortcuts import render


def pruebas_view(request):
    """Render the `pruebas/pruebas.html` template for the /pruebas/ route."""
    return render(request, 'pruebas/pruebas.html')


def template_view(request):
    return render(request, 'pruebas/index.html')
