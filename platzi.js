//---------------------------VARIABLES GENERALES-------------------------------
//-----------------------------------------------------------------------------


//---------------------------VARIABLES DEL CANVAS------------------------------
var vp = document.getElementById("villa_platzi");
var papel = vp.getContext("2d");
var vp2 = document.getElementById("villa_platzi_2");
var papel2 = vp2.getContext("2d");

//-----------------------------------------------------------------------------
var cantidad = aleatorio(1, 5);
var move = 10;

//-------------------------COORDENADAS DE LOS ANIMALES-------------------------
//-----VACA------
var x_cerdo = 250;
var y_cerdo = 250;

//-----POLLO------
var x_pollo = 150;
var y_pollo = 150;

//-----CERDO------
var x_cerdo = 250;
var y_cerdo = 250;

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
    papel_1();
}

function cargar_vacas() {
    vaca.cargaOK = true;
    papel_1();
}

function cargar_pollos() {
    pollo.cargaOK = true;
    papel_1();
}

function cargar_cerdos() {
    cerdo.cargaOK = true;
    dibujar_2();
}

//-------------FUNCIÓN PARA EL RESULTADO DE UN NÚMERO ALEATORIO----------------
function aleatorio(min, max) {
    var resultado;
    resultado =  Math.floor(Math.random() * (max - min + 1)) + min;
    return resultado;
}


//-----------------FUNCIÓN PARA DIBUJAR LAS IMAGENES EN ORDEN------------------

//----------------PRIMER LIENZO (FONDO)--------------------
function papel_1() {
    if (fondo.cargaOK) {
        papel.drawImage(fondo.imagen, 0, 0);
    }

   /* if (vaca.cargaOK) {
        for(var v = 0; v < cantidad; v++){
            var x = aleatorio(0, 10);
            var y = aleatorio(0, 10);
            var x = x * 40;
            var y = y * 40;
            papel.drawImage(vaca.imagen, x, y);
        }
    }*/

}


//------------------SEGUNDO LIENZO (FRENTE)-----------------
function dibujar_2() {
    if (cerdo.cargaOK) {
        papel2.drawImage(cerdo.imagen, x_cerdo, y_cerdo);
    }

    if (pollo.cargaOK) {
        papel2.drawImage(pollo.imagen, x_pollo, y_pollo);
    }

}


//-------------------FUNCIONES Y EVENTOS PARA MOVER EL CERDO-------------------
document.addEventListener("keydown", mover_cerdo);

function tecla_cerdo() {
    papel2.clearRect(0, 0, 500, 500);
    dibujar_2();  
}

var left = [
    10,
    20,
    30,
    40,
];

console.log(left);

izquier = left[0];

function mover_cerdo(evento){

//---Contadores para movimientod el pollo---
for (var i = -30; i < 40; i = i + 10){
    for (var j = - 20; j < 30; j = j + 10){
        for (var k = -40; k < 50; k = k + 10){

//-------------------MOVIMIENTO DEL POLLO-------------------

            if (x_cerdo == x_pollo + k && y_cerdo == y_pollo + 30) {
                if (evento.keyCode == teclas.UP) {
                    y_pollo = y_pollo - move;
                }
            }

            if (x_cerdo == x_pollo - k && y_cerdo == y_pollo - 30) {
                if (evento.keyCode == teclas.DOWN) {
                    y_pollo = y_pollo + move;
                }
            }

            if (x_cerdo == x_pollo + 40 && y_cerdo == y_pollo + j) {
                if (evento.keyCode == teclas.LEFT) {
                    x_pollo = x_pollo - move;
                }
            }

            if (x_cerdo == x_pollo + 10 && y_cerdo == y_pollo + j) {
                if (evento.keyCode == teclas.LEFT) {
                    x_pollo = x_pollo - 50;
                }
            }

            if (x_cerdo == x_pollo - 50 && y_cerdo == y_pollo - j) {
                if (evento.keyCode == teclas.RIGHT) {
                    x_pollo = x_pollo + move;
                }
            }

            if (x_cerdo == x_pollo - 20 && y_cerdo == y_pollo - j) {
                if (evento.keyCode == teclas.RIGHT) {
                    x_pollo = x_pollo + 50;
                }
            }

//-------------
        }
    }
}


//-----------MOVIMIENTO EN LOS EXTREMOS DEL POLLO--------------------

//-----Esquina superior derecha ↑→-----
for (var l = 400; l < 450; l++){
    if (y_pollo == 0 && x_pollo == l){
        x_pollo = x_pollo - 10;
        y_pollo = y_pollo + 100;
    }
}



// ----Extremo superior ↑---
    if (y_pollo == 0) {
        x_pollo = x_pollo + 60;
        y_pollo = y_pollo + 10;
    }

// ---Extremo derecho →---
    if (x_pollo == 450){
        x_pollo = x_pollo - 10;
        y_pollo = y_pollo + 50;
    }

// ---Extremo izquierdo ←---



//-------------------MOVIMIENTO DEL CERDO-------------------
    switch (evento.keyCode) {
        case teclas.UP:
            y_cerdo = y_cerdo - move;
            tecla_cerdo();
            break;

        case teclas.DOWN:
            y_cerdo = y_cerdo + move;
            tecla_cerdo();
            break;

        case teclas.LEFT:
            x_cerdo = x_cerdo - move;
            tecla_cerdo();
            break;

        case teclas.RIGHT:
            x_cerdo = x_cerdo + move;
            tecla_cerdo();
            break;
    }


  

if (x_pollo == 440 && y_pollo == 430) {
    alert("Has atrapado al pollo");
    x_pollo = 150;
    y_pollo = 150;
}

if (x_pollo == 430 && y_pollo == 430) {
    alert("Has atrapado al pollo");
    x_pollo = 150;
    y_pollo = 150;
}

if (x_pollo == 420 && y_pollo == 430) {
    alert("Has atrapado al pollo");
    x_pollo = 150;
    y_pollo = 150;
}



//    console.log(evento);
        console.log(x_pollo);
        console.log(y_pollo);
        // console.log(evento.keyCode);
}




