const verificar = ()  => {

    const v1 = document.querySelector('#valor1').value;
    const v2 = document.querySelector('#valor2').value;
    const v3 = document.querySelector('#valor3').value;

    const vFinal = parseInt(v1) + parseInt(v2) + parseInt(v3);
    const final = document.querySelector('#valorFinal');

    if(vFinal <= 10)
    {
        final.innerHTML =  "Llevas "+ vFinal +" stickers";
    }
    else
    {
        final.innerHTML =  "Llevas demasiados stickers";
    }

    
};