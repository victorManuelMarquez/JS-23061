let calificacion = parseInt(prompt("Ingrese la calificación de la película (0 ó 4):"));
switch (calificacion) {
    case 0:
        console.log("mala");
        break;
    case 1:
        console.log("regular");
        break;
    case 2:
        console.log("buena");
        break;
    case 3:
        console.log("muy buena");
        break;
    case 4:
        console.log("excelente");
        break;
    default:
        console.log("Fuera del rango");
}