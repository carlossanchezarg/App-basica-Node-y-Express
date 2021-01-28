# Modulo 3-TP1: Creacion de una aplicación básica con Node y Express
** Se asume que ya esta instalado Node y npm. **
#### Para instalar la aplicación:
- descargar el repositorio como zip y luego extraer.
- Abrir la consola de node y cambiar al directorio donde se extrajeron los archivos.
- Ejecutar en la consola `npm install`
- Para iniciar la aplicacion ejecutar: `npm start`
- En cualquier navegador(Firfox o Chrome) ingresar la direccion: [localhost:3000](http://localhost:3000)

## Pasos a seguir para crear la aplicacion desde cero:
1.  Creo la carpeta de mi proyecto,en este caso tp1_m3
2.  Dentro creo el programa principal de mi aplicacion: aplicacion.js
  ```javascript
  console.log("Hola Mundo!");
  ```
3. Creo el archivo package.json usando: `npm init -f`
    - Este archivo se ve incialmente de esta manera:
```javascript
{
  "name": "tp1_m3",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```
- Modifico el archivo para inciar el programa pricipal:
    ```javascript
    {
    "name": "tp1_m3",
    "version": "1.0.0",
    "description": "",
    "main": "programa_tp1M3.js",
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "start": "node programa_tp1M3"
    },
    "keywords": [],
    "author": "",
    "license": "ISC"
    }
    ```
4. Para iniciar la aplicacion ejecutar en la consola: `npm start` \
Se muestra por consola el mensaje "Hola Mundo"

5. Ahora instalar _Express_ dentro del proyecto: ` npm install --save express` \
Este comando instalara _Express_ en la carpeta _node_modules_ y  modificara el archivo package.json de la siguiente manera:
 ```javascript
{
  "name": "tp1_m3",
  "version": "1.0.0",
  "description": "",
  "main": "programa_tp1M3.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node programa_tp1M3"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1"
  }
}
 ```
6. Finalmente, reemplazar el codigo de programa_tp1M3.js por lo siguiente:
 ```javascript
"use strict";

var express=require('express');
var app=express();


app.listen(3000,function(){
    console.log("Funciona!Mi aplicación esta escuchando en el puerto 3000!")
});
 ```
 7. Iniciamos la aplicacion ejecutando en consola: `npm start` \
 Al abrir el navegador en la direccion: localhost:3000 se ve una pagina en blanco con el mensaje "Cannot GET /" \
 Esto es lo que se muestra por defecto cuando no hay ninguna pagina web o mensaje para renderizar.
 8. Para que la aplicacion muestre un mensaje en el navegador modificar program_tp1M3.js por lo siguiente:
 ```javascript
 "use strict";

var express=require('express');
var app=express();

app.get('/', (req, res) => {
    res.send('Hola Mundo!Mi aplicación esta funcionando!')
  });

app.listen(3000,function(){
    console.log("Funciona!Mi aplicación esta escuchando en el puerto 3000!")
});
```
Ahora al abrir el navegador en la dirección localhost:3000  \
Se muestrara una página en blanco con el mensaje: "Hola Mundo!Mi aplicación esta funcionando!"






