// ESTE VAR IMAGENES TIENE QUE ESTAR ENCIMA DE LOS CAJA.PUSH.  NO SE POR QUÉ. 
var imagenes = [];
imagenes["100"] = "img/cerdo.png";
imagenes["50"] = "img/billete50.png";
imagenes["20"] = "img/billete20.png";
imagenes["10"] = "img/billete10.png";
imagenes["5"] = "img/billete5.jpg";

class Billete{
    constructor(v, c) {
        this.valor = v;
        this.cantidad = c;
        this.imagen = new Image();
        this.imagen.src = imagenes [this.valor];
    }
    mostrar()
    {
        return "<img src='"+ this.imagen.src + "'width=150px height=70px/>";
    }
}

var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);

var resultado = document.getElementById("resultado");
var sobrante = document.getElementById("sobranteCaja");

var caja = [];
caja.push( new Billete(100, 5) );
caja.push( new Billete(50, 10) );
caja.push( new Billete(20, 5) );
caja.push( new Billete(10, 10) );
caja.push( new Billete(5, 5) );


var sob = "";
var res = "";
var bill = "";


var entregado = [];
var dinero = 0;
var papeles = 0;
var div = 0;


var min = caja[0].valor;
var cajaTotal = 0;

for(var s of caja)
{
  sobrante.innerHTML += s.cantidad + (" billetesssssssss de $" + s.valor + "<br /> ");
  cajaTotal += s.valor * s.cantidad;
  if(min >= s.valor)
  {
    min = s.valor;
  }
}

function llenar()
{
  resultado.innerHTML = res + bill;
  sobrante.innerHTML = sob;
}

function entregarDinero(){
    resultado.innerHTML = ""; /* para que el extrar solo salte una linea abajo,sin esto salia horrible:) */
    sob = " ";
    res = " ";
    var t = document.getElementById("dinero");
    dinero = parseInt(t.value);
    if(dinero <= 0) {
        alert("intenta un valor positivo");
    }
    for(var bi of caja) {
        if(dinero <= cajaTotal) { 
            div = Math.floor(dinero / caja[bi].valor);
            if(div > caja[bi].cantidad) {
                papeles = caja[bi].cantidad;
            }
            else {
                papeles = div;
            }
            entregado.push( new Billete(caja[bi].valor, papeles) );

            dinero = dinero - (caja[bi].valor * papeles);

            caja[bi].cantidad = bi.cantidad - papeles;

            cajaTotal -= dinero;
        }
        else{
            return resultado.innerHTML = "no hay guita pa";
        }
        sob += caja[b].cantidad + (" billootes de $" + caja[b].valor + "<br /> ");
    }
    if(dinero > 0){   //si la cuenta final no da 0
        resultado.innerHTML = "Soy un cajero malo, he sido malo y no puedo darte esa cantidad :( <hr />";
    }
    sob += caja[b].cantidad + (" billootes de $" + caja[b].valor + "<br /> ");
    if(papeles > 0)
      {
          res += papeles + (" billetes de $" + entregado[b].valor + "<br /> ");
          for(var x = 0;x < papeles;x++)
          {
              bill += entregado[b].mostrar();
          }
      }
    }
    llenar();
  }
  
/*     else  {
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
    llenar(); */




function verSaldo(){
    var total = 0;
    for(var bil of caja){
        total = total + bil.cantidad * bil.valor
    }
    alert("tiene " + total + " pesos");
}







var saldo = document.getElementById("saldo");
saldo.addEventListener("click", verSaldo)

