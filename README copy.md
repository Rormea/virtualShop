

# Description


## Installation

1. Clonar el repositorio 
2. Crear copia del archivo ```.env template``` renombrarlo solo como ```.env``` cambiar las nuevas variables de entorno (DB_USER,DB_NAME, DB_PASSWORD).
3. Instalar dependencias ```npm install```
4  Levantar la base de datos  ```docker compose up -d```
5  Correr las migraciones de Prisma  ```npx prisma migrate dev```
6  Ejecutar el Seed en desarrollo ojo  ```npm run seed```
7  Correr el proyecto  ```npm run dev```



## Correr en Producción