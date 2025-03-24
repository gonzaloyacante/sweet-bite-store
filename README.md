# Sweet-Bite 🍰

Tienda online de pastelería desarrollada con React y Express.

## Estructura del Proyecto

El proyecto ahora está organizado en dos carpetas principales:
- `frontend/`: Aplicación React (Vite + Chakra UI)
- `backend/`: API REST (Express + MySQL)

## Cambios Recientes

- Reorganización del proyecto en frontend/backend
- Implementación de la API REST
- Configuración de base de datos MySQL

## Estructura del Proyecto

```
sweet-bite/
├── frontend/     # Aplicación React + Vite + Chakra UI
│   ├── src/      # Código fuente del frontend
│   ├── public/   # Archivos estáticos
│   └── ...       # Configuraciones específicas del frontend
└── backend/      # API REST con Express + MySQL
    ├── src/      # Código fuente del backend
    └── ...       # Configuraciones específicas del backend
```

## Tecnologías

### Frontend

- React 18
- Vite
- Chakra UI
- React Router
- React Icons

### Backend

- Node.js
- Express
- MySQL
- Passport JWT
- Joi

## Inicio Rápido

1. Instalar dependencias:

```bash
# Frontend
cd frontend
yarn install

# Backend
cd backend
yarn install
```

2. Configurar variables de entorno:

```bash
# Backend
cp backend/.env.example backend/.env
# Editar backend/.env con tus configuraciones
```

3. Iniciar en desarrollo:

```bash
# Frontend - http://localhost:5173
cd frontend
yarn dev

# Backend - http://localhost:3000
cd backend
yarn dev
```

## Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.
