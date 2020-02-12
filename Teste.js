
const axios = require('axios');

// axios.get("http://senacao.tk/objetos/usuario")
// .then(function(res) {
//     const usuario = res.data;

//     usuario.conhecimentos.forEach(
//         function(conhecimento, index) {
//         console.log(`${index+1}: ${conhecimento} `); 
//     });

//     usuario.qualificacoes.forEach(function(qualificacao) {
//         console.log(qualificacao.nome);
//         console.log(qualificacao.instituicao);
//         console.log(qualificacao.ano);
//         console.log('---')
//     });

// });

axios.get("https://viacep.com.br/ws/12420660/json")
.then(function(res) {
    const endereco = res.data;

    if (endereco.logradouro){
    console.log(`Cep: ${endereco.cep}`)
    console.log(`Endereço: ${endereco.logradouro}, 130. `);
    console.log(`Bairro: ${endereco.bairro}`);
    console.log(`Cidade: ${endereco.localidade},${endereco.uf}.`);
        if(endereco.complemento)
            console.log(endereco.complemento)
    }   else {
        console.log(`Cep: ${endereco.cep}`)
        console.log(`Cidade: ${endereco.localidade},${endereco.uf}.`);
    }

   
    
    
    
    
    

});