let nota1 = Math.floor(Math.random() * 100) + 1;
let nota2 = Math.floor(Math.random() * 100) + 1;
if (nota1 > nota2)
    console.log("n1: " + nota1 + " > n2: " + nota2);
else if (nota2 > nota1)
    console.log("n2: " + nota2 + " > n1: " + nota1);
else
    console.log(nota1 + " = " + nota2);