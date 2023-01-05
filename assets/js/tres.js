const validar = () => {
    // console.log('bordesillo');
    const n1 = document.querySelector('#num1').value;
    const n2 = document.querySelector('#num2').value;
    const n3 = document.querySelector('#num3').value;

    const clave = n1+n2+n3;

    // console.log(clave);
    
    if( clave == '911')
    {
        parrafo.innerHTML = 'password 1 correcto'
    }
     else if (clave == '714')
     {
        parrafo.innerHTML =  'password 2 correcto';
     }
     else{
        parrafo.innerHTML =  'password incorrecto';
    }

 };