//---------------------------VARIABLES GENERALES-------------------------------
//-----------------------------------------------------------------------------


//---------------------------VARIABLES DEL CANVAS------------------------------
var vp = document.getElementById("villa_platzi");
var papel = vp.getContext("2d");
var vp2 = document.getElementById("villa_platzi_2");
var papel2 = vp2.getContext("2d");
var cantidad = aleatorio(1, 5);
var xx = 250;
var yy = 250;


//--------------------------VARIABLES DE LAS TECLAS----------------------------
var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};


//-------------------------VARIABLES DE LAS IMAGENES---------------------------
var fondo = {
    url: "tile.webp",
    cargaOK: false
}

var vaca = {
    url: "vaca.webp",
    cargaOK: false
};

var pollo = {
    url: "pollo.webp",
    cargaOK: false
};

var cerdo = {
    url: "cerdo.webp",
    cargaOK: false
};
//-----------------------------------------------------------------------------

//----------------------DECLARACIÓN DE OBJETOS Y EVENTOS-----------------------
fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargar_fondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargar_vacas);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargar_pollos);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargar_cerdos);


//--------------------FUNCIONES PARA LA CARGA DE LOS OBJETOS-------------------
function cargar_fondo() {
    fondo.cargaOK = true;
    dibujar();
}

function cargar_vacas() {
    vaca.cargaOK = true;
    dibujar();
}

function cargar_pollos() {
    pollo.cargaOK = true;
    dibujar();
}

function cargar_cerdos() {
    cerdo.cargaOK = true;
    dibujar();
}


//-----------------FUNCIÓN PARA DIBUJAR LAS IMAGENES EN ORDEN------------------
function dibujar() {
    if (fondo.cargaOK) {
        papel.drawImage(fondo.imagen, 0, 0);
    }

    if (vaca.cargaOK) {

        console.log(cantidad);
        for(var v = 0; v < cantidad; v++){
            var x = aleatorio(0, 10);
            var y = aleatorio(0, 10);
            var x = x * 40;
            var y = y * 40;
            papel.drawImage(vaca.imagen, x, y);
        }

    }
    if (pollo.cargaOK) {

        for(var v = 0; v < cantidad; v++){
            //var x = aleatorio(0, 420);
            //var y = aleatorio(0, 420);
            //var x = x * 40;
            //var y = y * 40;
            papel.drawImage(pollo.imagen, 150, 150);
        }

    }
    if (cerdo.cargaOK) {

        /*for(var v = 0; v < cantidad; v++){
            var x = aleatorio(0, 420);
            var y = aleatorio(0, 420);
            var x = x * 40;
            var y = y * 40;
            papel.drawImage(cerdo.imagen, x, y);
        }*/
        papel2.drawImage(cerdo.imagen, xx, yy);

    }
}


//-------------FUNCIÓN PARA EL RESULTADO DE UN NÚMERO ALEATORIO----------------
function aleatorio(min, max) {
    var resultado;
    resultado =  Math.floor(Math.random() * (max - min + 1)) + min;
    return resultado;
}


//-------------------FUNCIONES Y EVENTOS PARA MOVER EL CERDO-------------------

document.addEventListener("keydown", mover_cerdo);

function mover_cerdo(evento){

    switch (evento.keyCode) {
        case teclas.UP:
            yy = yy - 10;
            papel2.clearRect(0, 0, 500, 500);
            dibujar();            
            break;

        case teclas.DOWN:
            yy = yy + 10;
            dibujar();
            break;

        case teclas.LEFT:
            xx = xx - 10;
            dibujar();
            break;

        case teclas.RIGHT:
            xx = xx + 10;
            dibujar();
            break;
    }

    console.log(evento);
}