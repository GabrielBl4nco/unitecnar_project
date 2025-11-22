from django.shortcuts import render


def pruebas_view(request):
    """Render the `pruebas/index.html` template so `/pruebas/` shows the same
    page as the `template` route (index).
    """
    return render(request, 'pruebas/index.html')


def template_view(request):
    return render(request, 'pruebas/index.html')
