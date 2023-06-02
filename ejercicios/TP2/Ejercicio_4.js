let monto = parseFloat(prompt("Ingrese el monto de la compra:"));
if (monto > 100) {
    monto -= monto * .15;
    console.log("15% de descuento aplicado...");
}
console.log("TOTAL: $ " + monto.toFixed(2));