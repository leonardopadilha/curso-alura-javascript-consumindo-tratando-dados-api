async function buscaEndereco() {
    let = consultaCEP = await fetch('https://viacep.com.br/ws/01001000/json/');

    let consultaCEPConvertida = await consultaCEP.json();

    console.log(consultaCEPConvertida)
}

buscaEndereco();