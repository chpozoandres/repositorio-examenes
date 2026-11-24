# Repositorio de exámenes

La aplicación está en `dist/`. GitHub Actions genera el catálogo de PDF y publica esta carpeta en GitHub Pages.

## Publicar con GitHub Desktop

1. En GitHub Desktop, elige **File → Add local repository** y selecciona esta carpeta (`repositorio-examenes`).
2. Crea el primer commit con los archivos de la web y pulsa **Publish repository**. El repositorio debe ser público si tu plan de GitHub no permite Pages en repositorios privados.
3. En GitHub, abre **Settings → Pages**. En **Build and deployment**, elige **GitHub Actions** como origen. Guarda los cambios.
4. En publicaciones posteriores, crea un commit en GitHub Desktop y pulsa **Push origin**. La web estará en la dirección que muestre **Settings → Pages**.

## Añadir PDF

Guarda cada PDF en `dist/recursos/<asignatura>/<tipo>/`, donde la asignatura es `bdd`, `in`, `ri` o `tic`, y el tipo es `diapositivas`, `apuntes` o `esquemas`. Incluye `Tema N`, `Tema_N`, `TN` o `UnidadN` en el nombre para que aparezca con el número de tema correcto.

Después, crea un commit y pulsa **Push origin** en GitHub Desktop. La acción `.github/workflows/pages.yml` generará `materiales.js` a partir de los PDF y publicará la web. No hace falta editar el JavaScript.

Para actualizar el catálogo en la copia local antes de publicar, ejecuta `python scripts/generar_materiales.py` desde la raíz del repositorio.
