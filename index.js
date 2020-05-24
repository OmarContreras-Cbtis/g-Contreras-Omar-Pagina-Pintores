//nos traemos al express

const express = require('express');

//creamos el express

const app = express();

//decimos que vamos a usar un sitio estatico de express en la carpeta public

app.use(express.static(__dirname + '/public'));

//hacemos que escuche el puerto 3000 y que cuando lo escuche lo imprima en la consola

app.listen(3000, ()=>{

console.log("Estas escuchando el puerto 3000")

});