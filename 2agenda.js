//Faça um programa de agenda telefônica, com as classes Agenda e Contato.
class agendaTelefonica {
    constructor(agenda, contato) {
        this.agenda = agenda;
        this.contato = contato;
    }
    listaContatos() {
        return `${this.agenda} ${this.contato}`;
       
}
}

const minhaAgenda = new agendaTelefonica(1, 33559986);
console.log(`Minha agenda para hoje: ${minhaAgenda.listaContatos()}`);