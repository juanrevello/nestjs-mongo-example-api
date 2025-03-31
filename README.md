# API de Tareas con NestJS y MongoDB

Esta es una API REST simple para gestionar tareas, construida con NestJS y MongoDB.

## Requisitos Previos

- Node.js (versión 14 o superior)
- Docker
- MongoDB (ejecutado en Docker)

## Configuración del Entorno

1. Clonar el repositorio:
```bash
git clone https://github.com/juanrevello/nestjs-mongo-example-api
cd nestjs-mongo-example-api
```

2. Instalar dependencias:
```bash
npm install
```

3. Iniciar MongoDB en Docker:
```bash
docker run -d \
  --name mongodb \
  -p 27017:27017 \
  -e MONGO_INITDB_ROOT_USERNAME=admin \
  -e MONGO_INITDB_ROOT_PASSWORD=admin123 \
  -v mongodb_data:/data/db \
  mongo:latest
```

4. Iniciar la aplicación:
```bash
npm run start:dev
```

## Endpoints Disponibles

### Tareas

- `GET /tasks` - Obtener todas las tareas
- `GET /tasks/:taskId` - Obtener una tarea específica
- `POST /tasks` - Crear una nueva tarea
- `PUT /tasks/:id` - Actualizar una tarea
- `DELETE /tasks/:id` - Eliminar una tarea

### Estructura de una Tarea

```json
{
    "title": "string",
    "description": "string",
    "done": boolean
}
```

## Tecnologías Utilizadas

- NestJS
- MongoDB
- Mongoose
- TypeScript
- Docker

## Estructura del Proyecto

```
src/
├── tasks/
│   ├── dto/
│   │   └── create-task.dto.ts
│   ├── interfaces/
│   │   └── Task.ts
│   ├── schemas/
│   │   └── task.schema.ts
│   ├── tasks.controller.ts
│   ├── tasks.module.ts
│   └── tasks.service.ts
└── app.module.ts
```

## Conexión a MongoDB

La aplicación se conecta a MongoDB usando las siguientes credenciales:
- URL: `mongodb://admin:admin123@localhost:27017/tasks?authSource=admin`
- Base de datos: `tasks`
- Usuario: `admin`
- Contraseña: `admin123`
