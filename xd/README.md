# Kario Media - Plataforma de Gestión de Proyectos

![Kario Media Logo](path/to/logo.png)

---

## Tabla de Contenidos

1. [Descripción del Proyecto](#descripción-del-proyecto)
2. [Tecnologías Utilizadas](#tecnologías-utilizadas)
3. [Capturas de Pantalla](#capturas-de-pantalla)
4. [Instalación](#instalación)
5. [Uso](#uso)
6. [Funcionalidades Clave](#funcionalidades-clave)
7. [Contribuir](#contribuir)
8. [Licencia](#licencia)
9. [Contacto](#contacto)

---

## 1. Descripción del Proyecto

Kario Media es una plataforma web de gestión de proyectos diseñada para la empresa "Kario Media", que se especializa en licitaciones públicas y privadas en diversos nichos de negocio. El proyecto ha sido encargado a un desarrollador Full-Stack para desarrollar una aplicación web que refleje el diseño y las funcionalidades propuestas por el equipo de UI/UX.

La plataforma se divide en dos partes: Backend y Frontend. El backend se encarga de gestionar la base de datos MongoDB y proporcionar una API para el frontend, mientras que el frontend es una aplicación React que permite a los usuarios administrar proyectos y realizar diversas acciones.

---

## 2. Tecnologías Utilizadas

### Backend

- **Node.js:** Plataforma de tiempo de ejecución de JavaScript del lado del servidor.
- **Express:** Marco de aplicación web para Node.js.
- **MongoDB:** Sistema de gestión de base de datos NoSQL.
- **Mongoose:** Biblioteca de modelado de objetos MongoDB.
- **Express Validator:** Middleware de validación de solicitudes.

### Frontend

- **React:** Biblioteca de JavaScript para la construcción de interfaces de usuario.
- **React Router:** Enrutamiento para aplicaciones React.
- **Axios:** Cliente HTTP para realizar solicitudes a la API del backend.
- **Bootstrap:** Marco de diseño para la interfaz de usuario.
- **Reactstrap:** Componentes de Bootstrap para React.

---

## 4. Rutas y Funcionalidades

### Proyectos

- `/api/proyectos`: Los usuarios pueden gestionar proyectos, incluyendo la creación, actualización y eliminación. Este endpoint se utiliza para administrar información de proyectos.

### Módulos

- `/api/modulos`: Los módulos son componentes clave de los proyectos. Los usuarios pueden crear, actualizar y eliminar módulos. Este endpoint se utiliza para administrar información de módulos.

### Tareas

- `/api/tareas`: Para un seguimiento más detallado, los usuarios pueden crear, actualizar y eliminar tareas en el sistema. Este endpoint gestiona la información de tareas.

### Reportes

- `/api/reportes`: Los usuarios pueden generar reportes sobre el progreso del proyecto. Este endpoint se encarga de gestionar la generación y entrega de reportes.

### Ayuda

- `/api/ayuda`: Se proporciona asistencia y recursos de ayuda a los usuarios, incluyendo documentación, preguntas frecuentes y soporte en línea.

### Usuarios

- `/api/usuarios`: Los usuarios pueden administrar sus cuentas y perfiles. Este endpoint se utiliza para gestionar información de usuarios.

---

## 5. Documentación de Swagger

- La documentación de cada uno de los endpoints funcionales se encuentra en [Swager](http://localhost:8005/api-docs/).

---


## 7. Modelo de Negocio

En Kario Media, nuestro modelo de negocio se centra en brindar una gestión eficiente de proyectos en el ámbito de licitaciones. Aspectos clave de nuestro modelo de negocio incluyen:

- **Gestión de Proyectos**: Permitimos a las empresas gestionar proyectos de licitación de manera efectiva y eficiente.

- **Seguimiento de Módulos y Tareas**: Ofrecemos herramientas para un seguimiento detallado de módulos y tareas dentro de los proyectos.

- **Generación de Reportes**: Facilitamos la generación de informes para un mejor control y toma de decisiones.

- **Asistencia y Soporte**: Proporcionamos recursos de ayuda para garantizar que los usuarios tengan la asistencia que necesitan.

- **Seguridad de Usuarios**: Garantizamos que la información de los usuarios esté segura y protegida.

---

## 8. Diseño y Maquetación

La interfaz de usuario ha sido diseñada cuidadosamente para brindar una experiencia visualmente atractiva y fácil de usar. Puedes ver el diseño detallado en [nuestro diseño en Figma]().

---

## 9. Contacts

En el módulo de "Contacts," los usuarios pueden gestionar información de contactos relacionados con sus proyectos. Esto incluye la creación, actualización y eliminación de contactos, así como la vinculación a proyectos específicos.

---

## 10. Feedbacks

El módulo de "Feedbacks" permite a los usuarios recopilar retroalimentación sobre proyectos y tareas. Los usuarios pueden crear, gestionar y revisar feedbacks para mejorar la gestión de proyectos.

---

## 11. Indicadores

El módulo de "Indicadores" brinda a los usuarios la capacidad de definir, medir y rastrear indicadores clave de rendimiento (KPI) para sus proyectos. Esto ayuda en la toma de decisiones y la evaluación del progreso.

---

## 12. Roles

Los "Roles" se utilizan para definir funciones y permisos dentro del sistema. Los usuarios pueden crear, editar y asignar roles a los miembros del equipo para administrar el acceso y la autorización.

---

## 13. Usuarios

El módulo de "Usuarios" permite a los administradores gestionar cuentas y perfiles de usuarios. Esto incluye la creación, actualización y eliminación de cuentas de usuario, así como la administración de roles y permisos.

---

## 14. Clonar el Repositorio

Si deseas trabajar en este proyecto o explorarlo, sigue estos pasos para clonar el repositorio en tu máquina local:

1. Abre tu terminal en tu computadora o en la máquina virtual en la nube donde desees clonar el repositorio.

2. Ejecuta el siguiente comando para clonar el repositorio:


- git clone https://github.com/edwnig17/PROYECTO-FILTRO_MejiaEdwing.git



## Clonar el Repositorio

Si deseas trabajar en este proyecto o explorarlo, sigue estos pasos para clonar el repositorio en tu máquina local:

1. Abre tu terminal (en tu computadora o en la máquina virtual en la nube donde desees clonar el repositorio).

2. Ejecuta el siguiente comando para clonar el repositorio:

-git clone  `https://github.com/edwnig17/PROYECTO-FILTRO_MejiaEdwing.git`


3. Una vez que se haya completado la clonación, navega al directorio del proyecto:

- cd PROYECTO-FILTRO_MejiaEdwing

## Descargar Dependencias

Asegúrate de que tienes [Node.js](https://nodejs.org/) instalado en tu sistema antes de continuar. Luego, sigue estos pasos para descargar las dependencias del proyecto:

1. Abre la terminal y asegúrate de estar en la raíz del proyecto (donde se encuentra el archivo `package.json`).

2. Ejecuta el siguiente comando para instalar las dependencias del backend:

3. Después, navega al directorio de la aplicación frontend. Puedes hacerlo con el siguiente comando:

- cd frontend

4. En el directorio `frontend`, ejecuta el siguiente comando para instalar las dependencias del frontend:

- npm i 

## Iniciar los Servidores

Una vez que hayas clonado el repositorio y descargado las dependencias, puedes iniciar los servidores del backend y del frontend:

### Servidor del Backend

1. Asegúrate de estar en la raíz del proyecto (donde se encuentra el archivo `package.json` del backend).

2. Ejecuta el siguiente comando para iniciar el servidor del backend:

- npm run dev

El servidor del backend se iniciará y estará listo para recibir solicitudes en el puerto especificado (generalmente el puerto 8005).

### Servidor del Frontend

1. Navega al directorio del frontend si no lo has hecho ya:

- npm start

- El servidor del frontend se iniciará y abrirá automáticamente una ventana del navegador para mostrar la aplicación web. Generalmente, se ejecutará en el puerto 3000.

 - ¡Listo! Ahora deberías tener tanto el servidor del backend como el del frontend en funcionamiento y podrás explorar y trabajar en tu proyecto.