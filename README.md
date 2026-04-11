# Portafolio Kevin Celedón Martínez

Portfolio personal developer Fullstack JavaScript.

## Datos del Desarrollador

- **Nombre:** Kevin Celedón Martínez
- **Perfil:** Junior Fullstack Developer
- **Ubicación:** Colombia
- **Email:** kevynceledon@gmail.com
- **GitHub:** https://github.com/kevynceledon-ui
- **LinkedIn:** https://www.linkedin.com/in/kevin-celed%C3%B3n/

## Tech Stack

| Tecnología | Nivel |
|------------|-------|
| JavaScript (ES6+) | Intermedio |
| Node.js | Intermedio |
| Express.js | Intermedio |
| Sequelize ORM | Básico-Intermedio |
| PostgreSQL | Básico |
| MySQL | Básico |
| HTML5 | Intermedio |
| CSS3 | Intermedio |
| Git | Básico |

---

## Sistema de Diseño

### Paleta de Colores (Dark Minimal)

| Color | Hex | Uso |
|-------|-----|-----|
| Background | `#0a0a0a` | Fondo principal |
| Surface | `#141414` | Cards, secciones |
| Surface hover | `#1a1a1a` | Estados hover |
| Border | `#2a2a2a` | Divisores, marcos |
| Texto principal | `#f5f5f5` | Headings, títulos |
| Texto secundario | `#888888` | Body, descripciones |
| **Acento (Lavanda)** | `#a78bfa` | Links, highlights, badges |
| Acento hover | `#c4b5fd` | Estados hover |

### Tipografía

- **Headings:** Space Grotesk (Google Fonts) - Peso 600-700
- **Body:** DM Sans (Google Fonts) - Peso 400-500
- **Code/Tags:** JetBrains Mono (Google Fonts)

### Espaciado

- Unit base: `8px`
- Section padding: `80px` vertical (desktop), `48px` (mobile)
- Card padding: `24px`
- Gap between elements: `16px` / `24px`

### Breakpoints

- Mobile: `< 768px`
- Tablet: `768px - 1024px`
- Desktop: `> 1024px`

---

## Estructura de Archivos

```
/
├── index.html              # Portfolio completo (single-page)
├── README.md              # Este documento
├── src/
│   ├── styles/
│   │   └── main.css       # Todo el CSS
│   └── js/
│       └── main.js       # Interacciones
└── assets/
    └── images/            # Imágenes (si aplica)
```

---

## Secciones del Portfolio

### 1. Header / Navbar
- Logo: "Kevin" (nombre)
- Links: Sobre mí, Stack, Proyectos, Contacto
- Fixed position con `backdrop-filter: blur(10px)`
- Mobile: hamburger menu

### 2. Hero Section
- Saludo: "Hola, soy Kevin Celedón"
- Título: "Junior Fullstack Developer"
- Tagline: "Building robust APIs & elegant solutions with JavaScript"
- CTA Button: "Ver proyectos" → scroll to projects
- Links sociales: GitHub, LinkedIn

### 3. Sobre mí
- Breve descripción personal (2-3 oraciones)
- Enfoque: desarrollo backend, APIs RESTful, bases de datos
- Actualmente buscando primera oportunidad laboral

### 4. Tech Stack
- Grid de badges/icons por categoría:
  - **Languages:** JavaScript
  - **Backend:** Node.js, Express
  - **Database:** PostgreSQL, MySQL, Sequelize
  - **Frontend:** HTML, CSS
  - **Tools:** Git

### 5. Proyectos

#### Proyecto Principal: Esports Teams API
- **Nombre:** Esports Teams Management API
- **Descripción:** API RESTful para crear y gestionar equipos de esports
- **Características:**
  - CRUD completo de equipos
  - Autenticación JWT
  - Documentación Swagger UI
  - Upload de imágenes con Multer
- **Tech:** Node.js, Express, Sequelize, PostgreSQL/MySQL, JWT, Swagger, Multer
- **Repo:** https://github.com/kevynceledon-ui/Proyecto-ABP-8-JWT-API-RESTful
- **Demo:** (pendiente deploy)
- **Stack visual:** badges con icons

#### Proyectos Adicionales
- *Espacio para proyectos futuros*
- Por ahora: listed as "Coming soon" o basado en ejercicios/tutoriales

### 6. Formación / Cursos
-listado de cursos completados
- Certificaciones relevantes
- Áreas de estudio

**Cursos sugeridos登记:**
- FreeCodeCamp - JavaScript Algorithms
-Otros cursos completados

### 7. Contacto
- Email directo: kevynceledon@gmail.com
- Botones: GitHub, LinkedIn
- Footer con copyright

---

## Funcionalidades Técnicas

### Interacciones
- Smooth scroll en navigation links
- Animaciones scroll-triggered (fade-in, slide-up)
- Hover states en todos los elementos interactivos
- Mobile menu toggle

### Accesibilidad
- Semantic HTML5
- ARIA labels donde sea necesario
- Focus states visibles
- Contraste suficiente (WCAG AA)

### Rendimiento
- Google Fonts con `display: swap`
- CSS minificado en producción (opcional)
- Sin heavy libraries
- Deferred JS loading

---

## Proceso de Implementación

### Fase 1: Estructura Base
- [ ] Crear archivos `index.html`, `src/styles/main.css`, `src/js/main.js`
- [ ] Configurar diseño system en CSS (variables)
- [ ] Implementar navbar fixed

### Fase 2: Secciones Principales
- [ ] Hero section
- [ ] Sobre mí
- [ ] Tech Stack grid

### Fase 3: Proyectos
- [ ] Cards de proyecto principal
- [ ]badges de tecnología
- [ ] Links a repositorio

### Fase 4: Contacto & Footer
- [ ] Sección contacto
- [ ] Footer

### Fase 5: Interacciones & Animaciones
- [ ] Scroll animations (CSS only preferred)
- [ ] Hover states
- [ ] Mobile menu

### Fase 6: Revisión
- [ ] Validar responsive design
- [ ] Verificar links
- [ ] Test de accesibilidad

---

## Pendiente del Cliente

- [ ] Lista completa de cursos/formación
- [ ] Proyectos adicionales (si aplica)
- [ ] Screenshots del proyecto (para gallery)
- [ ] Deploy URL (cuando aplique)

---

## Inspiración Visual

Referencias de portafolios dark minimal:
- stripe.com (clean dark)
- brex.com/careers
- Linear App website

**Enfoque:** Minimalista, Professional, Noir con accents lavanda sutiles.

---

## Licencia

MIT License - Kevin Celedón 2026