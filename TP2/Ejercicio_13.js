let lista = [];
for (let i=0; i<5; i++) {
    let cadena = prompt("Ingrese el nombre del producto:");
    cadena += " $" + prompt("Ingrese el precio:");
    cadena += "\n";
    lista[i] = cadena;
}
for (valor of lista) {
    console.log(valor);
}