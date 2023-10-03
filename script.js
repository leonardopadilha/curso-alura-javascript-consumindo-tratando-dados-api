async function buscaEndereco(cep) {
    try {
        let = consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        let consultaCEPConvertida = await consultaCEP.json();

        if (consultaCEPConvertida.erro) {
            throw Error ('CEP não existente')
        }

        console.log(consultaCEPConvertida)
        return consultaCEPConvertida;

    } catch(erro) {
        console.log(erro)
    }
}

/* let ceps = ['01001000', '01001001']
let conjuntoCEPs = ceps.map(valores => buscaEndereco(valores));
console.log(conjuntoCEPs)
Promise.all(conjuntoCEPs).then(respostas => console.log(respostas)) */

let cep = document.getElementById('cep');
cep.addEventListener('focusout', () => buscaEndereco(cep.value));