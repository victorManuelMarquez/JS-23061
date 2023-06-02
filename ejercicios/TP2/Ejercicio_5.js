let personas = Math.floor(Math.random() * 16) + 1;
if (personas < 8)
    console.log("Total a pagar por " + personas + " personas es de $ " + (personas * 1.5));
else
    console.log("Total a pagar por " + personas + " personas es de $ " + (personas * .5));