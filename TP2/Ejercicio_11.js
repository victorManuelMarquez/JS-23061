let nros = [];
let bandera = 0;
let i = 0;
while (bandera !== -1) {
    bandera = parseInt(prompt("Ingrese un número para el array (-1 cierra el ingreso):"));
    if (bandera !== -1)
        nros[i] = bandera;
    i++;
}
for (indx in nros)
    console.log(`array[${indx}]=` + nros[indx]);