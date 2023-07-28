document.addEventListener("DOMContentLoaded", function () {
    //1.Variables del juego
    let imagenes = [
        {
            "nombre": "snorlax",
            "url": "./imagenes/640px-Snorlax.png"
        },
        {
            "nombre": "pikachu",
            "url": "./imagenes/char-pikachu.png"
        },
        {
            "nombre": "eevee",
            "url": "./imagenes/eevee.png"
        },
        {
            "nombre": "char",
            "url": "./imagenes/Pokemon-1.webp"
        },
        {
            "nombre": "squirtle",
            "url": "./imagenes/Squirtle.webp"
        },
        {
            "nombre": "bulbasur",
            "url": "./imagenes/Bulbasaur.webp"
        },
        {
            "nombre": "snorlax",
            "url": "./imagenes/640px-Snorlax.png"
        },
        {
            "nombre": "pikachu",
            "url": "./imagenes/char-pikachu.png"
        },
        {
            "nombre": "eevee",
            "url": "./imagenes/eevee.png"
        },
        {
            "nombre": "char",
            "url": "./imagenes/Pokemon-1.webp"
        },
        {
            "nombre": "squirtle",
            "url": "./imagenes/Squirtle.webp"
        },
        {
            "nombre": "bulbasur",
            "url": "./imagenes/Bulbasaur.webp"
        }

    ]
    //Crear una variable que seleccione el tablero
    let tablero = document.querySelector(".tablero");
    //Crear una variable para guardar la cantidad de imagenes
    let numeroImg = [];
    //Crear una variable para guardar los nombres de las imagenes
    let nombreImg = [];
    //Crear variables para las estadisticas
    let aciertos = 0;
    let intentos = 0;
    let mostrarAciertos = document.querySelector(".aciertos");
    let mostrarIntentos = document.querySelector(".intentos");
    let tiempo = 60;
    let mostrarTiempo = document.querySelector(".tiempo");
    let nivel = 1;
    let mostrarNiveles = document.querySelector(".nivel");
    let botonIniciar = document.querySelector(".iniciar");
    let registroTiempo;
    //Poner las imagenes aleatorias
    imagenes.sort(function () { return Math.random() - 0.5 })
    //sort ordena los elementos de un arreglo local y devuelve este arreglo ordenado, quiere decir que ordena las filas de una matriz segun los valores de una o mas columnas

    //Al boton le vamos dar la funcion para iniciar el juego
    botonIniciar.addEventListener("click", function () {
        //alert("Probando la funcionalidad del boton")

        //Mostrar las cartas
        AgregarImagenes();//Esta funcion la creamos mas adelante, para que muestre las cartas del juego

        //Tiempo regresivo
        mostrarNiveles.textContent = nivel;
        //setInterval() ejecuta una funcion una cantidad de veces una y otra vez, donde podemos establecer el tiempo de ejecución, asi se retarda el tiempo en la que son ejecutadas las funciones
        registroTiempo = setInterval(function () {
            tiempo--;
            mostrarTiempo.textContent = tiempo;
            if (tiempo == 0) {
                alert("Tiempo agotado, Intententalo de nuevo");
                location.reload();
                //location.reload(); recarga la pagina actual
            }
        }, 1000) //1000 hacen referencia a milisegundos: 1s

    });
    //Funcion para agregar las imagenes al tablero
    let AgregarImagenes = () => {
        for (var x = 0; x < imagenes.length; x++) {
            //Crear la etiqueta div con sus clases
            let div = document.createElement("div");
            //a esta div crear le vamos a enviar unos atributos
            div.setAttribute("class", "col-lg-3 col-md-4 col-3");
            //createElement:<div>
            //setAttribute: <div class='col-lg-3 col-md-4 col-3'>
            //<nombreetiqueta atributo='valor'>

            //Crear la etiqueta de la imagen
            let img = document.createElement("img");
            //createElement:<img>
            //La img le vamos a enviar unos atributos:
            img.setAttribute("src", "./imagenes/portada.jpg");
            img.setAttribute("class", "img-fluid img-thumbnail");

            //Agregar un id a cada imagen
            img.setAttribute("id", x);
            //Agregar el evento a cada imagen
            img.addEventListener("click", mostrarImagen);
            //Agregar las imagemes en los div
            div.appendChild(img);
            //Agregar div con las imagenes al tablero
            tablero.appendChild(div);
            //appendChild es uno de los metodos mas fundamentales en el DOM, ya que este inserta un nuevo nodo dentro de la estructura del DOM, con este metodo podemos crear y añadir elementos para cosntruir una pagina web directamente desde JS
        }
    }
    //crear una funcion para mostrar las imagenes ocultas 
    function mostrarImagen() {
        /*     {
                alert('le dimos click a la imagen')
            } */
        let imgID = this.getAttribute("id");
        /*     alert('numero de la imagen: '+imgID')
         */    //getAttribute: me trae el atributo de una etiqueta
        this.setAttribute('src', imagenes[imgID].url);
        //<img> src='link img'
        //<img> src=

        //guardar el nombre y los numeros de las imagenes
        nombreImg.push(imagenes[imgID].nombre);
        numeroImg.push(imgID);
        //push es igual al insert en base de datos, agregar elemntos en una "bd o tabla"
        /*     alert(nombreImg[imgID]+" "+numeroImg[imgID]);
         */
        //push añade uno o mas elementos al final del array 
        //comparar las imagenes despues de que de click 2 veces 
        if (nombreImg.length == 2) {
            setTimeout(compararImagenes, 500);
        }
        //setTimeout establecen un temporizador en milisegundos para ejecutar una funcion callback al finalizar dicho temporizador


    }
    //funcion para quitar las imagenes
    function quitarImagenes() {
        let imagenesActuales = document.querySelectorAll(".tablero div");
        for (let index = 0; index < imagenesActuales.length; index++) {

            imagenesActuales[index].remove();
        }
    }
    //crear la funcion para comparar las imagenes seleccionadas 
    function compararImagenes() {
        let imagenesActuales = document.querySelectorAll(".tablero div img")
        //console.log(imagenesActuales);
        //guardar imagen 1 y la imagen 2 
        let opcionUno = nombreImg[0];
        let opcionDos = nombreImg[1];

        //comparar las imagenes escogidas
        if (opcionUno === opcionDos) {

            if (numeroImg[0] !== numeroImg[1]) {

                imagenesActuales[numeroImg[0]].setAttribute('src', './imagenes/bien.png');
                imagenesActuales[numeroImg[1]].setAttribute('src', './imagenes/bien.png');

                imagenesActuales[numeroImg[0]].removeAttribute('click', mostrarImagen)
                imagenesActuales[numeroImg[1]].removeAttribute('click', mostrarImagen)

                aciertos++;
                mostrarAciertos.textContent = aciertos

            } else {
                alert("debes escoger otra img");
                imagenesActuales[numeroImg[0]].setAttribute("src", "./imagenes/portada.jpg");
                imagenesActuales[numeroImg[1]].setAttribute("src", "./imagenes/portada.jpg");
            }

        }
        else {
            imagenesActuales[numeroImg[0]].setAttribute("src", "./imagenes/portada.jpg");
            imagenesActuales[numeroImg[1]].setAttribute("src", "./imagenes/portada.jpg");
        }
        intentos++;
        mostrarIntentos.textContent = intentos;
        numeroImg = [];
        nombreImg = [];

    }
}

)