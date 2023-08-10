
const calculadorCuotas = (a, b) => {
            return parseFloat(a / b);
    }

let productos = [
        { id: 1, nombre: "PAD", precio: 1000, stock: 10, },
        { id: 2, nombre: "MOUSE", precio: 2000, stock: 6, },
        { id: 3, nombre: "TECLADO", precio: 5000, stock: 0, },
        { id: 4, nombre: "AURICULARES", precio: 7000, stock: 0, },
    ];

let productoElegido = prompt("Elija un producto de nuestra página").toUpperCase();

const producto = productos.find((item) => item.nombre === productoElegido);

if (producto){
    alert(`Su producto tiene un valor de ${producto.precio}`)
}
else{
    alert("Elija un producto válido");
}

let cuotas = parseInt(prompt("Elija cantidad de cuotas"));
let resultado = calculadorCuotas (`${producto.precio}`, `${cuotas}`);

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
             while (cuotas !== 3 && 6 && 12) {
                 alert("Elija un número entre 3, 6 y 12 respectivo a las cuotas");
                 cuotas = parseInt(prompt("Elija cuantas cuotas"));
             }
             break
   }

 let compraSeguro = prompt("Esta seguro de su compra?").toUpperCase();

 while (compraSeguro !== "NO" || "SI"){
     if (compraSeguro === "NO"){
         alert("Puede volver a empezar")
         break
     }
     else if (compraSeguro !== "SI" && "NO"){
         alert("Ingrese SI o NO");
     } 
     else if (compraSeguro === "SI"){
         alert("Su compra ha sido exitosa");
         break
     }
     compraSeguro = prompt("Esta seguro de su compra?").toUpperCase();
 }

