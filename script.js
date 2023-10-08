async function buscaEndereco(cep) {

    let mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = "";

    try {
        let = consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        let consultaCEPConvertida = await consultaCEP.json();

        if (consultaCEPConvertida.erro) {
            throw Error ('CEP não existente')
        }

        let bairro = document.getElementById('bairro');
        let cidade = document.getElementById('cidade');
        let logradouro = document.getElementById('endereco');
        let estado = document.getElementById('estado');


        bairro.value = consultaCEPConvertida.bairro;
        cidade.value = consultaCEPConvertida.localidade;
        logradouro.value = consultaCEPConvertida.logradouro;
        estado.value = consultaCEPConvertida.uf;

        console.log(consultaCEPConvertida)
        return consultaCEPConvertida;

    } catch(erro) {
        mensagemErro.innerHTML = `<p>CEP inválido. Tente novamente!</p>`;
        console.log(erro)
    }
}

/* let ceps = ['01001000', '01001001']
let conjuntoCEPs = ceps.map(valores => buscaEndereco(valores));
console.log(conjuntoCEPs)
Promise.all(conjuntoCEPs).then(respostas => console.log(respostas)) */

let cep = document.getElementById('cep');
cep.addEventListener('focusout', () => buscaEndereco(cep.value));