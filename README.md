# API de Usuarios - Node.js + Express + MySQL

API REST sencilla para la gestión de usuarios, desarrollada con **Node.js**, **Express** y **MySQL**, siguiendo una arquitectura por capas (routes, controllers, services, middlewares).

---

## 🚀 Tecnologías utilizadas

- Node.js
- Express
- MySQL
- mysql2
- express-validator
- dotenv

---

## 📁 Estructura del proyecto

```
logaccesos/
│
├── controllers/
│   └── users.controller.js
│
├── services/
│   └── users.service.js
│
├── routes/
│   ├── index.js
│   └── users.routes.js
│
├── middlewares/
│   ├── logger.middleware.js
│   └── user.validate.js
│
├── config/
│   └── db.js
│
├── logs/
│   └── access.log (ignorado por git)
│
├── app.js
└── server.js
```

---

## ⚙️ Instalación

1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/tu-repo.git
cd tu-repo
```

2. Instalar dependencias

```bash
npm install
```

3. Crear archivo `.env`

```env
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=password
DB_NAME=mi_base
```

> ⚠️ El archivo `.env` no debe subirse al repositorio.

---

## ▶️ Ejecución

```bash
npm run dev
```

O bien:

```bash
node src/server.js
```

---

## 🧱 Base de datos

Tabla de ejemplo `usuario`:

```sql
CREATE TABLE usuario (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  apellido VARCHAR(100) NOT NULL,
  edad INT NOT NULL
);
```

---

## 📌 Endpoints

### 🔹 Obtener todos los usuarios

```
GET /api/users
```

### 🔹 Obtener usuario por ID

```
GET /api/users/:id
```

### 🔹 Crear usuario

```
POST /api/users
```

**Body:**

```json
{
  "nombre": "nombre test",
  "apellido": "apellido test",
  "edad": 30
}
```

---

## ✅ Validaciones

Las validaciones se realizan mediante **express-validator**:

- Nombre y apellido obligatorios
- No se permiten strings vacíos
- Edad debe ser un número mayor a 0

---

## 🛡️ Middlewares

### Logger

Se registra cada acceso a endpoints que modifican datos (`POST`, `PUT`, `DELETE`):

- IP del cliente
- Método HTTP
- Ruta
- Fecha y hora

Los logs se guardan en:

```
src/logs/access.log
```

---

## 🧠 Arquitectura

- **Routes**: definen endpoints
- **Controllers**: manejan request/response
- **Services**: lógica de negocio y DB
- **Middlewares**: validaciones, logs, seguridad

---

## 📌 Notas

- Proyecto pensado con fines educativos
- No incluye autenticación
- Fácil de escalar y extender

---

## ✍️ Autor

**Pablo Vivas**

---

## 📄 Licencia

MIT
