let nota1 = Math.floor(Math.random() * 100);
let nota2 = Math.floor(Math.random() * 100);
if (nota1 > nota2)
    console.log(`(${nota1}>${nota2}) Nota1 es mayor`);
else
    console.log(`(${nota2}>${nota1}) Nota2 es mayor`);