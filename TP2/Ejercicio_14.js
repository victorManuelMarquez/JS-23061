let talla = 0;
let bandera = "";
let i = 0;
do {
    bandera = prompt("Ingrese una estatura (0 termina el ingreso):");
    if (parseInt(bandera) > 0) {
        i++;
        talla += parseFloat(bandera);
    }
} while (bandera !== "0");
console.log(`La estatura promedio de las ${i} personas es: ` + (talla/i).toFixed(2));