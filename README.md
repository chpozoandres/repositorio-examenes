# Repositorio de exámenes

La aplicación está en `dist/`. El `index.html` de la raíz abre esa carpeta para que GitHub Pages pueda publicar desde la raíz de la rama.

## Publicar con GitHub Desktop

1. En GitHub Desktop, elige **File → Add local repository** y selecciona esta carpeta (`repositorio-examenes`).
2. Crea el primer commit con los archivos de la web y pulsa **Publish repository**. El repositorio debe ser público si tu plan de GitHub no permite Pages en repositorios privados.
3. En GitHub, abre **Settings → Pages**. En **Build and deployment**, elige **Deploy from a branch**; selecciona la rama publicada y la carpeta **/(root)**. Guarda los cambios.
4. En publicaciones posteriores, crea un commit en GitHub Desktop y pulsa **Push origin**. La web estará en la dirección que muestre **Settings → Pages**.

Los PDF y el catálogo `dist/recursos/materiales.js` deben estar incluidos en el commit para que aparezcan en la web publicada.
