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

## Despliegue

### Frontend (Vercel + GitHub)

1. Conectar el repositorio en Vercel Dashboard
2. Framework preset: Vite
3. Root directory: frontend
4. Build command: yarn build
5. Output directory: dist
6. Variables de entorno:
   - VITE_API_URL=https://sweet-bite-api.railway.app/api/v1

### Backend (Railway + GitHub)

1. Conectar el repositorio en Railway Dashboard
2. Root directory: backend
3. Start command: yarn start
4. Variables de entorno:
   - NODE_ENV=production
   - CORS_ORIGINS=https://sweet-bite-store.vercel.app
   - DATABASE_URL=(proporcionado por Railway)

## Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.
