/**
 * EXERCÍCIO I
 */

var endereco = {
    rua: "Rua dos Pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
   };

function address(){
    document.write(`O usuário mora em ${endereco.cidade} / ${endereco.uf}, no bairro ${endereco.bairro}, na rua "${endereco.rua}" com
nº ${endereco.numero}`);
}

address();

/**
 * EXERCÍCIO II
 */

 function pares(x, y){
     for(var i = x; i <= y; i++){
         if (i % 2 === 0){
             console.log(i)
         }
     }
 }

 pares(32, 321)

 /**
 * EXERCÍCIO II
 */