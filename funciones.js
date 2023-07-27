document.addEventListener("DOMContentLoaded",function(){
 // variables del juego 
 let imagenes =[
    {
        "nombre":"snorlax",
        "url":"imagenes/"
    }
    {
        "nombre":"pikachu",
        "url":"imagenes/"
    },
    {
        "nombre":"bulbasur",
        "url":"imagenes/"
    },
    {
        "nombre":"eevee",
        "url":"imagenes/"
    },
    {
        "nombre":"squirtle",
        "url":"imagenes/"
    },
    {
        "nombre":"char",
        "url":"imagenes/"
    }
 ]   
// crear una variable que seleccione el tablero
let tablero= document.querySelector(".tablero");
//crear una variable para guardar la cantidad de imagenes 
let numeroImg=[];
//crear una variable para guardar los nombres de las imagenes
let nombreImg=[];
//crear variables para las estadisticas 
let aciertos=0;
let intentos=0;
let mostrarAciertos=document.querySelector(".aciertos");
let mostrarIntentos=document.querySelector(".intentos");
let tiempo=60;
let mostrarTiempo=document.querySelector(".tiempo");
let nivel=1;
let mostrarNiveles=document.querySelector(".nivel");
let botonIniciar=document.querySelector(".iniciar");
//poner las imagenes aleatorias
imagenes.sort(function() {return Math.random() - 0.5})
//sort ordena los elementos de un arreglo local y devuelve este arreglo ordenado, quiere decir que ordena las filas de una matriz segun los valores de una o mas columnas

//al boton le vamos a dar la funcion para iniciar el juego 
botonIniciar.addEventListener("click",function(){
alert("probando")

//mostrar cartas
agregarImagenes();//esta funcion la creamos adelante, para que muestre las cartas del juego

//tiempo regresivo
mostrarNiveles.textContent=nivel;
//setInterval() ejecuta una funcion una cantidad de veces una y otra vez, donde podemos establecer el tiempo de ejecuccion,asi se retarda el tiempo en la que son ejecutadas las funciones 
registroTiempo=setInterval(function()
{
    tiempo--;
    mostrarTiempo.textContent=tiempo;
    if(tiempo==0){
        alert("perdiste, tiempo agotado");
        location.reload();
        //location.reload(); recarga la pagina 
    }
},1000)//hacen referenia a milisegundos= 1seg))



});
//funcion para agregar las imagenes al tablero 
let agregarImagenes=()=>{
    for(var x=0;x<imagenes.lenght;x++){
        //crear la etiqueta div con sus clases
        let div=document.createElement("div");
        //createElement; crea una div y a esta div creada le vamos a enviar unos atributos de boostrap
        div.setAttribute("class", "col-lg-3 col-md-4 col-3");
        //createElement: <div>
        //setAtribute: <div class='col-lg-3 col-md-4 col-3'>

        //crear la etiqueta de la imagen
        let img=document.createElement("img");
        //createElement: <img>
        //setAtribute: <img class='col-lg-3 col-md-4 col-3'>
        img.setAttribute("src","imagenes/bien.png")
        img.setAttribute("class","img-fluid");  

        //agregar un id a cada imagen 
        img.setAttribute("id",x)
        //agregar el evento de cada imagen
        img.addEventListener("click",mostrarImagen)
        //agregar las iamgenes en los div 
        div.appendChild(img);
        //agregar div con las iamgenes al tablero
        tablero.appendChild(div);
        //appendChild es uno de los metodos fundamentales  en el DOM,ya que este inserta un nuevo modo dentro de la estructura del DOM, con este metodo podemos crear y añadir elementos para construir una pagina web directamente desde js
    }
}
}

)