# Unitecnar Project

Proyecto Django de ejemplo: "unitecnar"

## Descripción

Proyecto Django sencillo creado como ejemplo. Contiene una app `pruebas` con dos rutas:

- `/pruebas/` — vista que devuelve HTML directo con mensaje de bienvenida.
- `/template/` — vista que renderiza la plantilla `pruebas/index.html` con estructura tradicional.

## Requisitos

Instala las dependencias listadas en `requirements.txt` (se recomienda usar un entorno virtual):

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
```

## Ejecutar localmente

```powershell
python manage.py migrate
python manage.py runserver
# Abrir http://127.0.0.1:8000/template/ y http://127.0.0.1:8000/pruebas/
```

## Notas

- Antes de publicar en producción, mueve `SECRET_KEY` a una variable de entorno y configura `DEBUG = False`.
- `db.sqlite3` está en `.gitignore` para evitar subir la base de datos.