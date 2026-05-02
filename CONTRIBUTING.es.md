# Contribuir a rst-timer

¡Gracias por tu interés en contribuir a rst-timer! Esta guía te ayudará a comenzar.

## 🌍 Elige Tu Idioma

| Idioma | Guía |
|----------|-------|
| 🇺🇸 English | [CONTRIBUTING.md](./CONTRIBUTING.md) |
| 🇪🇸 Español | (Estás viendo) |
| 🇯🇵 日本語 | [CONTRIBUTING.ja.md](./CONTRIBUTING.ja.md) |

---

## Formas de Contribuir

| Tipo | Descripción |
|------|-------------|
| 🐛 Reportes de Errores | ¿Encontraste un error? ¡Cuéntanos! |
| 💡 Solicitudes de Funciones | ¿Tienes una idea? ¡Compártela! |
| 🔧 Contribuciones de Código | Corrige errores o añade funciones |
| 📖 Documentación | Mejora la documentación o traducciones |

## Comenzar

### 1. Bifurcar el Repositorio

Haz clic en el botón **Fork** en la [página de GitHub](https://github.com/rottioris/rst-timer).

### 2. Clonar tu Bifurcación

```bash
git clone https://github.com/TU_USUARIO/rst-timer.git
cd rst-timer
```

### 3. Crear una Rama de Funciones

```bash
git checkout -b feature/nombre-de-tu-funcion
# o
git checkout -b bugfix/descripcion-del-error
```

## Configuración para Desarrollo

### Requisitos Previos

- Node.js 18+
- Rust 1.70+
- npm o pnpm

### Instalar Dependencias

```bash
npm install
```

### Ejecutar en Modo Desarrollo

```bash
npm run tauri dev
```

## Realizar Cambios

### Estilo de Código

- Usa nombres de variables significativos
- Añade comentarios para lógica compleja
- Sigue los patrones de código existentes

### Mensajes de Commit

Usa mensajes de commit claros:

```
feat: añadir modo oscuro
fix: el temporizador no se reinicia correctamente
docs: actualizar guía de instalación
refactor: simplificar lógica del temporizador
```

### Tipos de Commits

| Tipo | Descripción |
|------|-------------|
| `feat` | Nueva función |
| `fix` | Corrección de	error |
| `docs` | Documentación |
| `refactor` | Refactorización |
| `test` | Añadir	pruebas |
| `chore` | Mantenimiento |

## Enviar Cambios

### 1. Prueba tus Cambios

```bash
# Construir la aplicación
npm run tauri build
```

### 2. Hacer Commit de tus Cambios

```bash
git add .
git commit -m "tipo: descripción de los cambios"
```

### 3. Push a tu Bifurcación

```bash
git push origin feature/nombre-de-tu-funcion
```

### 4. Crear una Pull Request

1. Ve al repositorio original
2. Haz clic en **New Pull Request**
3. Selecciona tu rama
4. Rellena la descripción
5. Envía

## Guías de Pull Request

- **Describe qué cambiaste** y **por qué**
- **Enlaza issues relacionados** (ej., "Soluciona #123")
- **Incluye capturas de pantalla** si hay cambios de interfaz
- **Prueba en múltiples plataformas** si es posible

## Código de Conducta

- Sé respetuoso e inclusivo
- Bienvenidas las personas nuevas
- Acepta la crítica constructiva con gracia
- Enfócate en lo mejor para la comunidad

## ¿Preguntas?

- Abre un [Issue](https://github.com/rottioris/rst-timer/issues)
- Inicia una [Discusión](https://github.com/rottioris/rst-timer/discussions)

---

¡Feliz contribución! 🎉