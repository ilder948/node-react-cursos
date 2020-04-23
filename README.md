# Node - React App Cursos

Aplicación hecha en Node js con React para el manejo de cursos de una escuela.

# Instalación

Se debe clonar el sihiente repositorio
```
https://github.com/apernia17/node-react-cursos
````

Una vez hecho esto se debe instalar las dependencias por medio del comando:
```
npm i 
```

Luego ubicandonos en la carpeta ```src/sql``` encontraremos un archivo para hacer el volcado de la BD.

Siguiente a esto de debe configurar los parametros en sequalize para que el sistema pueda trabajar con la base de datos que acabamos de crear. Esto lo realizaremos en 
```
src/database/database.js
```

Una vez realizado lo siguiente se porcede a realizar el despliegue de la aplicación por medio del comando

```
npm run dev
```

Siguiente a esto de deben crear los datos de prueba por medio de la pestaña Poblar Sistema en la barra de navegación. Para poblar se debe comenzar de arriba hasta abajo de izquierda a derecha. O en este orden:

* Agregar Profesores
* Agregar Cursos
* Agregar Ramos
* Agregar Cursos - Ramos
* Agregar Estudiantes
* Agregar Ramos - Estudiantes
* Agregar Pruebas
* Agregar Pruebas - Estudiantes
* Agregar Notas

### Stack

La aplicación fue realizada con las siguientes tecnologías

* React JS
* Node.js 
* Express 
* Sequealize