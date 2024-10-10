//Implemente um sistema simples em JavaScript para simular um cadastro de pessoas com endereços. 
//O exercício explora o conceito de agregação entre as classes Endereco e Pessoa. Siga as instruções abaixo para implementar o sistema.
//Requisitos:
//Classe Endereco:
//Crie uma classe Endereco que contenha os seguintes atributos:rua: Nome da rua (string).numero: Número do endereço (string ou número).
//Classe Pessoa:
//Crie uma classe Pessoa que contenha os seguintes atributos:nome: Nome da pessoa (string).endereco: 
//Objeto do tipo Endereco que representa o endereço da pessoa.A classe Pessoa deve agregar um objeto Endereco e exibir suas informações utilizando um método chamado exibirInformacoes().
//Método exibirInformacoes():
//O método exibirInformacoes() deve exibir a seguinte mensagem no console:"Nome: nome, Endereço: rua, número".Exemplo: "Nome: João Silva, Endereço: Rua das Flores, 123".
//Demonstração:
//Crie uma instância de Endereco e uma instância de Pessoa.Agregue o endereço à pessoa e chame o método exibirInformacoes() para mostrar os dados.


class Endereço{
    constructor(rua, numero){
        this.rua = rua;
        this.numero = numero;
       
    }
    exibirInformacoes(){
      console.log(`Endereço: ${this.rua},${this.numero}.`)
    }
}

class Pessoa {
    constructor(nome){
        this.nome = nome;
    }
    exibirInformacoes() {
        console.log(`Nome: ${this.nome}`)
    }
}


const pessoa = new Pessoa("Jeferson Teodoro da Silva.");
const endereco = new Endereço("Domingos Storino", 756);


pessoa.exibirInformacoes(),endereco.exibirInformacoes()