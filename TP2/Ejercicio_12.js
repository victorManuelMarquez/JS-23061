let bandera = "";
let suma = 0;
let cont = 0;
do {
    bandera = prompt("Ingrese un número (-1 cierra el ciclo):");
    if (bandera !== "-1") {
        suma += parseInt(bandera);
        cont++;
    }
} while (bandera !== "-1");
console.log("El promedio de los nros ingresados es: " + (suma/cont).toFixed(1));