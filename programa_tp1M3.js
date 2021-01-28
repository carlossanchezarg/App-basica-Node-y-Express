"use strict";

var express=require('express');
var app=express();


app.get('/', (req, res) => {
    res.send('Hola Mundo!Mi aplicación esta funcionando!')
  });

app.listen(3000,function(){
    console.log("Funciona!Mi aplicación esta escuchando en el puerto 3000!")
});
