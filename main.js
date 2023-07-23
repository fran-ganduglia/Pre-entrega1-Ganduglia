
const calculadorCuotas = (a, b) => {
            return parseFloat(a / b);
    }

const precio1 = 1000
const precio2 = 2000
const precio3 = 5000
let productoElegido = prompt("Elija un número entre 1, 2 o 3")

switch (productoElegido){
    case "1":
        if (productoElegido = 1){
            productoElegido = 1000
            alert(`Su valor elegido tiene de precio ${precio1}`);
        }
        break;

    case "2":
        if (productoElegido = 2){
            productoElegido = 2000
            alert(`Su valor elegido tiene de precio ${precio2}`);
        }
        break;

    case "3":
        if (productoElegido = 3){
            productoElegido = 5000
            alert(`Su valor elegido tiene de precio ${precio3}`);
        }
        break;

    default:
        if (productoElegido != 1, 2, 3){
            alert("Ingrese un numero válido")
            productoElegido = prompt("Elija un numero")
        }
        break;
}

let cuotas = parseInt(prompt("Elija cuantas cuotas"));
let resultado = calculadorCuotas (`${productoElegido}`, `${cuotas}`);

    switch(cuotas){
        case 3:
            if(cuotas = 3){
                alert (`Su resultado es ${resultado}`);
            }
            break;
        case 6:
            if(cuotas = 6){
                alert (`Su resultado es ${resultado}`);
            }
            break;
        case 12:
            if(cuotas = 12){
                alert (`Su resultado es ${resultado}`);
            }
            break;
        default:
        alert("Elija un número entre 3, 6 y 12 respectivo a las cuotas");
        break;
  }

let compraSeguro = prompt("Esta seguro de su compra?").toUpperCase();

while (compraSeguro !== "SI"){
    if (compraSeguro === "NO"){
        alert("Escriba SI y refresque la página para volver a empezar")
    }
    else if (compraSeguro !== "SI"){
        alert("Ingrese SI o NO");
    } 
    compraSeguro = prompt("Esta seguro de su compra?").toUpperCase();
}

alert("Su compra ha sido exitosa")