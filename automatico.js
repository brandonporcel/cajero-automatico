class Billete{
    constructor(v, c) {
        this.valor = v;
        this.cantidad = c;
/*         this.imagen = new Image();
        this.imagen.src = imagenes [this.valor]; */
        this.imagen = new Image();
        this.imagen.src = imagenes [this.valor];
    }
}

function entregarDinero(){
    resultado.innerHTML = ""; /* para que el extrar solo salte una linea abajo,sin esto salia horrible:) */
    var t = document.getElementById("dinero");
    dinero = parseInt(t.value);
    if(dinero <= 0) {
        alert("intenta un valor positivo");
    }
    for(var bi of caja) {
        if(dinero > 0) { /*numero que ponga el usuario */
            div = Math.floor(dinero / bi.valor); /* recorre el array de los billetes y lo divide por su valor(50,20,10,5) a c/u*/
            if(div > bi.cantidad) {
                papeles = bi.cantidad;
            }
            else {
                papeles = div;
            }
            entregado.push( new Billete(bi.valor, papeles) );
            dinero = dinero - (bi.valor * papeles); /* aca tiene que dar 0 para cerar el ciclo. si no da 0 hay que seguir con el siguiente billete del array */
            bi.cantidad = bi.cantidad - papeles;   /* para que al extrar guita, al saldo se le resta ese valor */
        }
    }
    if(dinero > 0){   //si la cuenta final no da 0
        resultado.innerHTML = "Soy un cajero malo, he sido malo y no puedo darte esa cantidad :( <hr />";
    }
    else {
        for(var e of entregado) {
            if(e.cantidad > 0) {

                resultado.innerHTML += "retiraste " + e.cantidad + " billetes de $" + e.valor + " <br />" + " <br />";
                for(var b = 1; b <= e.cantidad ;b++)
                {
                  resultado.innerHTML += "<img src=" + e.imagen.src + " />";
                }
                resultado.innerHTML += "<hr />"
            }
        }
    }
}
function verSaldo(){
    var total = 0;
    for(var bil of caja){
        total = total + bil.cantidad * bil.valor
    }
    alert("tiene " + total + " pesos");
}



var caja = [];
var entregado = [];
// ESTE VAR IMAGENES TIENE QUE ESTAR ENCIMA DE LOS CAJA.PUSH.  NO SE POR QUÉ. 
var imagenes = [];

caja.push( new Billete(100, 5) );
caja.push( new Billete(50, 10) );
caja.push( new Billete(20, 5) );
caja.push( new Billete(10, 10) );
caja.push( new Billete(5, 5) );
var dinero = 0;
var div = 0;
var papeles = 0;

/* var imagenes = []; */

imagenes["100"] = "img/cerdo.png";
imagenes["50"] = "img/billete50.png";
imagenes["20"] = "img/billete20.png";
imagenes["10"] = "img/billete10.png";
imagenes["5"] = "img/billete5.jpg";
imagenes["5"] = "img/billete5.jpg";

var papeles = 0;
var div = 0;
var dinero = 0;

var resultado = document.getElementById("resultado");

var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);


var saldo = document.getElementById("saldo");
saldo.addEventListener("click", verSaldo)