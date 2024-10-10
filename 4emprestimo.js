//Faça um programa para controle de empréstimo de livros, com as classes Emprestimo, Livro e Pessoa.
class controleLivro{
    constructor(pessoa, livro, emprestimo){
        this.pessoa = pessoa;
        this.livro = livro;
        this.emprestimo = emprestimo;  
    }
    exibirEmprestimo(){
      console.log(`Empréstimo do livro, ${this.livro} realizado para o sr. ${this.pessoa} no dia ${this.emprestimo}.`)
    }
}

const programa = new controleLivro("Jeferson Teodoro da Silva","A Ilha Perdida","02/05/24");

programa.exibirEmprestimo()