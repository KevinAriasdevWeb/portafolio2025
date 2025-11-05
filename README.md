# Portafolio 2025

Sitio estático construido para ser publicado en GitHub Pages.

## Estructura

- `index.html`: página principal del portafolio.
- `styles/main.css`: estilos globales.
- `scripts/main.js`: comportamiento ligero para el menú móvil y el año dinámico.
- `.github/workflows/deploy.yml`: flujo automatizado para desplegar a GitHub Pages.

## Ejecutar en local

Basta con abrir `index.html` en tu navegador o servir el proyecto con cualquier servidor estático, por ejemplo:

```bash
npx serve .
```

## Publicación en GitHub Pages

### Manual

1. Sube los cambios al repositorio en la rama `main` o `work`.
2. Entra a **Settings → Pages** y elige como fuente la rama que prefieras (por ejemplo `main`) y la carpeta raíz (`/`).
3. Guarda la configuración y espera a que GitHub publique el sitio en `https://<tu-usuario>.github.io/portafolio2025/`.

### Automática (recomendada)

El flujo `Deploy to GitHub Pages` se ejecuta en cada `push` a las ramas `work` o `main` y publica automáticamente el contenido del repositorio.

1. Ve a **Settings → Pages** y selecciona "GitHub Actions" como fuente.
2. Realiza un `push` y espera a que el workflow termine para que la página quede disponible.
