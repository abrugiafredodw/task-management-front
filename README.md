# Task Management Front

Este proyecto es una aplicación web de gestión de tareas desarrollada con React y Vite. Permite a los usuarios registrarse, iniciar sesión y gestionar sus tareas de manera eficiente, con una interfaz moderna y responsiva.

## Descripción

La aplicación permite:
- Registro y autenticación de usuarios.
- Creación, edición y eliminación de tareas.
- Visualización de tareas en una interfaz intuitiva.
- Navegación protegida para usuarios autenticados.

## Arquitectura

El proyecto está estructurado de la siguiente manera:

- **src/components/**: Componentes reutilizables como NavBar, Footer y Layout.
- **src/pages/**: Páginas principales (Home, Login, Register, TaskManagement, Página No Encontrada).
- **src/context/**: Contexto global para la autenticación de usuarios.
- **src/hooks/**: Hooks personalizados para lógica de login, registro y gestión de tareas.
- **src/services/**: Servicios para interactuar con APIs de usuarios y tareas.
- **src/routes/**: Rutas protegidas y configuración de navegación.
- **src/utils/**: Utilidades y helpers.

La arquitectura sigue el patrón de componentes y hooks de React, con separación clara de responsabilidades y uso de Context API para el manejo de la autenticación.

## Configuración y ejecución

1. Instala las dependencias:
   ```bash
   npm install
   ```
2. Inicia la aplicación en modo desarrollo:
   ```bash
   npm run dev
   ```
3. Accede a la app en `http://localhost:5173` (o el puerto que indique la terminal).

## Valor agregado

- **Vite**: Utiliza Vite para un desarrollo rápido y recarga en caliente.
- **ESLint**: Configuración de ESLint para mantener la calidad del código.
- **Rutas protegidas**: Implementación de rutas privadas para proteger páginas sensibles.
- **Hooks personalizados**: Abstracción de lógica de negocio en hooks reutilizables.
- **Context API**: Manejo global del estado de autenticación.
- **Diseño moderno**: Interfaz atractiva y responsiva.
- **Fácil escalabilidad**: Estructura modular para facilitar el mantenimiento y la expansión.
