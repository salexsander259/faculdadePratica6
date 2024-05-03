let nome ="Mario";
let nome2 = "Alex";
let mensagem = `Olá, ${nome}.`;
let idade;
console.log(nome+nome2);

function mostraTela(){
      nome = prompt("entra com seu nome");
     prompt(nome);
}
mostraTela();

 function retornoIdade(){
        idade = prompt("diga sua idade")
    if (idade >= 18)
        prompt("Seja bem vindo!")
    else (idade <= 17)
        prompt("acesso bloqueado!")
    }
    
    
retornoIdade();