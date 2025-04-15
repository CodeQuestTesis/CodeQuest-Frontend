# 🧩 CodeQuest – Frontend

Este repositorio contiene el **frontend** del proyecto de tesis titulado:

> **"Aplicación de gamificación para mejorar la difusión de la carrera de Ingeniería de Sistemas e Inteligencia Artificial en Trujillo, 2025."**

---

## 📌 Descripción General

Este frontend corresponde a una aplicación web gamificada desarrollada con React + Three.js, donde se presenta un recorrido virtual en 3D que explica la carrera de Ingeniería de Sistemas e Inteligencia Artificial. Durante el recorrido, el usuario puede interactuar con un personaje guía, explorar ambientes y participar en minijuegos interactivos (drag & drop, completar, sí/no, entre otros).

La experiencia busca ser inmersiva y educativa, y puede ser navegada desde navegador tradicional o mediante dispositivos compatibles con WebXR.

---

## ⚙️ Tecnologías Principales

| Tecnología                 | Descripción                                                    |
|----------------------------|----------------------------------------------------------------|
| **React + Vite**           | Framework base del frontend + build rápido y moderno           |
| **TypeScript**             | Lenguaje fuertemente tipado que mejora el desarrollo con React |
| **@react-three/fiber**     | Renderizado 3D declarativo en React (envuelve Three.js)        |
| **@react-three/drei**      | Utilidades pre-hechas para facilitar uso de Three.js           |
| **Tailwind CSS v4**        | Framework de estilos basado en utilidades, versión 4           |
| **Redux Toolkit**          | Manejo eficiente del estado global y llamadas a la API         |
| **Zod**                    | Validación y tipado de datos e interfaces del frontend         |

---

## 🧱 Organización del Proyecto

El proyecto está estructurado con enfoque **modular por funcionalidades**, facilitando la escalabilidad y el mantenimiento.

``` 
src/
├── assets/                       # Recursos multimedia
│   ├── images/                   # Imágenes estáticas
│   ├── audio/                    # Archivos de sonido
│   ├── textures/                 # Texturas para los modelos
│   └── models/                   # Modelos 3D para A-Frame
│
├── features/                     # Módulos principales
│   ├── scene-elements/           # Lógica del recorrido inicial
│   │   ├── cameras/              # Cámaras personalizadas, FPS o followCam
│   │   ├── controls/             # Controles del usuario o input devices
│   │   ├── environment/          # Suelo, cielo, luces
│   │   └── characters/           # NPCs o guía (Alex Codez, por ejemplo)
│   │
│   ├── scenes/                   # Escenarios completos, uno o más por experiencia
│   └── games/                    # Minijuegos
│
├── infrastructure/              # Soporte técnico del frontend
│   ├── api/                     # RTK Query / Axios
│   ├── schemas/                 # Validaciones con Zod
│   ├── constants/               # Constantes globales
│   ├── hooks/                   # Hooks personalizados
│   └── routes/                  # React Router config
│
├── presentation/                # Interfaz de usuario
│   ├── components/              # Componentes reutilizables
│   ├── layout/                  # Estructura visual (navbar, layout general)
│   └── pages/                   # Vistas completas por ruta
│
├── index.css                    # Tailwind CSS y estilos base
├── main.tsx                     # Punto de entrada
└── App.tsx                      # Componente raíz
```
## 📦 Paquetes instalados (por ahora)

tailwindcss@v4: Utilizado para crear estilos rápidos, responsivos y personalizables. Ideal para mantener una interfaz consistente y moderna.

zod: Librería de validación de esquemas de datos. Se usa para validar inputs de usuario y respuestas del backend, asegurando consistencia y seguridad en los datos.

three: Librería para renderizado 3D en la web. Permite crear y manipular escenas, modelos y animaciones 3D con alto nivel de control y personalización. Es utilizada para construir el recorrido virtual de forma inmersiva.

@reduxjs/toolkit + @reduxjs/toolkit/query: Se usan para gestionar el estado global de la aplicación y las llamadas al backend de forma estructurada, minimizando el código repetitivo y mejorando la escalabilidad del proyecto.

## 🚀 ¿Cómo ejecutar el proyecto?
Clona el repositorio:

```githubexpressionlanguage
git clone https://github.com/CodeQuestTesis/CodeQuest-Frontend.git
cd CodeQuest-Frontend
```
Instala las dependencias:

```shell
npm install
```
Inicia el entorno de desarrollo:
```shell
npm run dev
```
