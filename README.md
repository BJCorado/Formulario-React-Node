# 📋 Formulario con Guardado en Excel

Este proyecto consiste en un formulario web desarrollado con **React** que permite enviar la información ingresada a un **backend en Node.js**. El backend guarda los datos en un archivo de **Excel (.xlsx)** utilizando la librería `exceljs`, y permite descargar el archivo desde un enlace.

---

## 🚀 Tecnologías utilizadas

### 🧩 Frontend
- React.js
- CSS (estilos personalizados)
- Axios (para enviar datos al backend)
- Vercel (para despliegue gratuito)

### ⚙️ Backend
- Node.js + Express
- exceljs (para manipular archivos Excel)
- CORS + body-parser
- Render (para despliegue gratuito del backend)

---

## 📁 Proyecto

El proyecto está dividido en dos repositorios:

### 🔀 Repositorios

- **Repositorio 1:** Todo el proyecto está en este repositorio (Repositorio actual), donde coexisten frontend y backend.
- **Repositorio 2 separado :** Para su funcionamiento en línea (Render), la carpeta `server/` se subió a un repositorio **independiente** Repositorio: `https://github.com/BJCorado/Formulario-Backend`



---

## 🚀 Clonar y Ejecutar el Proyecto

### 1. Clonar el Repositorio

```bash
git clone https://github.com/BJCorado/Formulario-React-Node
cd formulario
```
### 2. Ejecutar el Frontend (React)

Ubicado en la raíz del proyecto
```bash
npm install
npm start
```
Esto iniciará la aplicación React en http://localhost:3000

### 3. Ejecutar el Backend (Node.js)
```bash
# Moverse a la carpeta del backend
cd server

# Instalar dependencias
npm install

# Iniciar el servidor
node index.js
```
---
## 🌐 Despliegue en producción

Frontend: desplegado en Vercel: `formulario-bj-corado.vercel.app`

Backend: desplegado en Render: `https://formulario-backend-xns6.onrender.com/`

## ✉️ Enviar datos al backend
Desde el frontend, al enviar el formulario, se hace un POST a: https://formulario-backend-xns6.onrender.com/save

## 📥 Descargar archivo Excel
Para descargar el Excel actualizado con los datos ingresados:

`https://formulario-backend-xns6.onrender.com/descargar-excel`

Esto permite descargar el archivo generado automáticamente con todas las filas nuevas.

## 🧑‍💻 ¿Cómo hacer que el Excel se guarde localmente?
Si deseas que el archivo Excel se genere y actualice en tu computadora local en lugar del servidor, modifica la ruta del archivo en excelWriter.js.

Cambia esto:

const filePath = path.join(__dirname, "Datos_Formulario.xlsx");

Por una ruta local absoluta como esta de ejemplo:

const filePath = "C:\\Users\\TuUsuario\\Desktop\\Datos\\Datos_Formulario.xlsx";
🔒 Asegúrate de que la carpeta exista y tengas permisos de escritura.

## 📝 Notas adicionales
El backend crea o actualiza el archivo Excel en el servidor de Render. Si deseas mantener una copia local, puedes cambiar la ruta como se explicó anteriormente.

Actualmente no se utiliza autenticación ni base de datos, por lo que los datos solo se almacenan en el archivo Excel.
